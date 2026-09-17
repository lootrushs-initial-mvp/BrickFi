import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterIcon, SearchIcon, XIcon } from 'lucide-react';
import { PropertyCard } from '../components/ui/PropertyCard';
import { properties } from '../utils/mockData';
import { Button } from '../components/ui/Button';

export default function Browse() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    minPrice: '',
    maxPrice: '',
    location: 'all',
  });

  const locations = Array.from(
    new Set(
      properties
        .map((p) => p?.location?.split(',')[0]?.trim())
        .filter((l): l is string => !!l)
    )
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    let result = [...properties];
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filters.status !== 'all') result = result.filter((p) => p.status === filters.status);
    if (filters.minPrice) result = result.filter((p) => p.price >= Number(filters.minPrice));
    if (filters.maxPrice) result = result.filter((p) => p.price <= Number(filters.maxPrice));
    if (filters.location !== 'all') result = result.filter((p) => p.location.includes(filters.location));
    setFilteredProperties(result);
  };

  const resetFilters = () => {
    setFilters({ status: 'all', minPrice: '', maxPrice: '', location: 'all' });
    setSearchQuery('');
    setFilteredProperties(properties);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <p className="font-display text-secondary text-sm uppercase tracking-widest mb-1">
                RevoFi Marketplace
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-cream-100">
                Browse Properties
              </h1>
              <p className="text-cream-400 mt-2">
                Discover tokenized real estate — invest token by token
              </p>
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              icon={showFilters ? <XIcon size={18} /> : <FilterIcon size={18} />}
            >
              {showFilters ? 'Close' : 'Filters'}
            </Button>
          </div>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <SearchIcon
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-400 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-void-800 border border-void-600 rounded-xl pl-12 pr-4 py-3.5 text-cream-100 placeholder-cream-400/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
                />
              </div>
              <Button type="submit" className="sm:w-auto">
                Search
              </Button>
            </div>
          </form>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="rounded-2xl glass-panel p-6 mb-8 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display font-semibold text-cream-100 text-lg">
                    Filter Properties
                  </h3>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    Reset
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-cream-400 mb-2">Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                      className="w-full bg-void-700 border border-void-600 rounded-xl px-4 py-2.5 text-cream-100 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    >
                      <option value="all">All</option>
                      <option value="Available">Available</option>
                      <option value="Sold Out">Sold Out</option>
                      <option value="Coming Soon">Coming Soon</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-400 mb-2">Min price (USD)</label>
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="w-full bg-void-700 border border-void-600 rounded-xl px-4 py-2.5 text-cream-100 placeholder-cream-400/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-400 mb-2">Max price (USD)</label>
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="w-full bg-void-700 border border-void-600 rounded-xl px-4 py-2.5 text-cream-100 placeholder-cream-400/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-400 mb-2">Location</label>
                    <select
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                      className="w-full bg-void-700 border border-void-600 rounded-xl px-4 py-2.5 text-cream-100 focus:outline-none focus:ring-2 focus:ring-accent/40"
                    >
                      <option value="all">All</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-5 flex justify-end">
                  <Button onClick={applyFilters}>Apply</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {filteredProperties.length === 0 ? (
            <div className="rounded-2xl glass-panel p-16 text-center">
              <h3 className="font-display font-semibold text-cream-100 text-xl mb-2">
                No properties found
              </h3>
              <p className="text-cream-400 mb-6">Try different filters or search terms.</p>
              <Button variant="outline" onClick={resetFilters}>
                Reset filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
