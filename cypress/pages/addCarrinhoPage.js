class addCarrinhoPage{

    addProdutoCarrinho(){

        cy.get('.post-2559 > .product-block').click();
        cy.get('.button-variable-item-M').click();
        cy.get('.button-variable-item-Green').click();
        cy.get('.single_add_to_cart_button').click();
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();

    }
    
    addProdutoQuantidade(){
         cy.get('.post-3964 > .product-block').click();
        cy.get('.button-variable-item-M').click();
        cy.get('.button-variable-item-Green').click();
        cy.get('[name="quantity"]').clear().type('10');
        cy.get('.single_add_to_cart_button').click();
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
    }

    addProdutoSemEstoque(){
        cy.get('.post-3073 > .product-block').click();
        cy.get('.button-variable-item-36').click();
        cy.get('.button-variable-item-Green').click();
        cy.contains('Fora de estoque').should('be.visible');
    }

    validaInformacoesDoProduto(){
        cy.get('.post-3111 > .product-block').click();
        cy.get('.variations > tbody > :nth-child(1)').should('be.visible');
        cy.get('.variations > tbody > :nth-child(2)').should('be.visible');
        cy.get('.summary > .price').should('be.visible')
    }

}

export default new addCarrinhoPage()
