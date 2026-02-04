
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Contact Us</h1>
      <p className="text-center text-slate-600 mb-8">
        Ready to start your project? Fill out the form below or call us at (555) 123-4567.
      </p>
      
      <form className="bg-white p-8 rounded-lg shadow-md border border-slate-200">
        <div className="mb-6">
          <label htmlFor="name" className="block text-slate-700 font-bold mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your Name"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-slate-700 font-bold mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-slate-700 font-bold mb-2">Message</label>
          <textarea 
            id="message" 
            rows={4}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        
        <button 
          type="button" 
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
