<template>
    <div class="entry-list-container">
        <div class="p-2">
            <input
                type="text"
                class="form-control"
                placeholder="Buscar entradas..."
                v-model="term"
            />
        </div>

        <div class="mt-2 d-flex flex-column">
            <button class="btn btn-primary mx-3" @click="$router.push({ name : 'entry' , params : { id : 'new' } })" >
                <i class="fa fa-plus-circle" ></i>
                Nueva entrada
            </button>
        </div>

        <div class="entry-scrollare">
            <Entry
              v-for="entry in entriesByTerm"
              :key="entry.id" 
              :entry="entry"
            />
        </div>

    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';


export default {
    data(){
        return {
            term: ''
        }
    },
    components : {
        Entry: defineAsyncComponent( () => import('../components/Entry.vue') )
    },
    computed:{
        ...mapGetters('journal', ['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm( this.term )
        }
    }
};
</script>

<style lang="scss" scoped >
.entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}

.entry-scrollare {
    height: calc(100vh - 110px);
    overflow: scroll;
}
</style>