<template>
    <div><RouterLink to="/categories">Go Back</RouterLink></div>
    <br>
    <form @submit.prevent="submitForm()">
        <label>Category Name: </label><input type="text" v-model="categoryName">
        <div><button type="submit">Save</button></div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useCategoryStore } from "../../stores/useCategoryStore";
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const categoryStore = useCategoryStore();
// const {} = storeToRefs(categoryStore);
const categoryName = ref('');

function submitForm() { 
    categoryStore.createCategory({'name': categoryName.value})
        .then((response) => {
            console.log(response.data.message);
        })
        .catch((error) => { 
            
        })
    
}

</script>