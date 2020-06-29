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
        async setCategories(ctx){
            let categories
            await axios.get('/api/get/main/categories')
                       .then((res) => {

                       }).catch((res) => {

                       })
            ctx.commit('updateCategories', val)
        }

    },
    getters: {
        mainCategoriesList(state){
            return state.main_categories
        }
    }
}