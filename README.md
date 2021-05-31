# My Minions APP

O projeto My Minions é site de reservas de bonecos em miniatura de minions, onde os clientes podem selecionar os bonecos que deseja reservas e enviar por e-mail para o resposavel pelas reservas e uma cópia é encaminhada para o cliente.

**Telas**

<table>
  <tr>
    <td>
    <img src="https://user-images.githubusercontent.com/63053569/119558343-a9a73e80-bd77-11eb-9be5-12235d25d180.png" width="500">
    </td>
    <td>
    <img src="https://user-images.githubusercontent.com/63053569/119558352-ac099880-bd77-11eb-8d52-ccdfc383818c.png" width="500">
    </td>
  </tr>
    
</table>

### :page_with_curl: Informações sobre o Projeto

Este projeto é a parte do frontend para a aplicação de reservas.

### :clipboard: Resolução

**Listagem de produtos**

Os produtos são retornados pela API, a API utiliza uma função lambda para realizar a busca no banco de dados. O App faz a requisição para api atraves da AWS Amplify, que realiza o login necessário para a consulta dos dados e retorna a listagem dos produtos.

**Reservas de Bonecos**

O sistema de reservas é realizado utilizando o Context Api, onde centralizo todas as funções e estados necessários para o controle das reservas.

Quando o usuário clica em reservar, abre no lado direito da tela uma tela onde é possivel ver os itens reservados e o formulário para o envio da reserva.

O usuário pode selecionar um boneco de cada modelo, e se mudar de ideia sobre um modelo pode remove-lo clicando na lixeira do lado do item em reservas.

**Confirmar Reservas**

Para confirmar a reserva é necessário que o usuário preencha seus dados e click em confirmar, ao fazer isso o app encaminha os dados da reserva para a função lambda de envio de email disponivel no backend.

### :hammer_and_wrench: Tecnologias/Serviços usados

- React: hooks, Context API
- CSS3
- AWS Amplify: Para conexão com a AWS API Gateway
- AWS S3: Deploy do site 

### :computer: Execução

Para você rodar o projeto localmente é necessário que realize o clone do projeto e executar o comando:

```bash
npm install
```

E para executar a aplicação de o seguinte comando:

```bash
npm start
```

Agora no navegar acesse [http://localhost:3000/](http://localhost:3000/)