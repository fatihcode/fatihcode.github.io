import React from 'react'

export default function Project() {
  return (
   <div className="row featurette">
   <div className="col-md-5">
       <h2 className="featurette-heading">
          <span className="text-muted">React</span> Todos<span className="text-muted"> Application</span>
               </h2>
       <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio reiciendis numquam
           nihil ipsa similique.</p>

       <p>
           <span className="badge rounded-pill bg-light text-dark p-2">
               <i className="bi bi-tag"></i> React</span>
           <span className="badge rounded-pill bg-light text-dark p-2">
               <i className="bi bi-tag"></i> CSS</span>
           <span className="badge rounded-pill bg-light text-dark p-2">
               <i className="bi bi-tag"></i> Javascript</span>
       </p>

   </div>

   <div className="col-md-7">
       <a href="https://fatihqaz.github.io/todo-list/" target="_blank">
           <img className="rounded" src="img/todo.jpg" alt=""/>
       </a>
   </div>
   <hr className="featurette-divider"></hr>
</div>
  )
}
