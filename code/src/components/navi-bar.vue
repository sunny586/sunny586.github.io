<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { mix } from '@/utils/index'
import logo from './logo.icon'
import DefaultNav from './default-nav.vue'
import BookNav from './book-nav.vue'

const route = useRoute()
// 主题颜色切换
// 变量前缀
const pre = '--el-color-primary'
// 白色混合色
const mixWhite = '#ffffff'
// 黑色混合色
const mixBlack = '#000000'
// 默认主题
const defaultTheme = '#fe7300' // '#409eff'
const node = document.documentElement
const color = ref(localStorage.getItem('primaryColor') || defaultTheme)
// 改变主题颜色
const changeTheme = (activeColor: string = color.value) => {
  if (!activeColor) {
    resetTheme()
    return
  }
  node.style.setProperty(pre, activeColor)
  localStorage.setItem('primaryColor', activeColor)
  // 这里是覆盖原有颜色的核心代码
  for (let i = 1; i < 10; i += 1) {
    node.style.setProperty(
      `${pre}-light-${i}`,
      mix(activeColor, mixWhite, i * 0.1)
    )
  }
  node.style.setProperty(
    '--el-color-primary-dark',
    mix(activeColor, mixBlack, 0.1)
  )
  // 本地缓存style，样式持久化，你也可以存在后端
  localStorage.setItem('style', node.style.cssText)
}
//  重置主题颜色
const resetTheme = () => {
  localStorage.removeItem('style')
  localStorage.removeItem('primaryColor')
  node.style.cssText = ''
  color.value = defaultTheme
}
</script>
<template>
  <div class="navibar">
    <div class="nav-logo">
      <el-image
        :src="logo"
        class="image-cat"
      ></el-image>
    </div>
    <book-nav v-if="route.path.indexOf('/book/') !== -1"></book-nav>
    <default-nav v-else></default-nav>
    <div class="fix-color-pick">
      <el-space>
        <span>主题切换</span>
        <el-color-picker
          v-model="color"
          @change="changeTheme"
          size="small"
        ></el-color-picker>
      </el-space>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.navibar {
  width: 960px;
  margin: 0px auto;
  display: flex;
  padding-left: 2rem;
  .nav-logo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    .image-cat {
      width: 32px;
      height: 32px;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 50%;
    }
  }
}
.fix-color-pick {
  position: fixed;
  top: 5px;
  right: 20px;
  z-index: 10;
  font-size: 12px;
  color: var(--el-color-primary);
}
</style>
<style lang="scss"></style>
