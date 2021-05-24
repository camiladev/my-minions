import { createContext, useEffect, useState } from 'react';
import { API, Auth } from 'aws-amplify';

export const ProductsContext = createContext({});

export function ProductsProvider({ children }){
    const [isShowForm, setIsShowForm] = useState(false);
    const [listProducts, setListProducts] = useState([]);

    useEffect(()=>{
        async function onLoad(){
            try {
                await Auth.signIn("admin@example.com","Passw0rd!")
                const prod = await loadProducts();
                console.log("Produtos: ", prod);
                setListProducts(prod);
            } catch (error) {
                console.log("erro: ", error)
                alert("erro ao carregar lista de produtos")
            }
        }
        onLoad();
    },[]);

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

    return(
        <ProductsContext.Provider value={{
            isShowForm,
            listProducts,
            mostraForm,
        }}>
            {children}

        </ProductsContext.Provider>
    )
}

