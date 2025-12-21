export type GramaServiceType = 'emergency' | 'transport' | 'health' | 'panchayat' | 'services' | 'veterinary' | 'education' | 'daily_needs';

export interface GramaService {
    id: string;
    name: string;
    name_ml?: string;
    phone_number: string;
    service_type: GramaServiceType;
    service_subtype?: string;
    stand_name?: string;
    stand_name_ml?: string;
    is_available: boolean;
    available_from?: string;
    available_to?: string;
    created_at: string;
}
