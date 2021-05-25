import { createContext, useEffect, useState } from 'react';
import { API, Auth } from 'aws-amplify';

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
                await Auth.signIn("admin@example.com","Passw0rd!")
                const prod = await loadProducts();
                console.log("Prod ",prod)
                setListProducts(prod);
            } catch (error) {
                console.log("erro: ", error)
                alert("erro ao carregar lista de produtos")
            }
        }
        onLoad();
    },[]);

    useEffect(()=>{
        console.log("reservas - reservs ",reservs)        

    },[reservs])

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
        return API.get("produtosDB", "/produtosDB");
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
        
        console.log("reservas atualizado",reservs);
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
        console.log('enviando email para: ', email)

        try {
            // const conteudo = {
            //     text: 'Teste de envio de email...',
            //     emailTo: email,
            //     emailCC: 'camila.mila148@gmail.com',   
            // }
            
            // const result = await API.post("produtosDB", "/sendMail", { body: conteudo })
            // console.log('sendMail: ', result)

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

