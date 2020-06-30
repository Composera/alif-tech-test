export default {
    namespaced: true,

    state: () => ({
        cells: []
    }),
    mutations: {
        updateCells(state, val){
          state.cells = val
        }

    },
    actions: {
        async setCells(ctx){
            await axios.get('/api/get/cells')
                       .then((res) => {
                            ctx.commit('updateCells', res.data.cells)
                       }).catch((res) => {
                            console.log(res)
                       })
        }

    },
    getters: {
        cellsList(state){
            return state.cells
        }
    }
}