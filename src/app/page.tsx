import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { LongCard } from '@/components/LongCard';
import { Sidebar } from '@/components/Sidebar';
import {ChevronLeft, ChevronRight} from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto ">
          <div className='flex items-center gap-4 w-fill bg-zinc-900'>
            <button className='bg-zinc-800 p-1 rounded-full cursor-pointer'>
              <ChevronLeft />
            </button>
            <button className='bg-zinc-800 p-1 rounded-full cursor-pointer'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-bold text-3xl mt-10'>Boa tarde</h1>
          <div className='grid grid-cols-3 gap-4 mt-6'>            
            <LongCard title="Músicas Curtidas" imageSrc='imgs/favsimg.png'/>
            <LongCard title="This is Pitty" imageSrc='imgs/thisispitty.jpeg'/>
            <LongCard title="Sete Vidas - Álbum" imageSrc='imgs/album2.jpg'/>
            <LongCard title="Katy Perry" imageSrc='imgs/album3.jpg'/>
            <LongCard title="Major RD" imageSrc='imgs/album4.jpg'/>
            <LongCard title="Highway to Hell - Álbum" imageSrc='imgs/album5.jpg'/>
          </div>
          <h1 className='font-bold text-2xl mt-10'>Feito para você</h1>
          <div className='grid grid-cols-8 gap-4 mt-6'>
            <Card imageSrc='/imgs/foryou1.jpeg' imageAlt='Capa do album Descobertas da Semana' title='Descobertas da Sem...' paragraph='Sua mixtape semanal cheia de novas...'/>
            <Card imageSrc='/imgs/viralhits.jfif' imageAlt='Capa do album Viral Hits' title='Viral Hits' paragraph='Viral, trending and taking off.'/>
            <Card imageSrc='/imgs/mixmpb.jfif' imageAlt='Capa do album Mix MPB' title='Mix MPB' paragraph='Pitty, Rogério Carvalho, Tiago Doidão e mais'/>
            <Card imageSrc='/imgs/hothits.jfif' imageAlt='Capa do album HotHits Brasil' title='HotHits Brasil' paragraph='Os grandes hits do momento estão aqui!'/>
            <Card imageSrc='/imgs/funkhits.jfif' imageAlt='Capa do album Funk Hits' title='Funk Hits' paragraph='Os Bico Tão Se Perguntando e...'/>
            <Card imageSrc='/imgs/radarnovidades.jfif' imageAlt='Capa do album Radar de Novidades' title='Radar de Novidades' paragraph='Confira os lançamentos dos artistas...'/>
            <Card imageSrc='/imgs/topbr.jfif' imageAlt='Capa do album Top Brasil' title='Top Brasil' paragraph='KayBlack e os maiores hits do país.'/>
            <Card imageSrc='/imgs/rapcaviar.jfif' imageAlt='Capa do album Rap Caviar' title='Rap Caviar' paragraph='New music from NLE Choppa,...'/>
          </div>
          <h1 className='font-bold text-2xl mt-10'>Em alta</h1>
          <div className='grid grid-cols-8 gap-4 mt-6'>
            <Card imageSrc='/imgs/funkhits.jfif' imageAlt='Capa do album Funk Hits' title='Funk Hits' paragraph='Os Bico Tão Se Perguntando e...'/>
            
            <Card imageSrc='/imgs/mixmpb.jfif' imageAlt='Capa do album Mix MPB' title='Mix MPB' paragraph='Pitty, Rogério Carvalho, Tiago Doidão e mais'/>
            <Card imageSrc='/imgs/rapcaviar.jfif' imageAlt='Capa do album Rap Caviar' title='Rap Caviar' paragraph='New music from NLE Choppa,...'/>
            <Card imageSrc='/imgs/hothits.jfif' imageAlt='Capa do album HotHits Brasil' title='HotHits Brasil' paragraph='Os grandes hits do momento estão aqui!'/>
            
            <Card imageSrc='/imgs/radarnovidades.jfif' imageAlt='Capa do album Radar de Novidades' title='Radar de Novidades' paragraph='Confira os lançamentos dos artistas...'/>
            <Card imageSrc='/imgs/foryou1.jpeg' imageAlt='Capa do album Descobertas da Semana' title='Descobertas da Sem...' paragraph='Sua mixtape semanal cheia de novas...'/>
            <Card imageSrc='/imgs/topbr.jfif' imageAlt='Capa do album Top Brasil' title='Top Brasil' paragraph='KayBlack e os maiores hits do país.'/>
            <Card imageSrc='/imgs/viralhits.jfif' imageAlt='Capa do album Viral Hits' title='Viral Hits' paragraph='Viral, trending and taking off.'/>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
