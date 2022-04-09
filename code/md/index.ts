import axios from 'axios'
import { MD_PATH } from './path'

function getPublicPath() {
  // @ts-ignore
  const argv = process.argv[process.argv.length - 1]
  return process.env.NODE_ENV === 'production'
    ? argv === '--gitee'
      ? 'http://zhangyu586.gitee.io/dist'
      : 'https://sunny586.github.io/dist'
    : ''
}

const baseUrl = getPublicPath()

export async function getMdTemplate(id: string | number) {
  const target = MD_PATH.find((item) => item.id === +id)
  if (!target) {
    return new Error('模板id不存在, 请检查')
  }
  const { data } = await axios.get(baseUrl + target!.url)

  if (!data) {
    throw new Error('根据模板id找不到markdown, 请检查!')
  }
  return data
}

export async function getMdTemplateByHref(href: string) {
  if (!href) {
    return new Error('模板不存在，请检查')
  }
  const { data } = await axios.get(baseUrl + '/doc/' + href)
  if (!data) {
    throw new Error('根据模板找不到markdown, 请检查!')
  }
  return data
}
