// Dynamic Content Management System (CMS) Database
// Consolidates all website data, making it dynamic and editable.

const DEFAULT_SITE_DATA = {
  profile: {
    name: "Krishnendu Goswami",
    title: "Luminar — Photography",
    bioTitle: "Vision shaped by",
    bioTitleEm: "a thousand sunrises",
    bioExcerpt: "Krishnendu Goswami is an internationally exhibited photographer whose work navigates the quiet intersection of the natural world and human presence.",
    bioParagraphs: [
      "Based in India, their journey with the camera began over two decades ago. What started as a personal quest to document vanishing landscapes became a lifelong dedication to the ethics and art of visual storytelling. Their images have appeared in natural history magazines, and have been exhibited across galleries internationally.",
      "Every expedition is a partnership with time and light. By spending weeks in remote areas—from the high altitudes of the Zanskar range to the dense jungles of the Western Ghats—they seek to capture not just a scene, but the silent atmosphere and emotional weight of a place. Their approach is marked by absolute respect for habitats, always prioritizing conservation ethics over capturing a shot."
    ],
    philosophy: "I don't chase photographs. I wait for the world to reveal itself — one breath at a time. The camera is simply an extension of that patience.",
    dob: "2002-12-22",
    stats: [
      { value: "120+", label: "Published Works" },
      { value: "38", label: "International Awards" },
      { value: "18", label: "Countries Visited" }
    ],
    awards: [
      { year: "2024", name: "Wildlife Photographer of the Year — Highly Commended", org: "Natural History Museum, London", badge: "Published — NHM Annual Portfolio" },
      { year: "2023", name: "Nature TTL Photographer of the Year — Gold Award", org: "Nature TTL, UK", badge: "" },
      { year: "2023", name: "Featured — National Geographic Traveller India", org: "Condé Nast India", badge: "Cover Feature — Dec 2023" },
      { year: "2022", name: "Siena International Photo Awards — Finalist", org: "Siena Awards, Italy", badge: "" },
      { year: "2021", name: "International Photography Awards — Honorable Mention", org: "IPA, New York", badge: "Published — Luerzer's Archive" },
      { year: "2020", name: "Sony World Photography Awards — Shortlisted", org: "World Photography Organisation", badge: "" }
    ],
    location: "Baidyabati, West Bengal, India",
    email: "krishnendutitangoswami@gmail.com",
    instagram: "#",
    twitter: "#"
  },
  homepageFilterTabs: ['wildlife', 'landscape', 'travel', 'portrait', 'street', 'aerial'],
  portfolioFilterTabs: [
    { id: 'all', label: 'All Genres', categories: ['wildlife', 'landscape', 'travel', 'street', 'portrait', 'commercial'] },
    { id: 'outdoors', label: 'Outdoors', categories: ['wildlife', 'landscape', 'travel'] },
    { id: 'humanity', label: 'Humanity', categories: ['portrait', 'street'] },
    { id: 'creative', label: 'Creative', categories: ['commercial'] }
  ],
  homepagePhotos: [],
  galleryCategories: {
    wildlife: {
      title: "Wild",
      em: "life",
      desc: "Intimate encounters with creatures in their natural habitat — patience rendered visible, silence translated into light.",
      photosCount: "42 Photographs",
      location: "India, Nepal, Bhutan",
      years: "2018 — 2024",
      filters: ["all", "mammals", "birds", "reptiles", "macro", "featured"],
      photos: [
        {id:0,tag:'mammals',title:'Snow Leopard at Dawn, Spiti',caption:'Kibber, Himachal Pradesh · 2022',story:'After fourteen days at 4,600 metres, this sub-adult male walked out of the boulder field at first light. I had three minutes before he disappeared back into the mountain.',cam:'Canon EOS R5',lens:'500mm f/4L IS',exp:'1/320s · f/5.6 · ISO 3200',loc:'Kibber, HP',date:'Feb 14, 2022',bg:'linear-gradient(145deg,#0f1a0f,#1a2e1a)',featured:true},
        {id:1,tag:'birds',title:'Indian Roller in Flight',caption:'Kanha National Park · 2023',story:'The Indian Roller always waits on the highest perch. The challenge is anticipating which direction it will launch. After four hours of watching one bird, I began to read its intention.',cam:'Canon EOS R5',lens:'600mm f/4L IS',exp:'1/2000s · f/5 · ISO 1600',loc:'Kanha, MP',date:'Apr 3, 2023',bg:'linear-gradient(145deg,#0a1520,#152030)',featured:false},
        {id:2,tag:'mammals',title:'Bengal Tiger, Bandhavgarh',caption:'Madhya Pradesh · 2023',story:'Tala gate, 0600h. The tiger came down the dry nala and stopped exactly where the light found a gap in the canopy. Sometimes the forest arranges itself.',cam:'Canon EOS R5',lens:'500mm f/4L IS',exp:'1/500s · f/4.5 · ISO 800',loc:'Bandhavgarh, MP',date:'Mar 18, 2023',bg:'linear-gradient(145deg,#1a1205,#2a1e0a)',featured:false},
        {id:3,tag:'birds',title:'Great Hornbill Pair',caption:'Kaziranga, Assam · 2021',story:'I had been watching a nest hollow in a fig tree for three days. On the fourth morning both birds arrived together. The male held a fig in his bill for forty seconds before passing it to the female.',cam:'Canon EOS 5D IV',lens:'600mm f/4L IS',exp:'1/640s · f/5.6 · ISO 1250',loc:'Kaziranga, Assam',date:'Jan 22, 2021',bg:'linear-gradient(145deg,#100a1a,#1e1228)',featured:false},
        {id:4,tag:'mammals',title:'Leopard at Sunset, Ranthambore',caption:'Rajasthan · 2022',story:'Zone 4, Rajbagh Lake. The leopard draped itself over the branch of an ancient banyan — the same tree it had used every evening for three seasons.',cam:'Canon EOS R5',lens:'400mm f/2.8L IS',exp:'1/250s · f/3.5 · ISO 4000',loc:'Ranthambore, RJ',date:'Nov 5, 2022',bg:'linear-gradient(145deg,#0a1a10,#142814)',featured:true},
        {id:5,tag:'reptiles',title:'King Cobra, Agumbe',caption:'Karnataka · 2020',story:'The longest venomous snake in the world builds a nest and guards it — an unusual behaviour among serpents. This individual was photographed near its nesting site in the Western Ghats.',cam:'Canon EOS 5D IV',lens:'100mm f/2.8L Macro',exp:'1/160s · f/8 · ISO 400',loc:'Agumbe, KA',date:'Jun 8, 2020',bg:'linear-gradient(145deg,#1a0a0a,#2a1212)',featured:false},
        {id:6,tag:'mammals',title:'Wild Elephant, Kabini',caption:'Karnataka · 2023',story:'The Kabini reservoir at dusk brings every species in the forest to the same shoreline. This elephant stood in the water for nearly twenty minutes, completely still.',cam:'Canon EOS R5',lens:'500mm f/4L IS',exp:'1/800s · f/4 · ISO 640',loc:'Kabini, KA',date:'Oct 14, 2023',bg:'linear-gradient(145deg,#121a0a,#1e2a10)',featured:false},
        {id:7,tag:'macro',title:'Orchid Mantis, Silent Valley',caption:'Kerala · 2021',story:'The orchid mantis is perhaps the most compelling example of aggressive mimicry in the insect world. Finding one takes patience. Photographing it requires a different kind of stillness.',cam:'Canon EOS 5D IV',lens:'180mm f/3.5L Macro',exp:'1/200s · f/11 · ISO 200',loc:'Silent Valley, KL',date:'Aug 30, 2021',bg:'linear-gradient(145deg,#0a1510,#122010)',featured:false},
        {id:8,tag:'birds',title:'Himalayan Monal, Chopta',caption:'Uttarakhand · 2022',story:'At 3,500m in the Tungnath oak forest in March, the Himalayan Monal males are displaying. The iridescent plumage catches and refracts light like a living prism.',cam:'Canon EOS R5',lens:'600mm f/4L IS',exp:'1/1000s · f/4.5 · ISO 2000',loc:'Chopta, UK',date:'Mar 4, 2022',bg:'linear-gradient(145deg,#0a0f1a,#101828)',featured:false},
        {id:9,tag:'mammals',title:'One-Horned Rhino, Kaziranga',caption:'Assam · 2022',story:'The Indian one-horned rhino is a conservation success story measured in decades of ground-level work. Photographing them in the tall elephant grass requires getting low.',cam:'Canon EOS R5',lens:'400mm f/2.8L IS',exp:'1/400s · f/4 · ISO 800',loc:'Kaziranga, Assam',date:'Feb 10, 2022',bg:'linear-gradient(145deg,#101a14,#1a2a1e)',featured:false},
        {id:10,tag:'macro',title:'Jewel Beetle, Coorg',caption:'Karnataka · 2023',story:'The Buprestid beetles of the Western Ghats are among the most spectacular insects in India. This individual was resting on a leaf after rain, the surface droplets acting as miniature lenses.',cam:'Canon EOS 5D IV',lens:'180mm f/3.5L Macro',exp:'1/160s · f/16 · ISO 320',loc:'Coorg, KA',date:'Jul 22, 2023',bg:'linear-gradient(145deg,#1a1508,#2a2010)',featured:false},
        {id:11,tag:'mammals',title:'Wolf Pack at Dusk, Kibber',caption:'Himachal Pradesh · 2023',story:'The last light hit the ridge for eleven minutes. The pack moved through it in single file, the alpha ahead, two juveniles at the rear. I made 40 frames. This was the one.',cam:'Canon EOS R5',lens:'500mm f/4L IS',exp:'1/125s · f/4 · ISO 12800',loc:'Kibber, HP',date:'Oct 28, 2023',bg:'linear-gradient(145deg,#0f0f0f,#1e1e18)',featured:true}
      ]
    },
    landscape: {
      title: "Land",
      em: "scape",
      desc: "The earth at its most eloquent — mountains, valleys, and the horizons between them, captured in moments of transient light.",
      photosCount: "58 Photographs",
      location: "Himalayas, Western Ghats, Kutch",
      years: "2015 — 2024",
      filters: ["all", "mountains", "valleys", "coastal", "astrophotography", "featured"],
      photos: [
        {id:0,tag:'mountains',title:'Misty Peak, Nun Kun',caption:'Zanskar Range, Ladakh · 2023',story:'Taken from a basecamp at 4,800m. The clouds split for exactly 45 seconds at sunrise, illuminating the dual peaks.',cam:'Sony A7R V',lens:'70-200mm f/2.8 GM',exp:'1/125s · f/8 · ISO 100',loc:'Nun Kun, Ladakh',date:'Sep 12, 2023',bg:'linear-gradient(145deg,#0d1624,#1a2b42)',featured:true},
        {id:1,tag:'astrophotography',title:'Milky Way over Pangong Tso',caption:'Pangong Lake, Ladakh · 2022',story:'A single 20-second exposure at 14mm. The high altitude air (4,250m) provides extreme atmospheric transparency and no light pollution.',cam:'Sony A7R IV',lens:'14mm f/1.8 GM',exp:'20s · f/1.8 · ISO 3200',loc:'Pangong, Ladakh',date:'Jun 24, 2022',bg:'linear-gradient(145deg,#05051a,#101030)',featured:true},
        {id:2,tag:'valleys',title:'Monsoon Clouds, Coorg Valley',caption:'Western Ghats, Karnataka · 2023',story:'Looking down from Raja Seat as the rain swept through. The forest canopy acts like a giant atmospheric pump.',cam:'Sony A7R V',lens:'24-70mm f/2.8 GM',exp:'1/250s · f/5.6 · ISO 200',loc:'Coorg, KA',date:'Jul 18, 2023',bg:'linear-gradient(145deg,#121b10,#223320)',featured:false},
        {id:3,tag:'coastal',title:'Sunset at Kaup Beach',caption:'Udupi, Karnataka · 2021',story:'The iconic lighthouse standing tall against a dramatic monsoon sunset. A 5-second long exposure smoothened the wild ocean waves.',cam:'Sony A7R III',lens:'16-35mm f/4',exp:'5s · f/11 · ISO 100',loc:'Udupi, KA',date:'Oct 5, 2021',bg:'linear-gradient(145deg,#1f0a1f,#301030)',featured:false},
        {id:4,tag:'mountains',title:'Sunset over Kanchenjunga',caption:'Sikkim, India · 2022',story:'The world\'s third highest peak glowing pink in the last light of a freezing December evening, viewed from Tiger Hill.',cam:'Sony A7R IV',lens:'100-400mm GM',exp:'1/80s · f/6.3 · ISO 100',loc:'Tiger Hill, WB',date:'Dec 15, 2022',bg:'linear-gradient(145deg,#1f0a0a,#3b1a1a)',featured:true},
        {id:5,tag:'astrophotography',title:'Star Trails, Rann of Kutch',caption:'Gujarat, India · 2023',story:'A composite of 120 exposures of 30 seconds each, capturing the rotation of the Earth over the vast white salt flats.',cam:'Sony A7R V',lens:'24mm f/1.4 GM',exp:'30s (x120) · f/2.8 · ISO 800',loc:'Kutch, GJ',date:'Jan 10, 2023',bg:'linear-gradient(145deg,#030815,#0c152a)',featured:false}
      ]
    },
    travel: {
      title: "Tra",
      em: "vel",
      desc: "Journeys documented with curiosity — cultures, borders, and the roads that connect them.",
      photosCount: "35 Photographs",
      location: "Rajasthan, Ladakh, Northeast India",
      years: "2017 — 2023",
      filters: ["all", "people", "architecture", "landscapes", "festivals", "featured"],
      photos: [
        {id:0,tag:'people',title:'Nomad Elder, Pushkar',caption:'Rajasthan, India · 2022',story:'A portrait of a camel herder. The deep creases on his face tell a story of a lifetime spent under the harsh Thar desert sun.',cam:'Fujifilm GFX 100S',lens:'110mm f/2',exp:'1/125s · f/2.2 · ISO 400',loc:'Pushkar, RJ',date:'Nov 8, 2022',bg:'linear-gradient(145deg,#1c120a,#332010)',featured:true},
        {id:1,tag:'architecture',title:'Thiksey Monastery at Dusk',caption:'Leh, Ladakh · 2023',story:'Built on a hill-slope, this twelve-story monastery resembles the Potala Palace. Photographed as the monks lit the evening oil lamps.',cam:'Sony A7R V',lens:'24-70mm GM II',exp:'1/15s · f/4 · ISO 1600',loc:'Thiksey, Ladakh',date:'Sep 15, 2023',bg:'linear-gradient(145deg,#0d101a,#171c2f)',featured:true},
        {id:2,tag:'festivals',title:'Hornbill Festival Dancer',caption:'Kohima, Nagaland · 2021',story:'A Naga warrior in traditional headgear during the opening ceremony. The motion of the dance was captured with a slow panning shutter.',cam:'Sony A7R IV',lens:'70-200mm GM',exp:'1/30s · f/5.6 · ISO 200',loc:'Kisama, Nagaland',date:'Dec 1, 2021',bg:'linear-gradient(145deg,#1f0a0a,#331010)',featured:false},
        {id:3,tag:'landscapes',title:'Bridges of Cherrapunji',caption:'Meghalaya, India · 2022',story:'The double-decker living root bridge in Nongriat village, hand-guided by the Khasi people across generations.',cam:'Sony A7R IV',lens:'16-35mm f/4',exp:'1/4s · f/8 · ISO 400',loc:'Nongriat, Meghalaya',date:'Oct 22, 2022',bg:'linear-gradient(145deg,#0f1c12,#1a3320)',featured:false}
      ]
    },
    street: {
      title: "Str",
      em: "eet",
      desc: "Urban life caught unguarded — the micro-dramas of cities and people in a single frame.",
      photosCount: "29 Photographs",
      location: "Mumbai, Kolkata, Varanasi, Delhi",
      years: "2019 — 2024",
      filters: ["all", "monochrome", "portraits", "geometry", "night", "featured"],
      photos: [
        {id:0,tag:'monochrome',title:'The Handpulled Rickshaw, Kolkata',caption:'Kolkata, West Bengal · 2023',story:'A rainy morning in Bowbazar. The monochrome processing emphasizes the timeless, graphic quality of Kolkata\'s older alleys.',cam:'Leica M10 Monochrom',lens:'35mm f/2 Summicron',exp:'1/250s · f/4 · ISO 400',loc:'Kolkata, WB',date:'Aug 4, 2023',bg:'linear-gradient(145deg,#151515,#2a2a2a)',featured:true},
        {id:1,tag:'night',title:'Chhatrapati Shivaji Terminus at Night',caption:'Mumbai, Maharashtra · 2022',story:'A long exposure of the historic railway station. The light trails of the black-and-yellow taxis frame the Victorian Gothic architecture.',cam:'Sony A7R IV',lens:'24-70mm GM',exp:'8s · f/11 · ISO 100',loc:'Mumbai, MH',date:'Apr 12, 2022',bg:'linear-gradient(145deg,#0f0a1c,#1f153a)',featured:true},
        {id:2,tag:'portraits',title:'Ghat Sadhu, Varanasi',caption:'Varanasi, Uttar Pradesh · 2023',story:'An elderly Sadhu sitting in deep contemplation at Kedar Ghat as pilgrims gather for the morning Ganga Aarti.',cam:'Sony A7R V',lens:'50mm f/1.2 GM',exp:'1/200s · f/1.2 · ISO 200',loc:'Varanasi, UP',date:'Nov 2, 2023',bg:'linear-gradient(145deg,#1a1308,#302310)',featured:false},
        {id:3,tag:'geometry',title:'Steps of Chand Baori',caption:'Abhaneri, Rajasthan · 2021',story:'A graphic study of the thousands of symmetrical stone steps leading down to the ancient stepwell reservoir.',cam:'Sony A7R III',lens:'16-35mm f/4',exp:'1/160s · f/8 · ISO 100',loc:'Abhaneri, RJ',date:'Nov 28, 2021',bg:'linear-gradient(145deg,#1a1a0f,#2e2e1c)',featured:false}
      ]
    },
    portrait: {
      title: "Por",
      em: "trait",
      desc: "Faces that hold entire histories — quiet collaborations between photographer and subject.",
      photosCount: "22 Photographs",
      location: "Remote Himalayan Villages, Tribal Areas",
      years: "2016 — 2023",
      filters: ["all", "editorial", "fineart", "environmental", "featured"],
      photos: [
        {id:0,tag:'environmental',title:'The Shepherd of Zanskar',caption:'Ladakh, India · 2023',story:'Photographed inside his winter stone shelter. The light source is a single skylight hole above, illuminating him amidst the dust.',cam:'Sony A7R V',lens:'35mm f/1.4 GM',exp:'1/60s · f/1.4 · ISO 1600',loc:'Padum, Zanskar',date:'Sep 20, 2023',bg:'linear-gradient(145deg,#12151c,#222835)',featured:true},
        {id:1,tag:'fineart',title:'Sufi Singer, Ajmer Sharif',caption:'Rajasthan, India · 2022',story:'A portrait capturing the emotional intensity of a devotional Qawwali singer during the annual Urs festival.',cam:'Sony A7R IV',lens:'85mm f/1.4 GM',exp:'1/160s · f/1.8 · ISO 1250',loc:'Ajmer, RJ',date:'Feb 5, 2022',bg:'linear-gradient(145deg,#1c0d0d,#341a1a)',featured:true},
        {id:2,tag:'editorial',title:'Weaver of Assam',caption:'Sualkuchi, Assam · 2021',story:'An elder artisan weaving Muga silk on her traditional handloom. The golden hue of the silk reflects the light in her workshop.',cam:'Sony A7R IV',lens:'50mm f/1.2 GM',exp:'1/100s · f/2 · ISO 640',loc:'Sualkuchi, Assam',date:'Jan 18, 2021',bg:'linear-gradient(145deg,#1f1a0a,#383015)',featured:false}
      ]
    },
    commercial: {
      title: "Com",
      em: "mercial",
      desc: "Brand narratives, product design, and editorial assignments — where artistry meets marketing intent.",
      photosCount: "18 Photographs",
      location: "Mumbai, Bangalore, Delhi",
      years: "2020 — 2024",
      filters: ["all", "editorial", "product", "hospitality", "architecture", "featured"],
      photos: [
        {id:0,tag:'hospitality',title:'The Aman Bagh Courtyard',caption:'Rajasthan, India · 2023',story:'An architectural landscape commission for the luxury resort, framing the pink sandstone geometry and reflective pool at dusk.',cam:'Phase One XT',lens:'Rodenstock 32mm',exp:'2s · f/11 · ISO 100',loc:'Amanbagh, RJ',date:'Nov 12, 2023',bg:'linear-gradient(145deg,#1c151c,#342834)',featured:true},
        {id:1,tag:'product',title:'Handcrafted Brassware Editorial',caption:'Studio Commission · 2022',story:'A still life study focusing on the raw textures and reflections of artisan-hammered brass vessels using natural window light.',cam:'Sony A7R IV',lens:'90mm f/2.8 Macro G',exp:'1/80s · f/5.6 · ISO 200',loc:'Studio, Mumbai',date:'Aug 15, 2022',bg:'linear-gradient(145deg,#1c1a10,#343020)',featured:true},
        {id:2,tag:'architecture',title:'The Brick Pavilion',caption:'Alibaug, Maharashtra · 2023',story:'An editorial capture of a modern minimalist weekend home, highlighting the play of sun shadow across raw brick structures.',cam:'Sony A7R V',lens:'24-70mm GM II',exp:'1/200s · f/8 · ISO 100',loc:'Alibaug, MH',date:'Jan 24, 2023',bg:'linear-gradient(145deg,#1f150f,#3a281e)',featured:false}
      ]
    }
  },
  stories: [
    {
      id: 0,
      slug: "snow-leopard-corridors",
      tag: "Wildlife · Long-form Project",
      title: "The Last Snow Leopard Corridors",
      desc: "A four-year winter fieldwork series documenting the fragile high-altitude movement corridors of the ghost of the mountains in Spiti and Ladakh.",
      years: "2019 — 2023",
      duration: "4 Years",
      location: "Spiti & Ladakh, India",
      bg: "linear-gradient(145deg,#0a1a0a,#0f2010)"
    },
    {
      id: 1,
      slug: "ganga-receding-source",
      tag: "Conservation · Visual Essay",
      title: "Ganga: The Receding Source",
      desc: "A visual study of the Gangotri glacier's retreat and the changing riparian communities along the first hundred kilometres of the river path.",
      years: "2021 — 2022",
      duration: "18 Months",
      location: "Garhwal Himalayas, India",
      bg: "linear-gradient(145deg,#101a24,#1a2e3a)"
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
      bg: "linear-gradient(135deg,#0a1a0a,#0f2010)"
    },
    {
      id: 1,
      cat: "Technique",
      title: "Night Photography Without GPS: Navigating Dark Skies the Old Way",
      excerpt: "Star charts, local guides, and the irreplaceable value of arriving the night before — a guide to planning astrophotography expeditions.",
      date: "January 2024",
      readTime: "6 min read",
      bg: "linear-gradient(135deg,#0d101a,#171c2f)"
    },
    {
      id: 2,
      cat: "Philosophy",
      title: "Why I Still Shoot Film (and Why It's Not About Nostalgia)",
      excerpt: "The slow, deliberate economy of 36 exposures per roll is not a limitation — it's a form of discipline that digital abundance quietly erodes.",
      date: "November 2023",
      readTime: "5 min read",
      bg: "linear-gradient(135deg,#1c120a,#332010)"
    }
  ]
};

// Supabase Configuration
const supabaseUrl = 'https://wxqwjxmcllfcmtwrspmz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cXdqeG1jbGxmY210d3JzcG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NDYzMzUsImV4cCI6MjA5NzUyMjMzNX0.VX6r0mMm_zrdUKIjg7vt4kEikHxqLy-_mNRdYYWeoto';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Global Store Management
let siteData = DEFAULT_SITE_DATA;
window.siteData = siteData;

const DB_KEY = 'luminar_site_data';

// ── ASYNC DB SYNCHRONIZATION ── //
async function initDatabase() {
  window.initDatabase = initDatabase;
  try {
    // Attempt to load from Supabase portfolio_data (ID = 1)
    const { data, error } = await supabaseClient
      .from('portfolio_data')
      .select('data')
      .eq('id', 1)
      .single();
      
    if (error) {
      console.warn("Supabase row query failed, attempting to write baseline row.", error);
      // If no row exists, initialize it with baseline
      await supabaseClient
        .from('portfolio_data')
        .upsert({ id: 1, data: DEFAULT_SITE_DATA });
      siteData = DEFAULT_SITE_DATA;
    } else if (data && data.data) {
      siteData = data.data;
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

  // Clean up default seeded unsplash images from loaded siteData
  let needsSave = false;
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

  // Export globally
  window.siteData = siteData;

  // Dispatch global custom event for UI updates
  document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: siteData }));

  // Save the cleaned database back to Supabase and LocalStorage if changes were made
  if (needsSave) {
    console.log("Seeded mock images detected in database. Cleaning up...");
    setTimeout(() => {
      window.saveSiteData(siteData);
    }, 1000);
  }
}

// Kick off immediately
initDatabase();

window.saveSiteData = async function(newData) {
  try {
    // 1. Save to Supabase Cloud
    const { error } = await supabaseClient
      .from('portfolio_data')
      .upsert({ id: 1, data: newData, updated_at: new Date().toISOString() });

    if (error) throw error;

    // 2. Cache in LocalStorage as backup (handle quota errors gracefully)
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(newData));
    } catch (lsError) {
      console.warn("Failed to save backup copy to browser LocalStorage (quota exceeded), but data saved successfully to Supabase.", lsError);
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

  async incrementView(type, itemId, subId) {
    const item = this.findItem(type, itemId, subId);
    if (item) {
      item.views = (item.views || 0) + 1;
      await window.saveSiteData(window.siteData);
    }
  },

  async incrementLike(type, itemId, subId) {
    const item = this.findItem(type, itemId, subId);
    if (item) {
      item.likes = (item.likes || 0) + 1;
      await window.saveSiteData(window.siteData);
      return item.likes;
    }
    return 0;
  },

  async addComment(type, itemId, subId, name, text) {
    const item = this.findItem(type, itemId, subId);
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
      await window.saveSiteData(window.siteData);
      return newComment;
    }
    return null;
  },

  async deleteComment(type, itemId, subId, commentId) {
    const item = this.findItem(type, itemId, subId);
    if (item && item.comments) {
      const initialLength = item.comments.length;
      item.comments = item.comments.filter(c => c.id !== commentId);
      if (item.comments.length !== initialLength) {
        await window.saveSiteData(window.siteData);
        return true;
      }
    }
    return false;
  }
};
