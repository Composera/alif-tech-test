<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{name:'main'}">Главная</router-link></li>
                    <li class="breadcrumb-item" v-if="cell.parent.title !== undefined">
                        <router-link :to="{ name: 'cupboard', params: {slug: cell.parent.slug} }">
                            {{ cell.parent.title }}
                        </router-link>
                    </li>
                    <li class="breadcrumb-item" v-if="cell.title !== undefined">{{ cell.title }}</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12 d-flex justify-content-between">
            <h1>Папки ячейки</h1>
        </div>
        <template v-if="cell.folders !== undefined">
            <div class="col-md-4 mb-3" v-for="(folder, index) in cell.folders" :key="folder.title+index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ folder.title }}</h5>
                        <router-link :to="{name: 'folder_files', params: {folder_slug: folder.slug}}" class="btn btn-primary">Подробнее</router-link>
                        <button @click="deleteFolder(folder.id)" class="btn btn-danger">Удалить</button>
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
        this.getCellFolders(this.$route.params.cell_slug)
    },
    computed: {
        ...mapGetters({
            cell: 'cupboards/getCell',
            cupboardLoading: 'cupboards/cupboardLoading'
        })
    },
    methods: {
        ...mapActions({
            getCellFolders: 'cupboards/getCellFolders',
            deleteFolder: 'cupboards/deleteFolder'
        })
    }
}
</script>