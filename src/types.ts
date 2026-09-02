export interface ClinicInfo {
  name: string;
  hindiName: string;
  tagline: string;
  doctorName: string;
  doctorTitle: string;
  degrees: string;
  experienceYears: number;
  phone: string;
  formattedPhone: string;
  whatsappPhone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmarks: string;
  };
  timings: {
    days: string;
    morning: string;
    evening: string;
    sunday: string;
  };
  googleRating: number;
  reviewsCount: number;
}

export interface AyurvedicTreatment {
  id: string;
  title: string;
  sanskritName?: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'panchkarma' | 'chronic' | 'lifestyle' | 'specialized';
  benefits: string[];
  keyHerbs: string[];
  conditionsTreated: string[];
  duration: string;
  suitableFor: string;
  image: string;
  badge?: string;
}

export interface PanchkarmaTherapyStep {
  stepNumber: number;
  name: string;
  sanskritName: string;
  shortTag: string;
  description: string;
  action: string;
  targetOrgans: string;
  benefits: string[];
  herbalFormulations: string[];
  image: string;
}

export interface PanchkarmaBenefit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatmentTaken: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  content: string;
  avatarColor: string;
  verifiedBadge: boolean;
  treatment?: string;
}

export interface TrustPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  stat?: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredSlot: string;
  message: string;
}

export interface DoshaQuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    dosha: 'vata' | 'pitta' | 'kapha';
  }[];
}
