import { createContext, useState } from 'react';

export const ProductsContext = createContext({});

export function ProductsProvider({ children }){
    const [isShowForm, setIsShowForm] = useState(false);

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
            mostraForm,
        }}>
            {children}

        </ProductsContext.Provider>
    )
}

