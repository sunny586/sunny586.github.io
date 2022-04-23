<script lang="ts" setup name="blog-sub-menu">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { IMenuItem, MD_PATH } from '@config/path'
import ebus from '@/utils/event-bus'
import { CaretRight } from '@element-plus/icons-vue'

const store = useStore()

const props = defineProps({
  list: Array,
})

const list = props.list as IMenuItem[]

const CONST_FG_SORT = process.env.CONST_FG_SORT

const menuItemClick = async (data: IMenuItem) => {
  await store.dispatch('updateArticleMd', { href: data.href + '.md' })
  const url = '/docs/zh-CN/' + data.href + '.md'
  const obj = MD_PATH.find((m) => m.url === url)
  ebus.emit('updateLeftCatalogue', obj?.id || '')
}
</script>

<template>
  <template class="blog-menu-item" v-for="item in list" :key="item.idx">
    <el-menu-item
      @click="menuItemClick(item)"
      v-if="item.href"
      :index="item.idx"
      :class="`sidebar-link-${item.idx?.split('/').length}`"
      >{{ item.title.split(CONST_FG_SORT)[0] }}</el-menu-item
    >
    <el-sub-menu
      v-else
      :index="item.idx"
      :class="`sidebar-link-${item.idx?.split('/').length}`"
      popper-class="haha"
    >
      <template #title>
        {{ item.title.split(CONST_FG_SORT)[0].toLocaleUpperCase() }}
        <el-icon style="color: #ccc; font-size: 13px"><caret-right /></el-icon>
      </template>
      <blog-sub-menu
        v-if="item.children && item.children.length > 0"
        :list="item.children"
      ></blog-sub-menu>
    </el-sub-menu>
  </template>
</template>

<style lang="scss">
.blog-menu {
  .sidebar-link-1,
  .sidebar-link-1 .el-sub-menu__title {
    font-size: 16px !important;
    font-weight: bold !important;
    margin-top: 20px;
  }

  .sidebar-link-2,
  .sidebar-link-2 .el-sub-menu__title {
    font-size: 13px !important;
    font-weight: 400 !important;
    color: #ccc;
    margin: 0;
  }
  .sidebar-link-3,
  .sidebar-link-3 .el-sub-menu__title,
  .sidebar-link-4,
  .sidebar-link-4 .el-sub-menu__title ,
  .sidebar-link-5,
  .sidebar-link-5 .el-sub-menu__title ,
  .sidebar-link-6,
  .sidebar-link-6 .el-sub-menu__title  {
    font-size: 12px !important;
    font-weight: 400 !important;
    margin: 0;
  }
  .el-sub-menu__icon-arrow {
    display: none !important;
  }
  .is-opened > .el-sub-menu__title > .el-icon {
    transform: rotate(90deg) !important;
  }
  .el-menu-item,
  .el-sub-menu,
  .el-sub-menu__title {
    &:hover {
      color: var(--el-color-primary) !important;
      background-color: #fff !important;
    }
  }

  .el-menu-item,
  .el-sub-menu__title {
    height: 32px !important;
    line-height: 32px !important;
  }
}
</style>
