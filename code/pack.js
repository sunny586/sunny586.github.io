const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const fse = require('fs-extra')

function getAllFiles() {
  const arrFiles = []
  const str = path.join(__dirname, '../dist/doc/')
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
  const argv = process.argv[process.argv.length - 1]
  let url = 'https://sunny586.github.io/dist'
  if (argv === '--gitee') {
    url = 'https://zhangyu586.gitee.io/dist'
  }
  const allFiles = getAllFiles()
  allFiles.map((file) => {
    ejs.renderFile(file, { BASE_URL: url }, {}, (err, result) => {
      if (err) {
        console.log('err:', err)
      } else {
        fse.writeFileSync(file, result)
      }
    })
  })
}

start()
