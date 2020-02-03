# Backend Go Barber

## Estrutura padrão de pastas:

- src
  - app
    - controllers
      - UserController.js
      - ...
    - middlewares
      - UserMiddleware.js
      - ...
    - models
      - User.js
      - ...
  - config
    - auth.hs
    - database.js
    - ...
  - database
    - migrations
    - seeders
    - index.js
  - app.js
  - routes.js
  - server.js
- .editorconfig
- .eslintrc.js
- .gitignore
- .prettierc
- .sequelizerc
- nodemon.json
- package.json
- README.md

---

## Configurando o Nodemon com o Sucrase

**Resumo** : O sucrase é uma ferramenta que nos permite trabalhar com a sintaxe do ES6 ao invés da sintaxe CommonJS do ES5 dentro de projetos Nodejs.

1 - Instalar o nodemon e o sucrase como dependências de desenvolvimento: `yarn add nodemon sucrase -D`

2 - Criar o arquivo `nodemon.json` e configurar da seguinte maneira:

```JSON
{
    "execMap": {
        "js": "node -r sucrase/register"
    }
}
```

3 - Configurar um novo script dentro do `package.json` chamado `"dev": "nodemon src/server.js"`

---

## Configurando o Debug Nodemon com o Sucrase no VSCode

1 - Para habilitar o modo debug, crie um novo script dentro do `package.json` chamado `"dev:debug": "nodemon --inspect src/server.js`

2 - Abrir a aba debug e configurar um novo arquivo de debug "launch package"

3 - Alterar o arquivo `launch.json` modificando os arquivos: `"request": "attach",` e `"protocol": "inspector",`

---

## Configurando o ESLINT no VSCode

**Resumo**: O ESLINT é uma biblioteca que padroniza a escrita de códigos JS.

1 - Instalar a biblioteca ESLINT: `yarn add eslint -D`
2 - Instalar o plugin ESLINT no VSCode
3 - Rodar o comando: `yarn eslint --init` e responder as perguntas
4 - Acessar as configurações com: `CTRL+ALT+P`, verificar nas `settings.json` se contém as entradas:

```JSON
{
    "eslint.validate":[
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
}
```

5 - Configurações extras no arquivo `.eslintrc.js`:

```JSON
{
    "rules": {
        "linebreak-style": 0,
        "prettier/prettier": "error",
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "camelcase": "off",
        "no-unused-vars": ["error", {
                "argsIgnorePatterns": "next"
            }
        ]
    },
}
```

6 - Para realizar um "fix" automático em todos os arquivos ao mesmo tempo, aplicando as regras do ESLINT: `yarn eslint --fix src --ext .js`

## Configurando o Prettier no VSCode

**Resumo**: O Prettier auxilia na padronização de tabulações e quebras de linhas no código caso o mesmo exceda um nú mero de 80 caracteres

1 - Instalar as bibliotecas: `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`
2 - Configurações extras no arquivo `.eslintrc.js`

```Javascript
{
    extends: [
        'airbnb-base',
        'prettier'
    ],
    plugins: ['prettier'],
}
```

3 - Ignorar a regra de aspas duplas, criando um arquivo chamado `.prettierrc` e sobreescrever essas regras:

```JSON
{
    "singleQuote": true,
    "trailingComma": "es5"
}
```

---


## Configurando o EditorConfig

**Resumo**: O EditorConfig padroniza a escrita de códigos para que todos os devs e suas IDEs mantenham o mesmo padrão de código, tabulações, etc

1 - Instalar o plugin EditorConfig

2 - Clicar com o botão direito do mouse e selecionar `Generate .editorconfig`

3 - Deverá ser gerado um arquivo com essa estrutura:

```Properties
root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Configurando o Sequelize ORM

**Resumo**: O Sequelize é um ORM, basicamente é uma biblioteca que abstrai operações do banco de dados e utiliza de modelos para representar tabelas.

1 - Instalar as bibliotecas `yarn add sequelize` e `yarn add sequelize-cli -D`

2 - Criar um arquivo chamado `.sequelizerc` para exportar os caminhos e pastas criadas:

```Javascript
const { resolve } = require('path');

module.exports = {
    'config': resolve(__dirname, 'src', 'config', 'database.js'),
    'models-path': resolve(__dirname, 'src', 'app', 'models'),
    'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    'seeders-path': resolve(__dirname, 'src', 'database', 'seeders'),
}
```

3 - Criar um arquivo: `src/config/database.js` com a seguinte configuração:


```Javascript
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};

```


