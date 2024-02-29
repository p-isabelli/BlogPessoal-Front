import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const {usuario} = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-gray-900 text-white font-font4">
          <div className="container flex flex-col items-center py-5">
            <p className='text-lg font-md'>Blog pessoal Generation | Copyright: {data}</p>
            <p className='text-md italic'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={32} weight='bold' />
              <InstagramLogo size={32} weight='bold' />
              <FacebookLogo size={32} weight='bold' />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer