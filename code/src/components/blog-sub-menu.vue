<template>
  <template v-for="item in list" :key="item.index">
    <el-menu-item
      @click="menuItemClick(item)"
      v-if="item.href"
      :index="item.index"
      >{{ item.title }}</el-menu-item
    >
    <el-sub-menu v-else :index="item.index">
      <template #title>{{ item.title.toLocaleUpperCase() }}</template>
      <blog-sub-menu
        v-if="item.children && item.children.length > 0"
        :list="item.children"
      ></blog-sub-menu>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup name="blog-sub-menu">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { IMenuItem } from '@md/path'
import ebus from '@/utils/event-bus'

const store = useStore()

const props = defineProps({
  list: Array,
})

const list = props.list as IMenuItem[]

const menuItemClick = async (data: IMenuItem) => {
  await store.dispatch('updateArticleMd', { href: data.href + '.md' })
  ebus.emit('updateLeftCatalogue')
}
</script>

<style lang="scss">
.el-sub-menu__title {
  height: 48px !important;
  line-height: 48px !important;
}
</style>
