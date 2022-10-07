import React from "react"

export default function Content(props){
    return (
        <div className="content-container">
            
            <img className="japan-img" src={props.item.imageUrl} />
            <div className="separator">
                <div className="one">
                    <img className="navigator-img" src="../images/icons8-navigator-64.png"/>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <div className="content-para-container">
                    <p>{props.item.description}</p>
                </div>
                
            </div>
        </div>
    )
    
}