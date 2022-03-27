export interface IMdPath {
  id: string
  url: string
  title?: string
  desc?: string
  tag_name?: string
}

export const MESSAGE = '最近在学习js基础'

export const MD_PATH: IMdPath[] = [
  {
    id: '2',
    url: '/mark-down/js.md',
    title: 'JS基础',
    tag_name: '前端 · JavaScript',
  },
  {
    id: '1',
    url: '/mark-down/js-algorithm.md',
    title: 'JS算法',
    tag_name: '前端 · JavaScript',
  },
]
