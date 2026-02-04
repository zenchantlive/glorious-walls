
import { getGalleryItems } from '@/lib/mockData';

export default async function GalleryPage() {
  const gallery = await getGalleryItems();

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Project Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-video">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
