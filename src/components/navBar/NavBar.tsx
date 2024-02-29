import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='shadow-md p-4 rounded-md w-full top-0 left-0 font-font4 bg-white '>
          <div className="md:flex items-center justify-center py-4 md:px-10 px-7 ">
            <Link to='/home' className='text-2xl mr-1 pt-2 font-medium'>blog pessoal</Link>
          </div>

            <div className='flex gap-8 items-center justify-center py-2 text-lg'>
              <Link to='/postagens' className='hover:text-gray-400 duration-500'>Postagens</Link>
              <Link to='/temas' className='hover:text-gray-400 duration-500'>Temas</Link>
              <Link to='/cadastroTema' className='hover:text-gray-400 duration-500'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:text-gray-400 duration-500'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:text-gray-400 duration-500'>Sair</Link>
            </div>
          </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar