<template>
    <div><RouterLink to="/category/create">ADD</RouterLink></div>
    <br>
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            <template v-if="categories !==null">
                <tr v-for="item, index in categories" :key="item.index">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>
                        <a  href="">View</a>
                        <a href="">Edit</a>
                        <RouterLink to="#" @click.prevent="deleteClick(item.id)">Delete</RouterLink>
                    </td>
                </tr>
            </template>
            <template v-else>Loading...</template>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCategoryStore } from "../../stores/useCategoryStore";
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const categoryStore = useCategoryStore();
const {categories} = storeToRefs(categoryStore);

const categoreis = ref(null);

onMounted(() => { 
    load();
})

function load() {
    categoryStore.index()
        .then((response) => {
    })
    .catch((error) => { 

    })
 }

function deleteClick(id) {
    categoryStore.deleteCategory({'id':id})
        .then((response) => {
            console.log(response.data.message); // json response
            load();
        })
        .catch((error) => {
            console.log(error.response.data.errors.id); // input error
            console.log(error.response.data.message); // validation error
        })
}


</script>

<style scope>
table { 
    width: 100%;
}
table, th, td {
    border: 1px solid black;
}
a {
    padding: 5px;
}
</style>