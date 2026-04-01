'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const services = [
  { label: 'AC Repair', href: '/services/ac-repair' },
  { label: 'AC Installation', href: '/services/ac-installation' },
  { label: 'Emergency HVAC', href: '/services/emergency-hvac-service' },
  { label: 'HVAC Maintenance', href: '/services/hvac-maintenance' },
  { label: 'Duct Cleaning', href: '/services/duct-cleaning' },
  { label: 'Commercial HVAC', href: '/services/commercial-hvac' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Knowledge Center', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isServicesOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold">
              <span className="text-slate-900">Pompano Beach</span>
              <span className="text-cyan-600"> AC Repair</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={toggleServicesDropdown}
                      className="text-slate-600 hover:text-cyan-600 font-medium transition-colors flex items-center gap-1"
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-slate-50 border border-slate-700 rounded-lg shadow-xl py-2 z-50"
                      >
                        {services.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-4 py-3 text-slate-600 hover:text-cyan-600 hover:bg-slate-100/80 transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-cyan-600 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15553343267"
              className="flex items-center gap-2 text-slate-900 hover:text-cyan-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">(555) 123-4567</span>
            </a>
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-900 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-slate-600 hover:text-cyan-600 font-medium py-2 transition-colors flex items-center gap-2 w-full"
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {/* Mobile Services Submenu */}
                      {isServicesOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-700">
                          {services.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                              className="text-slate-500 hover:text-cyan-600 py-1 text-sm transition-colors block"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-slate-600 hover:text-cyan-600 font-medium py-2 transition-colors block"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <hr className="border-slate-800 my-2" />

              <a
                href="tel:+15553343267"
                className="flex items-center gap-2 text-slate-900 hover:text-cyan-600 py-2 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(555) 123-4567</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-bold px-6 py-3 rounded-lg text-center transition-all"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
