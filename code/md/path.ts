export interface IMdPath {
  id: number | string
  url: string
  title: string
  desc?: string
  tag_name?: string
  type?: string
}

// 顶部菜单树
export interface IMenuItem {
  title: string
  href?: string
  index?: string
  children?: IMenuItem[]
}

function filterMdFilesName(filesName: string[]) {
  return filesName.filter((m) => m.indexOf('hide') === -1)
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

function getIdxByValue(list: IMenuItem[], value: string) {
  return list.findIndex((item) => item.title === value)
}

// 初始化顶部菜单
function getMenuData() {
  const md = getMdFilesName()
  const result: IMenuItem[] = []
  for (const item of md) {
    const [first, second, last] = item.split('/')
    const idx1 = getIdxByValue(result, first)
    const length = result.length
    if (idx1 >= 0) {
      const child1 = result[idx1].children
      if (child1) {
        const idx2 = getIdxByValue(child1, second)
        if (idx2 >= 0) {
          result[idx1].children![idx2].children?.push({
            title: last,
            index: `${idx1 + 1}-${idx2 + 1}-${
              (result[idx1].children![idx2].children?.length || 0) + 1
            }`,
            href: item,
          })
        } else {
          result[idx1].children?.push({
            title: second,
            index: `${idx1 + 1}-${child1.length + 1}`,
            children: [
              {
                title: last,
                href: item,
                index: `${idx1 + 1}-${child1.length + 1}-1`,
              },
            ],
          })
        }
      }
    } else {
      result.push({
        title: first,
        index: `${length + 1}`,
        children: [
          {
            title: second,
            index: `${length + 1}-1`,
            children: [
              {
                title: last,
                index: `${length + 1}-1-1`,
                href: item,
              },
            ],
          },
        ],
      })
    }
  }
  return result
}

/**
 * @param list
 * @returns
 */
function normalize(list: string[]) {
  return list.map((item, index) => {
    const arr = item.split('/')
    return {
      id: index + 1,
      url: `/doc/${item}.md`,
      title: arr[arr.length - 1],
      tag_name: `${arr[0]} · ${arr[1] || 'JavaScript'}`,
      type: arr[0],
    } as IMdPath
  })
}

export const MESSAGE = '最近在学习js基础～'

export const MD_PATH = normalize(getMdFilesName())

export const MENU_LIST = getMenuData()
