import type { PhotoCategory } from "./photos";

export type StoryImage = {
  image: string;
  caption: string;
  alt: string;
};

export type Story = {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  coverFit?: "cover" | "contain" | "contain-mobile";
  category: PhotoCategory;
  date: string;
  body: string[];
  images: StoryImage[];
};

export const stories: Story[] = [
  {
    slug: "dhuhr-on-the-staircase",
    title: "Dhuhr on the Staircase",
    description:
      "A prayer noticed from a bus window, hidden inside the geometry of a city building.",
    coverImage: "images/DSC00729.jpg",
    coverFit: "contain",
    category: "Street",
    date: "2026",
    body: [
      "It was the kind of detail that could disappear in one second from a moving bus: a figure on an emergency staircase, folded into Dhuhr prayer while the city kept its hard lines around him.",
      "The building is full of grids, windows, pipes, and concrete repetition. But the eye stops at the small human gesture inside it. A place built for escape becomes, for a moment, a place of stillness.",
      "That is what looking out a bus window can do. The city passes too quickly to study, but sometimes one quiet act holds the frame long enough to become a photograph.",
    ],
    images: [
      {
        image: "images/DSC00729.jpg",
        caption:
          "A small act of prayer held inside concrete, metal rails, and passing distance.",
        alt: "Dhuhr prayer on an emergency staircase seen from a bus window.",
      },
    ],
  },
  {
    slug: "clay-by-the-river",
    title: "Clay by the River",
    description:
      "A boy builds a small world from the riverbank.",
    coverImage: "images/DSC01761.jpg",
    coverFit: "contain",
    category: "Human Stories",
    date: "2026",
    body: [
      "Beside the river, the boy is not performing for anyone. He is simply absorbed in the small seriousness of play: wet clay, water nearby, sunlight on the bank, and a shape forming under his hands.",
      "Childhood often looks like this when adults are not directing it. The world gives whatever is available - mud, sticks, water, broken ground - and imagination turns it into something enough.",
      "The river keeps moving behind him, but his attention stays on the clay. For a moment, the large world becomes quiet, and the small world he is building becomes everything.",
    ],
    images: [
      {
        image: "images/DSC01761.jpg",
        caption:
          "The river moves beside him while his hands stay busy with a tiny clay world.",
        alt: "Boy playing with clay beside a river in warm light.",
      },
    ],
  },
  {
    slug: "hands-at-work",
    title: "Hands at Work",
    description:
      "A quiet craft in the noise of everyday life.",
    coverImage: "images/DSC00392.jpg",
    coverFit: "contain",
    category: "Street",
    date: "2026",
    body: [
      "Everyday life is noisy around work like this: voices, traffic, waiting customers, small tools moving across a table. But inside the frame, the world becomes quieter.",
      "The hands are the story. They know pressure, angle, patience, and repetition. A key is a small object, but making it useful again takes attention that most people only notice when it is missing.",
      "This photograph is about that kind of craft: ordinary, close to the street, and easy to overlook. The work is not dramatic, but it carries the dignity of someone doing one small thing carefully.",
    ],
    images: [
      {
        image: "images/DSC00392.jpg",
        caption:
          "Tools, keys, metal dust, and hands moving with practiced patience.",
        alt: "Hands working on a key with tools and metal parts on a dark street workbench.",
      },
    ],
  },
  {
    slug: "worth-stopping-for",
    title: "Worth Stopping For",
    description:
      "He joked, \"এ খালি ছবি তোলে.\" But some faces are worth stopping for.",
    coverImage: "images/DSC01805.jpg",
    coverFit: "contain",
    category: "Human Stories",
    date: "2026",
    body: [
      "He joked, \"এ খালি ছবি তোলে.\" It was a small line, half teasing and half observation: this one only takes photos.",
      "But some faces hold enough life to stop the road for a moment. The wrinkles, the eyes, the cloth around his head, the working field behind him - everything felt like a story already written on a person.",
      "So I took his photo. Not to prove the joke wrong, but because sometimes the honest answer is simple: yes, I take photos, and some people are worth being remembered carefully.",
    ],
    images: [
      {
        image: "images/DSC01805.jpg",
        caption:
          "The black and white frame keeps the attention on his face, expression, and years.",
        alt: "Black and white portrait of an elderly man wearing a headscarf in a rural field.",
      },
      {
        image: "images/DSC01805-2.jpg",
        caption:
          "The color frame brings back the heat of the field, the pink cloth, and the afternoon around him.",
        alt: "Color portrait of an elderly man wearing a pink headscarf in a rural field with hay and trees behind him.",
      },
    ],
  },
  {
    slug: "rain-made-designs",
    title: "Rain Made Designs",
    description:
      "Three quiet frames where water becomes shape, softness, and pattern.",
    coverImage: "images/DSC00844.jpg",
    coverFit: "contain",
    category: "Macro",
    date: "2026",
    body: [
      "After rain, the ordinary world starts arranging itself. A rose leaf becomes a surface for tiny glass spheres. A cluster of flowers holds water like memory. A spider net turns into a drawn structure, each drop making the invisible threads visible.",
      "These frames are not about dramatic weather. They are about what rain leaves behind when the sound is gone. The drops make small things heavier, brighter, and more intentional.",
      "That is the quiet design of a post-rain morning: nature does not decorate loudly. It places water on edges, petals, and webs, then waits for someone to notice.",
    ],
    images: [
      {
        image: "images/DSC00836.jpg",
        caption:
          "On the rose leaf, each drop becomes a small lens holding the morning inside it.",
        alt: "Raindrops resting on rose leaves in a soft macro photograph.",
      },
      {
        image: "images/DSC00842.jpg",
        caption:
          "The flowers keep the rain for a little longer, turning color into something softer.",
        alt: "Pink flowers with small raindrops after rainfall.",
      },
      {
        image: "images/DSC00844.jpg",
        caption:
          "The spider net becomes visible only because the water chooses every thread.",
        alt: "Raindrops on a spider web forming a delicate pattern between dark leaves.",
      },
    ],
  },
  {
    slug: "mango-tree-lamp",
    title: "Mango Tree Lamp",
    description:
      "A tiny mushroom became a lamp because the camera refused to see it normally.",
    coverImage: "images/DSC00913.jpg",
    coverFit: "contain",
    category: "Macro",
    date: "2026",
    body: [
      "It was only a tiny mushroom on a mango tree. From a normal distance, it could disappear into bark, moss, and shadow. Nothing about it would ask for attention.",
      "But from a different angle, the shape changed. The stem became a stand, the cap became a shade, and the darkness around it started to feel like a small room waiting for light. The edit follows that first illusion: the mushroom is treated as if it is illuminating the space around it.",
      "That is the point of the frame. The subject did not need to become bigger. The perspective needed to become more curious. A small natural detail became an object with mood, purpose, and quiet imagination.",
    ],
    images: [
      {
        image: "images/DSC00913.jpg",
        caption:
          "The glow is an edit, but the idea began with the angle: a mushroom pretending to be a lamp.",
        alt: "Tiny mushroom on a mango tree glowing like a miniature table lamp in a dark macro photograph.",
      },
    ],
  },
  {
    slug: "small-battlefield",
    title: "Small Battlefield",
    description:
      "A tiny struggle on moss, missed from human height.",
    coverImage: "images/DSC00882.jpg",
    coverFit: "contain-mobile",
    category: "Macro",
    date: "2026",
    body: [
      "From our height, this could look like nothing: a patch of moss, a little movement, a small disturbance on the ground. But the macro frame changes the scale. Suddenly there is conflict, pressure, and survival inside a place we usually step past without thinking.",
      "The lone red ant becomes the center of the story because it is different. Around it, the black ants gather like a crowd with one intention. The photograph turns a tiny natural moment into something almost human: isolation, force, resistance, and the danger of being outnumbered.",
      "That is why macro photography matters here. It does not invent drama; it reveals the drama already happening below our attention. A whole battlefield can exist under soft green light, and most of us would never know it was there.",
    ],
    images: [
      {
        image: "images/DSC00882.jpg",
        caption:
          "A lone red ant becomes visible only when the camera lowers itself into its world.",
        alt: "Black ants attacking a red ant on a mossy surface in a macro scene.",
      },
    ],
  },
  {
    slug: "borrowed-colors",
    title: "Borrowed Colors",
    description:
      "A boy carries the brightest things in the frame, but none of that color belongs to him.",
    coverImage: "images/DSC00491.jpg",
    coverFit: "contain",
    category: "Street",
    date: "2026",
    body: [
      "This is street photography built on contrast. The balloons and cotton candy are saturated, almost unreal, because they are the things being sold. They carry celebration, childhood, and color for someone else.",
      "The boy remains in black and white. That edit makes the frame less about what he is carrying and more about what he is separated from. He sells color, but the photograph asks whether he ever gets to keep any of it.",
      "The street keeps moving around him, but his stillness changes the mood. What should feel playful becomes quiet. The color becomes a burden, and the child carrying it becomes the real story.",
    ],
    images: [
      {
        image: "images/DSC00491.jpg",
        caption:
          "The color belongs to the things for sale; the silence belongs to the boy carrying them.",
        alt: "Boy selling cotton candy and balloons, with the goods saturated in color and the boy edited in black and white.",
      },
    ],
  },
  {
    slug: "life-still-continues",
    title: "Life Still Continues",
    description:
      "Water becomes life on the bright side, and loss on the dark side.",
    coverImage: "images/DSC01141.jpg",
    coverFit: "contain-mobile",
    category: "Moody",
    date: "2026",
    body: [
      "This photograph holds two meanings inside the same rain. On the right side, water feels alive: bright drops striking the grass, moving, shining, and feeding the world. It is the part of rain we usually call beautiful.",
      "On the left side, the same rain has become something heavier. A bird lies still in the dark, its body almost absorbed into the wet ground. The frame refuses to make water only gentle. It can give life, and it can also carry an ending.",
      "But the rain does not stop. The drops keep dancing. The grass keeps drinking. Life continues beside death, not because the loss is small, but because the world keeps moving even when one small life has ended.",
    ],
    images: [
      {
        image: "images/DSC01141.jpg",
        caption:
          "A still bird rests in the dark while rain keeps moving through the brighter side of the frame.",
        alt: "Dead bird on the left side of a dark rainy scene with bright raindrops splashing on grass to the right.",
      },
    ],
  },
  {
    slug: "golden-core-memory",
    title: "Golden Core Memory",
    description:
      "A child riding with his father, and far ahead, a grown man walking alone.",
    coverImage: "images/DSC00853.jpg",
    coverFit: "contain",
    category: "Human Stories",
    date: "2026",
    body: [
      "This frame feels warm at first: a child riding a bicycle with his father, held inside the quiet green tunnel of a village road. It has the softness of a core memory, the kind of ordinary afternoon that becomes golden only after time passes.",
      "But the far end of the road changes the photograph. A grown man walks alone in the distance, small against the same path. The image becomes less about one ride and more about how life stretches forward: from being carried, to learning balance, to walking by ourselves.",
      "That contrast is the story. Childhood moves with someone beside us. Adulthood often asks us to keep moving even when the road becomes quieter.",
    ],
    images: [
      {
        image: "images/DSC00853.jpg",
        caption:
          "A father and child share the foreground while a solitary figure waits at the end of the road.",
        alt: "Father and child riding a bicycle down a green road with a lone man walking far ahead.",
      },
    ],
  },
];
