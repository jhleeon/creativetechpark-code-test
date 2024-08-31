<template>
    <p>view</p>

</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '../../stores/useProductStore';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
// const {} = storeToRefs(productStore);
const productName = ref('');

function submitForm() { 
    productStore.viewProduct()
        .then((response) => {
            
        })
        .catch((error) => { 

        })
}
</script>