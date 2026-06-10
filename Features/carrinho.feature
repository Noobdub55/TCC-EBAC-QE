Feature: Adicionar item ao carrinho

Funcionalidade:
Como cliente da EBAC-SHOP
Quero adicionar produtos ao carrinho
Para realizar a compra dos itens

Regras de negócio:
Não é permitido inserir mais de 10 itens 
de um mesmo produto ao carrinho;
Os valores não podem ultrapassar a R$990,00;
Valores entre R$200 e R$600, ganham cupom de 10%;
Valores a cima de R$600 ganham cupom de 15%

Scenario: Adiciona 10 itens iguais ao carrinho

Dado que o usuario está visualizando um produto
Quando adicionar 10 unidades ao carrinho
E confirmar a inclusão
Então o produto deve ser adicionado ao carrinho com sucesso 

Scenario: Aplica cupom de 15% em valores acima de R$990

Dado que o usuario está visualizando um produto no valor de R$1000
Quando adicionar o produto ao carrinho 
Então deve ser aplicado cupom de 15%
E o valor final deverá ser R$850
E o produto deve ser adicionado ao carrinho com sucesso

Scenario: Aplica cupom de 10% em valores entre R$200 e R$600

Dado que o usuario está visualizando um produto no valor de R$450
Quando adicionar o produto ao carrinho 
Então deve ser aplicado cupom de 10%
E o produto deve ser adicionado ao carrinho com sucesso 

Scenario: Valores acima de R$990,00

Dado que o usuario está visualizando um produto no valor de R$999,00
Quando adicionar o produto ao carrinho
E confirmar a inclusão 
Então deve informar que o produto excede o valor permitido

Scenario: Aplica 15% de desconto em compras acima de R$600

Dado que o ususario está visualizando um produto no valor de R$800
Quando adiciona o produto ao carrinho 
Então deve aplicar desconto de 15%
E o produto deve ser adicionado ao carrinho com sucesso 

#Cenario 'Aplica cupom de 15% em valores acima de R$990' criado
#pois a regra de negocio não clara quanto a aplicação do cupom