export type PhotoCategory =
  | "Street"
  | "Nature"
  | "Macro"
  | "Reflection"
  | "Sunset"
  | "Moody"
  | "Black & White"
  | "Experimental"
  | "Post-Rain Mornings"
  | "Human Stories";

export type EXIFData = {
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
};

export type Photo = {
  id: number;
  title: string;
  category: PhotoCategory;
  image: string;
  caption: string;
  date: string;
  location: string;
  alt: string;
  featured?: boolean;
  exif?: EXIFData;
};

export const filterCategories = [
  "All",
  "Street",
  "Nature",
  "Macro",
  "Moody",
  "Black & White",
  "Human Stories",
  "Experimental",
] as const;

export type FilterCategory = (typeof filterCategories)[number];

export const homeCategories = [
  {
    name: "Street",
    image: "images/DSC00729.webp",
    description: "Fragments of everyday life, emotion, and movement.",
  },
  {
    name: "Nature",
    image: "images/DSC01621.webp",
    description: "Quiet frames from the living world.",
  },
  {
    name: "Macro",
    image: "images/DSC00882.webp",
    description: "Small details that usually go unnoticed.",
  },
  {
    name: "Moody Edits",
    image: "images/DSC01141.webp",
    description: "Color, shadow, and emotion shaped together.",
  },
  {
    name: "Post-Rain Mornings",
    image: "images/DSC00836.webp",
    description: "Fresh silence after the night rain.",
  },
  {
    name: "Human Stories",
    image: "images/DSC00853.webp",
    description: "People, loneliness, work, childhood, and life.",
  },
  {
    name: "Experimental",
    image: "images/DSC00904.webp",
    description: "Technique, crop, scale, and editing that challenge perspective.",
  },
];

export const photos: Photo[] = [
  {
    id: 34,
    title: "At the Net",
    category: "Human Stories",
    image: "images/DSC00850.webp",
    caption: "Fishermen gather around a net by the water.",
    date: "2026",
    location: "Bangladesh",
    alt: "Fishermen working together around a fishing net, with red baskets and dark teal water.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/2.8",
      shutterSpeed: "1/800s",
      iso: "ISO 3200"
    }
  },
  {
    id: 35,
    title: "A Small Visitor",
    category: "Nature",
    image: "images/DSC02006.webp",
    caption: "An orange butterfly rests among small purple flowers.",
    date: "2026",
    location: "Bangladesh",
    alt: "Orange butterfly perched on purple flowers against a softly blurred green background.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/6.3",
      shutterSpeed: "1/125s",
      iso: "ISO 100"
    }
  },
  {
    id: 36,
    title: "Through the Train Window",
    category: "Street",
    image: "images/DSC01969.webp",
    caption: "A bridge, water, and passing lines framed by a train window.",
    date: "2026",
    location: "Bangladesh",
    alt: "A distant bridge over water, seen through a dark train window with railings crossing the foreground.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/4",
      shutterSpeed: "1/2000s",
      iso: "ISO 100"
    }
  },
  {
    id: 37,
    title: "Rain at the Window",
    category: "Moody",
    image: "images/DSC00119.webp",
    caption: "Raindrops hold the light along the window bars.",
    date: "2026",
    location: "Bangladesh",
    alt: "Raindrops clinging beneath dark horizontal window bars against blurred green foliage.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/2.8",
      shutterSpeed: "1/500s",
      iso: "ISO 12800"
    }
  },
  {
    id: 38,
    title: "Spider on Bark",
    category: "Macro",
    image: "images/DSC00907.webp",
    caption: "A small spider against the texture of a tree.",
    date: "2026",
    location: "Bangladesh",
    alt: "A pale spider on dark reddish tree bark, its legs spread across the textured surface.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/2.8",
      shutterSpeed: "1/80s",
      iso: "ISO 500"
    }
  },
  {
    id: 39,
    title: "White Feathers",
    category: "Nature",
    image: "images/DSC01830.webp",
    caption: "Soft white feathers against a dark background.",
    date: "2026",
    location: "Bangladesh",
    alt: "Close view of a white duck with ruffled feathers against a dark green background.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/2.8",
      shutterSpeed: "1/320s",
      iso: "ISO 100"
    }
  },
  {
    id: 40,
    title: "River Under Cloud",
    category: "Nature",
    image: "images/DSC02286.webp",
    caption: "A leafy branch reaches across the water beneath a wide sky.",
    date: "2026",
    location: "Bangladesh",
    alt: "Thin leafy branches stretch over a river under layered blue-grey clouds.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/9",
      shutterSpeed: "1/200s",
      iso: "ISO 100"
    }
  },
  {
    id: 41,
    title: "Wheel and Shadow",
    category: "Black & White",
    image: "images/DSC01837-2.webp",
    caption: "A bicycle wheel and its shadow in black and white.",
    date: "2026",
    location: "Bangladesh",
    alt: "Black-and-white close view of a bicycle wheel and its dark shadow on the textured ground.",
    featured: true,
    exif: {
      camera: "ILCE-6700",
      lens: "18-50mm F2.8 DC DN | Contemporary 021",
      aperture: "f/2.8",
      shutterSpeed: "1/1000s",
      iso: "ISO 100"
    }
  },
  {
    id: 33,
    title: "Post-Apocalyptic City",
    category: "Experimental",
    image: "images/DSC00904.webp",
    caption: "A tight crop and deep angle on a cut mango tree root, edited to resemble the scale and shadow of a post-apocalyptic miniature city.",
    date: "2026",
    location: "Bangladesh",
    alt: "A macro edit of a cut mango tree root showing detailed wood fibers and moss, resembling a dark post-apocalyptic cityscape with tall ruined towers under a dark sky.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "Sigma 18-50mm f/2.8",
      aperture: "f/9.0",
      shutterSpeed: "1/80s",
      iso: "ISO 2500",
    },
  },
  {
    id: 32,
    title: "City Twilight Moon",
    category: "Moody",
    image: "images/DSC02065.webp",
    caption: "The golden moon climbs over the silhouette of city rooftops and dark trees in the quiet blue twilight.",
    date: "2026",
    location: "Bangladesh",
    alt: "Cinematic twilight view in a city, showing dark silhouettes of trees and buildings below a deep blue night sky. A glowing round golden moon shines brightly in the upper right quadrant.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "Viltrox 56mm f/1.7",
      aperture: "f/1.7",
      shutterSpeed: "1/40s",
      iso: "ISO 50",
    },
  },
  {
    id: 31,
    title: "Lunar Crop",
    category: "Experimental",
    image: "images/DSC01328.webp",
    caption: "Who says you need a telephoto lens to capture the moon? A 56mm prime, a tight crop, and a bit of patience can reveal the craters of another world.",
    date: "2026",
    location: "Bangladesh",
    alt: "A close-up cropped view of a crescent/gibbous moon showing detailed craters against a solid pitch-black sky.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "Viltrox 56mm f/1.7",
      aperture: "f/1.7",
      shutterSpeed: "1/400s",
      iso: "ISO 100",
    },
  },
  {
    id: 30,
    title: "Midday Bath",
    category: "Human Stories",
    image: "images/DSC01834.webp",
    caption: "A quiet moment of care in the heat of midday: a man washes his cow in the calm river waters while a flock of ducks glides silently in the background.",
    date: "2026",
    location: "Bangladesh",
    alt: "Cinematic horizontal photograph of a man standing chest-deep in a wide, calm river bathing a white cow, whose head is visible above water. A small flock of ducks swims together in the background.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "Sigma 18-50mm f/2.8 DC DN",
      aperture: "f/2.8",
      shutterSpeed: "1/3200s",
      iso: "ISO 100",
    },
  },
  {
    id: 29,
    title: "Rural Lines",
    category: "Nature",
    image: "images/DSC01662.webp",
    caption: "A narrow earthen path winds beside a tin-roof house and a vibrant green paddy field, under a moody afternoon sky.",
    date: "2026",
    location: "Bangladesh",
    alt: "Cinematic vertical photograph of a narrow dirt path in a village in Bangladesh. The path winds between a green paddy field on the left and a rustic tin-roofed house on the right, under a dramatic sky.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "Sigma 18-50mm f/2.8 DC DN",
      aperture: "f/2.8",
      shutterSpeed: "1/200s",
      iso: "ISO 100",
    },
  },
  {
    id: 28,
    title: "Sky High Hoop",
    category: "Nature",
    image: "images/DSC01621.webp",
    caption: "A sudden pause in the sky: the clouds gather to resemble a basketball player in full flight, framed perfectly by the silhouettes of leaves.",
    date: "2026",
    location: "Bangladesh",
    alt: "Cinematic vertical photograph of the blue sky with clouds in the center resembling the silhouette of a basketball player jumping to dunk, framed by dark leaf silhouettes.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "Viltrox 56mm f/1.7",
      aperture: "f/1.7",
      shutterSpeed: "1/3200s",
      iso: "ISO 100",
    },
  },
  {
    id: 17,
    title: "Golden Core Memory",
    category: "Human Stories",
    image: "images/DSC00853.webp",
    caption:
      "A child rides with his father while a grown man walks alone at the far end of the road.",
    date: "2026",
    location: "Bangladesh",
    alt: "A child riding on a bicycle with his father on a quiet green village road, with a grown man walking alone far ahead.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "50mm",
      aperture: "Unknown",
      shutterSpeed: "1/800s",
      iso: "ISO 4000",
    },
  },
  {
    id: 18,
    title: "Life Still Continues",
    category: "Moody",
    image: "images/DSC01141.webp",
    caption:
      "Rain gives life on one side of the frame, and takes it away on the other.",
    date: "2026",
    location: "Bangladesh",
    alt: "A dead bird lying on a dark rain-soaked surface while bright raindrops splash on grass at the right side of the frame.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "56mm",
      aperture: "f/4",
      shutterSpeed: "1/100s",
      iso: "ISO 800",
    },
  },
  {
    id: 19,
    title: "Borrowed Colors",
    category: "Street",
    image: "images/DSC00491.webp",
    caption:
      "A boy sells colors he may never get to keep.",
    date: "2026",
    location: "Bangladesh",
    alt: "A young street seller in black and white carrying saturated pink cotton candy and colorful balloons through a dark green street scene.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "56mm",
      aperture: "f/1.7",
      shutterSpeed: "1/125s",
      iso: "ISO 100",
    },
  },
  {
    id: 20,
    title: "Small Battlefield",
    category: "Macro",
    image: "images/DSC00882.webp",
    caption:
      "Black ants surround a lone red ant in a world most eyes would miss.",
    date: "2026",
    location: "Bangladesh",
    alt: "Macro photograph of several black ants attacking a lone red ant on moss in soft green light.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "50mm",
      aperture: "f/14",
      shutterSpeed: "1/80s",
      iso: "ISO 800",
    },
  },
  {
    id: 21,
    title: "Mango Tree Lamp",
    category: "Macro",
    image: "images/DSC00913.webp",
    caption:
      "A tiny mushroom becomes a table lamp when the angle changes.",
    date: "2026",
    location: "Bangladesh",
    alt: "A tiny mushroom growing from a mango tree edited to glow like a small table lamp in a dark scene.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "50mm",
      aperture: "f/5.6",
      shutterSpeed: "1/80s",
      iso: "ISO 5000",
    },
  },
  {
    id: 22,
    title: "Rose Leaf Orbits",
    category: "Macro",
    image: "images/DSC00836.webp",
    caption:
      "Raindrops rest on rose leaves like small glass worlds.",
    date: "2026",
    location: "Bangladesh",
    alt: "Macro photograph of raindrops on rose leaves with soft green and pink background blur.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "18mm",
      aperture: "f/2.8",
      shutterSpeed: "1/60s",
      iso: "ISO 800",
    },
  },
  {
    id: 23,
    title: "Flowers After Rain",
    category: "Post-Rain Mornings",
    image: "images/DSC00842.webp",
    caption:
      "Pink flowers hold the last drops after the rain passes.",
    date: "2026",
    location: "Bangladesh",
    alt: "Pink flowers after rain with dark green leaves and small water droplets on the petals.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "50mm",
      aperture: "f/5.6",
      shutterSpeed: "1/80s",
      iso: "ISO 6400",
    },
  },
  {
    id: 24,
    title: "Web of Rain",
    category: "Macro",
    image: "images/DSC00844.webp",
    caption:
      "Raindrops turn a spider net into a quiet piece of design.",
    date: "2026",
    location: "Bangladesh",
    alt: "Macro photograph of raindrops hanging from a spider web between dark leaves, forming a delicate abstract design.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "18mm",
      aperture: "f/2.8",
      shutterSpeed: "1/30s",
      iso: "ISO 2000",
    },
  },
  {
    id: 25,
    title: "Worth Stopping For",
    category: "Human Stories",
    image: "images/DSC01805.webp",
    caption:
      "He joked that I only take photos. Some faces are worth stopping for.",
    date: "2026",
    location: "Bangladesh",
    alt: "Black and white portrait of an elderly man in a headscarf looking toward the camera in a rural field.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "50mm",
      aperture: "f/2.8",
      shutterSpeed: "1/1250s",
      iso: "ISO 100",
    },
  },
  {
    id: 26,
    title: "Clay by the River",
    category: "Human Stories",
    image: "images/DSC01761.webp",
    caption:
      "A boy builds a small world from river clay.",
    date: "2026",
    location: "Bangladesh",
    alt: "A young boy crouching beside a river, playing with wet clay near the water in warm afternoon light.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "42.9mm",
      aperture: "f/3.5",
      shutterSpeed: "1/1250s",
      iso: "ISO 100",
    },
  },
  {
    id: 27,
    title: "Dhuhr on the Staircase",
    category: "Street",
    image: "images/DSC00729.webp",
    caption:
      "Dhuhr prayer on an emergency staircase, noticed from a bus window.",
    date: "2026",
    location: "Bangladesh",
    alt: "A distant person praying on an emergency staircase outside a gray urban building, photographed from a bus window.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "41.2mm",
      aperture: "f/4",
      shutterSpeed: "1/1000s",
      iso: "ISO 100",
    },
  },
  {
    id: 13,
    title: "Hands at Work",
    category: "Street",
    image: "images/DSC00392.webp",
    caption: "A quiet craft in the noise of everyday life.",
    date: "2026",
    location: "Bangladesh",
    alt: "Close street photograph of hands carefully shaping a key on a workbench surrounded by tools and metal parts.",
    featured: true,
    exif: {
      camera: "Sony a6700",
      lens: "56mm",
      aperture: "f/2.8",
      shutterSpeed: "1/100s",
      iso: "ISO 800",
    },
  },
];

export const featuredPhotos = photos.filter((photo) => photo.featured);
