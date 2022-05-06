import React from 'react'
import { project } from "./data"

export default function Project() {

	const select = (e) => {
		const badge = document.querySelectorAll(".badge");

		[...badge].map(item => {
			if (item.innerText == e.target.innerText) {
				item.classList.toggle("focus")
			}
		})
	}


	return (
		<>
			{project.map(item => (
				<React.Fragment key={item.id}>
					<section className="row featurette">

						<div className={"col-md-5" + (item.id % 2 === 0 ? "" : " order-md-2")}>
							<h2 className="featurette-heading">{item.title}</h2>
							<p className="lead">{item.description}</p>

							<p>
								{item.tag.map((tag, i) => (
									<span key={i} className="badge rounded-pill text-dark p-2 bg-light" onClick={select}>
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
											<path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
											<path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
										</svg> {tag}
									</span>
								))}
							</p>

						</div>

						<div className="col-md-7">
							<a href={item.live} target="_blank" rel="noreferrer">
								<img className="rounded" src={"static/img/" + item.image} alt={item.title} width="720" height="540" />
							</a>
						</div>

					</section>
					<hr />
				</React.Fragment>
			)).reverse()}
		</>
	)
}