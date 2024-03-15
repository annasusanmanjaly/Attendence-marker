function Button(props){
    return(
        <div className={`px-5 py-2 bg-black border-2 text-white ${props.bg}`}>
            <button>{props.text}</button>
        </div>
    )
    }
    
    export default Button