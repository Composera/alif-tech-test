<template>
    <div class="container">
        <div class="row mt-3 mb-3">
            <div class="col-md-12 col-lg-6">
                <div class="d-md-flex d-lg-flex">
                    <div class="form-group mr-1">
                        <router-link :to="{ name: 'create_cupboard' }" class="btn btn-primary">Поставить шкаф</router-link>
                    </div>
                    <div class="form-group mr-1">
                        <router-link :to="{ name: 'create_cell' }" class="btn btn-primary">Создать ячейку</router-link>
                    </div>
                    <div class="form-group mr-1">
                        <router-link :to="{ name: 'create_folder' }" class="btn btn-primary">Создать папку</router-link>
                    </div>
                    <div class="form-group mr-1">
                        <router-link :to="{ name: 'upload_file' }" class="btn btn-primary">Добавить файл</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6">
                <form @submit="checkForm">
                    <div class="form-group row">
                        <div class="col-md-10">
                            <input 
                                type="text" 
                                name="search" 
                                v-model="text"
                                id="search" 
                                class="form-control" 
                                placeholder="Поиск по папкам и файлам"
                                autocomplete="off"
                            >
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-primary">Поиск</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        text: ''
    }),
    methods: {
        checkForm(e){
            if(this.text !== ''){
                this.$router.push({name: 'search', params: {text: this.text}})
            }
            e.preventDefault()
        }
    }
}
</script>