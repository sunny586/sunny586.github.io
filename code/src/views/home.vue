<script lang="ts" setup>
import { reactive, ref, toRefs, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ElLoading } from 'element-plus'
import ArticleCard from '@/components/article-card.vue'
// @ts-ignore
import { getMdTemplate } from '@md/index'
// @ts-ignore
import { MD_PATH, MESSAGE, IMdPath } from '@md/path'

const pageSize = 8
const pageNum = ref(1)

const keyword = ref('')

const totalCount = ref(0)

let { list } = toRefs(
  reactive({
    list: [] as IMdPath[],
  })
)

const fliterData = (data, keyword) => {
  return data.filter((item) => item.title.indexOf(keyword) !== -1)
}

const getData = () => {
  // debugger;
  const mdData = fliterData(MD_PATH, keyword.value.trim())
  console.log(mdData.length)
  totalCount.value = mdData.length
  return mdData.slice((pageNum.value - 1) * pageSize, pageNum.value * pageSize)
}

const loadData = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(255, 255, 255, 0.7)',
  })
  setTimeout(async () => {
    const res = getData()
    if (res && res.length > 0) {
      const listPromose = res.map(async (item) => {
        const str = await getMdTemplate(item.id)
        const reg = /#|```|```js|```html|```ts|```json/g
        item.desc = str && str.replace(reg, '')
        return item
      })
      list.value = await Promise.all(listPromose)
    }
    loading.close()
  }, 150)
  // 请求数据
}

onMounted(() => {
  loadData()
})

const handleCurrentChange = (val: number) => {
  pageNum.value = val
  loadData()
}

const keywordChange = (value) => {
  console.log(value)
  loadData()
}
</script>
<template>
  <div class="slide-in container">
    <div class="title">博主留言</div>
    <div class="message-box">{{ MESSAGE }}</div>
    <div class="title white">
      <div class="name">最新文章</div>
      <el-input
        :prefix-icon="Search"
        class="home-keyword"
        v-model="keyword"
        placeholder="Please search"
        @change="keywordChange"
      />
    </div>
    <div class="article-list">
      <article-card
        class="item"
        v-for="article in list"
        :key="article.id"
        :article="article"
      ></article-card>
    </div>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="totalCount"
      :page-size="pageSize"
      class="mt-4 page"
      prev-text="上一页"
      next-text="下一页"
      @current-change="handleCurrentChange"
    />
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
    display: flex;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
    .name {
      flex: 1;
      padding-left: 12px;
    }
    .home-keyword {
      width: 220px;
    }
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
  .page {
    background: #fff;
    text-align: center;
    padding: 18px 0px;
  }
}
</style>
<style lang="scss">
.page {
  .btn-prev,
  .btn-next {
    padding: 0 10px !important;
  }
}
.home-keyword {
  input {
    border: none !important;
  }
}
</style>
