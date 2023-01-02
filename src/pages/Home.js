import React from 'react'
import Cards from '../components/Cards'
import data from '../Resource/Data'
export default function Home() {
    return (
        <>
            <ul className="cards">
                {data.map((val)=>{
                    return <Cards name={val.name} link={val.link} thmlink={val.thmlink} description={val.description} movlink={val.movlink}/>
                })}
            </ul>
        </>
    )
}
