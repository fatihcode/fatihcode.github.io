import React, { useState } from 'react'
import { project } from "./data"

export default function Project() {

    const [focus, setFocus] = useState(false)

    const badge = document.querySelectorAll(".badge")

    badge.forEach(element => {
        element.onclick = () => {
            for (let i = 0; i < badge.length; i++) {
                if (badge[i].innerHTML == element.innerHTML) {
                    badge[i].classList.toggle("focus")
                }
            }
        }
    });
    

    // const badge = (e) => {
   
    //     console.log(e.target.innerHTML);
    //     console.log(e.target.innerHTML.split(" ")[3]);
    //     setFocus(true)
    // }
    // onClick={badge}


    return (
        <>
            {project.map(item => (
                <React.Fragment key={item.id}>
                    <div className="row featurette">

                        <div className={"col-md-5" + (item.id % 2 === 0 ? "" : " order-md-2")}>
                            <h2 className="featurette-heading">{item.title}</h2>
                            <p className="lead">{item.description}</p>

                            <p>
                                {item.tag.map((tag, i) => (
                                    <span key={i} className={"badge rounded-pill text-dark p-2 bg-light" + (focus ? " bg-warning" : "")}  >
                                        <i className="bi bi-tag"></i> {tag}
                                    </span>
                                ))}
                            </p>

                        </div>

                        <div className="col-md-7">
                            <a href={item.live} target="_blank">
                                <img className="rounded" src={"static/img/" + item.image} alt={item.title} />
                            </a>
                        </div>

                    </div>
                    <hr/>
                </React.Fragment>
            )).reverse()}
        </>
    )
}