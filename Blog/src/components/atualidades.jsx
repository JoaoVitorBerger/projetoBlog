import { useEffect,useState } from "react"

async function Request(valor = 1) {
    console.log(valor)
    let req = ""
    req = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${String(valor)}.json?api-key=DdpLpdie2FcJO1z8etKXJ0xqUrGD8ia9`)
    const data = await req.json()
    return data.results
}

export default function Atualidades() {
    const [cont, setConter] = useState(1)
    const [news, setNews] = useState([])
    useEffect(()=>{
        Request().then((res) => {
            setNews(res)
        })
    },[])
    return (
    <>
        <h1 className="text-6xl  font-rufina py-7">Notícias pelo Mundo</h1>
        <div className="grid grid-cols-1 justify-center items-center container mt-10">
            {
                news.map((notice) => {
                    return notice.media && notice.media[0] ? (
                        <div className="w-full h-auto mb-5 " key={100 * Math.random()}   >
                            <a href={notice.url} className="w-full flex  flex-col justify-center items-center ">
                                <img src={notice.media[0]["media-metadata"][2].url} className="w-2/3 shadow-lg rounded-xl shadow-gray-900" alt={notice.title} />
                                <h3 className="text-2xl font-rufina w-2/3 pt-3">{notice.title}</h3>
                            </a>
                        </div>
                    ) : (
                        console.log(`Esse valor foi detectado como null`)
                    );
                })
            }
        </div>
    
    <button className=" border-2 border-black px-10 py-2 rounded-lg hover:bg-black hover:text-white" onClick={() => {
    
        Request(cont).then((data) => {
            setNews((actuallyNews) => [...actuallyNews,...data])
            setConter((value) => {
                if (value == 1) {
                    setConter(7)
                } else {
                    if (value == 7) {
                        setConter(30)
                    } else {
                        if (value == 30) {
                            setConter(1)
                        }
                    }
                }
            })
        })
    }}>Ver mais</button>
    </>
    )
}