import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerColumns: FooterColumn[] = [
    {
      title: 'Explore',
      links: [
        { label: 'Inspiration', href: '#' },
        { label: 'Gallery', href: '#' },
        { label: 'How it works', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: "Rachel's story", href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Professional tools', href: '#' },
        { label: 'Mental health resources', href: '#' },
        { label: 'Case studies', href: '#' },
        { label: 'Company', href: '#' }
      ]
    },
    {
      title: 'About us',
      links: [
        { label: 'Our mission', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Support', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
          {/* Logo Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-serif text-gray-900 italic">Logo</h2>
          </div>

          {/* Footer Links Columns */}
          {footerColumns.map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 tracking-wide">
              Subscribe
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Join our community and receive updates on memory preservation techniques
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-gray-800 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-0 transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 border border-gray-800 text-gray-900 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              By subscribing, you agree to our privacy policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-gray-600">
            <p>© 2026 Love in Color. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy policy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms of service
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Cookie settings
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;