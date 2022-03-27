export interface IMdPath {
  id: string
  url: string
  title?: string
  desc?: string
  tag_name?: string
  type?: string
}

export const MESSAGE = '最近在学习js基础'

export const MD_PATH: IMdPath[] = [
  {
    id: '2',
    url: '/mark-down/fe-interview/手写高质量代码/手写lazyman.md',
    title: '手写lazyman',
    tag_name: '前端 · JavaScript',
    type: 'fe-interview',
  },
  {
    id: '1',
    url: '/mark-down/fe-interview/手写高质量代码/手写bind函数.md',
    title: '手写bind函数',
    tag_name: '前端 · JavaScript',
    type: 'fe-interview',
  },
]
