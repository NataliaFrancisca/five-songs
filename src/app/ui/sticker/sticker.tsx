const Sticker = (props: {color: string}) => {
    return (
        <svg width="64" height="19" viewBox="0 0 64 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.04688L5.08709 0H63.306V18.0711H1.41308L4.52185 15.3034L0.847848 12.2102L4.52185 8.46574L0 5.04688Z" fill={props.color}/>
        </svg>
    )
    
}

export default Sticker;