import Vue from 'vue'
import Toasted from 'vue-toasted'; 

Vue.use(Toasted)

export default {
    namespaced: true,

    state: () => ({
        cupboards: [],
        loading: false
    }),
    mutations: {
        updateCupboards(state, val){
          state.cupboards = val
        }
    },
    actions: {
        async setCupboards(ctx){
            ctx.state.cupboardLoading = true
            await axios.get('/api/get/cupboards')
            .then((res) => {
                ctx.commit('updateCupboards', res.data.cupboards)
                console.log(res)
            }).catch((res) => {
                console.log(res)
            }).then(() => {
                ctx.state.cupboardLoading = false
            })
        },
        async deleteCupboard(ctx, id){
            if(confirm('Вы уверены?')){
                ctx.state.cupboardLoading = true
                await axios.post('/api/delete/cupboard/' + id)
                .then((res) => {
                    Vue.toasted.show('Успешно удалено!', {
                        action : {
                            text : 'Закрыть',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                    });

                    ctx.commit('updateCupboards', res.data.cupboards)
                    console.log(res)
                }).catch((res) => {
                     console.log(res)
                }).then(() => {
                    ctx.state.cupboardLoading = false
                })
            }
        },
        

    },
    getters: {
        mainCupboards(state){
            return state.cupboards
        },
        cupboardLoading(state){
            return state.loading
        }
    }
}