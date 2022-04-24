<script lang="ts" setup>
import { ref, reactive, toRefs, nextTick, computed, onActivated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Top } from '@element-plus/icons-vue'
import ebus from '@/utils/event-bus'
import { getScrollTop } from '@/utils/index'
import SubMenuList from '@/components/blog-sub-menu.vue'
import { MD_PATH, MENU_LIST } from '@config/path'

const route = useRoute()
const store = useStore()
// 定义变量
const router = useRouter()

const preview = ref()

const CONST_FG_SORT = process.env.CONST_FG_SORT

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

const pageNavPre = ref('')
const pageNavNext = ref('')

const findPageNavData = (idx?: string) => {
  const result: any = []
  const _t = (list: any) => {
    list.forEach((item: any) => {
      if (item.href) {
        result.push(item.href)
      }
      if (item.children && item.children.length > 0) {
        _t(item.children)
      }
    })
  }
  _t(MENU_LIST)
  const index = result.indexOf(idx)
  pageNavPre.value = result[index - 1] || ''
  pageNavNext.value = result[index + 1] || ''
}

const getTargetById = (id: number) => {
  const target = MD_PATH.find((item) => +item.id === id)
  return target
}

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
    // 设置右侧导航样式
    autoLeftNavActive()
  }

  const target = getTargetById(+route.params.articleId)

  // 设置左侧菜单的默认选中样式
  store.dispatch('updateActiveIndex', { index: target!.idx })

  // 获取page-nav Data
  findPageNavData(target!.idx)

  // 监听左侧菜单更新
  ebus.on('updateLeftCatalogue', (id: string) => {
    updateTitles(id)
    backtop()
    // 获取page-nav Data
    const _target = getTargetById(+id)
    findPageNavData(_target!.idx)
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

const formatPageNav = (value: string) => {
  const values = value.split('/')
  const v = values[values.length - 1]
  return v.split(CONST_FG_SORT)[0]
}
const openMd = async (href: string) => {
  await store.dispatch('updateArticleMd', { href: href + '.md' })
  const target = MD_PATH.find((item) => item.idx === href)
  if (target?.id) {
    router.push({
      path: '/book/' + target.id,
    })
    updateTitles(target.id.toString())
    store.dispatch('updateActiveIndex', { index: target!.idx })
    // 获取page-nav Data
    findPageNavData(target!.idx)
    backtop()
  }
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
        :collapse-transition="false"
      >
        <sub-menu-list :list="MENU_LIST" />
      </el-menu>
    </div>
    <div class="md-container">
      <!-- 回到顶部按钮  -->
      <el-icon @click="backtop()" v-if="showBackTopIcon" class="backtop-icon">
        <top />
      </el-icon>
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
        <div class="page-nav">
          <p class="inner">
            <span class="prev" v-if="pageNavPre">
              ←
              <a class="prev-link" @click="openMd(pageNavPre)">
                {{ formatPageNav(pageNavPre) }}
              </a>
            </span>
            <span class="next" v-if="pageNavNext">
              <a class="next-link" @click="openMd(pageNavNext)">
                {{ formatPageNav(pageNavNext) }}
              </a>
              →
            </span>
          </p>
        </div>
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
    .page-nav {
      margin: 0rem 2.5rem;
      padding: 10px 0;
      .inner {
        min-height: 2rem;
        margin-top: 0;
        border-top: 1px solid #eaecef;
        padding-top: 1rem;
        overflow: auto;
        font-weight: 500;
        text-decoration: none;
        .prev-link,
        .next-link {
          color: var(--el-color-primary);
          cursor: pointer;
        }
        .next {
          float: right;
        }
      }
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
    cursor: pointer;
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
