const fs = require('fs')
const temp = fs.readFileSync('./SUMMARY.md', 'utf-8')

let uid = 0

const tempArr = temp.split('\r\n')
tempArr.push('')

const result = []
let a = []
tempArr.forEach((item) => {
  if (item) {
    a.push(item)
  } else {
    result.push(a)
    a = []
  }
})

function formatStr(str) {
  return str.replace(/\s+/g, '').replace(/\-/g, '')
}

function renderSummary(result) {
  const summary = []
  result.forEach((item, i) => {
    const nomd = item.filter((item) => item.indexOf('.md') === -1)
    let t = {}
    let p = null    
    item.forEach((m, j) => {
      if (m.indexOf('.md') === -1) {
        const obj = {
          title: formatStr(m),
          id: uid++,
          children: [],
        }
        p ? p.push(obj) : (t = obj)
        p = obj.children
      } else {
        const obj = {
          title: formatStr(m),
          id: uid++,
          href: formatStr(nomd.join('/') ? nomd.join('/') + '/' + m : m),
        }
        p ? p.push(obj) : (t = obj)
      }
    })
    summary.push(t)
  })
  return summary
}



const summary = renderSummary(result)

console.log(JSON.stringify(summary))


