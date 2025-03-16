import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id='home' className='pt-24 min-h-screen flex items-center justify-center'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='md:text-4xl text-2xl tracking-wide leading-10'>
              A Single Sheet of Paper Can Decide Your Future, Make It Count
            </h1>
            <br />
            <p className='tracking-tight text-gray-400'>
              Your resume is more than just a document—it's your first impression. SingleSheet ensures that one page works for you, not against you. With AI-powered optimization, your resume will be tailored to match any job description perfectly.
            </p>
          </div>
          <div className="mx-auto text-center pt-6 flex justify-center space-x-4">
            <button onClick={()=> navigate('/signin')} className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">See How It Works</button>
          </div>
        </div>
      </section>

      <section id='features' className="mt-16 py-12 bg-purple-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard title="Upload Your Resume" description="Supports PDF and DOCX formats for easy optimization." />
            <FeatureCard title="AI-Powered Insights" description="Get keyword suggestions and structure improvements." />
            <FeatureCard title="ATS-Friendly Output" description="Download an optimized resume ready for applications." />
          </div>
        </div>
      </section>

      <section id='why' className='py-12'>
        {/* Future content */}
      </section>
    </>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 bg-purple-400" >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Landing;
