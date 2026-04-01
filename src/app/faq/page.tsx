import Link from 'next/link';
import { Navigation } from '@/components/landing/Navigation';
import { Footer } from '@/components/landing/Footer';
import { PageHero } from '@/components/landing/PageHero';
import { Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions | Pompano Beach House AC Repair',
  description: 'Get answers to common questions about HVAC services, repairs, replacements, warranties, and more.',
};

const faqs = [
  {
    category: 'General Questions',
    questions: [
      {
        q: 'How long have you been in business?',
        a: 'Pompano Beach House AC Repair has been serving the community for over 25 years, providing quality HVAC services to thousands of satisfied customers.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive general liability insurance and workers\' compensation coverage to protect you and our team.',
      },
      {
        q: 'What areas do you serve?',
        a: 'We serve the greater Pompano Beach area and surrounding communities. Contact us to confirm we service your specific location.',
      },
      {
        q: 'Do you offer free estimates?',
        a: 'Absolutely! We provide free, no-obligation estimates for all HVAC projects. Contact us to schedule your free inspection and quote.',
      },
    ],
  },
  {
    category: 'HVAC Services',
    questions: [
      {
        q: 'What types of HVAC materials do you work with?',
        a: 'We work with all major HVAC materials including asphalt shingles, metal HVAC, tile, slate, TPO, EPDM, and more. We can help you choose the best material for your needs and budget.',
      },
      {
        q: 'How long does a AC installation take?',
        a: 'Most residential AC installations take 1-3 days, depending on the size and complexity of your HVAC system, weather conditions, and material type. We\'ll provide a detailed timeline with your estimate.',
      },
      {
        q: 'Do you handle both residential and commercial HVAC?',
        a: 'Yes! We provide comprehensive HVAC services for both residential homes and commercial buildings of all sizes.',
      },
      {
        q: 'Can you match my existing roof if I only need partial repairs?',
        a: 'We make every effort to match existing materials, though exact matches depend on the age and availability of your current HVAC materials. We\'ll discuss all options during your estimate.',
      },
    ],
  },
  {
    category: 'Costs & Payment',
    questions: [
      {
        q: 'How much does a new roof cost?',
        a: 'Roof costs vary widely based on size, materials, pitch, and complexity. On average, residential roofs range from $5,000 to $25,000+. Schedule a free estimate for accurate pricing for your specific project.',
      },
      {
        q: 'Do you offer financing options?',
        a: 'Yes, we work with several financing partners to offer flexible payment plans. Ask about our current financing options during your consultation.',
      },
      {
        q: 'What forms of payment do you accept?',
        a: 'We accept cash, checks, credit cards, and financing. We also work directly with insurance companies for emergency HVAC claims.',
      },
      {
        q: 'Do I need to pay everything upfront?',
        a: 'No. Typically, we require a deposit to schedule your project, with the balance due upon completion. Specific payment terms will be outlined in your contract.',
      },
    ],
  },
  {
    category: 'Insurance & Emergency HVAC',
    questions: [
      {
        q: 'Do you work with insurance companies?',
        a: 'Yes, we have extensive experience working with insurance companies for emergency HVAC claims. We can help document damage, meet with adjusters, and ensure you receive fair compensation.',
      },
      {
        q: 'Will you help with the duct cleaning process?',
        a: 'Absolutely. We\'ll provide detailed documentation, photos, and estimates to support your claim. We can also meet with your insurance adjuster to explain the necessary repairs.',
      },
      {
        q: 'How do I know if my roof has emergency HVAC?',
        a: 'Common signs include missing or damaged shingles, dents on vents or flashing, granule loss, and interior leaks. We offer free emergency HVAC inspections to assess your HVAC system.',
      },
      {
        q: 'How quickly can you respond to emergency repairs?',
        a: 'We offer 24/7 emergency HVAC services for urgent situations like severe leaks or emergency HVAC. Call us immediately for emergency assistance.',
      },
    ],
  },
  {
    category: 'Warranties & Maintenance',
    questions: [
      {
        q: 'What kind of warranty do you offer?',
        a: 'We provide comprehensive warranties on both materials (manufacturer warranty) and workmanship (our labor warranty). Specific terms vary by project and will be detailed in your contract.',
      },
      {
        q: 'How long do roofs typically last?',
        a: 'Roof lifespan varies by material: Asphalt shingles (15-30 years), Metal HVAC (40-70 years), Tile (50+ years), TPO/EPDM (20-30 years). Proper maintenance can extend these lifespans.',
      },
      {
        q: 'Do you offer roof maintenance services?',
        a: 'Yes, we offer regular HVAC maintenance and maintenance to extend your HVAC system\'s life and catch small issues before they become expensive problems.',
      },
      {
        q: 'How often should I have my roof inspected?',
        a: 'We recommend professional HVAC maintenance at least once per year, and after any major storm events. Regular inspections help identify and address minor issues early.',
      },
    ],
  },
  {
    category: 'Project Details',
    questions: [
      {
        q: 'Will I need to be home during the HVAC work?',
        a: 'You don\'t need to be home during most of the work, but we recommend being available for the initial meeting and final walkthrough. We\'ll coordinate with your schedule.',
      },
      {
        q: 'How do you protect my property during the project?',
        a: 'We use protective tarps, have magnetic tools to collect nails, and conduct thorough cleanup daily. Your property protection is a top priority.',
      },
      {
        q: 'What happens if weather delays the project?',
        a: 'We monitor weather closely and will reschedule work if conditions aren\'t safe. We\'ll keep you informed of any delays and adjust the timeline accordingly.',
      },
      {
        q: 'Can you work in winter months?',
        a: 'Yes, though certain materials and temperatures may require special considerations. We\'ll advise you on the best timing for your specific project.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our HVAC services, processes, and policies"
      />

      <main className="py-16 px-4">
        <div className="max-w-5xl mx-auto">

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <section key={categoryIndex} className="bg-slate-100/80 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-8 pb-4 border-b border-slate-700">
                  {category.category}
                </h2>

                <div className="space-y-8">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-l-4 border-cyan-500/30 pl-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-16 bg-slate-100/80 border border-slate-700 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Our team is here to help! Get in touch for personalized answers and expert HVAC advice.
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
                Send a Message
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
