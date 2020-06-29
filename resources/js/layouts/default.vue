<template>
    <div class="container">
        <div class="row mt-3 mb-3">
            <div class="col-md-6">
                <div class="d-md-flex d-lg-flex d-sm-none">
                    <div class="form-group mr-1">
                        <router-link :to="{ name: 'create_cupboard' }" class="btn btn-primary">Поставить шкаф</router-link>
                    </div>
                    <div class="form-group mr-1">
                        <button class="btn btn-primary">Создать ячейку</button>
                    </div>
                    <div class="form-group mr-1">
                        <button class="btn btn-primary">Создать папку</button>
                    </div>
                    <div class="form-group mr-1">
                        <button class="btn btn-primary">Добавить файл</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group row">
                    <div class="col-md-10">
                        <input 
                            type="text" 
                            name="search" 
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
            </div>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>