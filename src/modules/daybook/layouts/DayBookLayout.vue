<template>
    <NavBar />
    
    <div class="d-flex" v-if="!isLoading">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
    <div class="row justify-content-md-center" v-else>
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions , mapState } from 'vuex';
export default {
    
    components : {
        NavBar: defineAsyncComponent( () => import( /* webpackChunkName: "NavBar" */ '../components/NavBar.vue') ),
        EntryList: defineAsyncComponent( () => import( /* webpackChunkName: "NavBar" */ '../components/EntryList.vue') ),
    },
    methods: {
        ...mapActions('journal', ['loadingEntries'])
    },
    computed:{
        ...mapState('journal', ['isLoading'])
    },
    created(){
        this.loadingEntries();
    }
}
</script>