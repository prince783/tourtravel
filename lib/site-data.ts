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
  featured?: boolean;
  highlights?: string[];
};

export type Destination = {
  slug: string;
  name: string;
  image: string;
  description: string;
  relatedPackages: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
};

export const business = {
  name: "Gauri Shyam Sakshi Travels",
  location: "Yamuna Nagar, Haryana, India",
  phoneDisplay: "97289 86528",
  phoneNumber: "9728986528",
  phoneHref: "tel:+919728986528",
  whatsappNumber: "919728986528",
  whatsappHref: "https://wa.me/919728986528",
  email: "krishnagupta20080621@gmail.com",
  emailHref: "mailto:krishnagupta20080621@gmail.com",
};

export const packages: TourPackage[] = [
  {
    id: "delhi-darshan",
    slug: "delhi-darshan",
    name: "Delhi Darshan",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    price: "₹1,000/person",
    date: "Reference date: pending client confirmation",
    duration: "1 Day",
    pickupPoints: [
      "Chandigarh",
      "Ambala",
      "Mullana",
      "Bilaspur",
      "Jagadhri",
      "Yamunanagar",
    ],
    placesToVisit: ["Akshardham Temple", "Kalkaji Mandir", "Khatu Shyam Delhi Dham"],
    description:
      "A convenient day pilgrimage and sightseeing tour covering important temples and spiritual locations in and around Delhi.",
    highlights: ["Refreshments", "Temple visit", "Sightseeing"],
    meals: ["Refreshments"],
    inclusions: ["Temple visit", "Sightseeing support"],
    featured: true,
  },
  {
    id: "vrindavan-dham",
    slug: "vrindavan-dham",
    name: "Shri Vrindavan Dham",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    price: "₹2,200/person",
    date: "Reference date: pending client confirmation",
    duration: "2 Days / 1 Night",
    pickupPoints: [
      "Chandigarh",
      "Jagadhri",
      "Ambala",
      "Bilaspur",
      "Yamunanagar",
      "Radore",
      "Ladwa",
    ],
    placesToVisit: ["Vrindavan Dham", "Temples and sacred sites"],
    description:
      "A devotional journey designed for families and groups seeking a spiritual visit to the divine land of Vrindavan.",
    highlights: ["AC bus", "Stay", "Food"],
    transport: "AC Bus",
    accommodation: "Stay included",
    meals: ["Meals included"],
    inclusions: ["Accommodation", "Meals", "Travel support"],
    featured: true,
  },
  {
    id: "vaishno-devi-dham-amritsar",
    slug: "vaishno-devi-dham-amritsar",
    name: "Vaishno Devi Dham / Amritsar",
    image:
      "https://images.unsplash.com/photo-1561489412-90c7d545d6b8?auto=format&fit=crop&w=1200&q=80",
    price: "Starting ₹3,000/person",
    date: "Reference date: pending client confirmation",
    duration: "Tour package",
    pickupPoints: ["Yamuna Nagar", "Jagadhri", "Ambala", "Chandigarh"],
    placesToVisit: [
      "Vaishno Devi Yatra / Trek",
      "Shiv Khori",
      "Amritsar",
      "Golden Temple",
      "Wagah Border",
    ],
    description:
      "A combined spiritual and cultural tour covering revered shrines and heritage destinations across the region.",
    highlights: ["AC Deluxe Bus", "Attached-bathroom rooms", "4 meals"],
    transport: "AC Deluxe Bus",
    accommodation: "Attached-bathroom rooms",
    meals: ["4 meals"],
    inclusions: ["Travel", "Accommodation", "Meals"],
    featured: true,
  },
  {
    id: "ujjain-yatra",
    slug: "ujjain-yatra",
    name: "Ujjain Yatra",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    price: "Starting ₹6,500/person",
    date: "Reference date: pending client confirmation",
    duration: "Pilgrimage itinerary",
    pickupPoints: [
      "Chandigarh",
      "Ambala",
      "Bilaspur",
      "Jagadhri",
      "Yamuna Nagar",
      "Radore",
      "Ladwa",
      "Kurukshetra",
    ],
    placesToVisit: [
      "Pushkar",
      "Ujjain",
      "Omkareshwar Jyotirlinga",
      "Sanwaria Seth",
      "Khatu Shyam Ji",
      "Salasar Balaji",
      "Anjani Mata Mandir",
      "Agra Dham",
    ],
    description:
      "A spiritually rich pilgrimage covering sacred destinations and temple visits across the route.",
    highlights: ["AC Deluxe Bus", "Attached-bathroom rooms", "Breakfast & dinner"],
    transport: "AC Deluxe Bus",
    accommodation: "Attached-bathroom rooms",
    meals: ["Breakfast", "Dinner"],
    inclusions: ["Travel", "Accommodation", "Meals"],
    featured: true,
  },
  {
    id: "khatu-shyam-ji-yatra",
    slug: "khatu-shyam-ji-yatra",
    name: "Khatu Shyam Ji Yatra",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    price: "₹2,100/seat",
    advance: "₹1,000/seat",
    date: "Reference date: pending client confirmation",
    duration: "1 to 2 days",
    pickupPoints: ["Yamuna Nagar", "Jagadhri", "Ambala", "Chandigarh"],
    placesToVisit: ["Salasar Balaji", "Anjani Mata Mandir", "Khatu Shyam Ji"],
    description:
      "A focused pilgrimage to revered temples with convenient bus travel and shared accommodation arrangements.",
    highlights: ["AC Deluxe Bus", "Attached-bathroom rooms", "2 breakfasts, 3 dinners"],
    transport: "AC Deluxe Bus",
    accommodation: "Attached-bathroom rooms",
    meals: ["2 breakfasts", "3 dinners"],
    inclusions: ["Travel", "Accommodation", "Meals"],
    featured: true,
  },
  {
    id: "nakodar-darbar-sakoon",
    slug: "nakodar-darbar-sakoon",
    name: "Nakodar Darbar / Sakoon",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    price: "Pending client confirmation",
    date: "Pending client confirmation",
    duration: "Pending client confirmation",
    pickupPoints: ["Yamuna Nagar"],
    placesToVisit: ["Nakodar Darbar", "Sakoon"],
    description:
      "A bus yatra from Yamuna Nagar to Nakodar. Full package details are pending confirmation from the client.",
    highlights: ["Bus yatra", "Pending confirmation"],
    featured: false,
  },
  {
    id: "badrinath-kedarnath",
    slug: "badrinath-kedarnath",
    name: "Badrinath & Kedarnath",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    price: "₹9,500/traveller",
    date: "Reference date: pending client confirmation",
    duration: "Pilgrimage route",
    pickupPoints: ["Yamuna Nagar", "Jagadhri", "Ambala", "Chandigarh"],
    placesToVisit: ["Hanuman Chatti", "Dhara Devi Mandir", "Devprayag", "Haridwar", "Rishikesh"],
    description:
      "A premium Himalayan yatra route highlighting some of the most sacred stops on the journey.",
    highlights: ["AC 2x2 push-back bus", "Pilgrimage route"],
    transport: "AC 2x2 push-back bus",
    inclusions: ["Bus travel", "Pilgrimage route support"],
    featured: true,
  },
];

export const featuredPackages = packages.filter((pkg) => pkg.featured);

export const destinations: Destination[] = [
  {
    slug: "vrindavan",
    name: "Vrindavan",
    image:
      "https://images.unsplash.com/photo-1603250840238-0c9d9ca8ea53?auto=format&fit=crop&w=1200&q=80",
    description: "A devotional destination known for its spiritual significance and vibrant temple culture.",
    relatedPackages: ["Shri Vrindavan Dham"],
  },
  {
    slug: "vaishno-devi",
    name: "Vaishno Devi",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    description: "A revered pilgrimage destination with a well-known yatra route and spiritual atmosphere.",
    relatedPackages: ["Vaishno Devi Dham / Amritsar"],
  },
  {
    slug: "amritsar",
    name: "Amritsar",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
    description: "A destination known for its cultural heritage and sacred religious importance.",
    relatedPackages: ["Vaishno Devi Dham / Amritsar"],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description: "A spiritually important destination with a deep-rooted pilgrimage tradition.",
    relatedPackages: ["Ujjain Yatra"],
  },
  {
    slug: "khatu-shyam-ji",
    name: "Khatu Shyam Ji",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    description: "A dedicated pilgrimage destination that attracts devotees throughout the year.",
    relatedPackages: ["Khatu Shyam Ji Yatra"],
  },
  {
    slug: "salasar-balaji",
    name: "Salasar Balaji",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    description: "A sacred stop for devotees undertaking a temple-focused pilgrimage journey.",
    relatedPackages: ["Khatu Shyam Ji Yatra", "Ujjain Yatra"],
  },
  {
    slug: "badrinath",
    name: "Badrinath",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    description: "A Himalayan pilgrimage destination known for its spiritual atmosphere and scenic route.",
    relatedPackages: ["Badrinath & Kedarnath"],
  },
  {
    slug: "kedarnath",
    name: "Kedarnath",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description: "A revered Himalayan shrine destination often included in high-altitude pilgrim journeys.",
    relatedPackages: ["Badrinath & Kedarnath"],
  },
  {
    slug: "haridwar",
    name: "Haridwar",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    description: "A popular spiritual destination noted for its sacred ghats and pilgrim travel routes.",
    relatedPackages: ["Badrinath & Kedarnath"],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    description: "A spiritual and scenic destination on the journey to the Himalayan shrines.",
    relatedPackages: ["Badrinath & Kedarnath"],
  },
];

export const services: ServiceItem[] = [
  {
    title: "Tour & travel packages",
    description: "Curated pilgrimage and religious tour plans designed for easy group travel and pure spiritual focus.",
  },
  {
    title: "Pilgrimage / religious yatra",
    description: "Dedicated yatras to temples, shrines and spiritually significant destinations across the route.",
  },
  {
    title: "Group bus travel",
    description: "Comfortable group travel arrangements for pilgrims and families seeking shared transport support.",
  },
  {
    title: "Destination-specific tours",
    description: "Customised tours for destinations such as Vrindavan, Vaishno Devi, Ujjain, Haridwar and more.",
  },
  {
    title: "Package enquiry and booking assistance",
    description: "Assistance with understanding package details, dates and availability before planning your trip.",
  },
  {
    title: "Accommodation where included",
    description: "Comfort-oriented stay support included in selected package details as shared by the client.",
  },
  {
    title: "Meals where included",
    description: "Meal support included in select packages, with details marked as reference information.",
  },
  {
    title: "Transport arrangements where offered",
    description: "Travel arrangements are provided for packages where the client has specified transport details.",
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((item) => item.slug === slug);
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getPackageWhatsAppMessage(packageName: string) {
  return `Hello, I am interested in the ${packageName} package. Please share the latest details, date and availability.`;
}

export function getGeneralWhatsAppMessage() {
  return "Hello, I would like to know more about Gauri Shyam Sakshi Travels tour packages.";
}
