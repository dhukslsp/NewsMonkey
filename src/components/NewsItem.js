import React from 'react'
let myst1 = {
    width: "18rem"
}
export default function NewsItem(props) {
    return (
        <div className="card" style={myst1}>
            <img src={props.url} className="card-img-top" alt="unavaibleIMG" />
            <div className="card-body">
                <p className='card-texr font-bold'><small className='text-muted'>Published by-{props.author?null:"Anoynmus"}-on|{new Date(props.publish).toTimeString()} ||</small></p>
                <h5 className="card-title font-bold">{props.heading}</h5>
                <p className="card-text">{props.desc}</p>
                <a href={props.btnsel} className="btn btn-primary" target= "__blank">Go to rootpage</a>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{props.source}</span>
            </div>
        </div>
    )
}

