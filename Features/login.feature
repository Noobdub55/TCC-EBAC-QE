Feature: Login na plataforma

Funcionalidade:
Como cliente da EBAC-SHOP
Quero fazer login (autenticação) na plataforma
Para visualizar meus pedidos

Regras de negocio: 
Somente usuários ativos podem fazer login;
Deve exibir uma mensagem de erro caso o usuário erre o login e senha;
Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login

Scenario: Login com e-mail invalido 

Dado que o usuário está na pagina de login 
Quando tenta realizar o acesso com e-mail invalido e senha valida 
Então deve ser exibida mensagem de e-mail/senha incorreta

Scenario: Login com senha invalida 

Dado que o usuário está na pagina de login 
Quando tenta realizar acesso com senha invalida e e-mail valido
Então deve ser exibida mensagem de email/senha incorreta 

Scenario: Trava login por 15 minutos após 3 erros 

Dado que o usuário tentou efetuar login com a senha incorreta 
Quando informar a senha incorreta pela terceira vez 
Então o acesso deve ser bloqueado por 15 minutos 

Scenario: Login com usuario ativo

Dado que o usuário está na pagina de login 
Quando tenta efetuar login com credenciais validas de uma conta ativa 
Então deve efetuar login com sucesso e ter acesso a conta 

Scenario: Login com usuario inativo 

Dado que o usuário está na pagina de login 
Quando tenta efetuar login com credenciais validas de uma conta inativa
Então o login deve ser negado por inatividade 
