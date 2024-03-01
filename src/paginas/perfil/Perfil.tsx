import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { PencilSimple } from "@phosphor-icons/react";
import { toastAlerta } from "../../util/toastAlerta";

function Perfil(){
  let navigate = useNavigate();

  const { usuario, handleLogout} = useContext(AuthContext);
  const [edit, setEdit] = useState<boolean>(false);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado.', 'info');
      navigate('/login');
    }
  }, [token]);

  function handleEdit(){
    if(edit) setEdit(false);
    else setEdit(true);
  }

  return (
    <div className="w-full flex items-center p-4 justify-center">
        <div className="bg-gray-100 rounded border-gray-800 border-double border-2 m-4 p-4">
          <h3 className="text-4xl text-bold text-center">{usuario.nome}</h3>

          <div className="border-2 m-4"></div>

          <img src={usuario.foto} alt={`Foto ${usuario.nome}`} width={156} height={156}className='rounded-full mx-auto border-2 border-gray-800 m-4'/>

          <h5 className="text-xl text-center m-4">E-mail: {usuario.usuario}</h5>
        </div>
    </div>
  )
}

export default Perfil;