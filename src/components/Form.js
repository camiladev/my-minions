import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import '../styles/formStyle.css'

export default function Form(){
    const { listReserv } = useContext(ProductsContext);
    const reserv = [];

    for( const item in listReserv){
        reserv.push(listReserv[item])
    }

    return(
        <div className="formWrapper">
            <div className="formContainer">
                <h2>Sua Reserva</h2>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { reserv?.map( item => {
                                return(
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.qtd}</td>
                                        <td>X</td>
                                    </tr>

                                )
                            }) }
                            
                        </tbody>
                    </table>
                </div>

                <div className="form">
                    <form action="">
                        <span>
                            <label htmlFor="">Nome:</label>
                            <input type="text"
                                required
                            />
                            
                        </span>
                        <span>
                            <label htmlFor="">E-mail:</label>
                            <input type="email"
                                required
                            />
                        </span>
                        <button type='submit'>Confirmar</button>
                    </form>
                </div>
            </div>
        </div>

    )
}