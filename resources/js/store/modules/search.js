export default {
    namespaced: true,

    state: () => ({
        text: '',
        search: []
    }),
    mutations: {
        updateText(state, val){
          state.text = val
        },
        updateSearch(state, val){
          state.search = val
        }

    },
    actions: {
        async setText(ctx, val){
            ctx.commit('updateText', val)
        },
        async searchText(ctx, text){
            ctx.commit('updateSearch', [])
            await axios.get('/api/search/' + text)
            .then((res) => {
                ctx.commit('updateSearch', res.data.search)
                console.log(res)
            }).catch((res) => {
                console.log(res.response)
            }).then(() => {

            })
        }

    },
    getters: {
        getText(state){
            return state.text
        },
        getSearch(state){
            return state.search
        },
    }
}