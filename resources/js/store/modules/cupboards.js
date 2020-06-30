import Vue from 'vue'
import Toasted from 'vue-toasted';
import router from './../../router' 

Vue.use(Toasted)

export default {
    namespaced: true,

    state: () => ({
        cupboards: [],
        loading: false,
        cupboard: []
    }),
    mutations: {
        updateCupboards(state, val){
          state.cupboards = val
        },
        updateLoading(state, val){
            state.loading = val
        },
        updateCupboard(state, val){
            state.cupboard = val
        }
    },
    actions: {
        async setCupboards(ctx){
            ctx.commit('updateLoading', true)
            await axios.get('/api/get/cupboards')
            .then((res) => {
                ctx.commit('updateCupboards', res.data.cupboards)
                console.log(res)
            }).catch((res) => {
                router.push({name: 'error404'})
                console.log(res)
            }).then(() => {
                ctx.commit('updateLoading', false)
            })
        },
        async getCupboardCells(ctx, slug){
            ctx.commit('updateLoading', true)
            ctx.commit('updateCupboard', [])
            await axios.get('/api/get/cupboard/' + slug)
            .then((res) => {
                ctx.commit('updateCupboard', res.data.cupboard)
                console.log(res)
            }).catch((res) => {
                router.push({name: 'error404'})
                console.log(res)
            }).then(() => {
                ctx.commit('updateLoading', false)
            })
        },
        async deleteCupboard(ctx, id){
            if(confirm('Вы уверены?')){
                ctx.commit('updateLoading', true)
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
                    router.push({name: 'error404'})
                     console.log(res)
                }).then(() => {
                    ctx.commit('updateLoading', false)
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
        },
        getCupboard(state){
            return state.cupboard
        }
    }
}