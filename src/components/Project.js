import React from 'react'
import { project } from "./data"

export default function Project() {
    return (
        <>
            {project.map(item => (
                <React.Fragment key={item.id}>
                    <div className="row featurette">

                        <div className="col-md-5">
                            <h2 className="featurette-heading">{item.title}</h2>
                            <p className="lead">{item.description}</p>

                            <p>
                                {item.tag.map((tag, i) => (
                                    <span key={i} className="badge rounded-pill bg-light text-dark p-2">
                                        <i className="bi bi-tag"></i> {tag}
                                        </span>
                                ))}
                            </p>

                        </div>

                        <div className="col-md-7">
                            <a href={item.live} target="_blank">
                                <img className="rounded" src={"static/img/" + item.image} alt="" />
                            </a>
                        </div>

                    </div>
                    <hr className="featurette-divider"></hr>
                </React.Fragment>
            ))}
        </>
    )
}