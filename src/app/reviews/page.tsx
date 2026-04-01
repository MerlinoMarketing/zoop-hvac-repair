import Link from 'next/link';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { PageHero } from '@/components/landing/PageHero';
import { Star, Quote, Trophy, CheckCircle, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Customer Reviews & Testimonials | Pompano Beach House AC Repair',
  description: 'Read reviews from our satisfied customers. See why Pompano Beach House AC Repair is the trusted choice for HVAC services.',
};

const reviews = [
  {
    name: 'Sarah Johnson',
    location: 'Pompano Beach, FL',
    rating: 5,
    date: 'December 2024',
    service: 'AC Installation',
    review: 'Outstanding service from start to finish! The team was professional, punctual, and thorough. They completed our AC installation in just two days and the cleanup was impeccable. The new roof looks amazing and we already noticed improved energy efficiency. Highly recommend Pompano Beach House AC Repair!',
  },
  {
    name: 'Michael Chen',
    location: 'Deerfield Beach, IL',
    rating: 5,
    date: 'November 2024',
    service: 'Emergency HVAC Service',
    review: 'After a severe emergency HVACd our HVAC system, Pompano Beach House AC Repair responded quickly and helped us navigate the duct cleaning process. They were patient, thorough, and made sure we got the coverage we deserved. The repairs were completed professionally and our HVAC system is better than ever.',
  },
  {
    name: 'Emily Rodriguez',
    location: 'Coconut Creek, IL',
    rating: 5,
    date: 'November 2024',
    service: 'Commercial HVAC',
    review: 'We hired Pompano Beach House AC Repair for our commercial building and couldn\'t be happier. They worked around our business hours, minimized disruption, and delivered exceptional quality. The project manager kept us informed every step of the way. True professionals.',
  },
  {
    name: 'Robert Anderson',
    location: 'Parkland, IL',
    rating: 5,
    date: 'October 2024',
    service: 'HVAC Inspection',
    review: 'Very thorough inspection with detailed photos and explanation of my roof\'s condition. They didn\'t try to upsell me on unnecessary work and were honest about what needed immediate attention versus what could wait. Trustworthy company!',
  },
  {
    name: 'Jennifer Martinez',
    location: 'Oakwood, IL',
    rating: 5,
    date: 'October 2024',
    service: 'Emergency Leak Repair',
    review: 'Called them on a Sunday evening with a major leak and they had someone out within 2 hours. Quick, professional emergency repair that saved our home from water damage. Fair pricing and excellent workmanship. They earned a customer for life!',
  },
  {
    name: 'David Thompson',
    location: 'Maple Grove, IL',
    rating: 5,
    date: 'September 2024',
    service: 'AC Installation',
    review: 'Pompano Beach House AC Repair replaced our 25-year-old roof and the transformation is incredible. The crew was respectful, hardworking, and cleaned up everything daily. The estimate was accurate with no surprise charges. Worth every penny!',
  },
  {
    name: 'Lisa Wang',
    location: 'Weston, IL',
    rating: 5,
    date: 'September 2024',
    service: 'Gutter Installation',
    review: 'Fantastic experience! They helped us choose the right gutter system for our home and the installation was flawless. The team took pride in their work and it shows. Our home is now protected from water damage and looks great too.',
  },
  {
    name: 'James Wilson',
    location: 'Davie, IL',
    rating: 5,
    date: 'August 2024',
    service: 'Duct Cleaning',
    review: 'Pompano Beach House AC Repair helped us through the entire duct cleaning process after hail damage. They met with the adjuster, provided detailed documentation, and made sure everything was covered. Professional and genuinely caring team.',
  },
  {
    name: 'Amanda Foster',
    location: 'Cedar Creek, IL',
    rating: 5,
    date: 'August 2024',
    service: 'AC Repair',
    review: 'Quick, efficient repair of damaged shingles. They matched the existing materials perfectly and you can\'t even tell where the repair was made. Reasonable pricing and excellent communication throughout the process.',
  },
  {
    name: 'Christopher Lee',
    location: 'Brookside, IL',
    rating: 5,
    date: 'July 2024',
    service: 'AC Installation',
    review: 'From the initial consultation to final cleanup, Pompano Beach House AC Repair exceeded our expectations. They helped us select high-quality materials within our budget and the installation was seamless. The crew was respectful of our property and neighbors. Highly professional!',
  },
];

const stats = [
  { number: '500+', label: 'Satisfied Customers' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '98%', label: 'Would Recommend' },
  { number: '25+', label: 'Years Experience' },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      <PageHero
        title="Customer Reviews & Testimonials"
        subtitle="See what our satisfied customers have to say about their experience with Pompano Beach House AC Repair"
      />

      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-100/80 border border-slate-700 rounded-lg p-6">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-slate-100/80 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{review.name}</h3>
                    <p className="text-sm text-slate-500">{review.location}</p>
                  </div>
                  <Quote className="h-8 w-8 text-cyan-600/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cyan-600 text-cyan-600" />
                  ))}
                </div>

                {/* Service & Date */}
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="bg-cyan-600/10 text-cyan-600 px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                  <span className="text-slate-500">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>

          {/* BBB & Certifications */}
          <section className="bg-slate-100/80 border border-slate-700 rounded-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Trusted & Certified
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Star className="h-10 w-10 text-cyan-600" aria-hidden="true" />
                </div>
                <div className="font-bold text-slate-900 mb-2">BBB Accredited</div>
                <div className="text-cyan-600 font-semibold mb-2">A+ Rating</div>
                <div className="text-sm text-slate-500">
                  Trusted by the Better Business Bureau
                </div>
              </div>
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Trophy className="h-10 w-10 text-cyan-600" aria-hidden="true" />
                </div>
                <div className="font-bold text-slate-900 mb-2">NATE Certified</div>
                <div className="text-cyan-600 font-semibold mb-2">Top 3%</div>
                <div className="text-sm text-slate-500">
                  Elite contractor certification
                </div>
              </div>
              <div className="bg-slate-50/80 border border-slate-700 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <CheckCircle className="h-10 w-10 text-cyan-600" aria-hidden="true" />
                </div>
                <div className="font-bold text-slate-900 mb-2">Licensed & Insured</div>
                <div className="text-cyan-600 font-semibold mb-2">Fully Covered</div>
                <div className="text-sm text-slate-500">
                  Complete protection for your project
                </div>
              </div>
            </div>
          </section>

          {/* Submit Review CTA */}
          <section className="bg-gradient-to-br from-cyan-600/10 to-slate-800/50 border border-cyan-500/30 rounded-xl p-8 md:p-12 mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Recent Customer?
            </h2>
            <p className="text-xl text-slate-600 mb-6">
              We'd love to hear about your experience with Pompano Beach House AC Repair!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-600/20"
            >
              Share Your Review
            </Link>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-slate-100/80 border border-slate-700 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Experience the Our Difference?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join hundreds of satisfied customers. Get your free estimate today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15553343267"
                className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-8 py-4 rounded-lg transition shadow-lg shadow-cyan-600/20"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call: (555) 123-4567
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-4 rounded-lg transition border border-slate-600"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Request Free Estimate
              </Link>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-700 text-center">
            <Link
              href="/"
              className="text-cyan-600 hover:text-cyan-500 transition inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
