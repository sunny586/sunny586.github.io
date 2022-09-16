<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

// 定义变量
const router = useRouter()
const store = useStore()
const goHome = () => {
  store.dispatch('updateArticleId', { id: '' })
  router.push({
    path: '/',
  })
}
</script>

<template>
  <div @click="goHome()" class="home">
    <i class="el-icon home-icom">
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
.home {
  line-height: 48px;
  cursor: pointer;
  flex: 1;
  font-size: 12px;
  text-align: right;
}
.home-icom {
  cursor: pointer;
  color: var(--el-color-primary);
  font-size: 18px;
  position: relative;
  top: 6px;
}
</style>
