<script lang="ts" setup>
import { ref, reactive, toRefs, nextTick, computed, onActivated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ebus from '@/utils/event-bus'
import { getScrollTop } from '@/utils/index'
import SubMenuList from '@/components/blog-sub-menu.vue'

import { MD_PATH, MENU_LIST } from '@config/path'

const route = useRoute()
const store = useStore()
// 定义变量
const router = useRouter()

const preview = ref()
let { articleId, titles, toc_title, showBackTopIcon, tagName } = toRefs(
  reactive({
    article_list: MD_PATH.slice(0, 10),
    articleId: '',
    titles: [] as Array<{ title: string; lineIndex: string; indent: number }>,
    toc_title: '目录导航',
    showBackTopIcon: false,
    tagName: '',
  })
)

const articleMd = computed(() => store.state.articleMd)

onActivated(async () => {
  // 滚动条滚动到顶部
  window.scrollTo(0, 0)
  // 返回顶部按钮显示
  window.onscroll = () => {
    if (window.scrollY > 200) {
      showBackTopIcon.value = true
    } else {
      showBackTopIcon.value = false
    }
    // 设置左侧导航样式
    autoLeftNavActive()
  }

  // 监听左侧菜单更新
  ebus.on('updateLeftCatalogue', (id: any) => {
    updateTitles(id)
    backtop()
  })
  // loadData
  await loadData()
})

const loadData = async () => {
  articleId.value = route.params.articleId as string
  if (!articleId.value) {
    return
  }
  await store.dispatch('updateArticleMd', { id: articleId.value })
  updateTitles()
}

const activeLineIndex = ref('')
const handleAnchorClick = (anchor: {
  title: string
  lineIndex: string
  indent: number
}) => {
  const { lineIndex } = anchor
  activeLineIndex.value = lineIndex
  const heading = preview.value.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  )
  if (heading) {
    preview.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60,
    })
  }
}

const autoLeftNavActive = () => {
  nextTick(() => {
    const anchors = preview.value.$el.querySelectorAll(
      'h1,h2,h3,h4,h5,h6'
    ) as HTMLElement[]
    const _titles = Array.from(anchors).filter((el) => !!el.innerHTML.trim())
    _titles.forEach((el) => {
      const lineIndex = el.getAttribute('data-v-md-line')
      const scrollTop = getScrollTop()
      const offsetTop = el.offsetTop
      if (Math.abs(scrollTop - offsetTop) < 100) {
        activeLineIndex.value = lineIndex as string
      }
    })
  })
}

const updateTitles = (id = '') => {
  nextTick(() => {
    const anchors = preview.value.$el.querySelectorAll(
      'h1,h2,h3,h4,h5,h6'
    ) as HTMLElement[]
    const _titles = Array.from(anchors).filter(
      (title) => !!title.innerText.trim()
    )
    if (!_titles.length) {
      titles.value = []
      return
    }
    const hTags = Array.from(
      new Set(_titles.map((title) => title.tagName))
    ).sort()
    titles.value = _titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line') as string,
      indent: hTags.indexOf(el.tagName),
    }))
  })

  const _id = id || articleId.value
  const article = MD_PATH.find((m) => +m.id === +_id)
  tagName.value = article?.tag_name || ''

  router.push({
    path: '/book/' + _id,
  })
}

// 跳转到顶部
const backtop = () => {
  window.scrollTo(0, 0)
}

// 顶部菜单选中activeIndex
const activeIndex = computed(() => store.state.activeIndex)
const handleSelect = (key: string) => {
  store.dispatch('updateActiveIndex', { index: key })
}
</script>

<template>
  <div class="out-container">
    <div class="left-side-container"></div>
    <div class="left-side-card">
      <el-menu
        :default-active="activeIndex"
        class="blog-menu"
        unique-opened
        @select="handleSelect"
      >
        <sub-menu-list :list="MENU_LIST" />
      </el-menu>
    </div>
    <div class="md-container">
      <!-- 回到顶部按钮  -->
      <svg
        t="1644671796536"
        :class="`backtop-icon ${showBackTopIcon ? 'show' : 'hide'}`"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3019"
        @click="backtop()"
      >
        <path
          d="M698.8 337.6H325.2c-18.4 0-33.5-14.4-33.5-32s15.1-32 33.5-32h373.7c18.4 0 33.5 14.4 33.5 32-0.1 17.6-15.1 32-33.6 32z"
          p-id="3020"
        ></path>
        <path
          d="M508.4 547.8l1.8-1.8-1.8 1.8zM508.2 545.8l2.2 2.2c-0.7-0.8-1.4-1.5-2.2-2.2zM511.1 508.7l1.8 1.8-1.8-1.8z"
          p-id="3021"
        ></path>
        <path
          d="M510.9 510.7l2.2-2.2c-0.8 0.7-1.5 1.4-2.2 2.2z"
          p-id="3022"
        ></path>
        <path
          d="M544 472.4v246c0 17.6-14.4 32-32 32s-32-14.4-32-32v-246c0-17.6 14.4-32 32-32s32 14.4 32 32z"
          p-id="3023"
        ></path>
        <path
          d="M511.9 379c-8.3 0-15.8 3.1-21.5 8.3l-2.2 2.2-21.5 21.5L311 566.7c-12.4 12.4-12.4 32.8 0 45.3 12.4 12.4 32.8 12.4 45.3 0L512 456.2l155.8 155.7c12.4 12.4 32.8 12.4 45.3 0 12.4-12.4 12.4-32.8-0.1-45.2L557.3 411l-21.8-21.8-1.8-1.8c-5.7-5.3-13.4-8.5-21.8-8.4z"
          p-id="3024"
        ></path>
      </svg>
      <div class="toc">
        <div class="title">{{ toc_title }}</div>
        <ul
          class="anchor"
          v-for="(anchor, index) in titles"
          :style="{
            padding: `3px 0 3px ${anchor.indent * 13}px`,
            fontSize: `${anchor.indent ? '13px' : '14px'}`,
          }"
          @click="handleAnchorClick(anchor)"
          :key="`anchor_${index}`"
        >
          <li
            class="a-tag"
            :style="`cursor: pointer;color: ${
              anchor.lineIndex === activeLineIndex
                ? 'var(--el-color-primary)'
                : ''
            };`"
          >
            {{ anchor.title }}
          </li>
        </ul>
      </div>
      <div class="preview">
        <v-md-preview :text="articleMd" ref="preview" />
      </div>
    </div>

    <div class="right-side-container"></div>
  </div>
</template>

<style lang="less">
.blog-menu {
  .el-sub-menu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 200px;
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>

<style lang="less" scoped>
.out-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0;
  background-color: #fff;
}
.left-side-container {
  // 左边侧边栏容器
  margin-left: 2%;
  width: 320px;
}
.left-side-card {
  position: fixed;
  z-index: 10;
  top: 61px;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  width: 320px;
  border-right: 1px solid #eee;
  .blog-menu {
    border: none;
  }
}
.right-side-container {
  // 右边侧边栏容器
  width: 320px;
  margin-right: 2%;
}
.md-container {
  width: 960px;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: white;
  margin-top: 2px;
  .preview {
    width: 100%;
  }
  .backtop-icon {
    width: 2.3em;
    position: fixed;
    right: 17%;
    bottom: 7%;
    border-radius: 50%;
    padding: 5px;
    // top: 1vh;
    transition: all ease-out 0.25s;
    &.hide {
      fill: #f4f5f7;
    }
    &.show {
      fill: #707070;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .toc {
    background: #fff;
    padding-right: 1.4vw;
    padding-left: 0.6vw;
    transition: all 0.25s;
    width: 220px;
    user-select: none;
    position: fixed;
    right: 50px;
    max-height: calc(100% - 48px - 60px - 2px);
    top: 50px;
    overflow: auto;
    color: #40485b;
    .title {
      font-weight: 500;
      padding: 12px 0;
      font-size: 16px;
      line-height: 2rem;
      color: #1d2129;
      border-bottom: 1px solid #e4e6eb;
    }
    .a-tag {
      color: inherit;
      padding: 0 8px;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      list-style-position: inside;
      &:hover {
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
<style lang="scss">
.md-container {
  .el-affix--fixed {
    left: 50%;
    transform: translate(-746px, -4px);
    background-color: #f4f5f7;
    .toc {
      width: 220px !important;
    }
  }
  .el-affix {
    border: none;
  }
}
</style>
