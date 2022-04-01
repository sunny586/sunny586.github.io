<script lang="ts" setup>
import { ref, reactive, toRefs, nextTick, computed, onActivated } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// @ts-ignore
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
}: any = toRefs(
  reactive({
    article_list: MD_PATH.slice(0, 10),
    articleId: '',
    titles: [],
    useToc: true,
    toc_title: '目录导航',
    showBackTopIcon: false,
    testMd: '',
  })
)

const articleMd = computed(() => store.state.articleMd)

const updateTitles = () => {
  nextTick(() => {
    const anchors = preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
    const _titles = Array.from(anchors).filter(
      (title: any) => !!title.innerText.trim()
    )
    if (!_titles.length) {
      titles.value = []
      return
    }
    const hTags = Array.from(
      new Set(_titles.map((title: any) => title.tagName))
    ).sort()
    titles.value = _titles.map((el: any) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }))
  })
}

const loadData = async () => {
  articleId.value = route.params.articleId as string
  if (!articleId.value) {
    return
  }
  await store.dispatch('updateArticleMd', { id: articleId.value })
  updateTitles()
}

onActivated(async () => {
  await loadData()
  window.scrollTo(0, 0)
  window.onscroll = () => {
    if (window.scrollY > 200) {
      showBackTopIcon.value = true
    } else {
      showBackTopIcon.value = false
    }
  }
})

const handleAnchorClick = (anchor: any) => {
  const { lineIndex } = anchor
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
  backtop()
}
</script>

<template>
  <div class="out-container slide-in">
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
        <div
          class="anchor"
          v-for="(anchor, index) in titles"
          :style="{ padding: `8px 0 8px ${anchor.indent * 13}px` }"
          @click="handleAnchorClick(anchor)"
          :key="`anchor_${index}`"
        >
          <a class="a-tag" style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </div>

      <!-- <div class="block-line"></div> -->
      <div :class="`preview ${useToc ? 'toc-open' : 'toc-close '}`">
        <v-md-preview :text="articleMd" ref="preview" />
      </div>
    </div>

    <div class="right-side-container">
      <el-affix :offset="60">
        <div class="article-list-container shadow">
          <div class="field-title">近期文章</div>
          <div
            class="article-title"
            v-for="item in article_list"
            :key="item.id"
            @click="updatePage(item.id)"
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
  margin-top: 2%;
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
        color: #007fff;
        background-color: rgb(246, 246, 255);
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
  .preview {
    width: 100%;
    position: relative;
    bottom: 4px;
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
    max-height: 480px;
    overflow: auto;
    // top: 97px;
    transform: translate(-746px, -4px);
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
      display: inline-block;
      padding: 8px;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      &:hover {
        background-color: rgb(246, 246, 255);
      }
    }
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
