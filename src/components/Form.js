import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import { FaTrash, FaWindowMinimize, FaWindowRestore } from 'react-icons/fa'
import '../styles/formStyle.css'

export default function Form(){
    const { reservs, 
            sendMailReserv, 
            miniForm, 
            isMiniForm,
            removeItemReserv,
            dadosForm,
            handleOnChangeDados } = useContext(ProductsContext);
    
    let heightForm = "";

    if(isMiniForm){
        heightForm = "800"
    }else{
        heightForm = "65"
    }


    return(
        <div className="formWrapper">
            <div className="formContainer" style={{ height: `${heightForm}px` }}>
                <div className="window">
                    <h2>Sua Reserva</h2>

                    <span>
                        <div onClick={miniForm}>
                            <FaWindowMinimize />
                        </div>
                        <div onClick={miniForm}>
                            <FaWindowRestore />
                        </div>
                    </span>
                </div>
                { isMiniForm ?
                    <>                  
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
                                    { reservs?.map( item => {
                                        return(
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.qtd}</td>
                                                <td>
                                                    <div className="remove" onClick={() => removeItemReserv(item)}>
                                                        <FaTrash />
                                                    </div>
                                                </td>
                                            </tr>

                                        )
                                    }) }
                                    
                                </tbody>
                            </table>
                        </div>

                        <div className="form">
                            <form onSubmit={sendMailReserv}>
                                <span>
                                    <label htmlFor="">Nome:</label>
                                    <input 
                                        type="text"
                                        name="nome"
                                        value={dadosForm.nome}
                                        onChange={handleOnChangeDados}
                                        required
                                    />
                                    
                                </span>
                                <span>
                                    <label htmlFor="">E-mail:</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        value={dadosForm.email}
                                        onChange={handleOnChangeDados}
                                        required
                                    />
                                </span>
                                <button type='submit'>Confirmar</button>
                            </form>
                        </div>

                </>
                :
                    <></>
                }
            </div>
        </div>

    )
}