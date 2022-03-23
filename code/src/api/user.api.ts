import axios from 'axios';
import { NET_CONFIG } from './api.config';
import store from 'store2'
import vuex_store from '../store'

// const BASE_URL = NET_CONFIG.BACKEND_URL + ':' + NET_CONFIG.BACKEND_PORT + '/user';
const BASE_URL = NET_CONFIG.BACKEND_URL + 'user';


export async function get_access_token(
    args: {
        ticketToken: string,
    }
): Promise<any> {
    try {
        const res = await axios({
            method: 'post',
            url: BASE_URL + '/get-access-token',
            data: {
                ...args
            },
        })
        if(res.data){
            store.set('access_token',res.data.accessToken)
        }
        return res;
    } catch (error) {
        // console.error(error)
    }

}
export async function get_user_info(
): Promise<any> {
    try {
        const res = await axios({
            method: 'get',
            url: BASE_URL + '/get-user-info',
        })
        if(res.data){
            //
        }
        return res;
    } catch (error) {
        // console.error(error)
    }

}

export async function user_log_out():Promise<any>{
    try {
        const res = await axios({
            method: 'post',
            url: BASE_URL + '/log-out',
        })
        return res;
    } catch (error) {
        // console.error(error)
    }
}

// 获取用户留言
export async function get_user_message(
    args: {
      userId: number
    }
  ): Promise<string> {
    try {
      const res = await axios({
        method: 'get',
        url: BASE_URL + '/get-user-message',
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
    return '无';
  }