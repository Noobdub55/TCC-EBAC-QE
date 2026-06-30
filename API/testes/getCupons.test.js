const servicoCupom = require('../services/cupom.service');
const cupomSchema = require('../schema/cupom.schema')
const validador = require('../utils/validator')

describe('API de cupons usando Get', () => {
    
    it('deve listar todos os cupons', async () => {
        
        const response = await servicoCupom.listarCupons();

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

        validador(cupomSchema, response.body[0]);
       


    });

    it('Deve validar cupom buscando ID', async () => {

        const idCupom = 10917; 

        const response = await servicoCupom.buscarCupom(idCupom);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(idCupom);
        expect(response.body.code).toBeDefined();
        expect(response.body.amount).toBeDefined();

        validador(cupomSchema, response.body);
        
    });

});