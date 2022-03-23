import { get_user_info, user_log_out } from '@/api/user.api';
import store from 'store2'

export const user = {
  namespaced: true,
  state: () => ({
    userName: '',
    userId: '',
    isLogin: false,
  }),
  getters: {
    userInfo(state: any) {
      return {
        userName: state.userName,
        userId: state.userId
      }
    },
    isLogin(state: any){
      return state.isLogin
    }
  },
  mutations: {
    // 更新本地用户信息
    updateUserInfo(state: any, userInfo: any): void {
      state.userName = userInfo.userName;
      state.userId = userInfo.userId;
    },
    updateLoginState(state: any, isLogin: boolean): void {
      state.isLogin = isLogin;
    }

  },
  actions: {
    async requestUserInfo({ commit }: any): Promise<{
      userName: string,
      userId: number
    }> {
      const response = await get_user_info();
      commit('updateUserInfo', response.data);
      commit('updateLoginState', true);
      return response.data;
    },
    async logout(
      { commit }: any
    ): Promise<boolean> {
      const response = await user_log_out();
      if (response.data == true) {
        commit('updateUserInfo', {
          userName: '',
          userId: '',
        });
        commit('updateLoginState', false);
        store.remove('access_token')
        return true;
      } else {
        return false;
      }
    }
  },
}