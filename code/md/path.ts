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
  // index?: string
  children?: IMenuItem[]
}

function filterMdFilesName(filesName: string[]) {
  return filesName.filter((m) => m.indexOf('hide') === -1)
}

function arr2Tree(arr: string[], href: string) {
  let obj = {} as IMenuItem
  // 指针
  let v: any
  const createIdx = (idx: number) => {
    let str = ''
    for (let i = 0; i < idx; i++) {
      str += i === idx - 1 ? '1' : '1-'
    }
    return str
  }
  arr.forEach((m, i) => {
    if (i === 0 && arr.length > 1) {
      obj = {
        title: m,
        // index: createIdx(i + 1),
        children: [],
      }
      v = obj.children
    } else {
      if (i === arr.length - 1) {
        if (arr.length === 1) {
          obj = {
            title: m,
            // index: createIdx(i + 1),
            href,
          }
        } else {
          v.push({
            title: m,
            // index: createIdx(i + 1),
            href,
          })
        }

      } else {
        v.push({
          title: m,
          // index: createIdx(i + 1),
          children: [],
        })
        v = v[0].children
      }
    }
  })
  return obj
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



function findTarget(target: any, str: string) {
  let parent: any
  let idx = -1
  debugger
  const _find = (target: any, str: string) => {
    if (str.indexOf(target.title) === -1) { // 没找到
    } else { // 找到了，在继续往下找
      parent = target
      target.children.forEach((m: any) => {
        _find(m, str)
      })
      idx++
    }
  }
  _find(target, str)
  return { parent, idx }
}

function addMdItem(target: IMenuItem, item: string) {
  // console.log(target, item, 'item....', findTarget(target, item))
  const { parent, idx } = findTarget(target, item)
  const arr = item.split('/')

  parent && parent.children && parent.children.push(arr2Tree(arr.slice(idx + 1), item))


}

// 初始化顶部菜单

function getMenuData() {

  const md = getMdFilesName().sort((a, b) => b.split('/').length - a.split('/').length)

  // console.log(md)

  const map = new Map()
  const result: IMenuItem[] = []
  md.forEach((item) => {
    const arr = item.split('/')
    const key = arr[0]

    const target = map.get(key)
    if (target) {
      // 从result里取出target
      result.forEach((m) => {
        if (m.title === target.title) {
          addMdItem(m, item)
        }
      })
    } else {
      const tree = arr2Tree(arr, item)
      result.push(tree)
      map.set(key, tree)
    }
  })
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
