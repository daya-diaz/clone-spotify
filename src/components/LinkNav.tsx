interface Props {
  text: string;
  icon: React.ComponentType;
}

export function LinkNav(props: Props){
  const Icon = props.icon;
  return(
    <a href="#" className='flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-zinc-100 transition duration-300 ease-in-out'>
      <Icon />
      {props.text}
    </a>
  )
}