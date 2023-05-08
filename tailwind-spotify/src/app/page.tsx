import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import {ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gradient-to-b from-[#213544] from-10% via-[#121212] via-30% to-[#121212] to-60%">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-zinc-900 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-zinc-900 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Evening</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/10 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum do Nirvana" />
              <strong>Nome do Álbum</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black'/>
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum do Nirvana" />
              <strong>Nome do Álbum</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black'/>
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum do Nirvana" />
              <strong>Nome do Álbum</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black'/>
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum do Nirvana" />
              <strong>Nome do Álbum</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black'/>
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum do Nirvana" />
              <strong>Nome do Álbum</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black'/>
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image src='/album.jpg' width={104} height={104} alt="Capa do álbum do Nirvana" />
              <strong>Nome do Álbum</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made For Ariel Ramos de Braga</h2>

          <div className='grid grid-cols-7 gap-4 mt-4'>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum do Nirvana" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum do Nirvana" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum do Nirvana" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum do Nirvana" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum do Nirvana" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum do Nirvana" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt="Capa do álbum do Nirvana" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</span>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Your top mixes</h2>
        </main>
      </div>
      <Footer />
    </div>
  )
}
