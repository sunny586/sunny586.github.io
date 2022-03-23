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
        <path d="M510.9 510.7l2.2-2.2c-0.8 0.7-1.5 1.4-2.2 2.2z" p-id="3022"></path>
        <path
          d="M544 472.4v246c0 17.6-14.4 32-32 32s-32-14.4-32-32v-246c0-17.6 14.4-32 32-32s32 14.4 32 32z"
          p-id="3023"
        ></path>
        <path
          d="M511.9 379c-8.3 0-15.8 3.1-21.5 8.3l-2.2 2.2-21.5 21.5L311 566.7c-12.4 12.4-12.4 32.8 0 45.3 12.4 12.4 32.8 12.4 45.3 0L512 456.2l155.8 155.7c12.4 12.4 32.8 12.4 45.3 0 12.4-12.4 12.4-32.8-0.1-45.2L557.3 411l-21.8-21.8-1.8-1.8c-5.7-5.3-13.4-8.5-21.8-8.4z"
          p-id="3024"
        ></path>
      </svg>
      <!-- 目录导航按钮  -->
      <svg
        t="1644667623063"
        :class="`toc-icon ${useToc ? 'active' : ''}`"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2032"
        @click="setToc"
      >
        <path
          d="M149.333333 704c35.413333 0 64 29.013333 64 64s-29.013333 64-64 64S85.333333 802.986667 85.333333 768s28.586667-64 64-64zM896 725.333333a42.666667 42.666667 0 0 1 0 85.333334H341.333333a42.666667 42.666667 0 0 1 0-85.333334zM149.333333 448c35.413333 0 64 28.586667 64 64s-28.586667 64-64 64S85.333333 547.413333 85.333333 512s28.586667-64 64-64zM896 469.333333a42.666667 42.666667 0 0 1 0 85.333334H341.333333a42.666667 42.666667 0 0 1 0-85.333334zM149.333333 192C184.746667 192 213.333333 220.586667 213.333333 256s-28.586667 64-64 64S85.333333 291.413333 85.333333 256s28.586667-64 64-64zM896 213.333333a42.666667 42.666667 0 0 1 0 85.333334H341.333333a42.666667 42.666667 0 1 1 0-85.333334z"
          p-id="2033"
        ></path>
      </svg>

      <div :class="`toc ${useToc ? '' : 'close '}`">
        <div class="title">{{ toc_title }}</div>
        <div
          class="anchor"
          v-for="(anchor, index) in titles"
          :style="{ padding: `8px 0 8px ${anchor.indent * 13}px` }"
          @click="handleAnchorClick(anchor)"
          :key="index"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </div>
      <div class="block-line"></div>
      <div :class="`preview ${useToc ? 'toc-open' : 'toc-close '}`">
        <v-md-preview :text="testMd" ref="preview" />
      </div>
    </div>
    <div class="right-side-container">
      <div class="article-list-container shadow">
        <div class="field-title">近期文章</div>
        <div
          class="article-title"
          v-for="(item, index) in article_list"
          :key="index"
          @click="openPage(item.id)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

@Options({
  components: {},
  data() {
    return {
      article_list: [{ title: "hahah", id: 1 }],
      articleId: "",
      titles: [],
      useToc: true,
      toc_title: "目录导航",
      showBackTopIcon: false,
      testMd: "",
    };
  },
  async created() {
    console.log(process.env.NODE_ENV)
    const baseUrl = process.env.NODE_ENV === 'development'? '': 'https://sunny586.github.io/code/dist'
    axios.get(`${baseUrl}/mark-down/test.md`).then((res) => {
      console.log(res.data);
      this.testMd = res.data;
    });

    this.articleId = this.$route.params.articleId;
    if (this.articleId && typeof +this.articleId == "number") {
      console.log(this.articleId);
    }

    this.$nextTick(() => {
      const anchors = this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
      // console.log("anchors:", anchors);
      const titles = Array.from(anchors).filter((title: any) => !!title.innerText.trim());

      if (!titles.length) {
        this.titles = [];
        return;
      }

      const hTags = Array.from(new Set(titles.map((title: any) => title.tagName))).sort();

      this.titles = titles.map((el: any) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    });
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        this.showBackTopIcon = true;
      } else {
        this.showBackTopIcon = false;
      }
    };
  },
  methods: {
    handleAnchorClick(anchor: any) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
    gotoSearch(type: string, data: any) {
      this.$router.push({
        name: "search",
        query: {
          [type]: data,
        },
      });
    },
    setToc() {
      if (this.useToc == false) {
        // 开启toc
        let _titles = [...this.titles];
        this.toc_title = "";
        this.titles = [];
        setTimeout(() => {
          this.titles = [..._titles];
          this.toc_title = "目录导航";
        }, 300);
      }
      this.useToc = this.useToc ? false : true;
    },
    // 跳转到顶部
    backtop() {
      // console.log("backtop");
      window.scrollTo(0, 0);
    },
    // 打开页面
    openPage(articleId: number) {
      // // console.log(this.$router)
      window.open(window.location.origin + `/article/${articleId}`, "_blank");
    },
  },
})
export default class ArticleDetail extends Vue {}
</script>

<style lang="less" scoped>
.out-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2%;
}
.left-side-container {
  // 左边侧边栏容器
  margin-left: 2%;
  width: 15%;

  .meta-container {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    .meta-title {
      width: 85%;
      margin-left: 4%;
      // text-align: center;
      font-size: 1.4em;
      font-weight: bold;
      border-bottom: 1px solid #99999960;
      line-height: 2em;
      height: 2em;
      margin-bottom: 0.3em;
      .edit-btn {
        font-size: 0.6em;
        margin-left: 5%;
        font-weight: normal;
        color: #707070;
        &:hover {
          color: #ffa801;
          cursor: pointer;
        }
      }
    }
    .info-row {
      font-size: 0.9em;
      display: flex;
      flex-direction: row;
      width: 85%;
      margin-left: 4%;
      line-height: 2em;
      min-height: 2em;
      color: #707070;
      .label {
        min-width: 25%;
      }
      .description {
      }
      .field {
        font-style: italic;
        &:hover {
          color: #ffa801;
          cursor: pointer;
        }
      }
      .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .tag {
          color: #707070;
          margin-right: 0.2em;
          font-style: italic;
          &:hover {
            color: #ffa801;
            cursor: pointer;
          }
          .comma {
            color: #707070;
          }
        }
      }
    }
  }
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
    // align-items: center;
    .field-title {
      width: 85%;
      margin-left: 4%;
      // text-align: center;
      font-size: 1.4em;
      font-weight: bold;
      border-bottom: 1px solid #99999960;
      line-height: 2em;
      height: 2em;
      margin-bottom: 0.3em;
    }
    .article-title {
      width: 85%;
      margin-left: 4%;
      font-size: 1em;
      line-height: 1.5em;
      min-height: 1.5em;
      margin-bottom: 0.5em;
      color: #707070;
      font-style: italic;
      &:hover {
        cursor: pointer;
        color: #ffa801;
      }
      &.now-open {
        color: #ffa801;
        font-weight: bold;
      }
    }
  }
}
.md-container {
  width: 60%;
  max-width: 60%;
  // height: 80vh;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: white;
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
    left: 17%;
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
    background: white;
    padding-right: 1.4vw;
    padding-left: 0.6vw;
    transition: all 0.25s;
    min-width: 10vw;
    max-width: 14vw;
    user-select: none;
    .title {
      width: 99%;
      // text-align: center;
      font-size: 1.4em;
      font-weight: bold;
      border-bottom: 1px solid #99999960;
      line-height: 2em;
      height: 2em;
    }
    .anchor {
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
  }
  .block-line {
    display: inline-block;
    width: 1px;
    border-left: 1px solid #99999935;
    position: relative;
    font-size: 1.2em;
  }
  .preview {
  }
}
</style>
