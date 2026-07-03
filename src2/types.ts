export interface RepairService {
  name: string;
  category: 'screen' | 'power' | 'connectivity' | 'software' | 'other';
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface ContactInfo {
  address: string;
  whatsapp1: string;
  whatsapp2: string;
  facebook: string;
  tiktok: string;
  email: string;
}
