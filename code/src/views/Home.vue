<template>
  <div class="slide-in container">
    <div class="title">博主留言</div>
    <div class="message-box">{{message}}</div>
    <div class="title">最新文章</div>
    <div class="article-list" v-if="article_list">
      <article-card
        class="item"
        v-for="(article, index) in article_list.list"
        :key="index"
        :article="article"
      ></article-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";
import { get_article_list } from "@/api/article.api";
import ArticleCard from "@/components/ArticleCard.vue";
import { get_user_message } from "@/api/user.api";
@Options({
  components: { ArticleCard },
  data() {
    return {
      article_list: null,
      urlPref: window.location.origin,
      message:'',
    };
  },
  async created() {
    document.title = "Leoyi的个人博客";
    // 获取最近的几篇文章
    this.article_list = await get_article_list({
      userId: 1,
      num: 4,
      offset: 0,
    });
    this.message=await get_user_message({userId:1});
  },
  methods: {
    // ...mapActions("user", ["requestUserInfo"]),
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.container {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5vh;
  .title {
    width: 88%;
    // margin-left: 4%;
    // text-align: center;
    font-size: 1.6em;
    font-weight: bold;
    border-bottom: 1px solid #99999960;
    line-height: 2em;
    height: 2em;
    margin-bottom: 0.3em;
    padding-left: 1vw;
  }
  .message-box{
    font-size: 1.1em;
    padding-left: 1vw;
    margin-bottom:4vh;
    color: #707070;
    max-width:85%;
  }
  .article-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item {
      width: 90%;
      margin-right: 2%;
    }
  }
}
</style>
