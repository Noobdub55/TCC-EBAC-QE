const servicoCupom = require('../services/cupom.service');
const cupomSchema = require('../schema/cupom.schema');
const errorSchema = require('../schema/errorSchema');
const validador = require('../utils/validator');

describe('API de cupons usando POST', () => {

  it('Deve criar um novo cupom com sucesso', async () => {
    const dadosCupom = {
      code: `cupom-${Date.now()}`,
      amount: '10.00',
      discount_type: 'fixed_product',
      description: 'Cupom criado por automação'
    };

    const response = await servicoCupom.criarCupom(dadosCupom);

    expect(response.status).toBe(201);
    expect(response.body.code).toBe(dadosCupom.code);
    expect(response.body.amount).toBe(dadosCupom.amount);
    expect(response.body.discount_type).toBe(dadosCupom.discount_type);

    validador(cupomSchema, response.body);
  });

  it('Não deve cadastrar cupom com nome repetido', async () => {

        const dadosCupom = {
        code: `duplicado-${Date.now()}`,
        amount: '10.00',
        discount_type: 'fixed_product',
        description: 'Cupom duplicado para teste'
    };

        await servicoCupom.criarCupom(dadosCupom);

        const response = await servicoCupom.criarCupom(dadosCupom);

        expect(response.status).toBe(400);
        expect(response.body.code).toBe('woocommerce_rest_coupon_code_already_exists');
        expect(response.body.message).toBe('O código de cupom já existe');

        validador(errorSchema, response.body);

    
    });

    it('Não deve cadastrar cupom sem preencher todos os dados', async () => {

        const dadosCupom = {
        code: '',
        amount: '20.00',
        discount_type:'fixed_product',
        description: 'desconto de 20'
    };

        const response = await servicoCupom.criarCupom(dadosCupom);

        expect(response.status).toBe(400);
        expect(response.body.code).toBe('woocommerce_rest_empty_coupon_code');
        expect(response.body.message).toBe('O código do cupom não pode estar vazio.');

        validador(errorSchema, response.body);
        
    });

});