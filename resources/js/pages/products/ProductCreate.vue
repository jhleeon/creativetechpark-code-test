<template>
    <div>
        <form @submit.prevent="submitForm()">
            <div>
                <label>Product Title: </label><input type="text" v-model="data.productName">
            </div>
            <br><br>
            <div>
                <p>Select Categories: </p>
                <select v-model="data.categories" multiple>
                    <option v-for="item, index in categories" :key="index" :value="item.id">{{ item.name }}</option>
                </select>
            </div>
            <br><br>
            <div>
                <div><label>Select Image: </label><input type="file" @change="OnFileChange"></div>
                <br>
                <div><img :src="imagePreview" style="width: 150px; height: 150px; border: 1px solid black;"></div>
            </div>
            <br><br>
            <div>
                <div v-for="item, index in data.featureForm" :key="index">
                    <label>Select Features: </label><input type="text" v-model="item.description">
                    <a href="" @click.prevent="removeFeature()" style="margin-left: 10px; color: red;">X</a>
                    <a href="" @click.prevent="addFeature(index)" style="margin-left: 10px; color: green;">Add</a>
                </div>
            </div>
            <br><br>
            <div><button type="submit">Save</button></div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useProductStore } from '../../stores/useProductStore';
import { useCategoryStore } from '../../stores/useCategoryStore';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const categoryStore = useCategoryStore();
// const {} = storeToRefs(productStore);
const {categories} = storeToRefs(categoryStore);

const imagePreview = ref(null);

const data = reactive({
    productName: '',
    categories: [],
    image: null,
    featureForm: [{ description:'' }],
})

const submitForm = () => { 
    console.log(data)
    productStore.createProduct(data)
        .then((response) => { 
            console.log(response)
        })
        .catch((error) => { 

        })
}

function OnFileChange(event) {
    data.image = event.target.files[0];
    let render = new FileReader();
    render.addEventListener('load', function() {
        imagePreview.value = render.result;
    }.bind(this), false);
    if (data.image) { 
        render.readAsDataURL(data.image);
    }
}

function addFeature() {
    data.featureForm.push({ description:'' });
}
function removeFeature(index) { 
    if (data.featureForm.length > 1) { 
        data.featureForm.splice(index, 1)
    }
}

</script>