import React from "react"
import Hero from "./Hero"
import Content from "./Content"
import data from "./data"

export default function App(){
    let dataHtml = data.map(item => {
       return <Content
                key={item.title}
                item={item}
             />
    })
    
    return (
        <div className="all-container">
            <Hero />
            <div className="yes">
                {dataHtml}
            </div>
        </div>
    )
}