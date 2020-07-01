<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{ name: 'main' }">Главная</router-link></li>
                    <li class="breadcrumb-item">Загрузка файла</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12">
            <card title="Загрузка файла">
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
                        <label for="title">Файл</label>
                        <input type="file" class="form-control" @change="changeFile">
                    </div>
                    <div class="form-group">
                        <label for="cupboard">Шкаф</label>
                        <select @change="getCupboardCells" :disabled="cupboardLoading" id="cupboard" class="form-control" v-model="cupboard_id">
                            <option :value="cupboard.id" v-for="cupboard in cupboards" :key="cupboard.id">{{ cupboard.title }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="cell">Ячейки шкафа</label>
                        <select @change="getCellFolders" :disabled="cellLoading" id="cell" class="form-control" v-model="cell_id">
                            <option :value="cell.id" v-for="cell in cells" :key="cell.title + cell.id">{{ cell.title }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="cell">Папки ячейки</label>
                        <select :disabled="folderLoading" id="folder" class="form-control" v-model="folder_id">
                            <option :value="folder.id" v-for="folder in folders" :key="folder.title + folder.id">{{ folder.title }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button :disabled="loading" class="btn btn-primary">Загрузить</button>
                    </div>
                </form>
            </card>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'UploadFile',
    data: () => ({
        title: null,
        errors: [],
        file: null,
        cell_id: null,
        folder_id: null,
        cupboard_id: null,
        loading: false,
        folders: [],
        cells: [],
        cellLoading: true,
        folderLoading: true
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
        checkForm: function (e) {
            this.errors = [];

            if (this.file && this.folder_id) {
                let formData = new FormData;
                formData.append('title', this.title)

                this.loading = true

                axios.post('/api/create/cupboard', formData)
                    .then((res) => {
                        this.$toasted.show('Успешно создано!', {
                            action : {
                                text : 'Закрыть',
                                onClick : (e, toastObject) => {
                                    toastObject.goAway(0);
                                }
                            },
                        })

                        this.$router.push({name:'main'})

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

            if (!this.file) {
                this.errors.push('Требуется выбрать файл.');
            }

            if (!this.folder_id) {
                this.errors.push('Требуется выбрать папку.');
            }

            e.preventDefault();
        },
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
        async getCellFolders(){
            this.folderLoading = true
            this.folder_id = null

            let cell = {}
            this.cells.forEach(element => {
                if(element.id === this.cell_id){
                    cell = element
                }
            })

            await axios.get('/api/get/cell/'+ cell.slug +'/folders')
                .then((res) => {
                    this.folders = res.data.cell.folders;
                    console.log(res)
                }).catch((res) => {
                    console.log(res.response)
                })
                .then(() => {
                    this.folderLoading = false
                })
        },
        ...mapActions({
            setCupboards: 'cupboards/setCupboards',
        }),
        changeFile(e)
        {
            this.file = e.target.files[0];
        }
    }
}
</script>