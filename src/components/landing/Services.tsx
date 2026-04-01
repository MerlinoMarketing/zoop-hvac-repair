import { Wrench, Home, Cloud, ClipboardCheck, FileText, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Wrench,
    title: 'AC Repair',
    description: 'Fast, reliable repairs for leaks, damaged shingles, and emergency HVAC. We fix problems before they become major issues.',
    href: '/services/ac-repair',
    features: ['Same-Day Service', 'All Makes & Models', 'Upfront Pricing'],
    image: '/images/services/ac-repair.jpg'
  },
  {
    icon: Home,
    title: 'AC Installation',
    description: 'Complete AC installation with premium materials. Transform your home with a brand new, durable HVAC system.',
    href: '/services/ac-installation',
    features: ['Energy Star Equipment', 'Manufacturer Warranty', 'Professional Installation'],
    image: '/images/services/ac-installation.jpg'
  },
  {
    icon: Cloud,
    title: 'Emergency HVAC',
    description: 'Comprehensive emergency HVAC assessment and restoration. We work directly with your insurance company.',
    href: '/services/emergency-hvac-service',
    features: ['Duct Cleaning', 'Fast Response', 'No Extra Charge'],
    image: '/images/services/emergency-hvac.jpg'
  },
  {
    icon: ClipboardCheck,
    title: 'HVAC Maintenance',
    description: 'Thorough HVAC maintenance with detailed reports. Catch problems early and extend your HVAC system\'s lifespan.',
    href: '/services/hvac-maintenance',
    features: ['Comprehensive Tune-Up', 'Filter Replacement', 'Performance Testing'],
    image: '/images/services/hvac-maintenance.jpg'
  },
  {
    icon: FileText,
    title: 'Duct Cleaning',
    description: 'Professional duct cleaning to improve air quality and system efficiency. Remove dust, allergens, and debris from your ductwork.',
    href: '/services/duct-cleaning',
    features: ['Improved Air Quality', 'Sanitization', 'Allergen Removal'],
    image: '/images/services/duct-cleaning.jpg'
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive HVAC Services
          </h2>
          <p className="text-xl text-slate-600">
            From minor repairs to complete replacements, we handle all your HVAC needs with expertise and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group bg-slate-100/80 hover:bg-slate-100 border border-slate-600/50 hover:border-cyan-600/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/10 hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional HVAC service`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-cyan-600/90 group-hover:bg-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center transition-colors shadow-lg">
                    <service.icon className="h-7 w-7 text-slate-900" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
