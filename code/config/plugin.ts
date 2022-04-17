import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { getExmapleData } from './index'
import loadVMdPreview from '@/lib/vmd-preview'
import { GenNonDuplicateID } from '@/utils/index'
import Demo from '@/components/demo.vue'

const localMd = MarkdownIt()
export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate: function (params: string) {
      return params.trim().match(/^demo\s+(.*)$/)
    },
    render: function (tokens: any, idx: number) {
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
      const sourceFileToken = tokens[idx + 2]
      if (tokens[idx].nesting === 1) {
        const uid = 'vmd_' + GenNonDuplicateID()
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFile = sourceFileToken.content
        const App = {
          template:
            '<Demo :source="source" :description="description" :raw-source="rawSource" />',
          data() {
            return {
              source: require(`../public/docs/examples/${sourceFile}.vue`)
                .default,
              description: encodeURIComponent(localMd.render(description)),
              rawSource: '',
            }
          },
          created() {
            getExmapleData(`/docs/examples/${sourceFile}.vue`).then(
              (exmaple) => {
                // @ts-ignore
                this.rawSource = encodeURIComponent(exmaple)
              }
            )
          },
          components: {
            Demo,
          },
        }
        const app = createApp(App)
        app.use(ElementPlus, {
          locale: zhCn,
        })
        loadVMdPreview(app)
        setTimeout(() => app.mount('#' + uid))
        // opening tag
        return `<div id="${uid}">\n`
      } else {
        // closing tag
        return '</div>\n'
      }
    },
  })
}
