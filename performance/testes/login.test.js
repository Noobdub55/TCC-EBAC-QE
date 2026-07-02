import http from 'k6/http';
import { check, sleep } from 'k6';
import { options } from '../config/options.js';

export { options };

const usuarios = [
    { username: 'user1_ebac', password: 'psw!ebac@test' },
    { username: 'user2_ebac', password: 'psw!ebac@test' },
    { username: 'user3_ebac', password: 'psw!ebac@test' },
    { username: 'user4_ebac', password: 'psw!ebac@test' },
    { username: 'user5_ebac', password: 'psw!ebac@test' },
];

export default function () {
    const usuario = usuarios[__VU % usuarios.length];

    const payload = {
        username: usuario.username,
        password: usuario.password,
    };

    const response = http.post(
        'http://lojaebac.ebaconline.art.br/minha-conta/',
        payload
    );

    check(response, {
        'Status 200 ou 302': (r) => r.status === 200 || r.status === 302,
        'Resposta não está vazia': (r) => r.body.length > 0,
    });

    sleep(1);
}