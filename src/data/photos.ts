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
    image: "images/DSC00729.jpg",
    description: "Fragments of everyday life, emotion, and movement.",
  },
  {
    name: "Nature",
    image: "images/DSC01621.jpg",
    description: "Quiet frames from the living world.",
  },
  {
    name: "Macro",
    image: "images/DSC00882.jpg",
    description: "Small details that usually go unnoticed.",
  },
  {
    name: "Moody Edits",
    image: "images/DSC01141.jpg",
    description: "Color, shadow, and emotion shaped together.",
  },
  {
    name: "Post-Rain Mornings",
    image: "images/DSC00836.jpg",
    description: "Fresh silence after the night rain.",
  },
  {
    name: "Human Stories",
    image: "images/DSC00853.jpg",
    description: "People, loneliness, work, childhood, and life.",
  },
  {
    name: "Experimental",
    image: "images/DSC00904.jpg",
    description: "Technique, crop, scale, and editing that challenge perspective.",
  },
];

export const photos: Photo[] = [
  {
    id: 33,
    title: "Post-Apocalyptic City",
    category: "Experimental",
    image: "images/DSC00904.jpg",
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
    image: "images/DSC02065.jpg",
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
    image: "images/DSC01328.jpg",
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
    image: "images/DSC01834.jpg",
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
    image: "images/DSC01662.jpg",
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
    image: "images/DSC01621.jpg",
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
    image: "images/DSC00853.jpg",
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
    image: "images/DSC01141.jpg",
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
    image: "images/DSC00491.jpg",
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
    image: "images/DSC00882.jpg",
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
    image: "images/DSC00913.jpg",
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
    image: "images/DSC00836.jpg",
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
    image: "images/DSC00842.jpg",
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
    image: "images/DSC00844.jpg",
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
    image: "images/DSC01805.jpg",
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
    image: "images/DSC01761.jpg",
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
    image: "images/DSC00729.jpg",
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
    image: "images/DSC00392.jpg",
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
