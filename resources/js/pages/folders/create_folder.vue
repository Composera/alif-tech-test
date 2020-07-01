<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{ name: 'main' }">Главная</router-link></li>
                    <li class="breadcrumb-item">Создание папки</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12">
            <card title="Создание папки">
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
                        <select @change="getCupboardCells" :disabled="cupboardLoading" id="cupboard" class="form-control" v-model="cupboard_id">
                            <option :value="cupboard.id" v-for="cupboard in cupboards" :key="cupboard.id">{{ cupboard.title }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="cell">Ячейки шкафа</label>
                        <select :disabled="cellLoading" id="cell" class="form-control" v-model="cell_id">
                            <option :value="cell.id" v-for="cell in cells" :key="cell.title + cell.id">{{ cell.title }}</option>
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
    name: 'CreateFolder',
    data: () => ({
        title: null,
        cupboard_id: null,
        cell_id: null,
        errors: [],
        loading: false,
        cellLoading: true,
        cells: []
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
        async getCupboardCells(){
            this.cellLoading = true
            this.cell_id = null
            await axios.get('/api/get/cupboard/'+ this.cupboard_id +'/cells')
                .then((res) => {
                    this.cells = res.data.cells;
                    console.log(res)
                }).catch((res) => {
                    console.log(res)
                })
                .then(() => {
                    this.cellLoading = false
                })
        },
        ...mapActions({
            setCupboards: 'cupboards/setCupboards',
        }),
        checkForm: function (e) {
            this.errors = [];

            if (this.title && this.cupboard_id && this.cell_id) {
                let formData = new FormData;
                formData.append('title', this.title)
                formData.append('cupboard_id', this.cupboard_id)
                formData.append('cell_id', this.cell_id)

                this.loading = true

                axios.post('/api/create/folder', formData)
                    .then((res) => {
                        this.$toasted.show('Успешно создано!', {
                            action : {
                                text : 'Закрыть',
                                onClick : (e, toastObject) => {
                                    toastObject.goAway(0);
                                }
                            },
                        })

                        let cell = {}

                        this.cells.forEach(element => {
                            if(element.id === this.cell_id){
                                cell = element
                            }
                        });

                        this.$router.push({name:'cell_folders', params: {cell_slug: cell.slug}})

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

            if (!this.cell_id) {
                this.errors.push('Требуется выбрать ячейку шкафа.');
            }

            e.preventDefault();
        }
    }
}
</script>