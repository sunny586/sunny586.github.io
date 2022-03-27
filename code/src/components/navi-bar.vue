<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { MD_PATH } from '@md/path'
const router = useRouter()
const route = useRoute()
const store = useStore()
const reg = /^\/article\/\d+$/

const goHome = () => {
  store.dispatch('updateArticleId', { id: '' })
  router.push({
    path: '/',
  })
}

const keywordChange = (id: string) => {
  store.dispatch('updateArticleId', { id })
  if (!id) {
    return
  }
  if (reg.test(route.path)) {
    store.dispatch('updateArticleMd', { id })
  } else {
    router.push({
      path: '/article/' + id,
    })
  }
}
</script>
<template>
  <div class="navibar">
    <div class="nav-logo">
      <el-image src="https://avatars.githubusercontent.com/u/11586598?v=4" />
    </div>

    <div class="nav-input">
      <el-select
        v-if="route.path === '/'"
        v-model="store.state.articleId"
        class="m-2 input"
        placeholder="Search or jump to…"
        size="small"
        clearable
        filterable
        suffix-icon
        @change="keywordChange"
      >
        <el-option
          v-for="item in MD_PATH"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        />
      </el-select>
    </div>
    <i class="el-icon home-icom" @click="goHome()">
      <svg viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
        ></path>
      </svg>
    </i>
  </div>
</template>
<style lang="scss" scoped>
div.navibar {
  width: 960px;
  margin: 10px auto;
  display: flex;
  .nav-logo {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
  }
  .nav-input {
    flex: 1;
    .input {
      width: 280px;
      margin-left: 12px;
    }
  }
  .home-icom {
    margin: auto;
    cursor: pointer;
    color: #007fff;
  }
}
</style>
<style lang="scss"></style>
