[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# Automatic Whatsapp Send Message

Neste projeto, eu crio um pequeno scrapper para enviar mensagens automáticas para o contato selecionado.

## Stack utilizada

**Back-end:** Node, puppeteer, dotenv

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`CONTACT_NAME` = Nome do contato

`MESSAGE_TO_SEND` = A mensagem que deseja enviar

`FLOOD_DELAY` = O tempo de espera para enviar a próxima mensagem (para evitar banimentos)

`FLOOD_TIMES` = Vezes que deseja enviar a mensagem

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:Santosl2/automatic-whatsapp-send-message.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

## Autores

- [@Santosl2](https://www.github.com/Santosl2)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
