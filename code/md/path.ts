export interface IMdPath {
  id: number
  url: string
  title: string
  desc?: string
  tag_name?: string
  type?: string
}

/**
 * https://sunny586.github.io/dist/mark-down/fe-interview/手写高质量代码
 * fe-interview/手写高质量代码/手写new
 * @param list 
 * @returns 
 */
function normalize(list: string[]): IMdPath[] {
  return list.map((item, index) => {
    const [a, b, c] = item.split('/')
    return ({
      id: index + 1,
      url: `/mark-down/${item}.md`,
      title: c,
      tag_name: `${a} · ${b || 'JavaScript'}`,
      type: a,
    } as IMdPath)
  })
}

function getMdFilesName() {
  const requireModule = require.context('../public/mark-down', true, /\.md$/)
  const keys = requireModule.keys()
  const result: string[] = []
  if (keys && keys.length > 0) {
    keys.forEach((str) => {
      const substr = str.match(/\.\/(\S*)\.md/)
      // console.log(substr && substr[1])
      if (substr && substr[1]) {
        result.push(substr[1])
      }
    })
  }
  return result
}

export const MESSAGE = '最近在学习js基础'

export const MD_PATH: IMdPath[] = normalize(getMdFilesName()) 
