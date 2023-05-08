import { Home as HomeIcon, Search, Library } from 'lucide-react'

export function Sidebar() {
    return (
        <aside className='w-96 bg-black pl-4'>
            <div className='flex items-center gap-1 pt-5 pb-2 pr-4'>
            <div className='w-1 h-1 bg-white rounded-full'></div>
            <div className='w-1 h-1 bg-white rounded-full'></div>
            <div className='w-1 h-1 bg-white rounded-full'></div>
            </div>
            <nav>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-[#b3b3b3] p-4 pl-0'>
                <HomeIcon />
                Home
            </a>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-[#b3b3b3] py-2 pr-4'>
                <Search />
                Search
            </a>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-[#b3b3b3] py-2 pr-4'>
                <Library />
                Your Library
            </a>
            </nav>
            <nav className='mt-5 pt-5 border-t border-[#282828] flex flex-col gap-3'>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Disturbed</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Racionais MC&apos;s</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Paralamas do Sucesso</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is CPM 22</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Nando Reis</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Pitty</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>David Guetta</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Queen</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Raimundos</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Cantando com Mundo Bita</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Hungria Mix</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Country Texano</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Nego Mola Radio</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Realidade Cruel</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Alok</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Training Hip Hop</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Role por aí</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Tribo da Periferia</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Pacificadores</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Sertanejo 21</a>
            <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>Your Top Songs 2021</a>
            {/* <a href='' className='text-sm text-[#a6a6a6] hover:text-zinc-100'>This is Paulo Pires</a> */}
            </nav>
        </aside>
    )
}