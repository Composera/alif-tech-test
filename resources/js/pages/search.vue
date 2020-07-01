<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{ name: 'main' }">Главная</router-link></li>
                    <li class="breadcrumb-item">Поиск</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12 d-flex justify-content-between">
            <h1>Поиск:</h1>
        </div>
        <template v-for="(item, name, index) in search">
            <div class="col-md-12" :key="name + index">
                <h1 v-if="name === 'cupboards'">Шкафы</h1>
                <h1 v-if="name === 'files'">Файлы</h1>
                <h1 v-if="name === 'cells'">Ячейки</h1>
                <h1 v-if="name === 'folders'">Папки</h1>
            </div>
            <div class="col-md-4 mb-3" v-for="(searched_item) in item" :key="searched_item.title + index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ searched_item.title }}</h5>
                        <router-link v-if="name === 'cupboards'" :to="{name: 'cupboard', params: {slug: searched_item.searchable.slug ? searched_item.searchable.slug : 'test'}}" class="btn btn-primary">Подробнее</router-link>
                        <router-link v-if="name === 'files'" :to="{name: 'folder_files', params: {
                            folder_slug: searched_item.searchable.parent.slug ? searched_item.searchable.parent.slug : 'test'
                            }
                        }" class="btn btn-primary">Подробнее</router-link>
                        <router-link v-if="name === 'cells'" :to="{name: 'cell_folders', params: {
                                cell_slug: searched_item.searchable.slug ? searched_item.searchable.slug : 'test'
                            }
                        }" class="btn btn-primary">Подробнее</router-link>
                        <router-link v-if="name === 'folders'" :to="{name: 'folder_files', params: {
                                folder_slug: searched_item.searchable.slug ? searched_item.searchable.slug : 'test'
                            }
                        }" class="btn btn-primary">Подробнее</router-link>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="search.length === 0">
            <div class="col-md-12">
                <h1>Пусто</h1>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MainPage',
    mounted(){
        if(this.$route.params.text !== undefined)
            this.searchText(this.$route.params.text)
    },
    data: () => ({
    }),
    computed: {
        ...mapGetters({
            search: 'search/getSearch'
        })
    },
    methods: {
        ...mapActions({
            searchText: 'search/searchText'
        })
    }
}
</script>