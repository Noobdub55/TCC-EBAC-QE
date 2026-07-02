import http from 'k6/http';
import { check, sleep } from 'k6';
import { options } from '../config/options.js';

export { options };

const headers = {
    Authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
};

export default function () {
    const response = http.get(
        'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/products',
        { headers }
    );

    check(response, {
        'Status 200': (r) => r.status === 200,
        'Retorna JSON': (r) => r.headers['Content-Type']?.includes('application/json'),
        'Resposta não está vazia': (r) => r.body.length > 0,
    });

    sleep(1);
}

