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
                        <button :disabled="loading" class="btn btn-primary">Создать</button>
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
        errors: [],
        loading: false
    }),
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (this.title) {
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

            e.preventDefault();
        }
    }
}
</script>