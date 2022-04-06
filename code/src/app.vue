<script lang="ts" setup>
import NaviBar from '@/components/navi-bar.vue'
</script>

<template>
  <div class="app-container">
    <el-affix>
      <div class="my-header">
        <navi-bar></navi-bar>
      </div>
    </el-affix>
    <div class="my-main">
      <router-view v-slot="{ Component }">
        <keep-alive v-if="$route.meta.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component :is="Component" v-else />
      </router-view>
    </div>
  </div>
</template>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.app-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  .my-header {
    min-width: 100%;
  }
  .my-main {
    flex-grow: 1;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f4f5f7;
  }
  .my-footer {
    min-width: 100%;
  }
}
// 滑入动画
// 需要添加动画的元素需加上"slide-in"class
.slide-in {
  animation: slide-in 0.25s ease-out 1;
}
@keyframes slide-in {
  0% {
    transform: translatex(10px);
  }
  100% {
    transform: translatex(0px);
  }
}
// 方块阴影
.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.vuepress-markdown-body h1 {
  margin: 0.4em 0!important;
  font-size: 1.6rem!important;
}
.vuepress-markdown-body h2 {
  margin: 0.4em 0!important;
  font-size: 1.35rem!important;
}
.vuepress-markdown-body h3 {
  margin: 0.4em 0!important;
  font-size: 1.35rem!important;
}
.vuepress-markdown-body h4 {
  margin: 0.4em 0!important;
  font-size: 1.35rem!important;
}
.vuepress-markdown-body h5 {
  margin: 0.4em 0!important;
  font-size: 1.2rem!important;
}
.vuepress-markdown-body h6 {
  margin: 0.4em 0!important;
  font-size: 1.2rem!important;
}
</style>
<style>
.el-affix--fixed {
  background-color: #fff;
}
@media (max-width: 767px) {
  .app-container {
    overflow: hidden;
  }
  .app-container .my-header {
    overflow: hidden;
  }
  .navibar {
    width: 96% !important;
  }
  .right-side-container {
    display: none;
  }
  .md-container .toc {
    display: none;
  }
  .md-container {
    width: 100% !important;
    max-width: 100% !important;
  }
  .toc-open .v-md-pre-wrapper {
    max-width: 100% !important;
  }
  .v-md-pre-wrapper {
    margin: 0 !important;
  }
  .md-container .toc-icon {
    display: none !important;
  }
  .out-container {
    width: 96% !important;
    display: block !important;
  }
  .container {
    width: 100% !important;
    padding: 0 6px !important;
  }
  .vuepress-markdown-body {
    padding: 12px !important;
  }
  .backtop-icon {
    display: none;
  }
}
</style>
