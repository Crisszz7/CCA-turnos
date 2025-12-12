import ccaLogo from '../../../../assets/imgs/cca.png';

export const HeaderComponent = () => {
  return(
    <header className="lg:w-max lg:h-max py-3 px-6 bg-opacity-50 flex items-center">
        <div className="w-full h-full flex items-center">
            <div className="w-20 h-20 flex justify-center items-center rounded-md">
                <img src={ccaLogo} alt="CCA logo" className="w-full h-full" draggable="false" />
            </div>
            <div className="ml-4 text-white font-bold" >
                <h1>Gestión de Turnos</h1>
                <aside className="font-normal">Cooperativa de caficultores de antioquia</aside>
            </div>
        </div>
    </header>
  )
};

export default HeaderComponent;
