<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { MD_PATH } from '@config/path'

// 定义变量
const router = useRouter()
const route = useRoute()
const store = useStore()

// 搜索input
const keywordChange = (id: string) => {
  if (!id) {
    return
  }
  router.push({
    path: '/book/' + id,
  })
  store.dispatch('updateArticleId', { id: '' })
}
</script>
<template>
  <div class="nav-input">
    <!-- <el-select
      v-if="route.path === '/'"
      v-model="store.state.articleId"
      class="input"
      placeholder="Search or jump to…"
      fit-input-width
      size="small"
      clearable
      filterable
      suffix-icon
      automatic-dropdown
      @change="keywordChange"
    >
      <el-option
        v-for="item in MD_PATH"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      />
    </el-select> -->
  </div>
</template>

<style lang="scss" scoped>
.nav-input {
  position: relative;
  flex: 1;
  .input {
    margin-left: 12px;
    margin-top: 8px;
    position: absolute;
    right: 10px;
  }
}
</style>
