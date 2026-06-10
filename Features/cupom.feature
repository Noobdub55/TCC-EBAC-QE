Feature: API de cupons

    Funcionalidade:
    Como admin da EBAC-SHOP;
    Quero criar um serviço de cupom;
    Para listar e cadastrar os cupons

    Regras de negócio:
    GET: 
    Deve listar todos os cupons cadastrados ou listar buscando por ID do cupom

    POST: 
    Deve cadastrar os cupons com os campos obrigatorios abaixo:
    -Codigo do cupom: Exemplo: "Ganhe10"
    -Valor: "10.00"
    -Tipo de desconto: "Fixed_product"
    -Descrição: "Cupom de teste"

    Nome do cupom não pode ser repitido;
    Os outros campos são opcionais.

    Scenario: Lista todos os cupons cadastrados com metodo GET 

    Dado que o Admin está autenticado na API de cupons
    Quando realizar uma requisição GET para trazer todos os cupons cadastrados
    Então A API retornar a lista de cupons cadastrados

    Scenario: Lista cupom por ID com metodo GET 

    Dado que o Admin está autenticado na API de cupons
    Quando realizar uma requisição GET com ID de um cupom
    Então a API retorna o cupom com a ID solicitada

    Scenario: Cadastro de novo cupom com metodo POST

    Dado que o Admin está autenticado na API de cupons 
    Quando realizar cadastrado de cupom com metodo POST
    E preencher todos os campos solicitados
    Então o cupom é cadastrado com sucesso 

    Scenario: Cadastro de novo cupom com nome já existente 

    Dado que o Admin está autenticado na API de cupons 
    Quando realizar cadastro de cupom com nome já existente
    Então o cupom não é cadastrado 

    Scenario: Cadastro de cupom com campos em branco

    Dado que o Admin está autenticado na API de cupons 
    Quando realizar cadastrado com metodo POST 
    E preecher somente parte dos campos obrigatorios
    Então o cupom não é cadastrado 