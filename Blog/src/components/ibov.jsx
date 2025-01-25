import { useEffect, useState } from "react"
import numeral from 'numeral';
async function ReqIbov() {
    let req = await fetch("https://brapi.dev/api/quote/%5EBVSP?token=3z5LvXk5GMcmZPMxeNYqcU")
    let response = await req.json()
    return response
}

export default function Ibov(){
    const [respReq, setRespReq] = useState([])
    useEffect(
        ()=>{
            ReqIbov().then(res=>setRespReq(res.results[0]))
        },[]
    )
    return(
        <>
           <h1 className="py-5 font-rufina text-3xl ">Ibovespa</h1>
           <div className="w-full h-72  shadow-xl rounded-md flex flex-col    justify-around items-center">
                <img src={respReq.logourl} alt="" className="w-32 h-32" />
                <h3 className="font-thin">
                    {`Pts :${numeral(respReq.regularMarketPrice).format('0,0.00')}`}
                </h3>
                <h3 className="font-thin">
                    {`Variação${numeral(respReq.regularMarketChange).format('0,0.00')}`}
                </h3>
                <h3 className="font-thin">
                    {`Variação ${new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2 }).format(respReq.regularMarketChangePercent / 100)}`}
                </h3>

           </div>
           <div className="w-full grid grid-cols-2 shadow-xl  mt-2">
            <div className="w-full h-72 flex flex-col rounded-s-md justify-around shadow-md">
                <h3>Desempenho Diário</h3>
                <h4 className="font-thin">{`Maior preço do dia ${numeral(respReq.regularMarketDayHigh).format('0,0.00')}`}</h4>
                <h4 className="font-thin">{`Menor preço do dia ${numeral(respReq.regularMarketDayLow).format('0,0.00')}`}</h4>
                <h4 className="font-thin">{`Faixa de preços do dia ${respReq.regularMarketDayRange}`}</h4>
            </div>
            <div className="w-full h-72 flex flex-col rounded-e-md justify-around  shadow-md">
                <h3>Desempenho Semanal e Anual</h3>
                <h4 className="font-thin">{`Faixa de preços nas últimas 52 semanas ${respReq.fiftyTwoWeekRange}`}</h4>
                <h4 className="font-thin">{`Maior preço nas últimas 52 semanas ${numeral(respReq.fiftyTwoWeekHigh).format('0,0.00')}`}</h4>
                <h4 className="font-thin">{`Menor preço nas últimas 52 semanas ${numeral(respReq.fiftyTwoWeekLow).format('0,0.00')}`}</h4>
            </div>
           </div>

        </>
     
    )
}