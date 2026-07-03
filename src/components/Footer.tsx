import {
  Clock,
  Globe2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/Bestmobile',
    icon: Globe2,
    color: 'hover:text-[#1877F2]',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@Bestmobile_repair_center',
    icon: Send,
    color: 'hover:text-[#EE1D52]',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative border-t border-neutral-900 bg-neutral-950 pt-24 pb-8 text-white transition-colors duration-300"
    >
      <div className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-primary/30 bg-primary-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark">
            Get In Touch
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Contact and Location Details
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Have questions about a repair or want a price quote? Visit the shop or message us on
            WhatsApp anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12" id="contact-details-grid">
          <div
            className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900 p-8 lg:col-span-5"
            id="contact-info-card"
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  Best Mobile Tech Desk
                </h3>
                <p className="mt-1 text-xs text-neutral-400">
                  Direct support channels operated by certified soldering technicians
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4" id="address-block">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary-light text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Address</h4>
                    <p className="mt-1 text-sm font-semibold text-white">{CONTACT_DETAILS.address}</p>
                    <span className="text-[10px] font-medium text-neutral-400">
                      Naingala Road, Mirigama, Sri Lanka
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4" id="phone-1-block">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10 text-green-500">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      WhatsApp Primary
                    </h4>
                    <a
                      href={`https://wa.me/94${CONTACT_DETAILS.whatsapp1.replace(/\s+/g, '').slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block font-mono text-base font-bold text-white transition-colors hover:text-green-400"
                    >
                      {CONTACT_DETAILS.whatsapp1}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" id="phone-2-block">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary-light text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Alternate Support
                    </h4>
                    <a
                      href={`tel:${CONTACT_DETAILS.whatsapp2.replace(/\s+/g, '')}`}
                      className="mt-0.5 block font-mono text-base font-bold text-white transition-colors hover:text-primary"
                    >
                      {CONTACT_DETAILS.whatsapp2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" id="email-block">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Tech Desk Email
                    </h4>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="mt-1 block text-sm font-semibold text-white transition-colors hover:text-primary"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row"
              id="social-channels-list"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Follow our daily fixes
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 rounded-lg bg-neutral-800 p-2 text-xs font-semibold text-neutral-300 transition-colors ${social.color}`}
                      title={`Visit our ${social.name}`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 lg:col-span-7"
            id="location-card"
          >
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-white">
                    Our Location and Working Hours
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400">
                    Easy access on Naingala Road with direct storefront parking
                  </p>
                </div>
                <div className="hidden rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-bold text-green-400 sm:flex">
                  Open 7 days a week
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 text-xs font-medium text-neutral-300 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Mon - Sat: 8:30 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <span>Sunday: 9:00 AM - 3:00 PM</span>
                </div>
              </div>
            </div>

            <div
              className="relative flex h-[230px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-center shadow-inner"
              id="map-mockup-wrapper"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-primary/20 animate-ping" />
                  <div className="absolute -inset-8 rounded-full bg-primary/10 animate-pulse" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-neutral-950 shadow-xl shadow-cyan-500/30">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>

                <h4 className="font-display mt-4 text-sm font-bold tracking-tight text-white">
                  157/2 Naingala Road, Mirigama
                </h4>
                <p className="mt-1 max-w-sm text-xs text-neutral-400">
                  Located near the main junction with customer parking directly in front of the shop.
                </p>

                <button
                  onClick={() => window.open('https://maps.google.com/?q=157/2+Naingala+Mirigama', '_blank', 'noopener,noreferrer')}
                  className="mt-4 cursor-pointer rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-neutral-700"
                  id="google-maps-btn"
                >
                  Get Google Maps Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900 bg-black/60 pt-8 pb-4 text-center text-xs text-neutral-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <div className="font-display text-sm font-extrabold uppercase tracking-wide text-white">
              BEST MOBILE <span className="font-script font-normal capitalize text-primary">repair center</span>
            </div>
            <p className="mt-0.5 text-[10px]">
              Professional board-level repairs and screen replacements since 2018.
            </p>
          </div>

          <div className="flex items-center gap-1 font-medium">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <span>Guaranteed micro-soldering standard</span>
          </div>

          <p>&copy; {currentYear} BEST MOBILE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
