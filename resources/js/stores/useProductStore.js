import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useProductStore = defineStore('product', () => {
    // Data


    //Actions
    const index = () => { 
        return new Promise((resolve, reject) => { 
            axios.get('/api/v1/products', data)
                .then((response) => {

                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }

    const createProduct = (data) => { 
        return new Promise((resolve, reject) => { 
            axios.post('/api/v1/product/create', data)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }

    const viewProduct = (id) => { 
        return new Promise((resolve, reject) => { 
            axios.get('/api/v1/product/'+id)
                .then((response) => {

                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }

    const updateProduct = (data) => { 
        return new Promise((resolve, reject) => { 
            axios.post('/api/v1/product/update', data)
                .then((response) => {

                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }

    const deleteProduct = (data) => { 
        return new Promise((resolve, reject) => { 
            axios.post('/api/v1/product/delete', data)
                .then((response) => {

                    resolve(response);
                })
                .catch((error) => {

                    reject(error);
                })
        })
    }
  
    return {index, createProduct, viewProduct, updateProduct, deleteProduct}
})