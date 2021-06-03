import { API } from 'aws-amplify';

export async function SendMail(data){
    try {
        const response = await API.post("produtosDB", "/sendMail", { body: data })
        
        console.log("enviado. ", response);
        return response;
    } catch (error) {
        console.log('Api Gateway erro: ', error)
    }

    
}