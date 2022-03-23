<template>
  <div class="container slide-in">
    <div class="search-input-container">
      <div class="input-row">
        <span style="min-width: 4vw">关键词：</span>
        <el-input
          v-model="keyword"
          placeholder="文章标题、简介、内容"
          style="width: 43vw"
        />
        <el-button
          style="min-width: 5vw; margin: 5px 0px 5px 5px"
          @click="search()"
          >搜索</el-button
        >
      </div>
      <div class="input-row">
        <span style="min-width: 4vw">分区：</span>

        <el-select
          v-model="field"
          class="m-2"
          placeholder="全部"
          size="large"
          style="width: 15vw"
          clearable
        >
          <el-option
            v-for="item in field_name_list"
            :key="item.id"
            :label="item.field"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <span style="min-width: 1vw"></span>
        <span style="min-width: 3vw">标签：</span>

        <el-select
          v-model="tags"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="全部"
          style="width: 24vw"
          clearable
        >
          <el-option
            v-for="(item, index) in tag_name_list"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="article-list-container" v-if="article_list">
      <div class="no-article" v-if="article_list.length == 0">无相关文章</div>

      <article-card
        class="item"
        v-for="(article, index) in article_list"
        :key="index"
        :article="article"
      >
      </article-card>
      <el-pagination
        background
        class="page"
        style="margin-bottom: 10px"
        layout="prev, pager, next"
        :total="article_total"
        v-model:page-size="article_page_size"
        v-model:current-page="article_page"
        v-if="article_total > article_page_size"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import {
  get_all_article_list,
  get_all_field_list,
  get_article_list,
  get_field_list,
  get_tag_list,
} from "@/api/article.api";
import { onMounted, ref } from "vue";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState } from "vuex";
import ArticleCard from "@/components/ArticleCard.vue";

@Options({
  components: { ArticleCard },
  async created() {
    document.title = "文章搜索 | Leoyi的个人博客";
    // 获取分区列表和标签列表
    this.field_name_list = await this.request_field_list();
    this.tag_name_list = await get_tag_list();
    // 查看是否url里带有fields或者tags的参数
    if (this.urlQuery.field) {
      const index = this.field_name_list.findIndex((item: any) => {
        return item.field == this.urlQuery.field;
      });
      this.field = index > -1 ? this.field_name_list[index]["id"] : null;
      this.searchWhenCreated = true;
    }
    if (this.urlQuery.tag) {
      this.tags.push(this.urlQuery.tag);
      this.searchWhenCreated = true;
    }
    if (this.searchWhenCreated) {
      await this.search();
    }
  },
  data() {
    return {
      searchWhenCreated: false,
      keyword: null,
      field: null,
      field_name_list: [],
      isVisiable: false,
      tag_name_list: [],
      tags: ref<string[]>([]),
      args: {} as {
        keyword?: string;
        fieldId?: number;
        tags?: string[];
      },
      article_list: null,
      // 文章列表分页设置
      article_total: 0, // 文章总量
      article_page: 1, // 当前页面
      article_page_size: 5, // 页面大小
    };
  },
  computed: {
    ...mapState("user", ["isLogin"]),
    search_article_list() {
      if (this.isLogin) {
        return get_all_article_list;
      } else {
        return get_article_list;
      }
    },
    request_field_list() {
      if (this.isLogin) {
        return get_all_field_list;
      } else {
        return get_field_list;
      }
    },
    urlQuery() {
      return this.$route.query;
    },
  },
  watch: {
    async article_page(newPage, curPage) {
      // 请求文章列表
      const res = await this.search_article_list({
        userId: 1,
        ...this.args,
        offset: (this.article_page - 1) * this.article_page_size,
        num: this.article_page_size,
      });
      this.article_list = res.list;
      this.article_total = res.total;
    },
    async urlQuery() {
      if (this.$route.name == "search")
        window.open(window.location.href, "_blank");
    },
  },
  methods: {
    // 搜索文章列表
    async search() {
      this.article_list = null;
      this.article_total = 0;
      this.args = {};
      if (this.keyword) {
        this.args.keyword = this.keyword;
      }
      if (this.field) {
        this.args.fieldId = this.field;
      }
      if (this.tags.length > 0) {
        this.args.tags = this.tags;
      }
      const res = await this.search_article_list({
        userId: 1,
        num: this.article_page_size,
        offset: 0,
        ...this.args,
      });
      this.article_list = res.list;
      this.article_total = res.total;
    },
  },
})
export default class Search extends Vue {}
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  // align-items: center;
  .search-input-container {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 10%;
    padding-bottom: 10px;
    border-bottom: 1px solid #99999960;
    .input-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1vh;
      width: 100%;
    }
  }
  .article-list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    margin-left: 10%;
    .no-article {
      width: 100%;
      text-align: center;
      line-height: 30vh;
      height: 30vh;
      font-size: 1.6em;
      color: #707070;
    }
    .item {
      width: 100%;
    }
    .page {
      margin-top: 1.5vh;
      margin-left: 32%;
    }
  }
}
</style>
