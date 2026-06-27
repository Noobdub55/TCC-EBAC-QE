class checkoutPage {
    
    preencheDados(cliente){
        cy.get('#cart .checkout').click()
        cy.get('[name="billing_first_name"]').type(cliente.nome);
        cy.get('[name="billing_last_name"]').type(cliente.sobrenome);
        cy.get('[name="billing_address_1"]').clear().type(cliente.endereco);
        cy.get('[name="billing_city"]').clear().type(cliente.cidade);
        cy.get('[name="billing_postcode"]').clear().type(cliente.cep);
        cy.get('[name="billing_phone"]').clear().type(cliente.telefone);
    }

    finalizaPedido(){
        cy.get('.wc_payment_method.payment_method_cod > [name="payment_method"]').click();
        cy.get('[name="terms"]').click();
        cy.get('[name="woocommerce_checkout_place_order"]').click();
    }

    finalizaSemTermo(){
        cy.get('.wc_payment_method.payment_method_cod > [name="payment_method"]').click();
        cy.get('[name="woocommerce_checkout_place_order"]').click();

    }


}

export default new checkoutPage()