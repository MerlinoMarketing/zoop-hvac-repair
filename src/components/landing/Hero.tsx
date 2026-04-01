import { Phone, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hvac-hero.jpg"
          alt="Professional HVAC contractor servicing residential HVAC system"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Subtle Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/60"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-600/10 border border-cyan-600/30 text-cyan-600 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-semibold">Licensed & Insured • 25+ Years Experience</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Expert HVAC Services
            <span className="block text-cyan-600 mt-2">You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Keep your home comfortable year-round with expert HVAC solutions. From AC repairs to new installations,
            we deliver reliable comfort with warranties you can count on.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-600/50 hover:scale-105"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:+15553343267"
              className="bg-white/20 hover:bg-white/30 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: (555) 123-4567
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-3 text-slate-200">
              <div className="bg-cyan-600/10 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Licensed & Insured</div>
                <div className="text-sm text-slate-300">Fully Certified</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <div className="bg-cyan-600/10 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Free Estimates</div>
                <div className="text-sm text-slate-300">No Obligation</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <div className="bg-cyan-600/10 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Lifetime Warranty</div>
                <div className="text-sm text-slate-300">Quality Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">25+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">5,000+</div>
                <div className="text-sm text-slate-300">Systems Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">4.9/5</div>
                <div className="text-sm text-slate-300">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
