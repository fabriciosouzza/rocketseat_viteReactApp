import './style.css'

//função de criação do Card que recebe "props" como parâmetro, porém utilizando "Destructuring assignment" ----- props.name --- props.time

export function Card({ name, time }) {
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}