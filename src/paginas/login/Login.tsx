import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext) 

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}

function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-font5">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className=" text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className=''>Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-gray-900 rounded p-2"
              value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className=''>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-gray-900 rounded p-2"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button  type='submit' className="rounded bg-orange-400 text-white hover:bg-orange-600 w-1/2 py-2 flex justify-center">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
          </button>

          <hr className="border-gray-900 w-full" />

          <p className=''>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-orange-600 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;