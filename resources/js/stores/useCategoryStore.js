import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useCategoryStore = defineStore('category', () => {
    // Data
    const categories = ref(null)

     //Actions
     const index = () => { 
        return new Promise((resolve, reject) => { 
            axios.get('/api/v1/categories')
                .then((response) => {
                    categories.value = response.data.data;
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    const createCategory = (data) => { 
        return new Promise((resolve, reject) => { 
            axios.post('/api/v1/category/create', data)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }

    const viewCategory = (id) => { 
        return new Promise((resolve, reject) => { 
            axios.get('/api/v1/category/'+id)
                .then((response) => {

                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }

    const updateCategory = (data) => { 
        return new Promise((resolve, reject) => { 
            axios.post('/api/v1/category/update', data)
                .then((response) => {

                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }

    const deleteCategory = (id) => {
        return new Promise((resolve, reject) => { 
            axios.post('/api/v1/category/delete', id)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }
  
    return {categories, index, createCategory, viewCategory, updateCategory, deleteCategory}
})