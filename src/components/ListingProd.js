import '../styles/listingProdStyle.css'

export default function ListingProd(){

    return(
        <div className="homeContainer">
            <div className="container">
              <div className="banner">
                  <img src="./assets/minions-capa.jpg" alt=""/>
              </div>
            
                <div className="listItens">
                  <h1>Escolha seu minion</h1>

                    <div className="gridItens">
                    
                      <div className="card">
                        <img src="./assets/mini-stuart.jpg" alt=""/>
                        <div>
                          <h2>Stuart</h2>
                          <p>Mini Figura de Ação - Minions 2 - Stuart - Mattel</p>
                            <button
                              type='button'
                              name='reserva'
                              className='button'
                              >
                              Reservar
                            </button>
                        </div>
                    </div>

                      
                      

                </div>
            </div>


            </div>

        </div>
    )
}