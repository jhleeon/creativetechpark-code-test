<template>
<p>Edit page</p>

</template>

<script setup>
import { ref } from 'vue';
import { useCategoryStore } from "../../stores/useCategoryStore";
import { storeToRefs } from 'pinia';

const categoryStore = useCategoryStore();
// const {} = storeToRefs(categoryStore);

function submitForm() { 
    categoryStore.updateCategory({'name': categoryName.value})
        .then((response) => { 
            
        })
        .catch((error) => { 

        })
    
}
</script>
