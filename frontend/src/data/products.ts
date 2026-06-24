export interface ProductItem {
  name: string;
  category: string;
  group: "Interior" | "Modular" | "Exterior" | "Lighting";
  image: string;
  description: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

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
