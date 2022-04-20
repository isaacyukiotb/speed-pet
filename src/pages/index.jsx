import styles from '../styles/Index.module.css'

export default function Login(){

    return(
        
        <div className={styles.login}>
             <form className="" action="">
                 <h1>LOGIN</h1>
                <label htmlFor="email">Usuário </label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Senha </label>
                <input type="password" name="password" id="password" />
                <button type="submit">Entrar</button>
                <a href="#">Esqueci a Senha</a>
                <a href="#">Criar uma <strong>Nova Conta</strong></a>
            </form>
        </div>
        
    )
}