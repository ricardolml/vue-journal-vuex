<template>
    <NavBar />

    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    
    components : {
        NavBar: defineAsyncComponent( () => import( /* webpackChunkName: "NavBar" */ '../components/NavBar.vue') ),
        EntryList: defineAsyncComponent( () => import( /* webpackChunkName: "NavBar" */ '../components/EntryList.vue') ),
    }
}
</script>