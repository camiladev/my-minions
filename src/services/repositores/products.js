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

export async function sendMail(data){
    try {
        const response = await api.post('/dev/sendMail', {
            body: data
        })

        console.log('response envio de email> ', response)
        return response
    } catch (error) {
        console.log('Erro ao enviar e-mail: ', error)
    }
}