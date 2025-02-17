
import Ibov from"./ibov"
import Atualidades from "./atualidades";
import MercadoFinanceiro from "./mercadoFinanceiro";
import InfoDiaria from "./noticiasDoDia";
import Footer from "../Footer";

export default function Main() {
    return (
        <div className="grid grid-cols-12 container h-auto">
            <div className=" h-full col-span-8 text-center">
               <Atualidades/>
                <div className="w-full">
                   <MercadoFinanceiro/>
                </div>
                <Ibov/>
            </div>
            <div className="col-span-4  flex flex-col items-center  ">
                <div className="announcement-area py-5 h-screen w-full flex flex-col items-center justify-between sticky top-0 ">
                    <h1 className="text-5xl font-rufina pb-5">Atualidades</h1>
                    <div className="  w-3/4   flex flex-col  mt-2 overflow-y-auto scrollbar-hide ">
                    <InfoDiaria/>
                    </div>
                </div>
            </div>
        </div>
      
      
         
    );
}