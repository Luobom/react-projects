import "./card.css"

interface cardProps {
    price: number,
    title: string,
    image: string
}

export function Card({price, title, image} : cardProps){
    return(
        <div className="card">
            <img/>
            <h2></h2>
            <p><b>Valor:</b></p>
        </div>
    )
}
