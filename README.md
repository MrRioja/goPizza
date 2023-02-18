<p align="center">
  <img src="./src/assets/brand.png" alt="Logo" width="300"/>
  <br>
</p>
<h3 align="center">
  GoPizza, pizzas como você nunca viu!
</h3>

<br><br>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=GO&message=PIZZA&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/goPizza?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/goPizza?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/goPizza?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#goPizza">goPizza</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

<br><br>

## Sobre

O GoPizza é uma aplicação voltada para pizzarias que foi desenvolvida durante o bootCamp Ignite da RocketSeat na trilha de React Native. A ideia foi, além de fixar os conceitos básicos do React Native, integrar nosso app com os serviços do Firebase.

## goPizza

O GoPizza é uma aplicação criada em React Native cujo objetivo é servir como plataforma de atendimento para pizzarias. A aplicação possui dois tipos de usuários, cada qual com suas funcionalidades distintas dentro do app, as quais veremos mais abaixo.

Para logar na aplicação, os usuários, independentemente do tipo, devem informar seu e-mail e senha de acesso para se autenticarem na aplicação, conforme tela abaixo:

<img src="./readme/login-screen.png" width="250px" />

Caso o usuário tenha esquecido a senha, basta digitar seu e-mail e clicar no link de **Esqueci minha senha** para que um e-mail seja enviado para que ele reset sua senha.

Vamos agora detalhar as telas e funcionalidades dos nossos dois tipos de usuários:

### Usuário administrador

O usuário com perfil de administrador terá como responsabilidade cadastrar e remover pizzas conforme a disponibilidade dos sabores na pizzaria em que trabalha.

Ao logar na aplicação ele irá se deparar com a home, onde serão listadas as pizzas já disponíveis para os clientes, além disso terá a opção de buscar um sabor especifico ou ainda cadastrar um novo sabor no botão que está na parte inferior da tela, conforme imagem abaixo:

<img src="./readme/home-admin.png" width="250px" />

Ao clicar em uma das pizzas da lista será possível ver o cadastro completo dela ou realizar sua exclusão clicando no botão localizado no canto superior direito:

<img src="./readme/details-admin.png" width="250px" />

Caso o administrador desejar poderá realizar o cadastro de um novo sabor. Após clicar no botão de cadastro disponível na home, ele será direcionado para o formulário abaixo para preencher os dados da pizza:

<img src="./readme/add-pizza-admin.png" width="250px" />

E pronto, após informar os dados da nova pizza, ela já será disponibilizada para os clientes, fechando assim a lista de todas as ações possíveis para esse tipo de usuário.

Abaixo uma demonstração do aplicativo em funcionamento aonde é ilustrado a exclusão e cadastro de uma pizza:

<img src="./readme/demo-admin-app.gif" width="350px" alt="Demonstração do app - Admin" />

### Usuário atendente

O usuário com perfil de atendente terá como responsabilidade cadastrar os pedidos das mesas das pizzarias, informando para a sua equipe quais os sabores, tamanhos e quantidades cada cliente está solicitando.

Ao logar na aplicação ele irá se deparar com a home, onde serão listados os sabores de pizzas disponíveis para pedidos na aba **Cardápio**, conforme exemplificado abaixo:

<img src="./readme/home-user.png" width="250px" />

Após o cliente escolher o sabor desejado, o atendente irá clicar sobre ele e a tela abaixo será exibida para que ele preencha qual será o tamanho, a quantidade e qual é o número da mesa do cliente:

<img src="./readme/order-user.png" width="250px" />

Com os pedidos registrados, o atendente responsável será notificado assim que algum de seus pedidos ficar pronto. Assim que estiver pronto, basta ele clicar no pedido e confirmar quando ele for entregue. Cada etapa desse fluxo está representada nas seguintes telas respectivamente:

|                       Pedido pronto                        |                     Confirmação de entrega                     |                     Pedido entregue                     |
| :--------------------------------------------------------: | :------------------------------------------------------------: | :-----------------------------------------------------: |
| <img src="./readme/order-finish-user.png" width="200px" /> | <img src="./readme/delivery-confirm-user.png" width="200px" /> | <img src="./readme/delivered-user.png" width="200px" /> |

Abaixo uma demonstração do aplicativo em funcionamento aonde é ilustrado todas as etapas do pedido, da solicitação à entrega:

<img src="./readme/demo-user-app.gif" width="350px" alt="Demonstração do app - User" />

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 📱 Rodando o App

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/goPizza.git

# Acesse a pasta do projeto no terminal/cmd
$ cd goPizza

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ yarn start

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=react,firebase,ts)](https://skillicons.dev)

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
