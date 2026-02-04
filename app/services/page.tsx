
import { getServices } from '@/lib/mockData';

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 p-6 flex flex-col">
            <h2 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h2>
            <p className="text-slate-600 mb-4 flex-grow">{service.description}</p>
            <div className="text-amber-600 font-semibold text-sm">
              Estimated: {service.priceRange}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
