import { createContext, useEffect, useState } from 'react';
import { API, Auth } from 'aws-amplify';

export const ProductsContext = createContext({});

export function ProductsProvider({ children }){
    const [isShowForm, setIsShowForm] = useState(false);
    const [listProducts, setListProducts] = useState([]);
    const [listReserv, setListReserv] = useState([]);

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
        console.log("reservas ",listReserv)
    },[listReserv])

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

    return(
        <ProductsContext.Provider value={{
            isShowForm,
            listProducts,
            listReserv,
            mostraForm,
            addItemReserv,
        }}>
            {children}

        </ProductsContext.Provider>
    )
}

