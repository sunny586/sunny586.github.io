import { createStore } from 'vuex'
import { getMdTemplate, getMdTemplateByHref } from '@config/index'

export interface State {
  articleMd: string
  articleId: string
  activeIndex: string
}

export default createStore<State>({
  state: {
    articleMd: '',
    articleId: '',
    activeIndex: ''
  },
  mutations: {
    UPDATE_ARTICLE_MD(state, payload) {
      state.articleMd = payload.md
    },
    UPDATE_ARTICLE_ID(state, payload) {
      state.articleId = payload.id
    },
    UPDATE_ACTIVE_INDEX(state, payload) {
      state.activeIndex = payload.index
    }
  },
  actions: {
    async updateArticleMd({ commit }, { id, href }) {
      if (id) {
        const md = await getMdTemplate(id)
        commit('UPDATE_ARTICLE_MD', { md })
      }
      if (href) {
        const md = await getMdTemplateByHref(href)
        commit('UPDATE_ARTICLE_MD', { md })
      }
    },
    updateArticleId({ commit }, { id }) {
      commit('UPDATE_ARTICLE_ID', { id })
    },
    updateActiveIndex({ commit }, { index }) {
      commit('UPDATE_ACTIVE_INDEX', { index })
    }
  },
  modules: {},
})
