<template>
  <p text="sm" v-html="decodedDescription" v-if="decodedDescription" />

  <div class="example">
    <div class="op-btns">
      <document-copy class="op-btn" @click="copyCode" />
      <i class="el-icon op-btn el-tooltip__trigger el-tooltip__trigger" @click="compactCode">
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em">
          <path fill="currentColor"
            d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z">
          </path>
        </svg>
      </i>
    </div>
    <div class="el-divider el-divider--horizontal m-0" style="--el-border-style: solid"></div>
    <div class="example-showcase">
      <component :is="toRaw(props.source)" v-if="props.source" v-bind="$attrs" />
    </div>

    <transition name="slide-fade">
      <div v-if="isOpen">
        <div class="example-source-wrapper">
          <v-md-preview :text="toRaw(decodedRawSource)" ref="preview" />
        </div>
        <div class="example-float-control" @click="hideCode">
          <i class="el-icon" style="font-size: 16px"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
            </svg>
          </i>
          <span style="margin: 0 6px"> 隐藏源代码 </span>
        </div>
      </div>
    </transition>



  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, toRaw, ref } from 'vue'
import { DocumentCopy } from '@element-plus/icons-vue'

const props = defineProps<{
  source: any
  description?: string
  rawSource: string
}>()

const isOpen = ref(false)

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const decodedRawSource = computed(
  () => '``` html \n' + decodeURIComponent(props.rawSource!) + '\n ```'
)

const copyCode = () => {
  console.log(123)
}

const compactCode = () => {
  isOpen.value = !isOpen.value
}

const hideCode = () => {
  isOpen.value = false
}

</script>
<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    line-height: 3rem;

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      font-size: 20px;
      width: 1.2rem;
      height: 1.2rem;
      color: var(--text-color-lighter);
      transition: 0.2s;
    }
  }

  .example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
    background-color: var(--bg-color);
  }

  .example-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    &:hover {
      color: var(--el-color-primary);
    }
  }

  .slide-fade-enter-active {
    transition: all .25s ease;
  }

  .slide-fade-leave-active {
    transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active for below version 2.1.8 */
    {
    transform: translateY(60px);
    opacity: 0;
  }
}
</style>
<style lang="scss">
.example-source-wrapper {
  .vuepress-markdown-body {
    padding: 0 !important;
  }

  .vuepress-markdown-body pre,
  .vuepress-markdown-body pre {
    margin: 0 !important;
  }
}
</style>
