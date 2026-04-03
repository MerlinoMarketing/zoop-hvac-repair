export const SITE = {
  name: 'Pompano Beach House AC Repair',
  shortName: 'Pompano Beach AC Repair',
  phone: '(954) 289-6718',
  phoneHref: 'tel:+19542896718',
  email: 'info@pompanobeachhouseacrepair.com',
  address: {
    street: '1480 SW 1st Ave',
    city: 'Pompano Beach',
    state: 'FL',
    zip: '33060',
    full: '1480 SW 1st Ave, Pompano Beach, FL 33060',
  },
  hours: {
    weekday: 'Mon-Fri: 7:00 AM - 7:00 PM',
    saturday: 'Sat: 8:00 AM - 5:00 PM',
    sunday: 'Sun: Emergency Only',
  },
  license: 'CAC1820053',
  url: 'https://pompano-beach-house-ac-repair.vercel.app',
  description:
    'Professional AC repair, HVAC installation, and cooling services in Pompano Beach, FL. Licensed and insured technicians with 20+ years of experience serving Broward County.',
  geo: {
    lat: 26.2379,
    lng: -80.1248,
  },
  serviceAreas: [
    'Pompano Beach',
    'Deerfield Beach',
    'Lighthouse Point',
    'Coconut Creek',
    'Margate',
    'Coral Springs',
    'Parkland',
    'Fort Lauderdale',
    'Boca Raton',
    'Tamarac',
  ],
} as const;

export const SERVICES = [
  {
    slug: 'ac-repair',
    title: 'AC Repair',
    shortDesc: 'Fast, reliable air conditioning repairs for all makes and models. Same-day service available.',
    icon: 'Wrench',
  },
  {
    slug: 'ac-installation',
    title: 'AC Installation',
    shortDesc: 'Professional installation of high-efficiency AC systems with manufacturer warranties.',
    icon: 'AirVent',
  },
  {
    slug: 'hvac-maintenance',
    title: 'HVAC Maintenance',
    shortDesc: 'Preventive tune-ups and maintenance plans to keep your system running at peak efficiency.',
    icon: 'Settings',
  },
  {
    slug: 'emergency-ac-service',
    title: 'Emergency AC Service',
    shortDesc: '24/7 emergency AC repair when your system breaks down unexpectedly. Fast response guaranteed.',
    icon: 'Zap',
  },
  {
    slug: 'duct-cleaning',
    title: 'Duct Cleaning',
    shortDesc: 'Professional air duct cleaning to improve indoor air quality and system efficiency.',
    icon: 'Wind',
  },
  {
    slug: 'thermostat-installation',
    title: 'Thermostat Installation',
    shortDesc: 'Smart and programmable thermostat installation for energy savings and comfort control.',
    icon: 'Thermometer',
  },
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    shortDesc: 'Air purification, filtration, and humidity control solutions for healthier indoor environments.',
    icon: 'Leaf',
  },
  {
    slug: 'commercial-hvac',
    title: 'Commercial HVAC',
    shortDesc: 'Complete commercial HVAC solutions for offices, retail, restaurants, and industrial facilities.',
    icon: 'Building2',
  },
  {
    slug: 'heat-pump-services',
    title: 'Heat Pump Services',
    shortDesc: 'Installation, repair, and maintenance of energy-efficient heat pump systems.',
    icon: 'RefreshCw',
  },
  {
    slug: 'ac-refrigerant-recharge',
    title: 'AC Refrigerant Recharge',
    shortDesc: 'Expert refrigerant leak detection, repair, and recharge services for optimal cooling.',
    icon: 'Gauge',
  },
] as const;
