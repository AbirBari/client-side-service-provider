import React from 'react'

export default function AnimationPage() {
  return (
    <div className="hero mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
