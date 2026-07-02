# TCC - Engenharia de Qualidade de Software | EBAC

## Sobre o projeto

Este projeto foi desenvolvido como Trabalho de Conclusão de Curso (TCC) da formação **Engenheiro de Qualidade de Software** da EBAC.

O objetivo foi aplicar, em um único projeto, todas as técnicas aprendidas durante o curso, contemplando desde a elaboração da documentação de testes até a implementação de testes automatizados para aplicações Web, API e Mobile, além da criação de testes de performance e integração contínua.

---

# Objetivos

Este projeto contempla:

- Planejamento de testes;
- Levantamento de Regras de Negócio;
- Criação de Histórias de Usuário;
- Elaboração de Casos de Teste;
- Aplicação de técnicas de projeto de testes;
- Automação Web;
- Automação de API;
- Automação Mobile;
- Testes de Performance;
- Integração Contínua utilizando GitHub Actions.

---

# Estrutura do Projeto

```
.
├── API
├── Mobile
├── Performance
├── UI
├── .github
│   └── workflows
├── README.md
└── package.json
```

---

# Documentação Manual

Antes da implementação das automações foi realizada toda a documentação necessária para o processo de testes.

Foram elaborados:

- Histórias de Usuário (User Stories);
- Regras de Negócio;
- Casos de Teste;
- Técnicas de Teste;
- Mapa Mental do Projeto.

As técnicas utilizadas incluem:

- Partição de Equivalência;
- Análise de Valor Limite;
- Tabela de Decisão.

---

# Regras de Negócio

Durante o levantamento das regras de negócio foram documentadas todas as funcionalidades da plataforma.

Entretanto, foi identificada uma inconsistência durante os testes.

## Regra contraditória

Na funcionalidade de cupons, a regra informava um comportamento diferente daquele apresentado pela aplicação.

Durante a execução dos testes foi observado que o sistema retornava um comportamento divergente da documentação originalmente fornecida.

Por esse motivo os testes automatizados foram implementados considerando o comportamento real apresentado pela aplicação.

Essa inconsistência foi documentada durante o desenvolvimento do projeto.

---

# Casos de Teste

Os casos de teste foram elaborados considerando os requisitos funcionais da aplicação.

Cada caso de teste contém:

- Identificador
- Regra de Negócio
- Técnica utilizada
- Cenário
- Resultado esperado
- Indicação se seria automatizado

---

# Automação Web

Tecnologias utilizadas:

- Cypress
- JavaScript
- Page Object Model

Foram automatizados fluxos como:

- Login
- Cadastro
- Carrinho
- Catálogo de Produtos
- Minha Conta

Foram utilizadas boas práticas como:

- Custom Commands;
- Page Objects;
- Massa de dados dinâmica utilizando Faker;
- Reutilização de código.

---

# Automação de API

Tecnologias utilizadas:

- Jest
- SuperTest
- AJV

Foram implementados testes para:

## GET

- Listagem de Cupons;
- Busca de cupom por ID.

## POST

- Cadastro de novo cupom;
- Validação de cupom duplicado;
- Validação de campos obrigatórios.

Também foram implementadas validações de contrato utilizando JSON Schema (AJV).

---

# Automação Mobile

Tecnologias utilizadas:

- WebdriverIO
- Appium
- Android Studio

Foi utilizado o padrão:

- Page Object Model

Fluxos automatizados:

- Abertura dos detalhes de um produto;
- Busca de produtos no catálogo.

---

# Testes de Performance

Tecnologia utilizada:

- K6

Foram implementados dois cenários de teste:

- Consulta de Produtos;
- Login.

## Configuração utilizada

- 20 usuários virtuais;
- Ramp-up de 20 segundos;
- Tempo de execução de 2 minutos.

## Observações

Durante a execução foi observado que a aplicação apresentou degradação de desempenho sob carga.

Os testes demonstraram que alguns thresholds definidos não foram atendidos, principalmente relacionados ao tempo de resposta.

Entretanto, os scripts foram implementados conforme solicitado pelo enunciado do trabalho.

---

# Integração Contínua

Foi criada uma pipeline utilizando GitHub Actions.

A pipeline executa automaticamente:

- Testes de API;
- Testes Web.

Os testes Mobile e Performance não foram incluídos na pipeline por dependerem de recursos específicos (Emulador Android/Appium e execução controlada de testes de carga), sendo executados manualmente.

---

# Tecnologias Utilizadas

- JavaScript
- Node.js
- Cypress
- Jest
- SuperTest
- AJV
- Faker
- WebdriverIO
- Appium
- Android Studio
- K6
- Git
- GitHub
- GitHub Actions

---

# Design Patterns Utilizados

- Page Object Model
- Service Layer
- Reutilização de massa de dados
- Separação entre testes e objetos de página

---

# Como executar

## Clonar o projeto

```bash
git clone https://github.com/Noobdub55/TCC-EBAC-QE.git
```

---

## Instalar dependências

```bash
npm install
```

---

# Executar testes de API

```bash
npm test
```

---

# Executar testes Web

```bash
npm run test:ui
```

---

# Executar testes Mobile

Necessário possuir:

- Android Studio
- Emulador Android
- Appium

Executar:

```bash
npm run wdio
```

---

# Executar testes de Performance

Necessário possuir o K6 instalado.

Executar:

```bash
k6 run Performance/testes/produtos.test.js
```

ou

```bash
k6 run Performance/testes/login.test.js
```

---

# Considerações Finais

Este projeto teve como objetivo consolidar todos os conhecimentos adquiridos ao longo da formação em Engenharia de Qualidade de Software da EBAC.

Durante seu desenvolvimento foram aplicadas técnicas de testes manuais, automação Web, API, Mobile, testes de Performance e Integração Contínua, utilizando ferramentas amplamente empregadas no mercado.

Além da implementação dos testes, foram identificadas inconsistências entre algumas regras de negócio e o comportamento real da aplicação, reforçando a importância da atividade de Quality Assurance durante o ciclo de desenvolvimento de software.

# Justificativa das Ferramentas Utilizadas

Durante o desenvolvimento deste projeto foi escolhida a combinação **JavaScript + Cypress** para a automação Web.

A escolha foi baseada na facilidade de implementação, integração com aplicações modernas e na ampla utilização dessas tecnologias no mercado de Quality Assurance.

## Comparativo entre Frameworks

| Framework | Vantagens | Desvantagens |
|-----------|-----------|--------------|
| **Cypress** | Fácil configuração, documentação completa, execução rápida, excelente depuração, comandos automáticos de espera (Auto Wait) e grande comunidade. | Suporte limitado para múltiplas abas e alguns navegadores móveis. |
| **Playwright** | Excelente suporte para múltiplos navegadores, múltiplas abas, paralelismo e automação moderna. | Curva de aprendizado um pouco maior quando comparado ao Cypress. |
| **Selenium WebDriver** | Framework consolidado no mercado, suporta praticamente qualquer navegador e diversas linguagens. | Configuração mais complexa, maior necessidade de sincronização manual e manutenção mais trabalhosa. |

### Justificativa

O Cypress foi escolhido por apresentar uma curva de aprendizado menor, excelente documentação oficial, facilidade de configuração e recursos nativos como Auto Wait, tornando os testes mais estáveis e reduzindo a necessidade de comandos explícitos de espera.

Além disso, o framework foi amplamente utilizado durante a formação da EBAC, permitindo aplicar as boas práticas estudadas ao longo do curso.

---

## Comparativo entre Linguagens

| Linguagem | Vantagens | Desvantagens |
|-----------|-----------|--------------|
| **JavaScript** | Simples, ampla comunidade, integração nativa com Cypress, grande quantidade de bibliotecas e documentação. | Tipagem dinâmica pode permitir erros em tempo de execução. |
| **Java** | Muito utilizada em automação corporativa, excelente desempenho e forte tipagem. | Maior quantidade de código e configuração mais extensa. |
| **Python** | Sintaxe simples e legível, grande quantidade de bibliotecas para automação. | Menor integração com o ecossistema do Cypress e menor utilização durante o curso realizado. |

### Justificativa

JavaScript foi escolhida por ser a linguagem nativa do Cypress, reduzindo a necessidade de configurações adicionais e proporcionando maior produtividade durante o desenvolvimento dos testes.

Sua ampla utilização no desenvolvimento Web também facilita a manutenção dos testes e a integração com outras ferramentas utilizadas no projeto, como Node.js, Jest, SuperTest e WebdriverIO.

---

## Ferramentas utilizadas em cada etapa

| Etapa | Ferramenta |
|--------|------------|
| Testes Web | Cypress |
| Testes de API | Jest + SuperTest |
| Validação de Contrato | AJV |
| Testes Mobile | WebdriverIO + Appium |
| Testes de Performance | K6 |
| Integração Contínua | GitHub Actions |
| Controle de Versão | Git + GitHub |

A escolha desse conjunto de ferramentas permitiu cobrir diferentes camadas da aplicação, aplicando boas práticas de Engenharia de Qualidade de Software desde os testes manuais até a automação, testes de desempenho e integração contínua.

# Autor

**Matheus Lima de Aquino**

Projeto desenvolvido como Trabalho de Conclusão de Curso da formação **Engenheiro de Qualidade de Software** da EBAC.

GitHub:
https://github.com/Noobdub55
