import { useEffect,useState } from "react"

async function RequestSide(valor = 1) {
    const req = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/shared/${String(valor)}/facebook.json?api-key=DdpLpdie2FcJO1z8etKXJ0xqUrGD8ia9`)
    const data = await req.json()
    return data.results
}
export default function InfoDiaria() {
    const [contSide, setConterSide] = useState(1)
    const [newsSide, setSideNews] = useState([])
    useEffect(() => {
        RequestSide().then((res) => {
            setSideNews(res)
        })
       
    }, [])
    return (
        <>
            <div className="container ">
                {
                    newsSide.map((notice) => {
                        try {
                            return (
                                <div className="w-full h-auto py-5" key={100 * Math.random()}>
                                    <a href={notice.url}>
                                        <img src={notice.media[0]["media-metadata"][2].url} className="w-full" alt={notice.title} />
                                        <h3 className="text-2xl font-rufina">{notice.title}</h3>
                                    </a>
                                </div>
                            )
                        } catch (e) {
                            console.log(`Erro ao renderizar o componente ${e}`)
                        }
                    })
                }
            </div>
            <button onClick={() => {
                RequestSide(contSide).then((data) => {
                    setSideNews(() => [...data])
                    setConterSide(() => {
                        if (contSide == 1) {
                            setConterSide(7)
                        } else {
                            if (contSide == 7) {
                                setConterSide(30)
                            } else {
                                if (contSide == 30) {
                                    setConterSide(1)
                                }
                            }
                        }
                    })
                })
            }}>Ver mais</button>
        </>
    )
}