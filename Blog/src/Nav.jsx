import logo from './img/waves.png';

export default function Navbar() {
  return (
    <div className="w-full bg-bcgNavbar border-2 flex justify-center border- border-b-linhaNavbar">
      <div className="w-full  my-7  ">
        <div className=" grid grid-cols-12 ">
          <div className=" col-span-6 flex md:justify-center items-center">
            <img src={logo} className="w-14 h-14 md:w-24 md:h-24 md:relative md:eft-6 md:-top-2" alt="" />
            <div className='flex flex-col w-52 text-end'>
              <h3 className='text-textNavbar font-rufina text-start  break-words text-3xl md:text-5xl leading-none'>
                Onda<span className='text-white'> de </span>Notícias
              </h3>
              <h3 className='text-sm md:text-xl text-white font-opens'>codewaves.com.br</h3>
            </div>
          </div>
          <div className="col-span-6 flex justify-end h-full">
            <div className='flex flex-col md:flex-row justify-between md:mr-10 md:justify-end h-full w-full  items-end '>
              <div className=''>
              <button className='px-4 md:relative top-5 md:text-sm text-xs mx-2 bg-textNavbar rounded-md text-white font-opens'>Início</button>
              </div>
              <div className=''>
              <button className='px-4 md:relative top-5 md:text-sm text-xs mx-2 bg-textNavbar rounded-md text-white font-opens'>Ibovespa</button>
              </div>
              <div className=' '>
              <button className='md:relative top-5 px-4 md:text-sm text-xs mx-2 bg-textNavbar rounded-md text-white font-opens'>Entre em contato</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}