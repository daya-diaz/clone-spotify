import { Home as HomeIcon, Search, Library } from 'lucide-react';
import { PlaylistName } from './PlaylistName';
import { LinkNav } from './LinkNav';

export function Sidebar(){
  return(
    <aside className="w-72 bg-zinc-950 p-6 flex flex-col gap-8 h-screen top-0 sticky">
      <img className='w-36' src="imgs/spotify-logo.png" alt="Logo do Spotify" />
      <nav className='space-y-5'>       
        <LinkNav icon={HomeIcon} text="Home" />
        <LinkNav icon={Search} text="Search" />       
        <LinkNav icon={Library} text="Your Library" />
      </nav>
      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4'>
        <PlaylistName title='Só brega de qualidade'/>
        <PlaylistName title="Brega Funk atualizado 2023" />
        <PlaylistName title="Rock&Metal" />
        <PlaylistName title="Pitty" />
        <PlaylistName title="Descobertas da Semana" />
        <PlaylistName title="Músicas para Meditar" />
        <PlaylistName title="Major RD" />
    </nav>
  </aside>
  )
}