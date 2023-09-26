import "./card.css"

interface cardProps {
    price: number,
    title: string,
    image: string
}

export function Card({price, title, image} : cardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor: </b>{price}</p>
        </div>
    )
}
