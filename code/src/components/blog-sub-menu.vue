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

const firstCharToLocaleUpperCase = (value: string) => {
  return value.replace(value[0], value[0].toLocaleUpperCase())
}
</script>

<template>
  <template class="blog-menu-item" v-for="item in list" :key="item.idx">
    <el-menu-item
      @click="menuItemClick(item)"
      v-if="item.href"
      :index="item.idx"
      :class="`${
        item.idx?.split('/').length === 1
          ? 'sidebar-link-start'
          : item.children && item.children.length > 0
          ? 'sidebar-link-middle'
          : 'sidebar-link-last'
      }`"
      >{{ item.title.split(CONST_FG_SORT)[0] }}</el-menu-item
    >
    <el-sub-menu
      v-else
      :index="item.idx"
      :class="`${
        item.idx?.split('/').length === 1
          ? 'sidebar-link-start'
          : item.children && item.children.length > 0
          ? 'sidebar-link-middle'
          : 'sidebar-link-last'
      }`"
    >
      <template #title>
        <el-icon style="color: #666; font-size: 14px; width: 14px">
          <caret-right />
        </el-icon>
        {{ firstCharToLocaleUpperCase(item.title.split(CONST_FG_SORT)[0]) }}
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
  .sidebar-link-start,
  .sidebar-link-start .el-sub-menu__title {
    font-size: 15px !important;
    margin-top: 4px;
    color: #2c3e50;
  }

  .sidebar-link-middle,
  .sidebar-link-middle .el-sub-menu__title {
    font-size: 14px !important;
    font-weight: 400 !important;
    margin: 0;
  }

  .sidebar-link-last,
  .sidebar-link-last .el-sub-menu__title {
    font-size: 13px !important;
    font-weight: 400 !important;
    margin: 0;
    color: #2c3e50;
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
    height: 28px !important;
    line-height: 28px !important;
  }
  .el-menu-item.is-active {
    color: var(--el-menu-active-color) !important;
  }
}
</style>
