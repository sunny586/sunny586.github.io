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

function arr2Tree(arr: string[]) {
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
    if (i === 0) {
      obj = {
        title: m,
        index: createIdx(i + 1),
        children: [],
      }
      v = obj.children
    } else {
      if (i === arr.length - 1) {
        v.push({
          title: m,
          index: createIdx(i + 1),
          href: arr.join('/'),
        })
      } else {
        v.push({
          title: m,
          index: createIdx(i + 1),
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

function getIdxByValue(list: IMenuItem[], value: string) {
  return list.findIndex((item) => item.title === value)
}

// 初始化顶部菜单
function getMenuData() {
  const md = getMdFilesName()
  const result: IMenuItem[] = []
  for (const item of md) {
    const [first, second, last] = item.split('/')
    // console.log(first, second, last)
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

function addMdItem(target: IMenuItem, item: IMenuItem) {
  let t = target.children
  while (true) {
    if (t && t[0] && t[0].href) {
      const idx = t[t.length - 1].index
      const idxArr = idx?.split('-')
      if (idxArr && idxArr.length > 0) {
        idxArr[idxArr?.length - 1] = `${+idxArr[idxArr?.length - 1] + 1}`
      }
      t.push({
        ...item,
        index: idxArr?.join('-'),
      })
      break
    } else {
      t = t && t[0].children
    }
  }
}

function getMenuData2() {
  const md = getMdFilesName()
  const map = new Map()
  const result: IMenuItem[] = []
  md.forEach((item) => {
    console.log(item)
    const arr = item.split('/')
    const key = arr.slice(0, arr.length - 1).join('/')
    
    const target = map.get(key)
    if (target) {
      // 从result里取出target
      result.forEach((m) => {
        if (m.index === target.index) {
          addMdItem(m, {
            title: arr[arr.length - 1],
            href: item || '',
          })
        }
      })
    } else {
      const tree = arr2Tree(arr)
      result.push(tree)
      map.set(key, tree)
    }
  })
  console.log(result)
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
