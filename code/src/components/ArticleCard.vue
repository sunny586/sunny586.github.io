<template>
  <router-link
    class="article-link shadow"
    :to="`${'/article/' + article.id}`"
    target="_blank"
  >
    <div class="info-row">
      <div class="article-title">{{ article.title }}</div>
    </div>
    <div class="info-row">
      <div class="time">{{ new Date(article.time).toLocaleString() }}</div>
    </div>
    <div class="info-row">
      <div class="label">简介：</div>
      <div class="description">
        {{ article.description }}
      </div>
    </div>
    <div class="info-row">
      <div class="label">分区：</div>
      <div class="field" @click.prevent="gotoSearch('field', article.field)">
        {{ article.field }}
      </div>
      <div class="label" style="margin-left: 1vw">标签：</div>
      <div class="tags">
        <div
          class="tag"
          v-for="(tag, index) in article.tags"
          :key="index"
          @click.prevent="gotoSearch('tag', tag)"
        >
          {{ tag }}
          <span class="comma" v-if="index != article.tags.length - 1">、</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang='ts'>
import { componentSize } from "element-plus/es/utils/props";
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    article: {},
  },
  methods: {
    gotoSearch(type: string, data: any) {
      // console.log('点击标签')
      this.$router.push({
        name: "search",
        query: {
          [type]: data,
        },
      });
    },
  },
})
export default class ArticleCard extends Vue {}
</script>

<style lang="less" scoped>
.article-link {
  width: 100%;
  text-decoration: none;
  color: black;
  margin-top: 2vh;
  background-color: white;
  border-radius: 3px;
  border: 1px solid white;
  transition: all 0.2s;

  &:hover {
    border: 1px solid #ffa801;
    // border-color: #ffa801;
  }
  // &:nth-child(1) {
  //   margin-top: 1vh;
  // }
  .info-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 1vw;
    line-height: 1.5em;
    min-height: 1.5em;
    &:last-child {
      margin-bottom: 0.3em;
    }
    .label {
      // min-width: %;
      color: #707070;
    }
    .article-title {
      margin-top: 0.4em;
      font-size: 1.4em;
    }
    .time {
      font-size: 0.7em;
      color: #707070;
    }
    .description {
      max-width: 70%;
      color: #707070;
    }
    .field {
      color: #707070;
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
</style>