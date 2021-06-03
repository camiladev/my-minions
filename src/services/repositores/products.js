import api from '../apiConfig'

export async function getProducts(){
    try {
        const response = await api.get('/produtosDB');
        const data = response.data;

        return data;
    } catch (error) {
        console.log('Api Gateway erro: ', error)
    }
}
