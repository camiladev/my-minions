import '../styles/formStyle.css'

export default function Form(){

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
                            <tr>
                                <td>Stuart</td>
                                <td>1</td>
                                <td>X</td>
                            </tr>
                            <tr>
                                <td>Stuart</td>
                                <td>1</td>
                                <td>X</td>
                            </tr>
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