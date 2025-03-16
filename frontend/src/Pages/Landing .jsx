export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            If a Single Sheet of Paper Can Decide Your Future, Make It Count
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            SingleSheet helps you optimize your resume in seconds with AI-powered enhancements to ensure it aligns with any job description.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <FeatureCard title="Upload Your Resume" description="Supports PDF and DOCX formats for easy optimization." />
          <FeatureCard title="AI-Powered Insights" description="Get keyword suggestions and structure improvements." />
          <FeatureCard title="ATS-Friendly Output" description="Download an optimized resume ready for applications." />
        </div>
      </div>
    );
  }
  
  function FeatureCard({ title, description }) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  