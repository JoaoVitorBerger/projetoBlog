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
           <h1>Ibovespa</h1>
           <div className="w-full h-auto bg-gray-500 flex flex-col justify-center items-center">
                <img src={respReq.logourl} alt="" className="w-32 h-32" />
                <h3>
                    {`Pts :${numeral(respReq.regularMarketPrice).format('0,0.00')}`}
                </h3>
                <h3>
                    {`Variação${numeral(respReq.regularMarketChange).format('0,0.00')}`}
                </h3>
                <h3>
                    {`Variação ${new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2 }).format(respReq.regularMarketChangePercent / 100)}`}
                </h3>

           </div>
           <div className="w-full grid grid-cols-2">
            <div className="w-full h-72 flex flex-col justify-around bg-gray-300">
                <h3>Desempenho Diário</h3>
                <h4>{`Maior preço do dia ${numeral(respReq.regularMarketDayHigh).format('0,0.00')}`}</h4>
                <h4>{`Menor preço do dia ${numeral(respReq.regularMarketDayLow).format('0,0.00')}`}</h4>
                <h4>{`Faixa de preços do dia ${respReq.regularMarketDayRange}`}</h4>
            </div>
            <div className="w-full h-72 flex flex-col justify-around bg-gray-400">
                <h3>Desempenho Semanal e Anual</h3>
                <h4>{`Faixa de preços nas últimas 52 semanas ${respReq.fiftyTwoWeekRange}`}</h4>
                <h4>{`Maior preço nas últimas 52 semanas ${numeral(respReq.fiftyTwoWeekHigh).format('0,0.00')}`}</h4>
                <h4>{`Menor preço nas últimas 52 semanas ${numeral(respReq.fiftyTwoWeekLow).format('0,0.00')}`}</h4>
            </div>
           </div>

        </>
     
    )
}