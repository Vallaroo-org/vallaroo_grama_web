import { GramaService } from '@/types';
import { Phone, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage'; // Assuming this import path

interface ServiceCardProps {
    service: GramaService;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const isAvailable = service.is_available;
    const { language, t } = useLanguage();

    const name = language === 'ml' && service.name_ml ? service.name_ml : service.name;
    const standName = language === 'ml' && service.stand_name_ml ? service.stand_name_ml : service.stand_name;

    return (
        <div className={`p-4 rounded-xl border-2 mb-4 bg-white shadow-sm transition-all ${isAvailable ? 'border-green-100' : 'border-gray-200 opacity-75'}`}>
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                        {service.service_subtype && (
                            <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-full font-medium border border-indigo-100">
                                {service.service_subtype}
                            </span>
                        )}
                        {isAvailable ? (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">{t.available}</span>
                        ) : (
                            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-medium">{t.busy}</span>
                        )}
                    </div>

                    {standName && (
                        <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm font-medium">{standName}</span>
                        </div>
                    )}

                    <div className="space-y-1 mt-2">
                        {service.stand_name}
                    </div>
                        )}

                    {(service.available_from || service.available_to) && (
                        <div className="flex items-center text-gray-600 text-sm">
                            <Clock className="w-4 h-4 mr-2 text-orange-500" />
                            {service.available_from ?? '00:00'} - {service.available_to ?? '24:00'}
                        </div>
                    )}
                </div>
            </div>

            <a
                href={`tel:${service.phone_number}`}
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white p-3 rounded-full shadow-lg transition-transform active:scale-95 flex items-center justify-center h-12 w-12"
                aria-label={`Call ${service.name}`}
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
        </div >
    );
}
