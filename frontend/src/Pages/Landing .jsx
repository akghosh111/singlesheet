import React from 'react'

const Landing  = () => {
  return (
    <>
      <section id='home' className='pt-24 min-h-screen flex items-center justify-center'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='md:text-4xl text-2xl tracking-wide leading-10'>A Single Sheet of Paper Can Decide Your Future, Make It Count</h1>
            <br />
            <p className='tracking-tight'>Your resume is more than just a document—it's your first impression. SingleSheet ensures that one page works for you, not against you. With AI-powered optimization, your resume will be tailored to match any job description perfectly.
            </p>

          </div>
          <div className="mx-auto text-center pt-6 flex justify-center space-x-4">
                        <button className="btn-primary">Get Started Free</button>
                        <button className="btn-secondary">See How It Works</button>
          </div>
        </div>

      </section>

      <section id='features' className=''>

      </section>

      <section id='why' className=''>

      </section>
    </>
  )
}

export default Landing 
