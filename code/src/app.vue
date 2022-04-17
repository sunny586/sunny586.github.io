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
.blog-menu {
  .el-menu--horizontal > .el-menu-item {
    height: 48px;
  }
}
</style>
