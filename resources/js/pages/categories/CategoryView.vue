<template>
    <p>view</p>

</template>

<script setup>
import { ref } from 'vue';
import { useCategoryStore } from "../../stores/useCategoryStore";
import { storeToRefs } from 'pinia';

const categoryStore = useCategoryStore();
// const {} = storeToRefs(categoryStore);

function submitForm() { 
    categoryStore.viewCategory()
        .then((response) => { 
            
        })
        .catch((error) => { 

        })
    
}

</script>