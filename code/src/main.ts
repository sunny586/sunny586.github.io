import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './router/router.interceptor' // 导入路由守卫
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  extend(md: any) {
    //
  }
});
VueMarkdownEditor.use(createTodoListPlugin());
VueMarkdownEditor.use(createEmojiPlugin());
VueMarkdownEditor.use(createKatexPlugin());
VueMarkdownEditor.use(createMermaidPlugin());
VueMarkdownEditor.use(createAlignPlugin());
VMdPreview.use(vuepressTheme, {
  Prism,
  extend(md: any) {
    //
  }
});
VMdPreview.use(createTodoListPlugin());
VMdPreview.use(createEmojiPlugin());
VMdPreview.use(createKatexPlugin());
VMdPreview.use(createMermaidPlugin());
VMdPreview.use(createAlignPlugin());
const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.mount('#app')