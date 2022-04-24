import axios from 'axios'
import { MD_PATH } from './path'

function getPublicPath() {
  return process.env.VUE_BASE_URL || ''
}

export async function getMdTemplate(id: number) {
  const baseUrl = getPublicPath()
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
  const baseUrl = getPublicPath()
  if (!href) {
    return new Error('模板不存在，请检查')
  }
  const { data } = await axios.get(baseUrl + '/docs/zh-CN/' + href)
  if (!data) {
    throw new Error('根据模板找不到markdown, 请检查!')
  }
  return data
}

export async function getExmapleData(href: string) {
  const baseUrl = getPublicPath()
  if (!href) {
    return new Error('例子demo模板不存在，请检查')
  }
  const { data } = await axios.get(baseUrl + href)
  if (!data) {
    throw new Error('例子demo模板没有数据, 请检查!')
  }
  return data
}
