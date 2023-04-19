interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraph: string;
}

export function Card(props: Props){
  return(
    <a href='#' className='flex flex-col rounded p-3 box-border bg-zinc-800 hover:bg-zinc-700 transition-colors'>
      <img src={props.imageSrc} alt={props.imageAlt} className='w-full rounded mb-4'/>
      <h2 className='font-bold'>{props.title}</h2>
      <p className='text-zinc-400 w-36 text-xs mt-1 leading-6'>{props.paragraph}</p>
    </a>
  )
}