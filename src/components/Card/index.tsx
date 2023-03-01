import './style.css'

export type PropsOfCards = {
    key?: number;
    name: string | undefined;
    time: string;
}
//função de criação do Card que recebe "props" como parâmetro, porém utilizando "Destructuring assignment" ----- props.name --- props.time

export function Card({ name, time }: PropsOfCards) {
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}