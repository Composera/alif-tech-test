<template>
    <div class="row">
        <div class="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link :to="{ name: 'main' }">Главная</router-link></li>
                    <li class="breadcrumb-item">Создание шкафа</li>
                </ol>
            </nav>
        </div>
        <div class="col-md-12">
            <card title="Создание шкафа">
                <ul class="list-group mb-3">
                    <li class="list-group-item list-group-item-danger" v-for="(error, index) in errors" :key="error + index">{{ error }}</li>
                </ul>
                <form @submit="checkForm">
                    <div class="form-group">
                        <label for="title">Название</label>
                        <input type="text" class="form-control" v-model="title">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Создать</button>
                    </div>
                </form>
            </card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateCupboard',
    data: () => ({
        title: null,
        errors: []
    }),
    methods: {
        checkForm: function (e) {
            if (this.title) {
                let formData = new FormData;
                formData.append('title', this.title)

                axios.post('/api/create/cupboard', formData)
                    .then((res) => {
                        console.log(res)
                    }).catch((res) => {
                        console.log(res)
                    })
                e.preventDefault();

                return true;
            }

            this.errors = [];

            if (!this.title) {
                this.errors.push('Требуется указать название.');
            }

            e.preventDefault();
        }
    }
}
</script>