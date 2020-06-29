export default {
    namespaced: true,

    state: () => ({
        main_categories: []
    }),
    mutations: {
        updateCategories(state, val){
          state.main_categories = val
        }

    },
    actions: {
        setCategories(ctx, val){
            ctx.commit('updateCategories', val)
        }

    },
    getters: {
        mainCategoriesList(state){
            return state.main_categories
        }
    }
}