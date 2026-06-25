export interface ProductItem {
  name: string;
  category: string;
  group: "Interior" | "Modular" | "Exterior" | "Lighting";
  image: string;
  description: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const companyInfo = {
  name: "Parth Home Decor",
  phone: "+91 7017237170",
  whatsapp: "+91 7017237170",
  whatsappLink: "https://wa.me/917017237170",
  email: "parthhomedecoretawah@gmail.com",
  address: "N.H.19 Service Road, Near Sai Cold Store, Bharthana Chauraha, Etawah - 206001",
  instagramUrl: "https://instagram.com/parthhomedecor",
  facebookUrl: "https://facebook.com",
  linkedinUrl: "https://linkedin.com",
  mapEmbedUrl: "https://www.google.com/maps?q=interior+design+showroom&output=embed",
};

export const businessHours = [
  { day: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
  { day: "Sunday", time: "11:00 AM – 6:00 PM" },
  { day: "Public Holidays", time: "By Appointment" },
];

export const products: ProductItem[] = [
  // Interior
  {
    name: "PVC Panels",
    category: "Interior",
    group: "Interior",
    image: img("photo-1615873968403-89e068629265"),
    description: "Lightweight, moisture-resistant decorative wall panels.",
  },
  {
    name: "WPC Panels",
    category: "Interior",
    group: "Interior",
    image: img("photo-1616486338812-3dadae4b4ace"),
    description: "Wood-polymer composite panels with premium texture.",
  },
  {
    name: "Fluted Panels",
    category: "Interior",
    group: "Interior",
    image: img("photo-1618221195710-dd6b41faaea6"),
    description: "Vertical ribbed panels for sculptural feature walls.",
  },
  {
    name: "Charcoal Panels",
    category: "Interior",
    group: "Interior",
    image: img("photo-1600585154340-be6161a56a0c"),
    description: "Dark, dramatic finishes for modern interiors.",
  },
  {
    name: "Soffit Panels",
    category: "Interior",
    group: "Interior",
    image: img("photo-1600607687939-ce8a6c25118c"),
    description: "Refined ceiling and underside cladding.",
  },
  {
    name: "UV Sheets",
    category: "Interior",
    group: "Interior",
    image: img("photo-1556909114-f6e7ad7d3136"),
    description: "High-gloss UV-coated decorative surfaces.",
  },
  {
    name: "UV Rolls",
    category: "Interior",
    group: "Interior",
    image: img("photo-1567016526105-22da7c13161a"),
    description: "Flexible UV finishes for curved applications.",
  },
  {
    name: "3D Panels",
    category: "Interior",
    group: "Interior",
    image: img("photo-1618219740975-d40978bb7378"),
    description: "Sculpted dimensional panels with cinematic light play.",
  },
  {
    name: "Mosaic Tiles",
    category: "Interior",
    group: "Interior",
    image: img("photo-1600566753190-17f0baa2a6c3"),
    description: "Artisan tiled compositions for feature surfaces.",
  },
  {
    name: "Wallpaper",
    category: "Interior",
    group: "Interior",
    image: img("photo-1615529182904-14819c35db37"),
    description: "Curated wallpaper collections from leading mills.",
  },
  {
    name: "PU Stone",
    category: "Interior",
    group: "Interior",
    image: img("photo-1604147706283-d7119b5b822c"),
    description: "Lightweight polyurethane stone with natural realism.",
  },
  {
    name: "Vertical Gardens",
    category: "Interior",
    group: "Interior",
    image: img("photo-1485955900006-10f4d324d411"),
    description: "Living and faux greenery installations.",
  },
  {
    name: "Wooden Flooring",
    category: "Interior",
    group: "Interior",
    image: img("photo-1581858726788-75bc0f6a952d"),
    description: "Engineered and laminate wooden floors.",
  },

  // Modular
  {
    name: "Ply Board",
    category: "Modular",
    group: "Modular",
    image: img("photo-1503602642458-232111445657"),
    description: "Premium plywood for furniture and joinery.",
  },
  {
    name: "HDMR",
    category: "Modular",
    group: "Modular",
    image: img("photo-1556909114-44e3e9399a2e"),
    description: "High-density moisture resistant boards.",
  },
  {
    name: "Laminates",
    category: "Modular",
    group: "Modular",
    image: img("photo-1616137422495-1e9e46e2aa77"),
    description: "Decorative and textured laminate finishes.",
  },
  {
    name: "Acrylic",
    category: "Modular",
    group: "Modular",
    image: img("photo-1631679706909-1844bbd07221"),
    description: "High-gloss acrylic surfaces for shutters.",
  },
  {
    name: "Glass Work",
    category: "Modular",
    group: "Modular",
    image: img("photo-1617104678098-de229db51175"),
    description: "Designer glass for partitions and shutters.",
  },
  {
    name: "Aluminium Solutions",
    category: "Modular",
    group: "Modular",
    image: img("photo-1545079968-1feb95494244"),
    description: "Modular aluminium kitchen & wardrobe systems.",
  },

  // Exterior
  {
    name: "ACP Cladding",
    category: "Exterior",
    group: "Exterior",
    image: img("photo-1503387762-592deb58ef4e"),
    description: "Aluminium composite cladding for facades.",
  },
  {
    name: "HPL Front Elevation",
    category: "Exterior",
    group: "Exterior",
    image: img("photo-1487958449943-2429e8be8625"),
    description: "High-pressure laminate elevation systems.",
  },

  // Lighting
  {
    name: "Fancy Lights",
    category: "Lighting",
    group: "Lighting",
    image: img("photo-1513506003901-1e6a229e2d15"),
    description: "Statement decorative pieces for any room.",
  },
  {
    name: "Chandeliers",
    category: "Lighting",
    group: "Lighting",
    image: img("photo-1565814329452-e1efa11c5b89"),
    description: "Sculptural chandeliers for grand interiors.",
  },
  {
    name: "LED Panels",
    category: "Lighting",
    group: "Lighting",
    image: img("photo-1524634126442-357e0eac3c14"),
    description: "Slim, efficient panel lights.",
  },
  {
    name: "Profile Lights",
    category: "Lighting",
    group: "Lighting",
    image: img("photo-1567538096630-e0c55bd6374c"),
    description: "Architectural linear profile lighting.",
  },
  {
    name: "COB Lights",
    category: "Lighting",
    group: "Lighting",
    image: img("photo-1540932239986-30128078f3c5"),
    description: "Focused chip-on-board accent lighting.",
  },
];

export const categoryGroups = ["All", "Interior", "Modular", "Exterior", "Lighting"] as const;
export type CategoryGroup = (typeof categoryGroups)[number];

export const services = [
  {
    eyebrow: "Interior Solutions",
    title: "Residential & commercial interiors that endure.",
    desc: "From private residences to flagship retail, our team delivers complete interior work — wall, ceiling, decorative finishes — coordinated to a single design language.",
    items: [
      "Residential Interior Work",
      "Commercial Interior Work",
      "Wall & Ceiling Solutions",
      "Decorative Finishes",
    ],
    image: img("photo-1618221195710-dd6b41faaea6"),
  },
  {
    eyebrow: "Modular Solutions",
    title: "Modular kitchens, storage and bespoke joinery.",
    desc: "Engineered for daily life and built to last. Premium core materials, German hardware and a precision-fit installation process.",
    items: ["Modular Kitchens", "Storage Solutions", "Custom Interior Fabrication"],
    image: img("photo-1556909114-44e3e9399a2e"),
  },
  {
    eyebrow: "Exterior Solutions",
    title: "Facades that compose the first impression.",
    desc: "ACP elevations, HPL facades and decorative installations — engineered for weather, designed for character.",
    items: ["ACP Elevation Work", "HPL Facades", "Exterior Decorative Installations"],
    image: img("photo-1487958449943-2429e8be8625"),
  },
  {
    eyebrow: "Lighting Solutions",
    title: "Light as architecture.",
    desc: "From consultation to commissioning — we plan lighting layers that sculpt your space across day and evening modes.",
    items: [
      "Lighting Design Consultation",
      "Decorative Lighting Installation",
      "Architectural Lighting",
    ],
    image: img("photo-1565814329452-e1efa11c5b89"),
  },
];

export const contactServices = [
  "Interior Materials",
  "Modular Kitchen",
  "Exterior Elevation",
  "Designer Lighting",
  "Consultation",
  "Other",
];

export const aboutValues = [
  { iconName: "Gem", title: "Quality", desc: "Only materials we'd specify in our own homes." },
  {
    iconName: "Sparkles",
    title: "Innovation",
    desc: "First to bring emerging finishes to the market.",
  },
  {
    iconName: "ShieldCheck",
    title: "Reliability",
    desc: "On-time delivery, transparent pricing, flawless install.",
  },
  {
    iconName: "HeartHandshake",
    title: "Customer Commitment",
    desc: "Long-term relationships over one-off transactions.",
  },
];

export const aboutStats = [
  { value: 500, suffix: "+", label: "Products Offered" },
  { value: 1200, suffix: "+", label: "Happy Clients" },
  { value: 850, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years of Experience" },
];

export const homeFeatures = [
  {
    iconName: "Award",
    title: "Premium Quality Materials",
    desc: "Sourced from leading mills and global brands, every product meets a luxury standard.",
  },
  {
    iconName: "Sparkles",
    title: "Expert Consultation",
    desc: "Our designers translate your vision into a curated, cohesive specification.",
  },
  {
    iconName: "Lightbulb",
    title: "Latest Design Trends",
    desc: "From fluted oak to architectural lighting — we move with the global aesthetic.",
  },
  {
    iconName: "Layers",
    title: "End-to-End Solutions",
    desc: "Materials, modular, exterior elevation and lighting under one roof.",
  },
  {
    iconName: "Wrench",
    title: "Reliable Installation",
    desc: "Skilled craftsmen and project managers ensure a flawless finish.",
  },
];

export const homeCategories = [
  {
    title: "Interior Materials",
    count: "13 Collections",
    img: img("photo-1618221195710-dd6b41faaea6"),
  },
  {
    title: "Modular Kitchens",
    count: "Custom Built",
    img: img("photo-1556909114-f6e7ad7d3136"),
  },
  {
    title: "Exterior Elevation",
    count: "ACP · HPL",
    img: img("photo-1487958449943-2429e8be8625"),
  },
  {
    title: "Designer Lighting",
    count: "Architectural",
    img: img("photo-1513506003901-1e6a229e2d15"),
  },
];

export const homeGallery = [
  img("photo-1600585154340-be6161a56a0c"),
  img("photo-1616486338812-3dadae4b4ace"),
  img("photo-1505691938895-1758d7feb511"),
  img("photo-1618221195710-dd6b41faaea6"),
  img("photo-1600210492486-724fe5c67fb0"),
  img("photo-1560448204-e02f11c3d0e2"),
  img("photo-1556909114-44e3e9399a2e"),
  img("photo-1600607687939-ce8a6c25118c"),
];

export const homeTestimonials = [
  {
    quote:
      "Parth Home Decor elevated our villa with materials we couldn't find anywhere else. The detailing is impeccable.",
    name: "Ananya Mehta",
    role: "Homeowner, Pune",
  },
  {
    quote:
      "From the fluted panels to the chandelier selection, the entire process felt effortless and refined.",
    name: "Rohan Kapoor",
    role: "Architect",
  },
  {
    quote:
      "Our hotel lobby received endless compliments. Quality, craft, and consultancy of the highest order.",
    name: "Vikram Shah",
    role: "Hospitality Developer",
  },
];
