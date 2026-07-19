// Dynamic Content Management System (CMS) Database
// Consolidates all website data, making it dynamic and editable.

const DEFAULT_SITE_DATA = {
  views: 92,
  profile: {
    dob: "2002-12-22",
    name: "Krishnendu Goswami",
    email: "krishnendutitangoswami@gmail.com",
    stats: [
      { label: "Published Works", value: "120+" },
      { label: "International Awards", value: "38" },
      { label: "Countries Visited", value: "18" }
    ],
    title: "Luminar — Photography",
    avatar: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783681897/image_wh8xie.webp",
    awards: [
      { org: "Natural History Museum, London", name: "Wildlife Photographer of the Year — Highly Commended", year: "2024", badge: "Published — NHM Annual Portfolio" },
      { org: "Nature TTL, UK", name: "Nature TTL Photographer of the Year — Gold Award", year: "2023", badge: "" },
      { org: "Condé Nast India", name: "Featured — National Geographic Traveller India", year: "2023", badge: "Cover Feature — Dec 2023" },
      { org: "Siena Awards, Italy", name: "Siena International Photo Awards — Finalist", year: "2022", badge: "" },
      { org: "IPA, New York", name: "International Photography Awards — Honorable Mention", year: "2021", badge: "Published — Luerzer's Archive" },
      { org: "World Photography Organisation", name: "Sony World Photography Awards — Shortlisted", year: "2020", badge: "" }
    ],
    twitter: "https://x.com/KRIGOS02?s=09",
    bioTitle: "Vision shaped by",
    location: "Baidyabati, West Bengal, India",
    instagram: "https://www.instagram.com/goswami._krishnendu?igsh=ZmltdGk2OXM5aGUy",
    bioExcerpt: "Krishnendu Goswami is a nationally exhibited photographer whose work navigates the quiet intersection of the natural world and human presence.",
    bioTitleEm: "a thousand sunrises",
    philosophy: "I don't chase photographs. I wait for the world to reveal itself — one breath at a time. The camera is simply an extension of that patience.",
    bioParagraphs: [
      "Based in India, their journey with the camera began over two decades ago. What started as a personal quest to document vanishing landscapes became a lifelong dedication to the ethics and art of visual storytelling. Their images have appeared in natural history magazines, and have been exhibited across galleries internationally.",
      "Every expedition is a partnership with time and light. By spending weeks in remote areas—from the high altitudes of the Zanskar range to the dense jungles of the Western Ghats—they seek to capture not just a scene, but the silent atmosphere and emotional weight of a place. Their approach is marked by absolute respect for habitats, always prioritizing conservation ethics over capturing a shot."
    ],
    yearsExperience: 23
  },
  stories: [
    {
      bg: "linear-gradient(145deg,#0a1a0a,#0f2010)",
      id: 0,
      tag: "Wildlife · Long-form Project",
      desc: "A four-year winter fieldwork series documenting the fragile high-altitude movement corridors of the ghost of the mountains in Spiti and Ladakh.",
      slug: "snow-leopard-corridors",
      title: "The Last Snow Leopard Corridors",
      views: 27,
      years: "2019 — 2023",
      duration: "4 Years",
      location: "Spiti & Ladakh, India"
    },
    {
      bg: "linear-gradient(145deg,#101a24,#1a2e3a)",
      id: 1,
      tag: "Conservation · Visual Essay",
      desc: "A visual study of the Gangotri glacier's retreat and the changing riparian communities along the first hundred kilometres of the river path.",
      slug: "ganga-receding-source",
      title: "Ganga: The Receding Source",
      years: "2021 — 2022",
      duration: "18 Months",
      location: "Garhwal Himalayas, India"
    }
  ],
  homepagePhotos: [
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 0,
      cat: "macro",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1782985049/image_d6khfe.webp",
      exif: "",
      meta: "sub",
      title: "title"
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      cat: "macro",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1782985049/image_d6khfe.webp",
      exif: "",
      meta: "sub",
      title: "title"
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 3,
      cat: "portrait",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783678286/image_p0emjs.webp",
      exif: "1/640s · 112mm · f/6.3 · ISO 400",
      meta: "my shelter",
      title: "Mahiruha"
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 4,
      cat: "wildlife",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783679323/image_elyezv.webp",
      exif: "1/250s · 300mm · f/6.3 · ISO 5000",
      meta: "Panthera pardus",
      title: "COMMON LEOPARD "
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 5,
      cat: "wildlife",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783707699/image_mvylfk.webp",
      exif: "1/400s · 270mm · f/6.3 · ISO 800",
      meta: "Ailurus fulgens fulgens",
      title: "RED PANDA "
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 6,
      cat: "street",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783711319/image_hfmwnm.webp",
      exif: "1/10s · f/1.9 · ISO 1000",
      meta: "non-stationary",
      title: "The Railyard Ghost"
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 2,
      cat: "astrophotography",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783673993/image_cz4qxo.webp",
      exif: "21s , 10 frames stack · f/1.89 · ISO 6400",
      meta: "milky way band",
      title: "The Cygnus Arm"
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 7,
      cat: "nature",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783787901/image_hwruay.webp",
      exif: "1/400 · 240mm · f/6 · ISO 200",
      meta: "The beginning",
      title: "GENESIS"
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 8,
      cat: "splits",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783842582/image_sfytzh.webp",
      exif: "1/60s · f/1.6",
      meta: "fathom of faith",
      title: "রাশের Rush "
    },
    {
      bg: "linear-gradient(145deg,#151515,#2a2a2a)",
      id: 9,
      cat: "street",
      src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783847320/image_gs883d.webp",
      exif: "1/640 · f/1.79 · ISO 100",
      meta: "The masks within",
      title: "3 MASK-ETTERS"
    }
  ],
  journalEntries: [
    {
      id: 0,
      cat: "Field Notes",
      title: "How to Photograph the Snow Leopard: Patience as a Lens",
      excerpt: "Three weeks at 4,800 metres — what I learned about waiting, altitude, and the moment a wild cat decides you're not a threat.",
      date: "March 2024",
      readTime: "8 min read",
      bg: "linear-gradient(135deg,#0a1a0a,#0f2010)",
      template: "classic",
      content: "<h2>The High Altitude Ghost</h2><p>Three weeks in the Spiti Valley during the absolute depth of winter changes your relationship with time. In sub-zero temperatures, where the air is thin and dry, breathing is a conscious act. You do not move fast. You do not search impatiently. You learn to wait.</p><blockquote>\\\"The snow leopard does not reveal itself to the seeker; it reveals itself to the patient.\\\"<cite>— Spiti Field Diary</cite></blockquote><h2>Discipline of the Cold</h2><p>We set up our cameras at 4,800 metres. Tracking a leopard requires tracking its prey, observing the movements of blue sheep, and listening to the alarm calls of Himalayan griffons. In these extreme heights, your gear is pushed to the limit. Batteries lose charge in minutes, and focus rings freeze stiff. But the ultimate constraint is human willpower.</p>"
    },
    {
      id: 1,
      cat: "Technique",
      title: "Night Photography Without GPS: Navigating Dark Skies the Old Way",
      excerpt: "Star charts, local guides, and the irreplaceable value of arriving the night before — a guide to planning astrophotography expeditions.",
      date: "January 2024",
      readTime: "6 min read",
      bg: "linear-gradient(135deg,#0d101a,#171c2f)",
      template: "magazine",
      content: "<h2>Celestial Navigation</h2><p>Before GPS coordinates and satellite tracking made remote locations easily chartable, astrophotography was an exercise in celestial navigation and local storytelling. Arriving a day early to meet village elders and understand how they navigate by the stars is not just backup planning—it is the soul of wilderness photography.</p><h2>Finding the Horizon</h2><p>In total darkness, the digital viewfinder is of little help. Understanding the exact path of the Milky Way across the meridian using star charts requires pre-visualization. I rely on analog calculations to determine exposure times, alignment, and composition, ensuring that the light of stars is captured in its purest, most authentic state.</p>"
    },
    {
      id: 2,
      cat: "Philosophy",
      title: "Why I Still Shoot Film (and Why It's Not About Nostalgia)",
      excerpt: "The slow, deliberate economy of 36 exposures per roll is not a limitation — it's a form of discipline that digital abundance quietly erodes.",
      date: "November 2023",
      readTime: "5 min read",
      bg: "linear-gradient(135deg,#1c120a,#332010)",
      template: "photo_essay",
      content: "<h2>The Discipline of 36 Frames</h2><p>To shoot film today is not to retreat into nostalgia, but to actively choose constraint. In a digital world of infinite captures, the cost of taking a photo is effectively zero. This leads to a lazy eye. When every click has a material cost—the cost of the frame, the chemical development, and the time—you begin to look differently.</p><h2>Economy of Looking</h2><p>A roll of film forces you to ask: <i>Is this frame worth existing?</i> You wait for the light to settle. You wait for the gesture to complete. You compose, re-check, and only then do you press the shutter. That hesitation is where art happens.</p>"
    }
  ],
  categoriesOrder: [
    "astrophotography",
    "macro",
    "street",
    "portrait",
    "wildlife",
    "landscape",
    "nature",
    "travel",
    "splits"
  ],
  galleryCategories: {
    macro: {
      em: "cro",
      desc: "The perspective we often overlook, looked over at a different scale.",
      title: "Ma",
      years: "",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 0,
          cam: "",
          exp: "",
          iso: "",
          loc: "baidyabati",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1782985049/image_d6khfe.webp",
          tag: "people",
          date: "2026-07-02",
          lens: "",
          focal: "",
          likes: 1,
          story: "",
          title: "title",
          views: 26,
          caption: "sub",
          qFactor: 44,
          shutter: "",
          aperture: "",
          featured: true
        }
      ],
      filters: ["macro"],
      location: "",
      photosCount: "1 Photographs"
    },
    nature: {
      em: "ure",
      desc: "Life unfiltered, away from human design — capturing the intricate textures of organic existence and the subtle patterns woven by earth, water, and time.",
      title: "Nat",
      years: "",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 7,
          cam: " NIKON D3500",
          exp: "1/400 · 240mm · f/6 · ISO 200",
          iso: "200",
          loc: "Darjeeling, West Bengal - India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783787901/image_hwruay.webp",
          tag: "flower, nature, dawn",
          date: "2026-04-01",
          lens: "70-300mm",
          focal: "240mm",
          story: "The day’s very first sunlight pierces through the forest canopy, casting a dramatic, golden beam that crowns a freshly bloomed cluster of pink wildflowers. The stark, high-contrast interplay between the radiant, backlit petals and the deep, moody shadows of the background perfectly embodies the raw, quiet energy of a new day beginning.",
          title: "GENESIS",
          views: 15,
          hidden: false,
          caption: "The beginning",
          qFactor: 85,
          shutter: "1/400",
          aperture: "f/6",
          featured: true,
          telescope: ""
        }
      ],
      filters: ["all", "mammals", "birds", "flower", ""],
      location: "",
      photosCount: "1 Photographs"
    },
    splits: {
      em: "composites",
      desc: "A cinematic visual narrative of isolated frames, binding distinct dimensions of time and perspective into a singular, interconnected canvas.",
      title: "Split ",
      years: "",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 8,
          cam: "Iphone 15",
          exp: "1/60s · f/1.6",
          iso: "",
          loc: "Baidyabati, West Bengal - India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783842582/image_sfytzh.webp",
          tag: "split, faith , festival , festive",
          date: "2025-11-05",
          lens: "",
          focal: "",
          likes: 1,
          story: "A three-panel photographic study capturing the atmosphere of the Rash Utsav rituals. The triptych juxtaposes moments of quiet devotion and hands raised toward a sacred flame against the sharp silhouette of a ceremonial trident. Swirling incense smoke, rich green undertones, and the warm reflection of brass artifacts document the vivid energy of the heritage festival.",
          title: "রাশের Rush ",
          views: 8,
          shares: 2,
          _viewed: true,
          caption: "fathom of faith",
          offsetY: 250,
          qFactor: 85,
          shutter: "1/60s",
          aperture: "f/1.6",
          comments: [],
          featured: true,
          telescope: ""
        }
      ],
      filters: ["all", "religion", "festive", "metaphoric"],
      location: "",
      photosCount: "1 Photographs"
    },
    street: {
      em: "eet",
      desc: "The chaotic harmony of public spaces — capturing the geometry of environments shaped by habit, and the fleeting micro-dramas of a single frame.",
      title: "Str",
      years: "",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 6,
          cam: "poco X4pro",
          exp: "1/10s · f/1.9 · ISO 1000",
          iso: "1000",
          loc: "Uttarpradesh- India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783711319/image_hfmwnm.webp",
          tag: "people, slowshutter , aesthetic , moody",
          date: "2025-03-23",
          lens: "",
          focal: "",
          likes: 4,
          story: "",
          title: "The Railyard Ghost",
          views: 33,
          caption: "non-stationary",
          qFactor: 90,
          shutter: "1/10s",
          aperture: "f/1.9",
          comments: [
            { id: "c_1783833796649_qxdkuj0ze", date: "Jul 12, 2026", name: "abc", text: "great", timestamp: 1783833796665 },
            { id: "c_1783835133048_poowodfhn", date: "Jul 12, 2026", name: "Aman", text: "Lovely", timestamp: 1783835133127 }
          ],
          featured: true
        },
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 9,
          cam: "Poco-X3",
          exp: "1/640 · f/1.79 · ISO 100",
          iso: "100",
          loc: "New Digha Sea Beach , West Bengal - India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783847320/image_gs883d.webp",
          tag: "street, people , bnw ,",
          date: "2023-09-14",
          lens: "",
          focal: "",
          likes: 1,
          story: "A study in identity, symmetry, and social geometry. Captured against a brooding, monochromatic horizon, two classic masks dominate the foreground while nine distant figures divide into three distinct groups along the sea wall. This visual rhythm creates a subtle, unsettling dialogue between the overt anonymity of plastic faces and the quiet, invisible facades worn within human connections. It leaves the viewer with a lingering question: where is the third mask? Is it the crowd watching the horizon, or is it hiding within us?",
          title: "3 MASK-ETTERS",
          views: 19,
          shares: 1,
          caption: "The masks within",
          offsetY: -81,
          qFactor: 85,
          shutter: "1/640",
          aperture: "f/1.79",
          comments: [],
          featured: true,
          telescope: ""
        }
      ],
      filters: ["all", "monochrome", "portraits", "geometry", "night", "featured"],
      location: "",
      photosCount: "2 Photographs"
    },
    travel: {
      em: "vel",
      desc: "Journeys documented with curiosity — cultures, borders, and the roads that connect them.",
      title: "Tra",
      years: "2017 — 2023",
      photos: [],
      filters: ["all", "people", "architecture", "landscapes", "festivals", "featured"],
      location: "Rajasthan, Ladakh, Northeast India",
      photosCount: "0 Photographs"
    },
    portrait: {
      em: "trait",
      desc: "Faces that hold entire histories — quiet collaborations between photographer and subject.",
      title: "Por",
      years: "2016 — 2023",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 3,
          cam: "nikon D 3500",
          exp: "1/640s · 112mm · f/6.3 · ISO 400",
          iso: "400",
          loc: "Peace Pagoda,Darjeeling, West Bengal - India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783678286/image_p0emjs.webp",
          tag: "portrait, bnw , people",
          date: "2026-04-02",
          lens: "70-300mm",
          focal: "112mm",
          likes: 1,
          story: "",
          title: "Mahiruha",
          views: 21,
          shares: 2,
          caption: "my shelter",
          qFactor: 75,
          shutter: "1/640s",
          aperture: "f/6.3",
          featured: true
        }
      ],
      filters: ["all", "editorial", "fineart", "environmental", "featured"],
      location: "Remote Himalayan Villages, Tribal Areas",
      photosCount: "1 Photographs"
    },
    wildlife: {
      em: "life",
      desc: "Intimate encounters with creatures in their natural habitat — patience rendered visible, silence translated into light.",
      title: "Wild",
      years: "2018 — 2024",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 4,
          cam: "Nikon D3500",
          exp: "1/250s · 300mm · f/6.3 · ISO 5000",
          iso: "5000",
          loc: "Padmaja Naidu Himalayan Zoological Park Darjeeling, West Bengal - India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783679323/image_elyezv.webp",
          tag: "animal, wild, leopard,",
          date: "2026-04-01",
          lens: "70-300mm",
          focal: "300mm",
          likes: 6,
          story: "Though the common leopard could be confused with the jaguar, the jaguar is less stocky and have its rosette patterned marking on its coat with no internal spots.\\n\\n<b>DISTRIBUTION</b> : Indian subspecies of common leopard is widely distributed in India, extends into Nepal, Myanmar and Sri Lanka. In Himalayas found upto an altitude of 3000 mts.\\n<b>FOOD</b> : Leopards will kill and eat anything they can over power easily.\\n<b>Breeding</b> : Breed all the year round. Has a gestation period of 87~94 days and gives birth to 1~2 cubs per litter. Common Leopard has been in Darjeeling Zoo since its inception and have done well in captivity.",
          title: "COMMON LEOPARD ",
          views: 28,
          caption: "Panthera pardus",
          qFactor: 33,
          shutter: "1/250s",
          aperture: "f/6.3",
          featured: true
        },
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 5,
          cam: "Nikon D3500",
          exp: "1/400s · 270mm · f/6.3 · ISO 800",
          iso: "800",
          loc: "Padmaja Naidu Himalayan Zoological Park, Darjeeling, West Bengal - India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783707699/image_mvylfk.webp",
          tag: "animal, wild,panda,zoo",
          date: "2026-04-01",
          lens: "70-300mm",
          focal: "270mm",
          likes: 2,
          story: "<i>Red Pandas</i> are medium sized bear like mammal with a thick rusty to deep chestnut colored coat. The muzzle, eye patches and the fronts of the large pointed ears are white along with broad white cheek patches. The tail is long, bushy and with ginger rings.\\nRed pandas are classified as Endangered on the IUCN Red List, with their wild population estimated to have dropped by 50% over the last three generations. Fewer than 10,000 individuals are left in the wild today.main reasons include:\\nHabitat Loss: Deforestation from logging and agriculture shrinks their Himalayan forest homes.\\n\\nDietary Risk: They depend on bamboo for 98% of their diet, making them highly vulnerable when forests vanish.\\n\\nPoaching & Traps: They face illegal hunting for their fur and are often caught in traps meant for other wildlife.\\n\\n<b>DISTRIBUTION</b> : Central Nepal to Arunachal Pradesh and this stretch includes Sikkim and Darjeeling Himalayas. The distribution is further extended from Arunachal Pradesh to Myanmar and China.\\n<b>FOOD</b> : 90% of Red Panda's diet consists of bamboo leaves and the rest consist of bamboo shoots, fruits and berries.\\n\\n<b>Breeding </b>: Mating season is between January to March. Gestation period is 100-150 days to deliver 1-4 cubs in a litter during May / June. Survives and breed well in captivity.",
          title: "RED PANDA ",
          views: 13,
          caption: "Ailurus fulgens fulgens",
          qFactor: 85,
          shutter: "1/400s",
          aperture: "f/6.3",
          featured: true
        }
      ],
      filters: ["all", "mammals", "birds", "reptiles", "macro", "featured"],
      location: "India, Nepal, Bhutan",
      photosCount: "2 Photographs"
    },
    landscape: {
      em: "scape",
      desc: "The earth at its most eloquent — mountains, valleys, and the horizons between them, captured in moments of transient light.",
      title: "Land",
      years: "2015 — 2024",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 1,
          cam: "poco x3 ",
          exp: "f/1.89 · 200",
          iso: "200",
          loc: "kolkata, West Bengal - India",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783672948/image_rcm2d0.webp",
          tag: "street , kolkata , moody , dusk",
          date: "2025-09-28",
          lens: "",
          focal: "",
          likes: 5,
          story: "",
          title: "Victoria Memorial",
          views: 6,
          caption: "through the maidan",
          qFactor: 50,
          shutter: "",
          aperture: "f/1.89",
          featured: false
        }
      ],
      filters: ["all", "mountains", "valleys", "coastal", "astrophotography", "featured"],
      location: "Himalayas, Western Ghats, Kutch",
      photosCount: "1 Photographs"
    },
    astrophotography: {
      em: "photography",
      desc: "Intercepting photons at the terminal end of their journey through the cosmic vacuum, translating different eras of space-time into a synchronized grid of pixels.",
      title: "Astro",
      years: "",
      photos: [
        {
          bg: "linear-gradient(145deg,#151515,#2a2a2a)",
          id: 2,
          cam: "poco X3",
          exp: "21s , 10 frames stack · f/1.89 · ISO 6400",
          iso: "6400",
          loc: "BANTOLI, [MADHYAMAHESHWAR], RUDRAPRAYAG, UTTARAKHAND, INDIA.",
          src: "https://res.cloudinary.com/yrwqu5an/image/upload/v1783673993/image_cz4qxo.webp",
          tag: "milkyway, galaxy,astro,",
          date: "2022-10-17",
          lens: "",
          focal: "",
          likes: 1,
          story: "The Target: I have captured NGC 7000, famously known as the North America Nebula, located in the constellation Cygnus.\\n\\nThe Emission Glow: The deep pinkish-red hues come from massive clouds of <b>hydrogen</b> gas (Hα or Hydrogen-alpha emission). This gas is being ionized and energized by the intense ultraviolet radiation from hot, massive stars hidden within or near the nebula.The Dark Nebulae: The striking dark structures cutting into the bright red areas are cosmic dust lanes (primarily LDN 935). This dense interstellar dust blocks the light from the stars and glowing gas behind it, creating the distinct silhouette that shapes the \"Gulf of Mexico\" and \"Hudson Bay\" features of the nebula.\\n\\nThe Cygnus Wall: The brightest, most defined vertical structure near the center is the Cygnus Wall. This is a region of rapid, concentrated star formation where young stars are sculpting the surrounding gas with powerful stellar winds.",
          title: "The Cygnus Arm",
          views: 26,
          hidden: false,
          caption: "milky way band",
          qFactor: 96,
          shutter: "21s , 10 frames stack",
          aperture: "f/1.89",
          featured: true,
          telescope: ""
        }
      ],
      filters: ["astro"],
      location: "",
      photosCount: "1 Photographs"
    }
  },
  homepageFilterTabs: ["wildlife", "landscape", "travel", "portrait", "street"],
  portfolioFilterTabs: [
    {
      id: "all",
      label: "All Genres",
      categories: ["wildlife", "landscape", "travel", "street", "portrait", "commercial"]
    },
    {
      id: "outdoors",
      label: "Outdoors",
      categories: ["wildlife", "landscape", "travel"]
    },
    {
      id: "humanity",
      label: "Humanity",
      categories: ["portrait", "street"]
    },
    {
      id: "creative",
      label: "Creative",
      categories: ["commercial"]
    }
  ],
  recognitionLogos: [
    { name: "Atverts", src: "websitelogos/Atverts.webp" },
    { name: "Chandannagar College", src: "websitelogos/Chandannagar College.png" },
    { name: "IIT Kharagpur", src: "websitelogos/IIT KGP.png" },
    { name: "Jadavpur University", src: "websitelogos/Jadavpur University.png" },
    { name: "National Students' Space Challenge", src: "websitelogos/NSSC 2022.png" },
    { name: "Ramakrishna Mission College, Narendrapur", src: "websitelogos/Ramkrishna Mission College Narendrapur.png" }
  ]
};

// Supabase Configuration
const supabaseUrl = 'https://wxqwjxmcllfcmtwrspmz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cXdqeG1jbGxmY210d3JzcG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NDYzMzUsImV4cCI6MjA5NzUyMjMzNX0.VX6r0mMm_zrdUKIjg7vt4kEikHxqLy-_mNRdYYWeoto';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
window.supabaseClient = supabaseClient;

// Global Store Management
let siteData = DEFAULT_SITE_DATA;
window.siteData = siteData;

const DB_KEY = 'luminar_site_data';

// ── ASYNC DB SYNCHRONIZATION ── //
async function initDatabase() {
  window.initDatabase = initDatabase;
  let loadedFromSupabase = false;
  try {
    // Attempt to load from Supabase portfolio_data (ID = 1)
    const { data, error } = await supabaseClient
      .from('portfolio_data')
      .select('data')
      .eq('id', 1)
      .single();
      
    if (error) {
      console.warn("Supabase row query failed.", error);
      // Only insert baseline data if the row explicitly does not exist
      if (error.code === 'PGRST116') {
        await supabaseClient
          .from('portfolio_data')
          .insert({ id: 1, data: DEFAULT_SITE_DATA });
        siteData = DEFAULT_SITE_DATA;
        loadedFromSupabase = true;
      } else {
        // Fall back to local storage for other errors (like network/RLS issues)
        const rawData = localStorage.getItem(DB_KEY);
        if (rawData) {
          siteData = JSON.parse(rawData);
        } else {
          siteData = DEFAULT_SITE_DATA;
        }
      }
    } else if (data && data.data) {
      siteData = data.data;
      loadedFromSupabase = true;
    }
  } catch (e) {
    console.error("Supabase network error, reverting to localStorage fallback.", e);
    // Fallback to local storage
    try {
      const rawData = localStorage.getItem(DB_KEY);
      if (rawData) {
        siteData = JSON.parse(rawData);
      }
    } catch (err) {
      siteData = DEFAULT_SITE_DATA;
    }
  }

  let needsSave = false;

  // Clean up broken image clutter (missing or empty src)
  if (siteData.homepagePhotos) {
    const origHomeLen = siteData.homepagePhotos.length;
    siteData.homepagePhotos = siteData.homepagePhotos.filter(p => p && p.src && p.src.trim() !== '');
    if (siteData.homepagePhotos.length !== origHomeLen) { needsSave = true; }
  }
  if (siteData.galleryCategories) {
    for (const catKey in siteData.galleryCategories) {
      const cat = siteData.galleryCategories[catKey];
      if (cat && cat.photos) {
        const origCatLen = cat.photos.length;
        cat.photos = cat.photos.filter(p => p && p.src && p.src.trim() !== '');
        if (cat.photos.length !== origCatLen) { needsSave = true; }
      }
    }
  }
  // Clean up default seeded unsplash images from loaded siteData
  if (siteData.homepagePhotos) {
    const originalLength = siteData.homepagePhotos.length;
    siteData.homepagePhotos = siteData.homepagePhotos.filter(p => p && p.src && !p.src.includes('unsplash.com'));
    if (siteData.homepagePhotos.length !== originalLength) {
      needsSave = true;
    }
  }

  if (siteData.galleryCategories) {
    for (const catKey in siteData.galleryCategories) {
      const cat = siteData.galleryCategories[catKey];
      if (cat && cat.photos) {
        const originalLength = cat.photos.length;
        cat.photos = cat.photos.filter(p => p && p.src && !p.src.includes('unsplash.com'));
        if (cat.photos.length !== originalLength) {
          needsSave = true;
        }
      }
    }
  }

  // Ensure crucial nodes exist
  if (!siteData.profile) siteData.profile = DEFAULT_SITE_DATA.profile;
  if (!siteData.homepagePhotos) siteData.homepagePhotos = [];
  if (!siteData.homepageFilterTabs) siteData.homepageFilterTabs = DEFAULT_SITE_DATA.homepageFilterTabs;
  if (!siteData.portfolioFilterTabs) siteData.portfolioFilterTabs = DEFAULT_SITE_DATA.portfolioFilterTabs;
  if (!siteData.galleryCategories) siteData.galleryCategories = DEFAULT_SITE_DATA.galleryCategories;
  if (!siteData.stories) siteData.stories = DEFAULT_SITE_DATA.stories;
  if (!siteData.journalEntries) siteData.journalEntries = DEFAULT_SITE_DATA.journalEntries;
  if (!siteData.recognitionLogos) siteData.recognitionLogos = DEFAULT_SITE_DATA.recognitionLogos;
  if (!siteData.categoriesOrder) siteData.categoriesOrder = Object.keys(siteData.galleryCategories);

  // Increment overall session views once per browser session (only if loaded from Supabase)
  if (!sessionStorage.getItem('session_counted') && loadedFromSupabase) {
    siteData.views = (siteData.views || 0) + 1;
    sessionStorage.setItem('session_counted', 'true');
    needsSave = true;
  }

  // Export globally
  window.siteData = siteData;
  window.siteDataLoaded = true;

  // Dispatch global custom event for UI updates
  document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: siteData }));

  // Save the cleaned database back to Supabase and LocalStorage if changes were made AND we loaded from Supabase
  if (needsSave && loadedFromSupabase) {
    console.log("Updating database state safely...");
    setTimeout(() => {
      window.saveSiteData(siteData);
    }, 1000);
  }
}

// Kick off immediately
initDatabase();

window.saveSiteData = async function(newData) {
  try {
    if (!newData) newData = window.siteData;

    // 1. Save to Supabase Cloud
    const { error } = await supabaseClient
      .from('portfolio_data')
      .upsert({ id: 1, data: newData, updated_at: new Date().toISOString() });

    if (error) throw error;

    // 2. Cache in LocalStorage as backup
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(newData));
    } catch (lsError) {
      console.warn("Failed to save backup copy to browser LocalStorage.", lsError);
    }
    
    window.siteData = newData;

    // 3. Dispatch update event
    document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: newData }));
    return true;
  } catch (e) {
    console.error("Failed to save data to Supabase.", e);
    return false;
  }
};

window.resetSiteData = async function() {
  try {
    const { error } = await supabaseClient
      .from('portfolio_data')
      .upsert({ id: 1, data: DEFAULT_SITE_DATA, updated_at: new Date().toISOString() });

    if (error) throw error;
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_SITE_DATA));
    } catch (lsError) {
      console.warn("Failed to reset browser LocalStorage copy.", lsError);
    }
    window.siteData = DEFAULT_SITE_DATA;
    document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: DEFAULT_SITE_DATA }));
    return true;
  } catch (e) {
    console.error("Failed to reset site data.", e);
    // Fallback reset
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_SITE_DATA));
      window.siteData = DEFAULT_SITE_DATA;
      document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: DEFAULT_SITE_DATA }));
      return true;
    } catch (err) {
      return false;
    }
  }
};

// ── SOCIAL INTERACTIONS & ANALYTICS DATABASE HELPERS ── //
window.portfolioDb = {
  // FIX: single write queue serializing every read-modify-write cycle against
  // the shared 'portfolio_data' row. Without this, two overlapping calls
  // (e.g. a like toggle and a view increment, or two rapid like/unlike
  // presses) can each fetch the row, modify their own field, and save the
  // whole row back — whichever save finishes last overwrites the other's
  // change, silently dropping it ("lost update"). Queuing forces every
  // operation to fully finish (fetch + save) before the next one starts,
  // so each one always modifies the true latest state.
  _writeQueue: Promise.resolve(),

  _enqueueWrite(task) {
    const result = this._writeQueue.then(() => task());
    // Swallow errors here so a failed write doesn't permanently jam the queue
    // for subsequent operations; the original error still propagates to the
    // caller via the returned (unmodified) `result` promise.
    this._writeQueue = result.catch(() => {});
    return result;
  },

  findItem(type, itemId, subId) {
    if (!window.siteData) return null;
    if (type === 'home_photo') {
      const id = parseInt(itemId);
      return window.siteData.homepagePhotos.find(p => p.id === id);
    } else if (type === 'gallery_photo') {
      const cat = window.siteData.galleryCategories[itemId];
      if (cat && cat.photos) {
        const id = parseInt(subId);
        return cat.photos.find(p => p.id === id);
      }
    } else if (type === 'story') {
      return window.siteData.stories.find(s => s.id == itemId || s.slug === itemId);
    } else if (type === 'journal') {
      return window.siteData.journalEntries.find(j => j.id == itemId);
    }
    return null;
  },

  async fetchLatestData() {
    try {
      const { data, error } = await supabaseClient
        .from('portfolio_data')
        .select('data')
        .eq('id', 1)
        .single();
      if (!error && data && data.data) {
        return data.data; // Interactions are handled separately
      }
    } catch (e) {
      console.warn("Could not fetch latest database state, using memory fallback.", e);
    }
    return window.siteData;
  },

  findItemOnData(dataObj, type, itemId, subId) {
    if (!dataObj) return null;
    if (type === 'home_photo') {
      const id = parseInt(itemId);
      return dataObj.homepagePhotos ? dataObj.homepagePhotos.find(p => p.id === id) : null;
    } else if (type === 'gallery_photo') {
      const cat = dataObj.galleryCategories ? dataObj.galleryCategories[itemId] : null;
      if (cat && cat.photos) {
        const id = parseInt(subId);
        return cat.photos.find(p => p.id === id);
      }
    } else if (type === 'story') {
      return dataObj.stories ? dataObj.stories.find(s => s.id == itemId || s.slug === itemId) : null;
    } else if (type === 'journal') {
      return dataObj.journalEntries ? dataObj.journalEntries.find(j => j.id == itemId) : null;
    }
    return null;
  },

  async incrementView(type, itemId, subId) {
    return this._enqueueWrite(async () => {
      const item = this.findItemOnData(window.siteData, type, itemId, subId);
      if (item) {
        item.views = (item.views || 0) + 1;
        const actualType = (type === 'home_photo') ? 'gallery_photo' : type;
        await supabaseClient.from('content_interactions').upsert({
          item_id: String(item.id || itemId),
          item_type: actualType,
          likes: item.likes || 0,
          views: item.views
        }, { onConflict: 'item_id' });
      }
    });
  },

  async incrementShare(type, itemId, subId) {
    return this._enqueueWrite(async () => {
      const data = await this.fetchLatestData();
      const item = this.findItemOnData(data, type, itemId, subId);
      if (item) {
        item.shares = (item.shares || 0) + 1;
        // Shares aren't in interactions table yet, just tracking locally for now
        return item.shares;
      }
      return 0;
    });
  },

  _likeDebounceTimers: {},

  async toggleLike(type, itemId, subId, isLike) {
    const key = `${type}_${itemId}_${subId}`;
    
    // Update local memory state immediately for instant feedback
    const memItem = this.findItemOnData(window.siteData, type, itemId, subId);
    if (memItem) {
      const current = memItem.likes || 0;
      memItem.likes = Math.max(0, current + (isLike ? 1 : -1));
    }

    if (this._likeDebounceTimers[key]) {
      clearTimeout(this._likeDebounceTimers[key]);
    }

    return new Promise((resolve) => {
      resolve(memItem ? memItem.likes : 0);

      this._likeDebounceTimers[key] = setTimeout(() => {
        delete this._likeDebounceTimers[key];
        
        this._enqueueWrite(async () => {
          if (memItem) {
            const actualType = (type === 'home_photo') ? 'gallery_photo' : type;
            await supabaseClient.from('content_interactions').upsert({
              item_id: String(memItem.id || itemId),
              item_type: actualType,
              likes: memItem.likes,
              views: memItem.views || 0
            }, { onConflict: 'item_id' });
          }
          return memItem ? memItem.likes : 0;
        });
      }, 1000);
    });
  },

  async addComment(type, itemId, subId, name, text) {
    return this._enqueueWrite(async () => {
      const item = this.findItemOnData(window.siteData, type, itemId, subId);
      if (item) {
        if (!item.comments) item.comments = [];
        const newComment = {
          id: 'c_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
          name: name || 'Anonymous',
          text: text,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          timestamp: Date.now()
        };
        item.comments.push(newComment);
        
        const actualType = (type === 'home_photo') ? 'gallery_photo' : type;
        await supabaseClient.from('content_comments').insert({
          id: newComment.id,
          item_id: String(item.id || itemId),
          item_type: actualType,
          name: newComment.name,
          text: newComment.text,
          date: newComment.date,
          timestamp: newComment.timestamp
        });
        
        return newComment;
      }
      return null;
    });
  },

  async deleteComment(type, itemId, subId, commentId) {
    return this._enqueueWrite(async () => {
      const item = this.findItemOnData(window.siteData, type, itemId, subId);
      if (item && item.comments) {
        const initialLength = item.comments.length;
        item.comments = item.comments.filter(c => c.id !== commentId);
        if (item.comments.length !== initialLength) {
          await supabaseClient.from('content_comments').delete().eq('id', commentId);
          return true;
        }
      }
      return false;
    });
  }
};