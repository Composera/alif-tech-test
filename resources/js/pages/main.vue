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
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Название</h5>
                    <a href="#" class="btn btn-primary">Подробнее</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MainPage',
    mounted(){

    },
    computed: {
        ...mapGetters([
            'categories/mainCategoriesList'
        ])
    }
}
</script>