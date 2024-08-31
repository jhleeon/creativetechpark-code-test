<template>

    <div>Table</div>
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>

            <tr>
                <td>1</td>
                <td>Phone</td>
                <td>
                    <a href="">View</a>
                    <a href="">Edit</a>
                    <a href="">Delete</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '../../stores/useProductStore';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
// const {} = storeToRefs(productStore);
const productName = ref('');

function submitForm() { 
    productStore.index()
        .then((response) => { 
            
        })
        .catch((error) => { 

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
</style>