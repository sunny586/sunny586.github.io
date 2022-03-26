<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const keyword = ref('')
</script>
<template>
  <div class="navibar">
    <div class="nav-logo">
      <el-image src="https://avatars.githubusercontent.com/u/11586598?v=4" />
    </div>

    <div class="nav-input">
      <el-input
        class="input"
        placeholder="Search or jump to…"
        v-model="keyword"
        size="small"
        :suffix-icon="Search"
      />
    </div>
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
<style lang="scss">
input:focus {
  border: 1px solid #007fff !important;
}
</style>
