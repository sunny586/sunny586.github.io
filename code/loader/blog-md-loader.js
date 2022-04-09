const ejs = require('ejs')
module.exports = function (source) {
  // console.log(source, 'source...')  
  return ejs.render(source, {BASE_URL: 'https://sunny586.github.io/dist'})
}
