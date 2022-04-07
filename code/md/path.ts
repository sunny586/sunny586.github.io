export interface IMdPath {
  id: number
  url: string
  title: string
  desc?: string
  tag_name?: string
  type?: string
}

function filterMdFilesName(filesName: string[]) {
  return filesName.filter(m => m.indexOf('hide') === -1)
}


function getMdFilesName() {
  const requireModule = require.context('../public/doc', true, /\.md$/)
  const keys = requireModule.keys()
  const result: string[] = []
  if (keys && keys.length > 0) {
    keys.forEach((str) => {
      const substr = str.match(/\.\/(\S*)\.md/)
      if (substr && substr[1]) {
        result.push(substr[1])
      }
    })
  }
  return filterMdFilesName(result)
}

/**
 * https://sunny586.github.io/dist/doc/fe-interview/手写高质量代码
 * fe-interview/手写高质量代码/手写new
 * @param list 
 * @returns 
 */
function normalize(list: string[]) {
  return list.map((item, index) => {
    const arr = item.split('/')
    return ({
      id: index + 1,
      url: `/doc/${item}.md`,
      title: arr[arr.length - 1],
      tag_name: `${arr[0]} · ${arr[1] || 'JavaScript'}`,
      type: arr[0],
    } as IMdPath)
  })
}




export const MESSAGE = '最近在学习js基础'

export const MD_PATH: IMdPath[] = normalize(getMdFilesName()) 
