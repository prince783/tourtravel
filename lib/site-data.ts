export type TourPackage = {
  id: string;
  slug: string;
  name: string;
  image: string;
  price?: string;
  advance?: string;
  date?: string;
  duration?: string;
  pickupPoints: string[];
  placesToVisit: string[];
  transport?: string;
  accommodation?: string;
  meals?: string[];
  inclusions?: string[];
  description?: string;
  highlights?: string[];
  featured?: boolean;
};

export type Destination = {
  slug: string;
  name: string;
  image: string;
  description: string;
  relatedPackages: string[];
};

export const business = {
  name: "Gauri Shyam Sakshi Travels",
  location: "Yamuna Nagar, Haryana",
  phone: "+919728986528",
  phoneDisplay: "+91 97289 86528",
  phoneHref: "tel:+919728986528",
  whatsappNumber: "919728986528",
  whatsappHref: "https://wa.me/919728986528",
  email: "gaurisyam.sakshi@gmail.com",
  emailHref: "mailto:gaurisyam.sakshi@gmail.com",
};

export const destinations: Destination[] = [
  {
    slug: "vaishno-devi",
    name: "Vaishno Devi",
    image: "/packages/vaishnodevi.png",
    description: "A revered Shakti pilgrimage known for its scenic trek and spiritual atmosphere.",
    relatedPackages: ["Vaishno Devi - Shiv Khori - Amritsar"],
  },
  {
    slug: "badrinath-kedarnath",
    name: "Badrinath & Kedarnath",
    image: "/packages/badrinath.png",
    description: "Sacred Himalayan yatra destinations offering devotion, serenity and mountain views.",
    relatedPackages: ["Badrinath & Kedarnath Yatra"],
  },
  {
    slug: "vrindavan",
    name: "Vrindavan",
    image: "/packages/vrindavan.jpg",
    description: "The divine land of Krishna with temples, ghats and a deeply spiritual ambience.",
    relatedPackages: ["Shri Vrindavan Dham"],
  },
  {
    slug: "amritsar",
    name: "Amritsar",
    image: "/packages/vaishnodevi.png",
    description: "Home to the Golden Temple and a significant spiritual and cultural pilgrimage stop.",
    relatedPackages: ["Vaishno Devi - Shiv Khori - Amritsar"],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    image: "/packages/ujjain.jpg",
    description: "A sacred city on the banks of the Shipra river with famous Jyotirlinga sites.",
    relatedPackages: ["Ujjain Yatra - Sanwariya Seth"],
  },
  {
    slug: "khatu-shyam",
    name: "Khatu Shyam",
    image: "/packages/khatushyam.png",
    description: "A spiritually vibrant destination known for Khatu Shyam Ji and nearby holy stops.",
    relatedPackages: ["Khatu Shyam Dham Yatra"],
  },
];

export const services = [
  {
    title: "Pilgrimage Tour Planning",
    description: "Guidance for temple and spiritual journeys, including route planning and trip support for devotees and family groups.",
  },
  {
    title: "Group Travel Coordination",
    description: "Organised travel support for families and groups visiting sacred destinations with comfort and clear communication.",
  },
  {
    title: "Pickup & Transport Support",
    description: "Convenient pickup coordination and travel logistics to help families reach destinations with ease.",
  },
  {
    title: "Accommodation Assistance",
    description: "Support for stay arrangements and room coordination when the travel itinerary includes overnight rest stops.",
  },
  {
    title: "Custom Itinerary Guidance",
    description: "Tailored support for multiple destinations, temple visits and curated travel experiences based on each group’s needs.",
  },
  {
    title: "Enquiry & Booking Support",
    description: "Direct assistance for package enquiries, schedule confirmation and latest trip updates before travel.",
  },
];

export const packages: TourPackage[] = [
  {
    id: "delhi-darshan",
    slug: "delhi-darshan",
    name: "Delhi Darshan",
    image: "/packages/delhidarshan.png",
    price: "₹1,000/person",
    date: "2 August 2026",
    duration: "1 Day",
    pickupPoints: [
      "Chandigarh",
      "Ambala",
      "Mullana",
      "Bilaspur",
      "Jagadhri",
      "Yamunanagar",
    ],
    placesToVisit: [
      "Akshardham Temple",
      "Kalkaji Mandir",
      "Khatu Shyam Delhi Dham",
    ],
    transport: "Bus",
    meals: ["Refreshments included"],
    inclusions: ["Temple Visit", "Sightseeing", "Refreshments"],
    description:
      "A one-day Delhi Darshan pilgrimage and sightseeing tour covering Akshardham Temple, Kalkaji Mandir and Khatu Shyam Delhi Dham, with convenient pickup points across the region.",
    highlights: [
      "₹1,000 per person",
      "Refreshments included",
      "Temple Visit",
      "Sightseeing",
      "Multiple pickup points",
    ],
    featured: true,
  },
  {
    id: "vaishno-devi-shiv-khori-amritsar",
    slug: "vaishno-devi-shiv-khori-amritsar",
    name: "Vaishno Devi - Shiv Khori - Amritsar",
    image: "/packages/vaishnodevi.png",
    price: "₹3,000/person",
    date: "3 July to 9 July 2026",
    duration: "7 Days",
    pickupPoints: ["Yamunanagar", "Jagadhri", "Ambala", "Chandigarh"],
    placesToVisit: [
      "Vaishno Devi",
      "Shiv Khori",
      "Amritsar",
      "Golden Temple",
      "Wagah Border",
    ],
    transport: "AC Deluxe Bus",
    accommodation: "Rooms with attached bathroom",
    meals: ["2 Breakfast", "2 Dinner"],
    inclusions: [
      "AC Deluxe Bus",
      "Rooms with attached bathroom",
      "4 Meals",
      "2 Breakfast",
      "2 Dinner",
      "Vaishno Devi Yatra (Trek)",
      "Shiv Khori Gufa Darshan",
      "Amritsar Golden Temple",
      "Wagah Border",
    ],
    description:
      "A spiritual and cultural tour covering Vaishno Devi Yatra, Shiv Khori Gufa Darshan and the major attractions of Amritsar including the Golden Temple and Wagah Border.",
    highlights: [
      "₹3,000 per person",
      "AC Deluxe Bus",
      "Rooms with attached bathroom",
      "4 Meals",
      "Vaishno Devi Yatra",
      "Shiv Khori Gufa Darshan",
      "Golden Temple",
      "Wagah Border",
    ],
    featured: true,
  },
  {
    id: "ujjain-yatra",
    slug: "ujjain-yatra",
    name: "Ujjain Yatra - Sanwariya Seth",
    image: "/packages/ujjain.jpg",
    price: "₹6,500/person",
    date: "7 August to 13 August",
    duration: "7 Days",
    pickupPoints: [
      "Chandigarh",
      "Ambala",
      "Bilaspur",
      "Jagadhri",
      "Yamunanagar",
      "Radore",
      "Ladwa",
      "Kurukshetra",
    ],
    placesToVisit: [
      "Pushkar",
      "Ujjain",
      "Omkareshwar Jyotirlinga",
      "Mahakaleshwar Jyotirlinga",
      "Sanwariya Seth",
      "Khatu Shyam Ji",
      "Salasar Balaji",
      "Anjani Mata Mandir",
      "Agroha Dham",
    ],
    transport: "AC Deluxe Bus",
    accommodation: "Rooms with attached bathroom",
    meals: ["Breakfast", "Dinner"],
    inclusions: [
      "AC Deluxe Bus",
      "Rooms with attached bathroom",
      "Breakfast",
      "Dinner",
    ],
    description:
      "A seven-day spiritual pilgrimage covering Pushkar, Ujjain, Omkareshwar Jyotirlinga, Mahakaleshwar Jyotirlinga, Sanwariya Seth, Khatu Shyam Ji, Salasar Balaji, Anjani Mata Mandir and Agroha Dham.",
    highlights: [
      "₹6,500 per person",
      "AC Deluxe Bus",
      "Rooms with attached bathroom",
      "Breakfast & Dinner",
      "Ujjain Darshan",
      "Omkareshwar Jyotirlinga",
      "Mahakaleshwar Jyotirlinga",
      "Sanwariya Seth",
      "Khatu Shyam Ji",
      "Salasar Balaji",
    ],
    featured: true,
  },
  {
    id: "goga-madi-bagad-rajasthan",
    slug: "goga-madi-bagad-rajasthan",
    name: "Goga Madi - Bagad Rajasthan",
    image: "/packages/godamadi.png",
    price: "₹2,000/person",
    date: "16 September 2026 - 20 September 2026",
    duration: "5 Days / 4 Nights",
    pickupPoints: ["Yamunanagar", "Jagadhri", "Bilaspur", "Ambala", "Saharanpur"],
    placesToVisit: ["Goga Ji", "Shiv Khori", "Mata Vaishno Devi", "Mata Kali", "Bagad Rajasthan"],
    transport: "Bus",
    inclusions: [
      "Bus Travel",
      "Religious Yatra",
      "Goga Ji Darshan",
      "Bagad Rajasthan Yatra",
    ],
    description:
      "A religious journey to Goga Madi and Bagad Rajasthan with convenient pickup points from Yamunanagar, Jagadhri, Bilaspur, Ambala and Saharanpur.",
    highlights: [
      "₹2,000 per person",
      "16 September 2026 departure",
      "20 September 2026 return",
      "Goga Ji Darshan",
      "Bagad Rajasthan",
      "Multiple pickup points",
    ],
    featured: true,
  },
  {
    id: "khatu-shyam-dham-yatra",
    slug: "khatu-shyam-dham-yatra",
    name: "Khatu Shyam Dham Yatra",
    image: "/packages/khatushyam.png",
    price: "₹2,100/seat",
    advance: "₹1,000/seat",
    date: "20 June to 22 June 2026",
    duration: "2 Days / 1 Night",
    pickupPoints: [
      "Chandigarh",
      "Zirakpur",
      "Ambala",
      "Mullana",
      "Jagadhri",
      "Yamunanagar",
      "Radore",
      "Ladwa",
      "Kurukshetra",
    ],
    placesToVisit: [
      "Salasar Balaji",
      "Anjani Mata Mandir",
      "Khatu Shyam Ji",
      "Agroha Dham",
      "Selfie Point",
    ],
    transport: "AC Deluxe Bus",
    accommodation: "Rooms with attached bathroom",
    meals: ["2 Breakfast", "3 Dinner", "Refreshments"],
    inclusions: [
      "AC Deluxe Bus",
      "Rooms with attached bathroom",
      "2 Breakfast",
      "3 Dinner",
      "Refreshments",
      "Salasar Balaji Darshan",
      "Anjani Mata Mandir Darshan",
      "Khatu Shyam Ji Darshan",
      "Agroha Dham Visit",
      "Selfie Point",
    ],
    description:
      "A two-day devotional journey to Khatu Shyam Dham covering Salasar Balaji, Anjani Mata Mandir, Khatu Shyam Ji, Agroha Dham and a selfie point, with AC Deluxe Bus travel, accommodation and meals included.",
    highlights: [
      "₹2,100 per seat",
      "Advance booking ₹1,000 per seat",
      "2 Days / 1 Night",
      "AC Deluxe Bus",
      "Rooms with attached bathroom",
      "2 Breakfast",
      "3 Dinner",
      "Refreshments",
      "Salasar Balaji",
      "Khatu Shyam Ji",
      "Agroha Dham",
    ],
    featured: true,
  },
  {
    id: "badrinath-kedarnath-yatra",
    slug: "badrinath-kedarnath-yatra",
    name: "Badrinath & Kedarnath Yatra",
    image: "/packages/badrinath.png",
    price: "₹9,500/person",
    date: "10 June to 16 June 2026",
    duration: "7 Days",
    pickupPoints: ["Chandigarh", "Ambala", "Yamunanagar"],
    placesToVisit: [
      "Badrinath",
      "Kedarnath",
      "Hanuman Chatti",
      "Dhara Devi Mandir",
      "Devprayag",
      "Haridwar",
      "Rishikesh",
    ],
    transport: "AC 2x2 Push Back Bus",
    inclusions: [
      "AC 2x2 Push Back Bus",
      "Badrinath Yatra",
      "Kedarnath Yatra",
      "Hanuman Chatti",
      "Dhara Devi Mandir",
      "Devprayag",
      "Haridwar",
      "Rishikesh",
    ],
    description:
      "A seven-day Himalayan pilgrimage covering Badrinath and Kedarnath along with important spiritual destinations including Hanuman Chatti, Dhara Devi Mandir, Devprayag, Haridwar and Rishikesh.",
    highlights: [
      "₹9,500 per person",
      "10 June to 16 June 2026",
      "AC 2x2 Push Back Bus",
      "Badrinath",
      "Kedarnath",
      "Hanuman Chatti",
      "Dhara Devi Mandir",
      "Devprayag",
      "Haridwar",
      "Rishikesh",
    ],
    featured: true,
  },
  {
    id: "shri-vrindavan-dham",
    slug: "shri-vrindavan-dham",
    name: "Shri Vrindavan Dham",
    image: "/packages/vrindavan.jpg",
    price: "₹2,200/person",
    date: "15 July to 18 July 2026",
    duration: "4 Days",
    pickupPoints: ["Chandigarh", "Ambala", "Bilaspur", "Jagadhri", "Yamunanagar", "Radore", "Ladwa"],
    placesToVisit: [
      "Mathura",
      "Barsana",
      "Govardhan",
      "Raman Reti",
      "Char Dham Mandir",
      "Nidhivan",
      "Prem Mandir",
      "ISKCON Mandir",
      "Shri Banke Bihari Mandir",
      "Radha Vallabh Mandir",
      "Radha Raman Mandir",
    ],
    transport: "AC Bus",
    accommodation: "Stay included",
    meals: ["Food included"],
    inclusions: [
      "AC Bus",
      "Travel",
      "Accommodation",
      "Food",
      "Darshan / sightseeing at listed destinations",
    ],
    description:
      "A four-day Shri Vrindavan Dham pilgrimage covering Mathura, Barsana, Govardhan, Raman Reti, Char Dham Mandir, Nidhivan, Prem Mandir, ISKCON Mandir, Shri Banke Bihari Mandir, Radha Vallabh Mandir and Radha Raman Mandir.",
    highlights: [
      "₹2,200 per person",
      "15 July to 18 July 2026",
      "AC Bus",
      "Travel included",
      "Stay included",
      "Food included",
      "Mathura",
      "Barsana",
      "Govardhan",
      "Prem Mandir",
      "ISKCON Mandir",
      "Shri Banke Bihari Mandir",
    ],
    featured: true,
  },
];

export const featuredPackages = packages.filter((pkg) => pkg.featured);

export function getPackageBySlug(slug: string) {
  return packages.find((pkg) => pkg.slug === slug);
}

export function getWhatsAppUrl(message = "Hello, I would like to know more about Gauri Shyam Sakshi Travels tour packages.") {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getPackageWhatsAppMessage(packageName: string) {
  return `Hello, I would like to enquire about the ${packageName} package.`;
}

export function getGeneralWhatsAppMessage() {
  return "Hello, I would like to know more about Gauri Shyam Sakshi Travels tour packages.";
}
