<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>

<script>
export default {
    name: 'App',
    computed: {
        layout(){
            let layout = 'default-layout'

            if(this.$route.meta.layout !== undefined){
                layout = this.$route.meta.layout + '-layout'
            }

            return layout
        }
    }
}
</script>