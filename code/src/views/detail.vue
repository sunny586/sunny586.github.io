<script lang="ts" setup>
import { ref, reactive, toRefs, nextTick, computed, onActivated } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ebus from '@/utils/event-bus'
import { getScrollTop } from '@/utils/index'
import { MD_PATH } from '@md/path'

const route = useRoute()
const store = useStore()
const preview = ref()
let {
  article_list,
  articleId,
  titles,
  useToc,
  toc_title,
  showBackTopIcon,
  tagName,
} = toRefs(
  reactive({
    article_list: MD_PATH.slice(0, 10),
    articleId: '',
    titles: [] as Array<{ title: string; lineIndex: string; indent: number }>,
    useToc: true,
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
}

// 跳转到顶部
const backtop = () => {
  window.scrollTo(0, 0)
}

const updatePage = async (id: string) => {
  if (articleId.value === id) {
    return
  }
  articleId.value = id
  await store.dispatch('updateArticleMd', { id })
  updateTitles()
  store.dispatch('updateActiveIndex', { index: '' })
  backtop()
}
</script>

<template>
  <div class="out-container">
    <div class="left-side-container"></div>

    <div class="md-container shadow">
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
      <div :class="`toc ${useToc ? '' : 'close '}`">
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

      <!-- <div class="block-line"></div> -->
      <div :class="`preview ${useToc ? 'toc-open' : 'toc-close '}`">
        <v-md-preview :text="articleMd" ref="preview" />
      </div>
      <el-tag class="tag-name">{{ tagName }}</el-tag>
    </div>

    <div class="right-side-container">
      <el-affix :offset="48">
        <div class="article-list-container shadow">
          <div class="field-title">近期文章</div>
          <div
            class="article-title"
            v-for="item in article_list"
            :key="item.id"
            @click="updatePage(item.id as string)"
          >
            {{ item.title }}
          </div>
        </div>
      </el-affix>
    </div>
  </div>
</template>

<style lang="less" scoped>
.out-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0;
}
.left-side-container {
  // 左边侧边栏容器
  margin-left: 2%;
  width: 15%;
}
.right-side-container {
  // 右边侧边栏容器
  width: 15%;
  margin-right: 2%;
  .article-list-container {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
    .field-title {
      font-weight: 500;
      padding: 12px 0;
      font-size: 16px;
      line-height: 2rem;
      color: #1d2129;
      border-bottom: 1px solid #e4e6eb;
      margin: 0 1.667rem;
      margin-bottom: 8px;
    }
    .article-title {
      color: inherit;
      display: inline-block;
      margin: 0px 28px;
      padding: 8px;
      border-radius: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      &:hover {
        cursor: pointer;
        color: var(--el-color-primary);
      }
    }
  }
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
  .toc-icon {
    width: 1.3em;
    fill: #707070;
    position: absolute;
    left: -3.6%;
    top: 0vh;
    border-radius: 50%;
    padding: 5px;
    transition: all ease-out 0.2s;
    // top: 1vh;
    &:hover {
      cursor: pointer;
    }
    &.active {
      // fill: red;
      background-color: #7c7a7a50;
    }
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
    left: 50%;
    max-height: calc(100% - 48px - 60px - 2px);
    top: 50px;
    overflow: auto;
    transform: translate(-702px, 0px);
    color: #40485b;
    .title {
      font-weight: 500;
      padding: 12px 0;
      font-size: 16px;
      line-height: 2rem;
      color: #1d2129;
      border-bottom: 1px solid #e4e6eb;
    }
    &.close {
      width: 0;
      min-width: 0;
      overflow: hidden;
      padding: 0;
      position: relative;
      .title {
        display: none;
      }
      .anchor {
        display: none;
      }
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
  .tag-name {
    position: fixed;
    left: calc(50% - 420px);
    top: 8px;
    z-index: 100;
    background-color: #fff;
    border: 1px solid;
  }
  .block-line {
    display: inline-block;
    width: 1px;
    border-left: 1px solid #eee;
    position: relative;
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
