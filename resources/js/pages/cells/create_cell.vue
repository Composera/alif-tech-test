<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{ name: 'main' }">Главная</router-link></li>
                    <li class="breadcrumb-item">Создание ячейки</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12">
            <card title="Создание ячейки">
                <ul class="list-group mb-3">
                    <li
                        class="list-group-item list-group-item-danger"
                        v-for="(error, index) in errors"
                        :key="error + index"
                    >
                        <div v-if="Array.isArray(error)">{{ error[0] }}</div>
                        <div v-else>{{ error }}</div>
                    </li>
                </ul>
                <form @submit="checkForm">
                    <div class="form-group">
                        <label for="title">Название</label>
                        <input type="text" class="form-control" v-model="title">
                    </div>
                    <div class="form-group">
                        <label for="cupboard">Шкаф</label>
                        <select :disabled="cupboardLoading" id="cupboard" class="form-control" v-model="cupboard_id">
                            <option :value="cupboard.id" v-for="cupboard in cupboards" :key="cupboard.id">{{ cupboard.title }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button :disabled="loading" class="btn btn-primary">Создать</button>
                    </div>
                </form>
            </card>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'CreateCell',
    data: () => ({
        title: null,
        cupboard_id: null,
        errors: [],
        loading: false
    }),
    mounted(){
        this.setCupboards()
    },
    computed: {
        ...mapGetters({
            cupboards: 'cupboards/mainCupboards',
            cupboardLoading: 'cupboards/cupboardLoading'
        })
    },
    methods: {
        ...mapActions({
            setCupboards: 'cupboards/setCupboards',
        }),
        checkForm: function (e) {
            this.errors = [];

            if (this.title && this.cupboard_id) {
                let formData = new FormData;
                formData.append('title', this.title)
                formData.append('cupboard_id', this.cupboard_id)

                this.loading = true

                axios.post('/api/create/cell', formData)
                    .then((res) => {
                        this.$toasted.show('Успешно создано!', {
                            action : {
                                text : 'Закрыть',
                                onClick : (e, toastObject) => {
                                    toastObject.goAway(0);
                                }
                            },
                        })

                        let cupboard = {}

                        this.cupboards.forEach(element => {
                            if(element.id === this.cupboard_id){
                                cupboard = element
                            }
                        });

                        this.$router.push({name:'cupboard', params: {slug: cupboard.slug}})

                        // console.log(res)
                    }).catch((res) => {
                        if(res.response.data.errors !== undefined){
                            this.errors = res.response.data.errors
                        }

                        this.$toasted.show('Что-то пошло не так...', {
                            action : {
                                text : 'Закрыть',
                                onClick : (e, toastObject) => {
                                    toastObject.goAway(0);
                                }
                            },
                        })

                        console.log(res.response)
                    }).then(() => {
                        this.loading = false
                    })

                e.preventDefault();

                return true;
            }

            if (!this.title) {
                this.errors.push('Требуется указать название.');
            }

            if (!this.cupboard_id) {
                this.errors.push('Требуется выбрать шкаф.');
            }

            e.preventDefault();
        }
    }
}
</script>