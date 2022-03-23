<template>
  <div class="app-container">
    <div class="my-header">
      <navi-bar></navi-bar>
    </div>
    <div class="my-main">
      <router-view />
    </div>
    <div class="my-footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import NaviBar from "@/components/NaviBar.vue";
import FooterBar from "@/components/FooterBar.vue";
@Options({
  components: {
    NaviBar,
    FooterBar,
  },
})
export default class App extends Vue {}
</script>
<style lang="less" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  // width: 100vw;
}
.app-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  // background-color: #cacaca;
  .my-header {
    min-width: 100%;
  }
  .my-main {
    flex-grow: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f4f5f7;
    // display: none;
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

// 修改element-plus默认样式

// 修改选择框的边框颜色
.el-select .el-input.is-focus .el-input__inner {
  border-color: #333333 !important;
}
.el-select .el-input__inner:focus {
  border-color: #333333 !important;
}
// 选择选择框当前选中选项字体颜色
.el-select-dropdown__item.selected {
  color: #333333 !important;
}
// 修改文本输入框的边框颜色
.el-input {
  --el-input-focus-border: #333333 !important;
}
.el-textarea {
  --el-input-focus-border: #333333 !important;
}
.el-button {
  background-color: #444444 !important;
  color: white !important;
}
.el-button:focus,
.el-button:hover {
  background-color: #333333 !important;
  border-color: #ffa801 !important;
}
.el-button.el-button--primary.el-button--mini {
  background-color: white !important;
  color: #333 !important;
  border: none;
  &:hover {
    color: #ffa801 !important;
  }
}
.el-button.el-button--text.el-button--mini {
  background-color: white !important;
  color: #333 !important;
  border: none;
  &:hover {
    color: #ffa801 !important;
  }
}
.el-button.el-button--text {
  background-color: white !important;
  color: #333 !important;
  border: none;
  &:hover {
    color: #ffa801 !important;
  }
}
// 修改多选框颜色
.el-checkbox__inner {
  border-color: #3337 !important;
}
.el-checkbox__inner:hover {
  border-color: #333 !important;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #333 !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #333 !important;
}
// 分页器颜色
.el-pagination.is-background .el-pager li.number.active {
  background-color: #333333 !important;
}
.el-pagination.is-background .el-pager li.number:hover {
  color: #333333 !important;
}
.el-pagination.is-background .el-pager li.number.active:hover {
  color: white !important;
}

// md预览组件中的代码行最长长度
// 超过长度开启横向滚动
.toc-open {
  .v-md-pre-wrapper {
    max-width: 43vw !important;
  }
}
.toc-close {
  .v-md-pre-wrapper {
    max-width: 53vw !important;
  }
}
</style>
