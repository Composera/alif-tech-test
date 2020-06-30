<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{name:'main'}">Главная</router-link></li>
                    <li class="breadcrumb-item">Шкаф</li>
                    <li class="breadcrumb-item"></li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12 d-flex justify-content-between">
            <h1>Ячейки шкафа</h1>
            <button class="btn">Обновить</button>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <router-link :to="{name: 'main'}" class="btn btn-primary">Подробнее</router-link>
                    <button class="btn btn-danger">Удалить</button>
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
    },
    computed: {
    },
    methods: {
    }
}
</script>