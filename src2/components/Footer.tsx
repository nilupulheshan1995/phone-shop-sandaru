import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Facebook, Send, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/Bestmobile',
      icon: Facebook,
      label: 'Bestmobile',
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@Bestmobile_repair_center',
      // We can use a direct custom style or SVG/Icon wrapper for TikTok, but simple text or Lucide Send icon is fine
      icon: Send,
      label: '@Bestmobile_repair_center',
      color: 'hover:text-[#EE1D52]'
    }
  ];

  return (
    <footer id="contact" className="bg-neutral-950 text-white pt-24 pb-8 transition-colors duration-300 relative border-t border-neutral-900">
      
      {/* Contact & Map Section Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary dark:text-primary-dark uppercase tracking-widest bg-primary-light border border-primary/30 px-3.5 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Contact & Location Details
          </h2>
          <p className="font-sans text-neutral-400 mt-4 text-base">
            Have questions about a repair or want to request a price quote? Drop by our physical store or message us on WhatsApp anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-details-grid">
          
          {/* Quick Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-900 border border-neutral-800 p-8 rounded-3xl" id="contact-info-card">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">Best Mobile Tech Desk</h3>
                <p className="text-xs text-neutral-400 mt-1">Direct support channels operated by certified solder techs</p>
              </div>

              <div className="space-y-5">
                
                {/* Physical Store Address */}
                <div className="flex gap-4 items-start" id="address-block">
                  <span className="w-10 h-10 rounded-xl bg-primary-light border border-primary/30 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Address</h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      📍 {CONTACT_DETAILS.address}
                    </p>
                    <span className="text-[10px] text-neutral-400 font-medium">Naingala Road, Mirigama, Sri Lanka.</span>
                  </div>
                </div>

                {/* Direct Dial / WhatsApp 1 */}
                <div className="flex gap-4 items-start" id="phone-1-block">
                  <span className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">WhatsApp Primary</h4>
                    <a 
                      href={`https://wa.me/94${CONTACT_DETAILS.whatsapp1.replace(/\s+/g, '').substring(1)}`}
                      target="_blank" 
                      className="text-base font-mono font-bold text-white hover:text-green-400 transition-colors block mt-0.5"
                    >
                      {CONTACT_DETAILS.whatsapp1}
                    </a>
                  </div>
                </div>

                 {/* Direct Dial / Phone 2 */}
                <div className="flex gap-4 items-start" id="phone-2-block">
                  <span className="w-10 h-10 rounded-xl bg-primary-light border border-primary/30 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Alt Mobile Support</h4>
                    <a 
                      href={`tel:${CONTACT_DETAILS.whatsapp2.replace(/\s+/g, '')}`}
                      className="text-base font-mono font-bold text-white hover:text-primary transition-colors block mt-0.5"
                    >
                      {CONTACT_DETAILS.whatsapp2}
                    </a>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex gap-4 items-start" id="email-block">
                  <span className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Tech Desk Email</h4>
                    <a 
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="text-sm font-semibold text-white hover:text-primary transition-colors block mt-1"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels List */}
            <div className="pt-6 border-t border-neutral-800 mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between" id="social-channels-list">
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Follow our daily fixes:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-neutral-800 text-neutral-300 transition-colors ${social.color} flex items-center gap-1.5 text-xs font-semibold`}
                      title={`Visit our ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.name === 'Facebook' ? 'Facebook' : 'TikTok'}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Interactive Styled Location Card/Map Placement */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-neutral-900 border border-neutral-800 p-8 rounded-3xl overflow-hidden relative group" id="location-card">
            
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">Our Location & Working Hours</h3>
                  <p className="text-xs text-neutral-400 mt-1">Perfectly situated on Naingala Rd for ease of access</p>
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>STORE OPEN NOW</span>
                </div>
              </div>

              {/* Working Hours list */}
              <div className="grid grid-cols-2 gap-4 mt-6 text-xs text-neutral-300 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Mon - Sat: 8:30 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Sunday: 9:00 AM - 3:00 PM</span>
                </div>
              </div>
            </div>

            {/* Custom stylized illustration representing a location map with Naingala Mirigama coordinates */}
            <div className="relative h-[230px] rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden flex flex-col justify-center items-center text-center p-6 shadow-inner" id="map-mockup-wrapper">
              
              {/* Abstract radar/grid background pattern to make it highly premium */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

              {/* Map pin with visual concentric wave ripples */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-primary/20 animate-ping" />
                  <div className="absolute -inset-8 rounded-full bg-primary/10 animate-pulse" />
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-neutral-950 shadow-xl shadow-cyan-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                
                <h4 className="font-display font-bold text-sm text-white mt-4 tracking-tight">
                  📍 157/2 Naingala Road, Mirigama
                </h4>
                <p className="text-xs text-neutral-400 max-w-sm mt-1">
                  Located near the main junction. Ample parking available directly in front of our shop.
                </p>

                {/* Trigger map instructions button */}
                <button
                  onClick={() => window.open('https://maps.google.com/?q=157/2+Naingala+Mirigama', '_blank')}
                  className="mt-4 px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-[11px] uppercase tracking-wider transition-colors border border-neutral-700 cursor-pointer"
                  id="google-maps-btn"
                >
                  Get Google Maps Directions
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Under Footer copyright details */}
      <div className="border-t border-neutral-900 bg-black/60 pt-8 pb-4 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="font-display font-extrabold text-sm text-white tracking-wide uppercase">
              BEST MOBILE <span className="font-script text-primary font-normal capitalize">repair center</span>
            </div>
            <p className="text-[10px] mt-0.5">Professional Board-level repairs and screen replacements since 2018.</p>
          </div>

          <div className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>Guaranteed Micro-soldering Standard</span>
          </div>

          <p className="flex items-center justify-center gap-1">
            <span>&copy; {currentYear} BEST MOBILE. All rights reserved.</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
