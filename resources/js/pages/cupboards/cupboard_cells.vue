<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{name:'main'}">Главная</router-link></li>
                    <li class="breadcrumb-item" v-if="cupboard.title !== undefined">{{ cupboard.title }}</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12 d-flex justify-content-between">
            <h1>Ячейки шкафа</h1>
        </div>
        <template v-if="cupboard.title !== undefined">
            <div class="col-md-4 mb-3" v-for="(cell, index) in cupboard.cells" :key="cell.title+index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ cell.title }}</h5>
                        <router-link :to="{name: 'cell_folders', params: { slug: $route.params.slug, cell_slug: cell.slug }}" class="btn btn-primary">Подробнее</router-link>
                        <button @click="deleteCell(cell.id, $route.params.slug)" class="btn btn-danger">Удалить</button>
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
        this.getCupboardCells(this.$route.params.slug)
    },
    computed: {
        ...mapGetters({
            cupboard: 'cupboards/getCupboard',
            cupboardLoading: 'cupboards/cupboardLoading'
        })
    },
    methods: {
        ...mapActions({
            getCupboardCells: 'cupboards/getCupboardCells',
            deleteCell: 'cupboards/deleteCupboardCell'
        })
    }
}
</script>