const path = require('path')
const fs = require('fs')

export interface IMdPath {
  id: string
  url: string
  title: string
  desc?: string
  tag_name?: string
  type?: string
}

function normalize(
  list: string[],
  idPrefix: string,
  urlPrefix: string,
  type: string,
  tagType: string
) {
  return list.map((item, index) => {
    const [title, tagName] = item.split('@')
    return {
      id: `${idPrefix}_${index + 1}`,
      url: `${urlPrefix}/${title}.md`,
      title,
      tag_name: `${tagType} · ${tagName || 'JavaScript'}`,
      type,
    }
  })
}

// 批量注册最新创建的html页面
// function getFileNames(_path: string) {
//   const tmp: string[] = []

//   const files = fs.readdirSync(
//     // @ts-ignore
//     path.resolve(__dirname, '../public/mark-down/fe-interview/移动端')
//   )
//   files.forEach(function (item: any, index: number) {
//     // 压缩或者bese文件是没有相对应的页面的,这里做排除
//     if (item.indexOf('.css') == -1) {
//       tmp.push(item)
//     }
//   })
//   const HtmlPages = tmp.map((item) => {
//     return item.substring(0, item.indexOf('.'))
//   })
//   return HtmlPages
// }

// const test = getFileNames('')

console.log(fs.readdirSync, 'fs....', path)

/**
 *  https://sunny586.github.io/dist/mark-down/fe-interview/手写高质量代码
 *
 * id: fe-interview_write_code_1
 * url: /mark-down/fe-interview/手写高质量代码/类型判断.md
 * title: 类型判断
 * tag_name: 前端 · JavaScript
 * type: fe-interview
 *
 */
// fe-interview  start -------
// 移动端
const feInterviewHybridArray = ['h5和客户端']
const feInterviewHybrid = normalize(
  feInterviewHybridArray,
  'fe-interview_hybrid',
  '/mark-down/fe-interview/移动端',
  'fe-interview',
  '前端'
)
// 框架
const feInterviewFrameArray = ['微服务通信']
const feInterviewFrame = normalize(
  feInterviewFrameArray,
  'fe-interview_frame',
  '/mark-down/fe-interview/框架',
  'fe-interview',
  '前端'
)
// 手写高质量代码
const feInterviewWriteCodeArray = [
  '类型判断',
  '手写new',
  'curry-add',
  '遍历DOM树',
  '手写event-bus',
  'array-flatten',
  'dom转vdom',
  '手写instanceof',
  '手写LRU',
  '深拷贝',
  '手写lazyman',
  '手写bind函数',
]
const feInterviewWriteCode = normalize(
  feInterviewWriteCodeArray,
  'fe-interview_write_code',
  '/mark-down/fe-interview/手写高质量代码',
  'fe-interview',
  '前端'
)
// fe-interview  end -------

export const MESSAGE = '最近在学习js基础'

export const MD_PATH: IMdPath[] = [
  ...feInterviewHybrid,
  ...feInterviewFrame,
  ...feInterviewWriteCode,
]
