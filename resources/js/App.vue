<template>
    <component :is="layout">
        <vue-progress-bar></vue-progress-bar>
        <router-view v-if="!isLoading"></router-view>
        <div class="row">
            <div class="col-md-12">
                <div class="vld-parent">
                    <loading :active.sync="isLoading" 
                    :can-cancel="false" 
                    :is-full-page="fullPage"></loading>
                </div>
            </div>
        </div>
    </component>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

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
    },
    data: () => ({
        isLoading: false,
        fullPage: false
    }),
    components: {
        Loading
    },
    mounted () {
        //  [App.vue specific] When App.vue is finish loading finish the progress bar
        this.$Progress.finish()
    },
    created () {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start()
        //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
            this.isLoading = true
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                // parse meta tags
                this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            next()
        })
        //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
            this.isLoading = false
            //  finish the progress bar
            this.$Progress.finish()
        })
    }
}
</script>

<style>
    .vld-parent{
        height: 100px;
    }
    .vld-background{
        background-color: transparent !important;
    }
</style>