interface Props {
  title: string;
}

export function PlaylistName(props: Props){
  return(
    <a href="#" className='text-zinc-400 text-sm hover:text-zinc-100'>{props.title}</a>
  )
}