import axios from "axios";
import { MD_PATH } from './md-path'

async function getMdTemplate(id: number) {
  const target = MD_PATH.find(item => item.id === id)
  const { data } = await axios.get(target!.url);
  if (!data) {
    throw new Error('markdown模版不存在，请检查')
  }
  return data
}

export default {
  getMdTemplate
}



