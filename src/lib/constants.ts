export const SITE = {
  name: 'Zoop HVAC Repair',
  shortName: 'Zoop HVAC',
  phone: '(623) 555-0147',
  phoneHref: 'tel:+16235550147',
  email: 'info@zoophvac.com',
  address: {
    street: '550 W Adobe Way',
    city: 'El Mirage',
    state: 'AZ',
    zip: '85335',
    full: '550 W Adobe Way, El Mirage, AZ 85335',
  },
  hours: {
    weekday: 'Mon-Fri: 7:00 AM - 6:00 PM',
    saturday: 'Sat: 8:00 AM - 4:00 PM',
    sunday: 'Sun: Emergency Only',
  },
  license: 'ROC#314160',
  url: 'https://zoop-hvac-repair.vercel.app',
  description:
    'Professional AC repair, HVAC installation, and cooling services in El Mirage, AZ. Licensed and insured technicians with 20+ years of experience serving Maricopa County.',
  geo: {
    lat: 33.5886,
    lng: -112.2927,
  },
  serviceAreas: [
    'El Mirage',
    'Glendale',
    'Litchfield Park',
    'Avondale',
    'Surprise',
    'Goodyear',
    'Verrado',
    'Gladden',
    'Peoria',
    'Sun City',
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
