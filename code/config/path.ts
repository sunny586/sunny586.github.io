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
  idx?: string
  children?: IMenuItem[]
}

const CONST_FG_SORT = process.env.CONST_FG_SORT

function filterMdFilesName(filesName: string[]) {
  return filesName.filter((m) => m.indexOf('hide') === -1)
}

function getMdFilesName() {
  const requireModule = require.context('../public/docs/zh-CN', true, /\.md$/)
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


// [3]  [1,2,3]
function prefixArr(a: string[], b: string[]) {
  const l = b.length - a.length
  if (l > 0) {
    return a.map(m => {
      return `${b.slice(0, l).join('/')}/${m}`
    })
  }
  return a
}


function arr2Tree(arr: string[], href: string) {
  const parr = prefixArr(arr, href.split('/'))
  let obj = {} as IMenuItem
  // 指针
  let v: IMenuItem[]
  arr.forEach((m, i) => {
    const idx = parr.slice(0, i + 1).join('/')
    if (i === 0) {
      if (arr.length > 1) {
        obj = {
          title: m,
          children: [],
          idx,
        }
        v = obj.children as IMenuItem[]
      } else {
        obj = {
          title: m,
          href,
          idx,
        }
      }
    } else {
      if (i === arr.length - 1) {
        v.push({
          title: m,
          href,
          idx,
        })
      } else {
        v.push({
          title: m,
          children: [],
          idx,
        })
        v = v[0].children as IMenuItem[]
      }
    }
  })
  return obj
}

function findTarget(target: any, str: string) {
  let parent: any
  let idx = -1
  const _find = (target: any, str: string) => {
    if (str.indexOf(target.title) !== -1) {
      // 找到了，在继续往下找
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

function addMdItem(target: IMenuItem, filePath: string) {
  // 通过文件路径找到parent节点和idx
  const { parent, idx } = findTarget(target, filePath)
  const arr = filePath.split('/')
  // 将文件路径转化为树节点，并添加到parent的children里
  parent &&
    parent.children &&
    parent.children.push(arr2Tree(arr.slice(idx + 1), filePath))
}

// 初始化顶部菜单
function getMenuData() {
  // 获取md的路径，并排序处理
  const md = getMdFilesName().sort(
    (a, b) => b.split('/').length - a.split('/').length
  )
  // 创建map对象，用来存储树节点的数据。目的是为了更快的拿到树节点的数据。
  const map = new Map()
  // 定义一个result 数组，用来存放处理的树节点数据
  const result: IMenuItem[] = []
  // 遍历md路径
  md.forEach((item) => {
    // 转化为数组的形式
    const arr = item.split('/')
    // 取到第一个
    const key = arr[0]
    // 通过key从map中获取树节点数据
    const target = map.get(key)
    // 如果能取到数据
    if (target) {
      // 从result里取出target
      result.forEach((m) => {
        // 找到树节点的target数据
        if (m.title === target.title) {
          // 将文件路径转化为树节点，并添加到树节点上去
          addMdItem(m, item)
        }
      })
    } else {
      // 取不到数据，则直接将文件路径转为树节点
      const tree = arr2Tree(arr, item)
      // 存放到result数组中
      result.push(tree)
      // 将key和树节点数据存到map中
      map.set(key, tree)
    }
  })
  // 排序处理
  sortTreeArr(result)
  // 返回树
  return result
}

function sortTreeArr(treeArr: IMenuItem[]) {
  const _sort = (treeArr: IMenuItem[]) => {
    treeArr.forEach((tree) => {
      if (tree.children && tree.children.length > 0) {
        _sort(tree.children)
      }
    })
    treeArr.sort((a: IMenuItem, b: IMenuItem) => {
      return +a.title.split(CONST_FG_SORT)[1] - +b.title.split(CONST_FG_SORT)[1]
    })
  }
  _sort(treeArr)
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
      url: `/docs/zh-CN/${item}.md`,
      title: arr[arr.length - 1],
      tag_name: `${arr[0]} · ${arr[1] || 'JavaScript'}`,
      type: arr[0],
    } as IMdPath
  })
}

export const MESSAGE = '最近在学习js基础～'

export const MD_PATH = normalize(getMdFilesName())


export const MENU_LIST = getMenuData()
