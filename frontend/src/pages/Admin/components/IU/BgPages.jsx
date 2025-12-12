import ccaLogo from '../../../../assets/imgs/cca.png';


export const BgPages = () => {
    return(
        <div className="bg-black p-30 min-h-screen min-w-screen justify-center items-center flex fixed top-0 left-0 -z-10">
            <img src={ccaLogo} alt="CCA logo on a black background" className="opacity-55" draggable="false" />
        </div>
    )
}

export default BgPages;