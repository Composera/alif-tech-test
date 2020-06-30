<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Главная</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12 d-flex justify-content-between">
            <h1>Шкафы</h1>
            <button :disabled="cupboardLoading" @click="setCupboards" class="btn">Обновить</button>
        </div>
        <div class="col-md-4 mb-3" v-for="(cupboard, index) in cupboards" :key="cupboard.title + index">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ cupboard.title }}</h5>
                    <router-link :to="{name: 'cupboard', params: {slug: cupboard.slug}}" class="btn btn-primary">Подробнее</router-link>
                    <button :disabled="cupboardLoading" @click="deleteCupboard(cupboard.id)" class="btn btn-danger">Удалить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MainPage',
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
            deleteCupboard: 'cupboards/deleteCupboard'
        })
    }
}
</script>