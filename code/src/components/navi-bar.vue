<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const keyword = ref("");
</script>
<template>
  <div class="navibar">
    <div class="nav-logo">
      <el-image src="https://avatars.githubusercontent.com/u/11586598?v=4" />
    </div>

    <div class="nav-input">
      <el-input class="input" placeholder="Search or jump to…" v-model="keyword" size="small" :suffix-icon="Search" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.navibar {
  width: 60%;
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
    .input{
      width: 280px;
      margin-left: 40px;
    }
  }
}
</style>
