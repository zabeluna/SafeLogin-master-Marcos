# SafeLogin

Aplicativo fictício de login focado em **Interação Humano-Computador (IHC)**. Projeto de estudos, uso totalmente local e offline.

## Tecnologias

- **React** + **Vite**
- CSS puro

## Como executar

```bash
npm install
npm run dev
```

Acesse no navegador o endereço exibido (geralmente `http://localhost:5173`).

### Outros comandos

```bash
npm run build # build para produção
npm run preview # visualizar o build
```


## Etapas

### Segmento 1 ✓
- Interface visual da tela de login
- Campos de usuário e senha
- Botão de login com olho para mostrar/ocultar senha

### Segmento 2 ✓
- Validação local de dados (offline, React state)
- Credenciais fixas: usuário `admin` (senha `1234`) ou visitante `visitante` (senha `123visitante`)
- Botão "Entrar como visitante" que preenche usuário e senha automaticamente (ainda valida ao clicar em "Vamos lá")
- Feedback ao clicar em login:
  - Campos vazios → mensagem de erro
  - Usuário ou senha incorretos → mensagem de erro
  - Credenciais corretas → mensagem de sucesso




