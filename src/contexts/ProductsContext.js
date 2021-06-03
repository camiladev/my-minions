import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../services/repositores/products';
import { SendMail } from '../services/repositores/sendMail';

export const ProductsContext = createContext({});

export function ProductsProvider({ children }){
    const [isShowForm, setIsShowForm] = useState(false);
    const [isMiniForm, setIsMiniForm] = useState(true);
    const [listProducts, setListProducts] = useState([]);
    const [listReserv, setListReserv] = useState([]);
    const [reservs, setReservs] = useState([]);
    const [dadosForm, setDadosForm] = useState([]);

    useEffect(()=>{
        async function onLoad(){
            try {
                const prod = await getProducts();
                setListProducts(prod);
            } catch (error) {
                console.log("erro: ", error)
                alert("erro ao carregar lista de produtos")
            }
        }
        onLoad();
    },[]);

    useEffect(()=>{
        let list = [];

        for(const item in listReserv){
            list.push(listReserv[item])
        }

        setReservs(list)

    },[listReserv])

    function atualizaReservas(newList){
        setReservs(newList);
        setIsMiniForm(!isMiniForm);
    }

    function loadProducts(){
        return getProducts();
    }

    function mostraForm(){
        if(isShowForm){
            return;
        }else{
            setIsShowForm(!isShowForm);
        }
    }

    function miniForm(){
        if(isMiniForm){
            setIsMiniForm(!isMiniForm);
        }else{
            setIsMiniForm(!isMiniForm);
        }
    }

    function addItemReserv(item){
       
        const dados = {
            id: item.itemID,
            name: item.name,
            qtd: 1,
        }
        
        setListReserv({
            ...listReserv,
            [item.itemID]: dados,
        })
    }

    function removeItemReserv(item){
        let list = reservs
    
        const index = list.indexOf(item)
        const removed = list.splice(index,1)
        
        atualizaReservas(list);
        alert("Item removido!");
    }

    function handleOnChangeDados(event){
        setDadosForm({
            ...dadosForm,
            [event.target.name]: event.target.value,
        })
    }

    async function sendMailReserv(event){
        event.preventDefault();
        const email = dadosForm.email.toLowerCase();
        const cliente = JSON.stringify(dadosForm.nome)
        const res = JSON.stringify(reservs)
        const texto = `O cliente ${cliente} solicitou reservar os seguintes bonecos:
        ${res}`

        try {
            const data = {
                text: texto,
                emailTo: email,   
            }
            
            const result = await SendMail(data)
            //API.post("produtosDB", "/sendMail", { body: conteudo })

            setListReserv([]);
            setReservs([]);
            setDadosForm([]);
            setIsShowForm(false);

            alert("Sua lista de reservas foi encaminhada com sucesso!")
            
        } catch (error) {
            console.log('sendMail-error: ', error)
        }
    }

    return(
        <ProductsContext.Provider value={{
            isShowForm,
            isMiniForm,
            listProducts,
            reservs,
            dadosForm,
            mostraForm,
            miniForm,
            addItemReserv,
            sendMailReserv,
            removeItemReserv,
            handleOnChangeDados,
        }}>
            {children}

        </ProductsContext.Provider>
    )
}

