<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{name:'main'}">Главная</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name:'cupboard', params: {slug: folder.parent.parent.slug}}">{{ folder.parent.parent.title }}</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="{name:'cell_folders', params: {cell_slug: folder.parent.slug}}">{{ folder.parent.title }}</router-link></li>
                    <li class="breadcrumb-item">{{ folder.title }}</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12 d-flex justify-content-between">
            <h1>Файлы папки</h1>
        </div>
        <template v-if="folder.title !== undefined">
            <div class="col-md-4 mb-3" v-for="(file, index) in folder.files" :key="file.title+index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ file.filename }}</h5>
                        <a download="" target="_blank" :href="'/storage/uploads/file_images/' + file.file_server_name" class="btn btn-primary">Скачать</a>
                        <button @click="deleteFile(file.id)" class="btn btn-danger">Удалить</button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MainPage',
    mounted(){
        this.getFolder(this.$route.params.folder_slug)
    },
    data: () => ({
        folder: {}
    }),
    methods: {
        async getFolder(slug){
            await axios.get('/api/get/folder/' + slug + '/files')
            .then((res) => {
                this.folder = res.data.folder
                console.log(res)
            }).catch((res) => {

                console.log(res)
            }).then(() => {

            })
        },
        async deleteFile(id){
            if(confirm('Вы уверены?')){
                await axios.get('/api/delete/' + id + '/file')
                .then((res) => {
                    this.$toasted.show('Успешно удалено!', {
                        action : {
                            text : 'Закрыть',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                    });
                    console.log(res)
                }).catch((res) => {
                    this.$toasted.show('Что-то пошло не так...', {
                        action : {
                            text : 'Закрыть',
                            onClick : (e, toastObject) => {
                                toastObject.goAway(0);
                            }
                        },
                    });
                    console.log(res)
                }).then(() => {
                    this.getFolder(this.$route.params.folder_slug)
                })
            }
        }
    }
}
</script>