<script lang="ts" setup>
import { defineProps, toRefs } from "vue";

// 定义属性
const props = defineProps({
  article: Object,
});
const { article } = toRefs(props);
</script>
<template>
  <router-link class="article-link" :to="`${'/article/' + article!.id}`">
    <div class="card">
      <div class="info-row">
        <div class="tag-name">{{ article!.tag_name }}</div>
      </div>
      <div class="info-row">
        <div class="article-title">{{ article!.title }}</div>
      </div>
      <div class="info-row">
        <div class="desc">{{ article!.desc }}</div>
      </div>
    </div>
  </router-link>
</template>

<style lang="less" scoped>
.article-link {
  width: 100%;
  text-decoration: none;
  background-color: white;
  border-radius: 3px;
  transition: all 0.2s;
  .card {
    margin: 0 12px;
    border-bottom: 1px solid #e5e6eb;
  }
  &:hover {
    background-color: #fafafa;
  }
  &:last-child {
    .card {
      border: none;
    }
  }
  .info-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    &:last-child {
      margin-bottom: 0.3em;
    }
    .tag-name {
      font-size: 12px;
      color: #86909c;
    }
    .article-title {
      font-size: 14px;
      color: #1d2129;
      width: 100%;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .desc {
      color: #86909c;
      font-size: 13px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
}
</style>
