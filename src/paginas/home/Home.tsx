import './home.css';
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-gray-900 flex justify-center flex-grow w-full fundo font-font2">
          <div className='container grid grid-cols-1 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-semibold font-font5'>Entre e compartilhe!</h2>
              <p className='text-xl italic'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4 font-font5">
              <ModalPostagem />
              <button className='border border-gray-500 rounded bg-gray-800 text-white py-2 px-4'>Ver postagens</button>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow w-full items-center">
          <h2 className="text-3xl py-6 font-font5">Últimas postagens</h2>
          <ListaPostagens />
        </div>
      </>
    );
}

export default Home;
