import '@kangc/v-md-editor/lib/style/base-editor.css'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn'
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn'
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css'
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css'
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align'
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import { mdPlugin } from '@config/plugin'

function loadVMdPreview(app: any) {
  VMdPreview.use(vuepressTheme, {
    Prism,
    extend(md: any) {
      // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
      // md.set(option).use(plugin);
      md.use(mdPlugin)
    },
  })
  VMdPreview.use(createTodoListPlugin())
  VMdPreview.use(createEmojiPlugin())
  VMdPreview.use(createKatexPlugin())
  VMdPreview.use(createMermaidPlugin())
  VMdPreview.use(createAlignPlugin())
  VMdPreview.use(createCopyCodePlugin())
  VMdPreview.use(createLineNumbertPlugin())

  app.use(VMdPreview)
}

export default loadVMdPreview