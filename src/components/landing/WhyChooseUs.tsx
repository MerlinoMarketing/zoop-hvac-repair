import { Shield, Award, Users, Clock, DollarSign, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your complete protection and peace of mind.'
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Expert installation with premium materials backed by industry-leading warranties.'
  },
  {
    icon: DollarSign,
    title: 'Free Estimates',
    description: 'Transparent pricing with no hidden fees. Get a detailed estimate at no cost or obligation.'
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'We respect your time. Projects completed on schedule with minimal disruption.'
  },
  {
    icon: Users,
    title: 'Local Experts',
    description: 'Family-owned business serving our community with integrity for over 25 years.'
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We don\'t just meet expectations, we exceed them. Your satisfaction is our priority.'
  }
];

const stats = [
  {
    number: '25+',
    label: 'Years in Business',
    color: 'text-cyan-600'
  },
  {
    number: '5,000+',
    label: 'Happy Customers',
    color: 'text-blue-400'
  },
  {
    number: '98%',
    label: 'Customer Satisfaction',
    color: 'text-green-400'
  },
  {
    number: '4.9/5',
    label: 'Average Rating',
    color: 'text-purple-400'
  }
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/general/why-choose-us.jpg"
          alt="Professional HVAC team at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-800/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-cyan-600">Our Team?</span>
          </h2>
          <p className="text-xl text-slate-200">
            We're more than just HVAC technicians - we're your partners in protecting what matters most.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-slate-500 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-100/80 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/5"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="bg-gradient-to-br from-cyan-600/15 to-cyan-700/10 w-14 h-14 rounded-lg flex items-center justify-center">
                  <reason.icon className="h-7 w-7 text-cyan-600" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-200 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600/10 to-teal-500/10 border-2 border-cyan-600/30 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Comfort Guarantee Warranty
            </h3>
            <p className="text-lg text-slate-200 mb-6">
              We stand behind our work with a lifetime warranty on workmanship.
              When you choose us, you're choosing quality that lasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-600" />
                Licensed #334326
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-600" />
                Insured & Bonded
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-cyan-600" />
                BBB A+ Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
