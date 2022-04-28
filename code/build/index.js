const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const fse = require('fs-extra')

// 设置dotenv
const lv = process.argv[process.argv.length - 1]
// config
dotenv.config({ path: '.env.' + lv })

function getAllFiles() {
  const arrFiles = []
  let str = path.join(__dirname, process.env.DOCS_ZH_CN_PATH)
  function load(val) {
    const files = fs.readdirSync(val)
    files.forEach(function (item) {
      let stat = fs.lstatSync(val + item)
      if (stat.isDirectory()) {
        load(val + item + '/')
      } else {
        const reg = /^.*\.md$/
        if (reg.test(item)) {
          arrFiles.push(val + item)
        }
      }
    })
  }
  load(str)
  return arrFiles
}

function start() {
  const allFiles = getAllFiles()
  allFiles.map((file) => {
    ejs.renderFile(file, {
      BASE_URL: process.env.VUE_BASE_URL,
      CONST_FG_SORT: process.env.CONST_FG_SORT
    }, {}, (err, result) => {
      if (err) {
        console.log('err:', err)
      } else {
        fse.writeFileSync(file, result)
      }
    })
  })
}

start()
