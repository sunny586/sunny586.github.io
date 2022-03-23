<script lang="ts" setup>
import ArticleCard from "@/components/article-card.vue";
const message = "dadsad";
const article_list = {
  list: [
    {
      id: "52",
      userId: "1",
      title: "babel环境搭建和let cosnt关键字",
      description:
        "babel是一个JS语法编译器，它能将ES6,ES7中新的语法转换成ES5以及ES5以下的语法，以便能够运行在当前和旧版本的浏览器或其他环境中。",
      field: "前端_基础知识_js",
      tags: ["js", "java script"],
      time: "2022-02-26T08:57:45.000Z",
      isVisiable: true,
    },
    {
      id: "51",
      userId: "1",
      title: "复杂表单",
      description: "利用HTML的表单控件，可以实现复杂的表单效果。",
      field: "前端_基础知识_html",
      tags: ["html5"],
      time: "2022-02-26T08:54:07.704Z",
      isVisiable: true,
    },
    {
      id: "47",
      userId: "1",
      title: "原型链",
      description: "JavaScript 不包含传统的类继承模型，而是使用 prototypal 原型模型。",
      field: "前端_基础知识_js",
      tags: ["js", "java script"],
      time: "2022-02-26T08:39:26.000Z",
      isVisiable: true,
    },
    {
      id: "50",
      userId: "1",
      title: "作用域、闭包和内存管理",
      description: "作用域、闭包和内存管理。",
      field: "前端_基础知识_js",
      tags: ["js", "java script", "闭包"],
      time: "2022-02-26T07:50:35.711Z",
      isVisiable: true,
    },
  ],
  total: 50,
};
</script>
<template>
  <div class="slide-in container">
    <div class="title">博主留言</div>
    <div class="message-box">{{ message }}</div>
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
  .message-box {
    font-size: 1.1em;
    padding-left: 1vw;
    margin-bottom: 4vh;
    color: #707070;
    max-width: 85%;
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
