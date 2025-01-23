import { useEffect,useState } from "react"

async function RequestMoney(valor = 6) {
    const req = await fetch(`https://brapi.dev/api/quote/list?sortBy=close&sortOrder=desc&limit=${String(valor)}&token=eJGEyu8vVHctULdVdHYzQd`)
    const data = await req.json()
    return data.stocks
}

export default function MercadoFinanceiro() {
    const [counterMoney, setCounterMoney] = useState(12)
    const [reqMoney, setreqMoney] = useState([])
    useEffect(()=>{
        RequestMoney().then((res) => {
            setreqMoney(res)
        })
    },[])
    return (  
         <>
         <h1 className="text-4xl ">Mercado Financeiro</h1>
            <div className="w-full grid grid-cols-3 h-auto gap-4 pb-10">
            {
            reqMoney.map((money) => {
            try {
                return (
                <div className="bg-gray-200 text-center flex flex-col items-center" key={Math.random() * 100} >
                    <img src={money.logo} className="w-16 h-16" alt="" />
                    <h1>{money.close}</h1>
                    <h3>{money.stock}</h3>
                    <h3>{money.name}</h3>
                    <h3>Movimentação: {money.volume}</h3>
                </div>
            )
            } catch (e) {
                    console.log(`Erro ao renderizar o componente ${e}`)
                }
            })
            }
            </div>               
             <button onClick={() => {
                try{
                    RequestMoney(counterMoney).then((data) => {
                        setreqMoney(() => {
                        let noticiasAtualizadas = [...data]
                        return noticiasAtualizadas.sort()
                        })
                        setCounterMoney((value) => value + 6)
                        console.log(counterMoney)
                        })
                }catch(e){
                    console.log(`Erro ao renderizar novos componentes ${e}`)
                }   
    }}>Ver mais</button>
         </>           
     
    )
}