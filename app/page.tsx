
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-6">
        Transform Your Space with <span className="text-amber-600">Glorious Walls</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mb-8">
        We provide top-tier painting, wallpaper, and wall treatment services to bring your vision to life.
        Experience quality craftsmanship and attention to detail.
      </p>
      <div className="flex space-x-4">
        <Link 
          href="/services" 
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Our Services
        </Link>
        <Link 
          href="/contact" 
          className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Get a Quote
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
         <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2">Expert Painters</h3>
            <p className="text-slate-600">Experienced professionals dedicated to flawless finishes.</p>
         </div>
         <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
            <p className="text-slate-600">We use only high-quality paints and materials for lasting results.</p>
         </div>
         <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2">Timely Service</h3>
            <p className="text-slate-600">We respect your time and complete projects on schedule.</p>
         </div>
      </div>
    </div>
  );
}
