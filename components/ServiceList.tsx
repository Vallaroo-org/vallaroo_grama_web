'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { GramaService, GramaServiceType } from '@/types';
import { ServiceCard } from './ServiceCard';
import { Search } from 'lucide-react';

interface ServiceListProps {
    type: GramaServiceType;
}

export function ServiceList({ type }: ServiceListProps) {
    const [services, setServices] = useState<GramaService[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStand, setSelectedStand] = useState<string | null>(null);

    useEffect(() => {
        fetchServices();
        setSelectedStand(null); // Reset filter on type change
    }, [type]);

    async function fetchServices() {
        setLoading(true);
        const { data } = await supabase
            .from('grama_services')
            .select('*')
            .eq('service_type', type)
            .order('is_available', { ascending: false }) // Available first
            .order('name', { ascending: true }); // Then alphabetical

        if (data) {
            setServices(data as GramaService[]);
        }
        setLoading(false);
    }

    // Extract unique stands
    const stands = Array.from(new Set(
        services.map(s => s.stand_name).filter(Boolean) as string[]
    )).sort();

    const filteredServices = services.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.stand_name?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStand = selectedStand ? service.stand_name === selectedStand : true;

        return matchesSearch && matchesStand;
    });

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Search Bar */}
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder={`Search ${type}...`}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Stand/Area Filter Chips */}
            {stands.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedStand(null)}
                        className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${selectedStand === null
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        All Areas
                    </button>
                    {stands.map(stand => (
                        <button
                            key={stand}
                            onClick={() => setSelectedStand(stand === selectedStand ? null : stand)}
                            className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${selectedStand === stand
                                    ? 'bg-indigo-600 text-white border-indigo-600'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {stand}
                        </button>
                    ))}
                </div>
            )}

            {loading ? (
                <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                </div>
            ) : filteredServices.length > 0 ? (
                <div className="pb-20">
                    {filteredServices.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    <p>No {type}s found{selectedStand ? ` in ${selectedStand}` : ''}.</p>
                </div>
            )}
        </div>
    );
}
