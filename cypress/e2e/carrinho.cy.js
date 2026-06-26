import addCarrinhoPage from "../pages/addCarrinhoPage";

describe('Adicionar produto ao carrinho', () => {

    beforeEach(() => {
        cy.loginComSessao()
        cy.visit('/produtos/')
    });

    it('Deve adicionar produto ao carrinho com sucesso', () => {
        
        addCarrinhoPage.addProdutoCarrinho()
        
    });

    it('Deve adicionar 10 unidades do mesmo produto ao carrinho com sucesso', () => {
        
        addCarrinhoPage.addProdutoQuantidade()

    });

    it('Não deve adicionar produto fora de estoque', () => {
        
        addCarrinhoPage.addProdutoSemEstoque()

    });

    it('Deve exibir preço, tamanho e cor na página do produto', () => {
        
        addCarrinhoPage.validaInformacoesDoProduto()

    });

    
});