import axios from 'axios'
import { MD_PATH } from './path'

const baseUrl =
  // @ts-ignore
  process.env.NODE_ENV === 'development'
    ? ''
    : 'https://sunny586.github.io/dist'

export async function getMdTemplate(id: number) {
  const target = MD_PATH.find((item) => item.id === +id)
  if (!target) {
    return new Error('模板id不存在，请检查')
  }
  const { data } = await axios.get(baseUrl + target!.url)
  if (!data) {
    throw new Error('根据模板id找不到markdown, 请检查!')
  }
  return data
}
