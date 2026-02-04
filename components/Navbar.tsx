
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-500">
          Glorious Walls
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-amber-400 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-amber-400 transition-colors">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
