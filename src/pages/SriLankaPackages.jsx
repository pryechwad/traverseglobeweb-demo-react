import { useMemo, useState } from 'react';
import { srilankaPackages } from '../data/siteData';
import PackageCard from '../components/PackageCard';
import HeroSlider from '../components/HeroSlider';

export default function SriLankaPackages() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return srilankaPackages;
    return srilankaPackages.filter(p => p.title.toLowerCase().includes(q));
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-20 pb-10">
      {/* Hero slider */}
      <HeroSlider
        images={[
          'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80',
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80',
        ]}
        className="mt-0"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow">Sri Lanka Holiday Packages</h1>
        <p className="text-white/90 mt-3">Explore Kandy, Nuwara Eliya, Yala & Colombo - 4N/5D Tours</p>
        <div className="max-w-3xl mx-auto mt-5">
          <form
            className="flex overflow-hidden rounded-full shadow-xl bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              setSearchTerm(query);
            }}
          >
            <input
              className="flex-1 px-6 py-3 outline-none"
              placeholder="Search Sri Lanka packages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 hover:bg-secondary transition-colors"
              aria-label="Search"
            >
              <i className="fa fa-search" />
            </button>
          </form>
          {searchTerm && (
            <p className="text-white/90 text-sm mt-2">Showing results for: <span className="font-semibold">{searchTerm}</span></p>
          )}
        </div>
      </HeroSlider>

      {/* Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filtered.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} category="srilanka" />
              ))}
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-4">No packages found.</div>
          )}
        </div>
      </section>
    </div>
  );
}