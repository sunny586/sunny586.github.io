import axios from 'axios';
import { NET_CONFIG } from './api.config';
import store from 'store2'
import vuex_store from '../store'

const BASE_URL = NET_CONFIG.BACKEND_URL + 'article';


export async function get_field_list(
): Promise<{
  id: number,
  field: string,
  order: number,
  isVisiable: boolean
}[]> {
  try {
    const res = await axios({
      method: 'get',
      url: BASE_URL + '/get-field-list',
    });

    if (res && res.data) {
      return res.data
    }
  }
  catch (error) {
    // console.error(error)
  }
  return [];
}
export async function get_all_field_list(
): Promise<{
  id: number,
  field: string,
  order: number,
  isVisiable: boolean
}[]> {
  try {
    const res = await axios({
      method: 'get',
      url: BASE_URL + '/get-all-field-list',
    });

    if (res && res.data) {
      return res.data
    }
  }
  catch (error) {
    // console.error(error)
  }
  return [];
}

// 获取标签列表
export async function get_tag_list(
): Promise<string[]> {
  try {
    const res = await axios({
      method: 'get',
      url: BASE_URL + '/get-tag-list',
    });

    if (res && res.data) {
      return res.data
    }
  }
  catch (error) {
    // console.error(error)
  }
  return [];
}
export async function create_field(
  args: {
    field: string,
    isVisiable: boolean,
    order: number
  }
): Promise<number> {
  try {
    const res = await axios({
      method: 'post',
      url: BASE_URL + '/create-field',
      data: {
        ...args
      }
    });

    if (res && res.data) {
      return res.data
    }
  }
  catch (error) {
    // console.error(error)
  }
  return -1;
}
export async function edit_field(
  args: {
    id: number,
    field: string,
    isVisiable: boolean,
    order: number,
    isDeleted?: boolean
  }
): Promise<number> {
  try {
    const res = await axios({
      method: 'post',
      url: BASE_URL + '/edit-field',
      data: {
        ...args
      }
    });

    if (res && res.data) {
      return res.data
    }
  }
  catch (error) {
    // console.error(error)
  }
  return -1;
}

export async function create_article(
  args: {
    userId: number,
    title: string,
    description: string,
    content: string,
    fieldId: number,
    tags: string[],
    isVisiable: boolean
  }
): Promise<any> {
  try {
    const res = await axios({
      method: 'post',
      url: BASE_URL + '/create-article',
      data: {
        ...args
      },
    })
    if (res && res.data) {
      return res.data
    }
  } catch (error) {
    // console.error(error)
  }

}
export async function edit_article(
  args: {
    id: number,
    title?: string,
    description?: string,
    content?: string,
    fieldId?: number,
    isVisiable?: boolean,
    isDeleted?: boolean,
    tags?: string[]
  }
): Promise<any> {
  try {
    const res = await axios({
      method: 'post',
      url: BASE_URL + '/edit-article',
      data: {
        ...args
      },
    })
    if (res && res.data) {
      return res.data
    }
  } catch (error) {
    // console.error(error)
  }

}

export async function get_article_list(
  args: {
    userId: number,
    fieldId?: number,
    keyword?: string,
    tags?: string[],
    offset?: number,
    num?: number
  }
): Promise<{
  id: number,
  userId: number,
  title: string,
  description: string,
  field: string,
  tags: string[],
  isVisiable: boolean,
  time: Date
}[]> {
  try {
    const res = await axios({
      method: 'get',
      url: BASE_URL + '/get-article-list',
      params: {
        ...args
      }
    });

    if (res && res.data) {
      return res.data
    }
  }
  catch (error) {
    // console.error(error)
  }
  return [];
}

export async function get_all_article_list(
  args: {
    userId: number,
    fieldId?: number,
    keyword?: string,
    tags?: string[],
    offset?: number,
    num?: number
  }
): Promise<{
  list: {
    id: number,
    userId: number,
    title: string,
    description: string,
    field: string,
    tags: string[],
    isVisiable: boolean,
    time: Date
  }[],
  total: number
}> {
  try {
    const res = await axios({
      method: 'get',
      url: BASE_URL + '/get-all-article-list',
      params: {
        ...args
      }
    });

    if (res && res.data) {
      return res.data
    }
  }
  catch (error) {
    // console.error(error)
  }
  return {
    list: [],
    total: 0
  };
}

export async function get_article_visiable(
  args: {
    articleId: number
  }
): Promise<{
  id: number,
  userId: number,
  title: string,
  description: string,
  content: string,
  field: string,
  fieldId: number,
  tags: string[],
  isVisiable: boolean,
  time: Date
} | null> {
  try {
    const res = await axios({
      method: 'get',
      url: BASE_URL + '/get-visiable-article',
      params: {
        ...args
      }
    })
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    // console.error(error)
  }
  return null;
}
export async function get_article_any(
  args: {
    articleId: number
  }
): Promise<{
  id: number,
  userId: number,
  title: string,
  description: string,
  content: string,
  field: string,
  fieldId: number,
  tags: string[],
  isVisiable: boolean,
  time: Date
} | null> {
  try {
    const res = await axios({
      method: 'get',
      url: BASE_URL + '/get-any-article',
      params: {
        ...args
      }
    })
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    // console.error(error)
  }
  return null;
}
// 上传图片
export async function uploadImages(file:any):Promise<string|undefined>{
  const param=new FormData();
  param.append("file",file)
  const config={
    headers: { "Content-Type": "multipart/form-data" }
  }
  const res=await axios.post(BASE_URL+"/upload", param, config);
  if(res&&res.data){
    return res.data as string
  }
}