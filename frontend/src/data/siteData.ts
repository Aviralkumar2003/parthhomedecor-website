export interface ProductItem {
  name: string;
  category: string;
  group: "Interior" | "Modular" | "Exterior" | "Lighting";
  image: string;
  description: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

import modularKitchenImg from "../assets/modular-kitchen.png";

// Product images (Unsplash License — free for commercial use, downloaded locally)
import pvcPanelsImg from "../assets/products/pvc-panels.jpg";
import wpcPanelsImg from "../assets/products/wpc-panels.jpg";
import flutedPanelsImg from "../assets/products/fluted-panels.jpg";
import charcoalPanelsImg from "../assets/products/charcoal-panels.jpg";
import soffitPanelsImg from "../assets/products/soffit-panels.jpg";
import uvSheetsImg from "../assets/products/uv-sheets.jpg";
import uvRollsImg from "../assets/products/uv-rolls.jpg";
import threeDPanelsImg from "../assets/products/3d-panels.jpg";
import mosaicTilesImg from "../assets/products/mosaic-tiles.jpg";
import wallpaperImg from "../assets/products/wallpaper.jpg";
import puStoneImg from "../assets/products/pu-stone.jpg";
import verticalGardensImg from "../assets/products/vertical-gardens.jpg";
import woodenFlooringImg from "../assets/products/wooden-flooring.jpg";
import plyBoardImg from "../assets/products/ply-board.jpg";
import hdmrImg from "../assets/products/hdmr.jpg";
import laminatesImg from "../assets/products/laminates.jpg";
import acrylicImg from "../assets/products/acrylic.jpg";
import glassWorkImg from "../assets/products/glass-work.jpg";
import aluminiumSolutionsImg from "../assets/products/aluminium-solutions.jpg";
import acpCladdingImg from "../assets/products/acp-cladding.jpg";
import hplElevationImg from "../assets/products/hpl-elevation.jpg";
import fancyLightsImg from "../assets/products/fancy-lights.jpg";
import chandeliersImg from "../assets/products/chandeliers.jpg";
import ledPanelsImg from "../assets/products/led-panels.jpg";
import profileLightsImg from "../assets/products/profile-lights.jpg";
import cobLightsImg from "../assets/products/cob-lights.jpg";

// Service carousel images
import interior1 from "../assets/services/interior-1.png";
import interior2 from "../assets/services/interior-2.png";
import interior3 from "../assets/services/interior-3.png";
import modular1 from "../assets/services/modular-1.png";
import modular2 from "../assets/services/modular-2.png";
import modular3 from "../assets/services/modular-3.png";
import exterior1 from "../assets/services/exterior-1.png";
import exterior2 from "../assets/services/exterior-2.png";
import exterior3 from "../assets/services/exterior-3.png";
import lighting1 from "../assets/services/lighting-1.png";
import lighting2 from "../assets/services/lighting-2.png";
import lighting3 from "../assets/services/lighting-3.png";

export const companyInfo = {
  name: "Parth Home Decor",
  phone: "+91 7017237170",
  whatsapp: "+91 7017237170",
  whatsappLink: "https://wa.me/917017237170",
  email: "parthhomedecoretawah@gmail.com",
  address: "N.H.19 Service Road, Near Sai Cold Store, Bharthana Chauraha, Etawah - 206001",
  instagramUrl: "https://www.instagram.com/parth__home_decor_etwah?igsh=cWZtNXFhamo1eno5",
  facebookUrl: "https://www.facebook.com/Parthtradershomedecor",
  mapEmbedUrl: "https://maps.google.com/maps?q=Parth+Home+Decor+%26+Interior+Showroom+Etawah&z=17&ie=UTF8&iwloc=&output=embed",
};

export const businessHours = [
  { day: "Monday – Sunday", time: "08:00 AM – 10:00 PM" },
];

export const products: ProductItem[] = [
  // Interior
  {
    name: "PVC Panels",
    category: "Interior",
    group: "Interior",
    image: pvcPanelsImg,
    description: "Lightweight, moisture-resistant decorative wall panels.",
  },
  {
    name: "WPC Panels",
    category: "Interior",
    group: "Interior",
    image: wpcPanelsImg,
    description: "Wood-polymer composite panels with premium texture.",
  },
  {
    name: "Fluted Panels",
    category: "Interior",
    group: "Interior",
    image: flutedPanelsImg,
    description: "Vertical ribbed panels for sculptural feature walls.",
  },
  {
    name: "Charcoal Panels",
    category: "Interior",
    group: "Interior",
    image: charcoalPanelsImg,
    description: "Dark, dramatic finishes for modern interiors.",
  },
  {
    name: "Soffit Panels",
    category: "Interior",
    group: "Interior",
    image: soffitPanelsImg,
    description: "Refined ceiling and underside cladding.",
  },
  {
    name: "UV Sheets",
    category: "Interior",
    group: "Interior",
    image: uvSheetsImg,
    description: "High-gloss UV-coated decorative surfaces.",
  },
  {
    name: "UV Rolls",
    category: "Interior",
    group: "Interior",
    image: uvRollsImg,
    description: "Flexible UV finishes for curved applications.",
  },
  {
    name: "3D Panels",
    category: "Interior",
    group: "Interior",
    image: threeDPanelsImg,
    description: "Sculpted dimensional panels with cinematic light play.",
  },
  {
    name: "Mosaic Tiles",
    category: "Interior",
    group: "Interior",
    image: mosaicTilesImg,
    description: "Artisan tiled compositions for feature surfaces.",
  },
  {
    name: "Wallpaper",
    category: "Interior",
    group: "Interior",
    image: wallpaperImg,
    description: "Curated wallpaper collections from leading mills.",
  },
  {
    name: "PU Stone",
    category: "Interior",
    group: "Interior",
    image: puStoneImg,
    description: "Lightweight polyurethane stone with natural realism.",
  },
  {
    name: "Vertical Gardens",
    category: "Interior",
    group: "Interior",
    image: verticalGardensImg,
    description: "Living and faux greenery installations.",
  },
  {
    name: "Wooden Flooring",
    category: "Interior",
    group: "Interior",
    image: woodenFlooringImg,
    description: "Engineered and laminate wooden floors.",
  },

  // Modular
  {
    name: "Ply Board",
    category: "Modular",
    group: "Modular",
    image: plyBoardImg,
    description: "Premium plywood for furniture and joinery.",
  },
  {
    name: "HDMR",
    category: "Modular",
    group: "Modular",
    image: hdmrImg,
    description: "High-density moisture resistant boards.",
  },
  {
    name: "Laminates",
    category: "Modular",
    group: "Modular",
    image: laminatesImg,
    description: "Decorative and textured laminate finishes.",
  },
  {
    name: "Acrylic",
    category: "Modular",
    group: "Modular",
    image: acrylicImg,
    description: "High-gloss acrylic surfaces for shutters.",
  },
  {
    name: "Glass Work",
    category: "Modular",
    group: "Modular",
    image: glassWorkImg,
    description: "Designer glass for partitions and shutters.",
  },
  {
    name: "Aluminium Solutions",
    category: "Modular",
    group: "Modular",
    image: aluminiumSolutionsImg,
    description: "Modular aluminium kitchen & wardrobe systems.",
  },

  // Exterior
  {
    name: "ACP Cladding",
    category: "Exterior",
    group: "Exterior",
    image: acpCladdingImg,
    description: "Aluminium composite cladding for facades.",
  },
  {
    name: "HPL Front Elevation",
    category: "Exterior",
    group: "Exterior",
    image: hplElevationImg,
    description: "High-pressure laminate elevation systems.",
  },

  // Lighting
  {
    name: "Fancy Lights",
    category: "Lighting",
    group: "Lighting",
    image: fancyLightsImg,
    description: "Statement decorative pieces for any room.",
  },
  {
    name: "Chandeliers",
    category: "Lighting",
    group: "Lighting",
    image: chandeliersImg,
    description: "Sculptural chandeliers for grand interiors.",
  },
  {
    name: "LED Panels",
    category: "Lighting",
    group: "Lighting",
    image: ledPanelsImg,
    description: "Slim, efficient panel lights.",
  },
  {
    name: "Profile Lights",
    category: "Lighting",
    group: "Lighting",
    image: profileLightsImg,
    description: "Architectural linear profile lighting.",
  },
  {
    name: "COB Lights",
    category: "Lighting",
    group: "Lighting",
    image: cobLightsImg,
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
    images: [interior1, interior2, interior3],
  },
  {
    eyebrow: "Modular Kitchen Solutions",
    title: "Modular kitchens, storage and bespoke joinery.",
    desc: "Engineered for daily life and built to last. Premium core materials, German hardware and a precision-fit installation process.",
    items: ["Modular Kitchens", "Wardrobes & Storage Solutions", "Custom Interior Fabrication", "Kitchen Accessories & Hardware"],
    images: [modular1, modular2, modular3],
  },
  {
    eyebrow: "Exterior Solutions",
    title: "Facades that compose the first impression.",
    desc: "ACP elevations, HPL facades and decorative installations — engineered for weather, designed for character.",
    items: ["ACP Elevation Work", "HPL Facades", "Exterior Decorative Installations"],
    images: [exterior1, exterior2, exterior3],
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
    images: [lighting1, lighting2, lighting3],
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
  img("photo-1600585154526-990dced4db0d"),
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
