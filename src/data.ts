import type { ContactInfo, RepairService, Review } from './types';

export const SERVICES_COLUMNS: RepairService[][] = [
  [
    {
      name: 'Display / Touchpad Replacement',
      category: 'screen',
      description:
        'Fix cracked screens, unresponsive touch controls, dead pixels, and black display issues with premium parts.',
    },
    {
      name: 'No Service / Base Band Repair',
      category: 'connectivity',
      description:
        'Restore cell signal, fix search loops, and repair baseband IC faults on the logic board.',
    },
    {
      name: 'Storage Upgrade',
      category: 'other',
      description:
        "Expand your device's storage safely with high-grade memory chips soldered professionally.",
    },
    {
      name: 'Drop Damaged Repair',
      category: 'other',
      description:
        'Structural restoration, housing alignment, and deep board repair after high-impact drop damage.',
    },
    {
      name: 'Network / MDM Unlock',
      category: 'software',
      description: 'Unlock carrier locks or bypass MDM profiles for supported devices.',
    },
  ],
  [
    {
      name: 'Battery / Housing Replacement',
      category: 'power',
      description:
        'Replace degraded or swollen batteries, and swap bent frames or cracked glass back panels.',
    },
    {
      name: 'WiFi / Bluetooth Fault Repair',
      category: 'connectivity',
      description:
        'Repair greyed-out WiFi buttons, poor connection ranges, or weak Bluetooth antenna signals.',
    },
    {
      name: 'Audio Fault Repair',
      category: 'other',
      description:
        'Fix silent speakers, broken microphones, or crackling audio with direct IC repair.',
    },
    {
      name: 'Random Restart Repair',
      category: 'power',
      description:
        'Resolve sudden shutdown loops, panic logs, and thermal sensor failures on your device.',
    },
  ],
  [
    {
      name: 'No Power Repair',
      category: 'power',
      description:
        'Trace dead motherboards, short circuits, and failed power ICs to bring dead phones back to life.',
    },
    {
      name: 'Charging Fault Repair',
      category: 'power',
      description:
        'Replace loose USB or Type-C ports, clean clogged docks, and repair charging controller chips.',
    },
    {
      name: 'Liquid Damaged Repair',
      category: 'other',
      description:
        'Professional ultrasonic chemical treatment, corrosion cleaning, and power rail restoration.',
    },
    {
      name: 'iCloud Bypass',
      category: 'software',
      description: 'Bypass activation lock loops for legally owned compatible devices.',
    },
  ],
];

export const ALL_SERVICES: RepairService[] = SERVICES_COLUMNS.flat();

export const CONTACT_DETAILS: ContactInfo = {
  address: '157/2 Naingala Road, Mirigama',
  whatsapp1: '075 713 4594',
  whatsapp2: '071 727 5214',
  facebook: 'Bestmobile',
  tiktok: '@Bestmobile_repair_center',
  email: 'bestmobile214@gmail.com',
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sajith Madushanka',
    rating: 5,
    text: 'Excellent service. They repaired my liquid-damaged iPhone 12 Pro within a day. Fair pricing and highly professional work.',
    date: 'June 15, 2026',
    avatar: 'SM',
  },
  {
    id: '2',
    name: 'Dilini Perera',
    rating: 5,
    text: 'They replaced my display quickly and the touch sensitivity is perfect. Very fast service in Mirigama.',
    date: 'May 28, 2026',
    avatar: 'DP',
  },
  {
    id: '3',
    name: 'Kasun Jayawardena',
    rating: 5,
    text: "Excellent troubleshooting for a baseband signal issue. Other shops said the board couldn't be fixed, but Best Mobile solved it.",
    date: 'April 12, 2026',
    avatar: 'KJ',
  },
  {
    id: '4',
    name: 'Fathima Rizna',
    rating: 5,
    text: 'I got a storage upgrade for my phone and it works perfectly without lag. Strongly recommended repair center.',
    date: 'March 30, 2026',
    avatar: 'FR',
  },
];
