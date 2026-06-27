import { fakerPT_BR as faker } from "@faker-js/faker";
import addCarrinhoPage from "../pages/addCarrinhoPage";
import checkoutPage from "../pages/checkoutPage";

describe('Fluxo de Checkout', () => {

        beforeEach(() => {
        cy.loginComSessao()
        cy.visit('/produtos/')
    });



    it('Deve fazer checkout com sucesso ', () => {

        const cliente = {
         nome: faker.person.firstName(),
         sobrenome: faker.person.lastName(),
         endereco: faker.location.streetAddress(),
         cidade: faker.location.city(),
         cep: faker.location.zipCode(),
         telefone: faker.phone.number(),
        };
        
        addCarrinhoPage.addProdutoCarrinho();

        checkoutPage.preencheDados(cliente);

        checkoutPage.finalizaPedido();

        cy.contains('Obrigado. Seu pedido foi recebido').should('be.visible');


    });

    it('Não deve finalizar o checkout sem dar aceite o termo', () => {
         const cliente = {
         nome: faker.person.firstName(),
         sobrenome: faker.person.lastName(),
         endereco: faker.location.streetAddress(),
         cidade: faker.location.city(),
         cep: faker.location.zipCode(),
         telefone: faker.phone.number(),
        };
        
        addCarrinhoPage.addProdutoCarrinho();

        checkoutPage.preencheDados(cliente);

        checkoutPage.finalizaSemTermo();

        cy.contains('Leia e aceite os termos e condições para prosseguir com o seu pedido.').should('be.visible');
        cy.contains('Obrigado. Seu pedido foi recebido').should('not.exist');
    });

    
});