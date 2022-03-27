import { createStore } from 'vuex'
import { getMdTemplate } from '@md/index'

export interface State {
  articleMd: string
  articleId: string
}

export default createStore<State>({
  state: {
    articleMd: '',
    articleId: '',
  },
  mutations: {
    UPDATE_ARTICLE_MD(state, payload) {
      state.articleMd = payload.md
    },
    UPDATE_ARTICLE_ID(state, payload) {
      state.articleId = payload.id
    },
  },
  actions: {
    async updateArticleMd({ commit }, { id }) {
      if (id) {
        const md = await getMdTemplate(id)
        commit('UPDATE_ARTICLE_MD', { md })
      }
    },
    updateArticleId({ commit }, { id }) {
      commit('UPDATE_ARTICLE_ID', { id })
    },
  },
  modules: {},
})
