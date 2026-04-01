import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getServiceWithHtml, getServiceSlugs } from '@/lib/services';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { BeforeAfterSlider } from '@/components/landing/BeforeAfterSlider';
import { TestimonialCard } from '@/components/landing/TestimonialCard';
import { InlineCTA } from '@/components/landing/InlineCTA';
import { Phone, Shield, Clock, Award, CheckCircle, Star, Users, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Service-specific data
const serviceData: Record<string, {
  heroImage: string;
  beforeAfter: { before: string; after: string; title: string };
  features: string[];
  testimonial: { quote: string; name: string; location: string };
  stats: { value: string; label: string }[];
}> = {
  'ac-installation': {
    heroImage: '/images/services/ac-installation.jpg',
    beforeAfter: {
      before: '/images/before-after/replacement-before-1.jpg',
      after: '/images/before-after/replacement-after-1.jpg',
      title: 'Complete AC Installation',
    },
    features: [
      'GAF & Owens Corning certified installers',
      'Complete tear-off and inspection',
      '25-50 year manufacturer warranties',
      'Ice & water shield protection',
      'New flashing and ventilation',
      'Job site cleanup guarantee',
    ],
    testimonial: {
      quote: 'They replaced our 30-year-old roof in just 2 days. The crew was professional and cleaned up everything. Our home looks brand new!',
      name: 'Robert & Susan M.',
      location: 'Pompano Beach, FL',
    },
    stats: [
      { value: '500+', label: 'Roofs Replaced' },
      { value: '2-3', label: 'Day Completion' },
      { value: '25yr', label: 'Warranty' },
    ],
  },
  'ac-repair': {
    heroImage: '/images/services/ac-repair.jpg',
    beforeAfter: {
      before: '/images/before-after/repair-before-1.jpg',
      after: '/images/before-after/repair-after-1.jpg',
      title: 'Roof Leak Repair',
    },
    features: [
      'Same-day emergency repairs',
      'Leak detection technology',
      'Shingle matching guarantee',
      'Flashing and vent repairs',
      'Gutter and downspout fixes',
      '5-year repair warranty',
    ],
    testimonial: {
      quote: 'Found our leak in 10 minutes and had it fixed the same day. Saved us thousands in potential water damage!',
      name: 'Jennifer K.',
      location: 'Deerfield Beach, IL',
    },
    stats: [
      { value: '24hr', label: 'Response Time' },
      { value: '98%', label: 'First-Fix Rate' },
      { value: '5yr', label: 'Warranty' },
    ],
  },
  'emergency-hvac-service': {
    heroImage: '/images/services/emergency-hvac.jpg',
    beforeAfter: {
      before: '/images/before-after/storm-before-1.jpg',
      after: '/images/before-after/storm-after-1.jpg',
      title: 'Emergency HVAC Restoration',
    },
    features: [
      '24/7 emergency response',
      'Free emergency HVAC inspection',
      'Insurance claim assistance',
      'Emergency tarping service',
      'Hail and wind damage experts',
      'Direct insurance billing',
    ],
    testimonial: {
      quote: 'After the hail storm, they had our HVAC system tarped within 2 hours and handled everything with our insurance. Zero hassle.',
      name: 'Michael T.',
      location: 'Pompano Beach, FL',
    },
    stats: [
      { value: '2hr', label: 'Emergency Response' },
      { value: '100%', label: 'Claims Approved' },
      { value: '$0', label: 'Out of Pocket' },
    ],
  },
  'hvac-maintenance': {
    heroImage: '/images/services/hvac-maintenance.jpg',
    beforeAfter: {
      before: '/images/before-after/repair-before-1.jpg',
      after: '/images/before-after/repair-after-1.jpg',
      title: 'Professional Inspection',
    },
    features: [
      'Comprehensive 21-point inspection',
      'Drone and thermal imaging',
      'Detailed photo documentation',
      'Written condition report',
      'Repair cost estimates',
      'Maintenance recommendations',
    ],
    testimonial: {
      quote: 'Their inspection found issues the previous inspector missed. Helped us negotiate $8,000 off our home purchase!',
      name: 'David & Lisa R.',
      location: 'Coconut Creek, IL',
    },
    stats: [
      { value: 'FREE', label: 'Inspection' },
      { value: '21pt', label: 'Checklist' },
      { value: '48hr', label: 'Report Delivery' },
    ],
  },
  'commercial-hvac': {
    heroImage: '/images/services/commercial-hvac.jpg',
    beforeAfter: {
      before: '/images/before-after/commercial-before-1.jpg',
      after: '/images/before-after/commercial-after-1.jpg',
      title: 'Commercial Flat Roof',
    },
    features: [
      'TPO, EPDM, and PVC systems',
      'Minimal business disruption',
      'Preventative maintenance plans',
      'After-hours installation',
      'Multi-location capabilities',
      '20-year commercial warranties',
    ],
    testimonial: {
      quote: 'Replaced our warehouse roof over a weekend. Didn\'t miss a single day of operations. True professionals.',
      name: 'Thompson Manufacturing',
      location: 'Pompano Beach Industrial Park',
    },
    stats: [
      { value: '15k+', label: 'Sq Ft Capacity' },
      { value: '20yr', label: 'Warranty' },
      { value: '0', label: 'Days Downtime' },
    ],
  },
  'duct-cleaning': {
    heroImage: '/images/services/duct-cleaning.jpg',
    beforeAfter: {
      before: '/images/before-after/storm-before-1.jpg',
      after: '/images/before-after/storm-after-1.jpg',
      title: 'Insurance Claim Success',
    },
    features: [
      'Free claim consultation',
      'Detailed damage documentation',
      'Meet with your adjuster',
      'Supplement negotiations',
      'Appeal denied claims',
      'No upfront costs',
    ],
    testimonial: {
      quote: 'Our claim was initially denied. They helped us appeal and got the full replacement covered. Saved us $18,000!',
      name: 'Patricia W.',
      location: 'Parkland, IL',
    },
    stats: [
      { value: '95%', label: 'Approval Rate' },
      { value: '$0', label: 'Your Cost' },
      { value: '14', label: 'Day Average' },
    ],
  },
};

export async function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceWithHtml(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.metaTitle || `${service.title} | Pompano Beach House AC Repair`,
    description: service.metaDescription || service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceWithHtml(slug);

  if (!service) {
    notFound();
  }

  const data = serviceData[slug] || serviceData['ac-installation'];
  const cleanTitle = service.title.replace(/<[^>]*>/g, '').replace(/^#\s*/, '').split('\n')[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-20">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={cleanTitle}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-cyan-600 mb-4">
              <Star className="w-5 h-5 fill-cyan-600" />
              <span className="font-semibold">4.9 Rating</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-600">200+ Reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {cleanTitle}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {service.description?.substring(0, 150)}...
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15553343267"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-bold px-8 py-4 rounded-xl transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Get Free Estimate
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-100 py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-semibold text-slate-700">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-cyan-700" />
              <span className="font-semibold text-slate-700">25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-slate-700">500+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See The Transformation
            </h2>
            <p className="text-xl text-slate-600">
              Real results from our recent {cleanTitle.toLowerCase()} projects
            </p>
          </div>
          <BeforeAfterSlider
            before={data.beforeAfter.before}
            after={data.beforeAfter.after}
            title={data.beforeAfter.title}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-cyan-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 uppercase text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                What&apos;s Included
              </h2>
              <div className="space-y-4">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-slate-600">
                  No obligation. Fast response guaranteed.
                </p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-600 focus:outline-none transition text-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-600 focus:outline-none transition text-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-600 focus:outline-none transition text-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-bold py-4 rounded-xl transition text-lg flex items-center justify-center gap-2"
                >
                  Get My Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-slate-500 text-sm">
                  Or call us directly
                </p>
                <a href="tel:+15553343267" className="text-2xl font-bold text-slate-900 hover:text-cyan-700 transition">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <TestimonialCard
            quote={data.testimonial.quote}
            name={data.testimonial.name}
            location={data.testimonial.location}
          />
        </div>
      </section>

      {/* Content Section - Streamlined */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-cyan-700 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-ul:text-slate-600
              prose-li:marker:text-cyan-600
            "
            dangerouslySetInnerHTML={{ __html: service.htmlContent || '' }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <InlineCTA
            title="Ready to Get Started?"
            subtitle="Schedule your free inspection today. No obligation."
            variant="primary"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
