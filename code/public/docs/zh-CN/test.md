```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

class InlineChunkPlugin{
    constructor({tests=[]}){
        this.tests=tests
    }
    apply(compiler){
        compiler.hooks.compilation.tap('InlineChunkPlugin', (compilation) => {
            // console.log('The compiler is starting a new compilation...')
      
            // Static Plugin interface |compilation |HOOK NAME | register listener 
           const hooks =  HtmlWebpackPlugin.getHooks(compilation)
           hooks.alterAssetTagGroups.tap("InlineChunkPlugin",(assets) => {
            //    console.log('assets.headTags=============>',assets.headTags)
             /* 
                现在headTags的内容如下
               {
                tagName: 'script',
                voidTag: false,
                meta: { plugin: 'html-webpack-plugin' },
                attributes: { defer: true, type: undefined, src: 'static/js/runtime~main.js' }
              }, 
              要修改为如下
              {
                tagName: 'script',
                innerHTML: runtime文件内容
              }, 
              */
              
              assets.headTags=  this.getInlineChunk(assets.headTags,compilation.assets)
              //删除runtime文件
            

               Object.keys(compilation.assets).forEach((filepath)=>{
                   if(this.tests.some((test)=> test.test(filepath) )){
                       delete compilation.assets[filepath]
                   }
               })

           })
        }
        )

    }
    getInlineChunk(headTags,assets){
        return headTags.map ((tag) => {
            if(tag.tagName!=='script') return tag
            const filepath = tag.attributes.src;
            if(!this.tests.some((test)=> test.test(filepath) ))return tag
            return {
                meta: { plugin: 'InlineChunkPlugin' },
                tagName: 'script',
                innerHTML: assets[filepath].source()
            }
        })
    }
}
module.exports= InlineChunkPlugin
```