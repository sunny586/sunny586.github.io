<script lang="ts" setup>
import { reactive, toRefs, onMounted } from "vue";
import ArticleCard from "@/components/article-card.vue";
import { getMdTemplate } from "@md/index";
import { MD_PATH, MESSAGE } from "@md/path";

let { list } = toRefs(
  reactive({
    list: MD_PATH,
  })
);
onMounted(async () => {
  const listPromose = list.value.map(async (item) => {
    const str = await getMdTemplate(item.id);
    const reg = /#|```|```js|```html|```ts|```json/g;
    item.desc = str && str.replace(reg, "");
    return item;
  });
  list.value = await Promise.all(listPromose);
});
</script>
<template>
  <div class="slide-in container">
    <div class="title">博主留言</div>
    <div class="message-box">{{ MESSAGE }}</div>
    <div class="title white">最新文章</div>
    <div class="article-list">
      <article-card
        class="item"
        v-for="article in list"
        :key="article.id"
        :article="article"
      ></article-card>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5vh;
  color: #007fff;
  margin-bottom: 40px;
  .title {
    border-bottom: 1px solid #ccc;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
  }
  .white {
    background-color: #fff;
    padding: 0 16px;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  }
  .message-box {
    font-size: 12px;
    margin-bottom: 4vh;
    color: #777;
    padding: 8px 10px;
  }
  .article-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
