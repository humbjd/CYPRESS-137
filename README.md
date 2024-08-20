

# CYPRESS-137

**Autor:** Humberto José Dantas (humbjd)  
**Projeto:** Automação Web e API  
**Tecnologias:** Cypress, JavaScript, Node.js

## Descrição

O projeto **CYPRESS-137** é focado na automação de testes para aplicações web e APIs utilizando o framework Cypress. O objetivo é garantir a qualidade e a integridade de aplicações através de testes automatizados, cobrindo cenários críticos e fluxos de usuário tanto na interface web quanto nas interações com APIs.

## Estrutura do Projeto

- **/cypress**: Contém os testes automatizados.
  - **/integration**: Testes de interface e API.
  - **/fixtures**: Arquivos de dados para testes.
  - **/support**: Configurações adicionais e comandos customizados.
- **cypress.json**: Configurações do Cypress.
- **package.json**: Dependências e scripts do projeto.

## Pré-requisitos

- **Node.js** (versão 12 ou superior)
- **npm** (versão 6 ou superior) ou **yarn**
- **Cypress** (instalado via npm/yarn)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/humbjd/CYPRESS-137.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd CYPRESS-137
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

## Executando os Testes

### Testes Web

Para executar os testes de interface web:
```bash
npx cypress run
```

### Testes de API

Para executar os testes de API:
```bash
npx cypress run --spec "cypress/integration/api/*.spec.js"
```

### Modo Interativo

Para executar os testes em modo interativo:
```bash
npx cypress open
```

## Contribuição

Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie para sua branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.



