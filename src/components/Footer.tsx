import { Library, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, MonitorSpeaker, Volume2 } from 'lucide-react';

export function Footer(){
  return(
    <footer className="bg-zinc-900 border-t border-zinc-800 flex items-center justify-between fixed z-10 bottom-0 w-full p-6 h-28">
        <div className='flex flex-row items-center gap-4 w-64 '>
          <img className='w-14 h-14 ' src="imgs/album2.jpg" alt="Favoritas" />
          <div className='flex flex-col '>
            <h3 className='text-zinc-100 font-semibold w-24'>Sete Vidas</h3>
            <a className='text-zinc-500 font-sm' href="#">Pitty</a>
          </div>
          <Heart className='h-5 w-5 ml-2 cursor-pointer '/>
        </div>
        <div className='flex flex-col gap-2 '>
          <div className='flex items-center justify-center gap-8'>
            <Shuffle size={20} className='text-zinc-300 cursor-pointer' />
            <SkipBack size={20} className='text-zinc-300 cursor-pointer'/>
            <button className='w-9 h-9 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play size={20} />
            </button>
            <SkipForward size={20} className='text-zinc-300 cursor-pointer'/>
            <Repeat size={20} className='text-zinc-300 cursor-pointer'/>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='text-xs text-zinc-400'>1:31</span>
            <div className='h-1 w-96 bg-zinc-600 rounded-full'>
              <div className='bg-white w-40 h-1 rounded-l'></div>
            </div>
            <span className='text-xs text-zinc-400'>3:10</span>
          </div>
        </div>
        <div className='flex gap-4'>
          <Mic2 size={20} className='text-zinc-400 cursor-pointer'/>
          <Library size={20} className='text-zinc-400 cursor-pointer'/>
          <MonitorSpeaker size={20} className='text-zinc-400 cursor-pointer'/>
          <div className='flex gap-2 items-center'>
            <Volume2 size={20} className='text-zinc-400 cursor-pointer'/>
            <div className='h-1 w-20 rounded-full bg-white'>
          </div>
          </div>
        </div>
      </footer>
  )
}