import {Play} from 'lucide-react';

interface Props {
  imageSrc: string;
  title: string;
}

export function LongCard(props: Props){
  return(
    <a href='#' className='bg-white/10 font-bold group rounded flex items-center gap-4 hover:bg-white/20 transition-colors'>
      <img className='w-20 h-20 rounded-l' src={props.imageSrc} alt="Favoritas" />
      {props.title}
      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play />
      </button>
    </a>
  )
}