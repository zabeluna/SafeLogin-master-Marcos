import { useState } from 'react'
import './Login.css'

const USUARIO_ADMIN = 'admin'
const SENHA_ADMIN = '1234'
const USUARIO_VISITANTE = 'visitante'
const SENHA_VISITANTE = '123visitante'

function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [feedback, setFeedback] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setFeedback(null)

    const usuarioTrimmed = usuario.trim()
    const senhaTrimmed = senha.trim()

    if (!usuarioTrimmed && !senhaTrimmed) {
      setFeedback({ tipo: 'erro', mensagem: 'Preencha usuário e senha para continuar.' })
      return
    }

    if (!usuarioTrimmed) {
      setFeedback({ tipo: 'erro', mensagem: 'Complete o usuário para continuar.' })
      return
    }

    if (!senhaTrimmed) {
      setFeedback({ tipo: 'erro', mensagem: 'Complete a senha para continuar.' })
      return
    }

    const credenciaisValidas =
      (usuarioTrimmed === USUARIO_ADMIN && senhaTrimmed === SENHA_ADMIN) ||
      (usuarioTrimmed === USUARIO_VISITANTE && senhaTrimmed === SENHA_VISITANTE)

    if (!credenciaisValidas) {
      setFeedback({ tipo: 'erro', mensagem: <>Verifique usuário e senha.<br /><span className="mensagem-destaque">Tente novamente, você consegue!</span></> })
      return
    }

    setFeedback({ tipo: 'sucesso', mensagem: <>Login realizado com sucesso!</> })
  }

  return (
    <div className="login">
      <form className="formulario" onSubmit={handleSubmit}>
        <p className="nome-app">App de Estudos</p>
        <div className="titulo">
          Bem-vindo,<br /><span>entre para continuar</span>
        </div>
        <input
          className="campo"
          name="usuario"
          placeholder="Usuário"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoComplete="username"
        />
        <div className="campo-senha">
          <input
            className="campo"
            name="senha"
            placeholder="Senha"
            type={mostrarSenha ? 'text' : 'password'}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="alternar-senha"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {mostrarSenha ? (
              <svg className="icone-olho" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg className="icone-olho" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>
        <button
          type="button"
          className="entrar-visitante"
          onClick={() => {
            setUsuario(USUARIO_VISITANTE)
            setSenha(SENHA_VISITANTE)
          }}
        >
          Entrar como visitante
        </button>
        <div className="mensagem-area" aria-live="polite">
          {feedback && (
            <p className={`mensagem mensagem-${feedback.tipo}`} role="alert">
              {feedback.tipo === 'sucesso' && (
                <span className="icone-sucesso" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              )}
              {feedback.mensagem}
            </p>
          )}
        </div>
        <button type="submit" className="botao-confirmar">Vamos lá →</button>
      </form>
    </div>
  )
}

export default Login
