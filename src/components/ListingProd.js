import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import '../styles/listingProdStyle.css'

export default function ListingProd(){
    const { mostraForm, listProducts } = useContext(ProductsContext);

    return(
        <div className="homeContainer">
            <div className="container">
              <div className="banner">
                  <img src="./assets/minions-capa.jpg" alt=""/>
              </div>
            
                <div className="listItens">
                  <h1>Escolha seu minion</h1>

                    <div className="gridItens">
                      {listProducts?.length == 0 && (<div>Carregando...</div>)}
                      {listProducts?.map( item => {
                        return(
                          <div className="card" key={item.itemID}>
                            <img src={item.url} alt={item.name}/>
                            <div>
                              <h2>{item.name}</h2>
                              <p>{item.description}</p>
                                <button
                                  type='button'
                                  name='reserva'
                                  className='button'
                                  onClick={mostraForm}
                                  >
                                  Reservar
                                </button>
                            </div>
                          </div>

                        )
                      })}

                      
                      

                    </div>
                </div>


            </div>

        </div>
    )
}