// Dynamic Content Management System (CMS) Database
// Consolidates all website data, making it dynamic and editable.

const DEFAULT_SITE_DATA = {
    "views":  107,
    "profile":  {
                    "dob":  "2002-12-22",
                    "name":  "Krishnendu Goswami",
                    "email":  "krishnendutitangoswami@gmail.com",
                    "stats":  [
                                  {
                                      "label":  "Published Works",
                                      "value":  "50+"
                                  },
                                  {
                                      "label":  "National Awards",
                                      "value":  "2"
                                  },
                                  {
                                      "label":  "Followers on socials",
                                      "value":  "3500+"
                                  },
                                  {
                                      "label":  "Views on Google Contributors",
                                      "value":  "1.8M+"
                                  }
                              ],
                    "title":  "KRISHNENDU GOSWAMI ",
                    "avatar":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783681897/image_wh8xie.webp",
                    "awards":  [
                                   {
                                       "org":  "Atverts, Kolkata",
                                       "name":  "MIP - PHOTOGRAPHY",
                                       "year":  "2020",
                                       "badge":  "LOR - SKILL \u0026 EXCELLENCE"
                                   },
                                   {
                                       "org":  "IIT Kharagpur",
                                       "name":  "NATIONAL STUDENTS\u0027 SPACE CHALLENGE- NSSC\u002722",
                                       "year":  "2022",
                                       "badge":  "3rd Prize Winner - Astrophotgraphy "
                                   },
                                   {
                                       "org":  "IIT Kharagpur",
                                       "name":  "NATIONAL STUDENTS\u0027 SPACE CHALLENGE- NSSC\u002724",
                                       "year":  "2024",
                                       "badge":  "Winner - Astrophotography"
                                   },
                                   {
                                       "org":  "Chandannagar College",
                                       "name":  "Ruellia - Through the Lens",
                                       "year":  "2024",
                                       "badge":  "Published \u0026 Interviewed"
                                   },
                                   {
                                       "org":  "Ramkrishna Mission Narendrapur",
                                       "name":  "SCI-PHY - Photo PHYesta",
                                       "year":  "2025",
                                       "badge":  "Winner [Gold medalist]"
                                   },
                                   {
                                       "org":  "Jadavpur University",
                                       "name":  "24 FRAMES - JU Convolution",
                                       "year":  "2025",
                                       "badge":  "Exhibited "
                                   },
                                   {
                                       "org":  "Jadavpur University",
                                       "name":  "24 FRAMES - JU Convolution",
                                       "year":  "2025",
                                       "badge":  "Finalist, Jury\u0027s Choice"
                                   }
                               ],
                    "twitter":  "https://x.com/KRIGOS02?s=09",
                    "bioTitle":  "Some stories are written with words",
                    "location":  "Baidyabati, West Bengal, India",
                    "instagram":  "https://www.instagram.com/goswami._krishnendu?igsh=ZmltdGk2OXM5aGUy",
                    "bioExcerpt":  "Krishnendu Goswami is a nationally exhibited and recognized photographer and award-winning astrophotographer based in West Bengal, India, whose work explores the quiet intersection of photography, science, philosophy, and visual storytelling.",
                    "bioTitleEm":  "Others are written with light.",
                    "philosophy":  "The camera has never been the artist. Vision is. The finest photographs are seldom made by better equipment, but by those who understand the quiet difference between looking and observing.",
                    "bioParagraphs":  [
                        "With a background in Physics and ongoing research in Observational Astronomy and Astroinformatics, his perspective is shaped as much by scientific inquiry as by artistic curiosity. What began in the pre-COVID era with a basic smartphone and an unwavering determination to master the tools at hand has grown into a diverse body of work spanning astrophotography, candid street photography, landscapes, macro details, nature, human emotions, light and shadow, abstract perspectives, and visual narratives.",
                        "Rather than pursuing a particular genre, he follows curiosity itself. Whether observing the silent grandeur of the cosmos or the unnoticed poetry of everyday life, he photographs what compels him to pause, believing that extraordinary images are born not from extraordinary equipment, but from extraordinary observation. His work has been exhibited and recognized nationally, earning honors from several prestigious institutions, including two National-Level Astrophotography Awards from IIT Kharagpur.",
                        "Every photograph is a dialogue between light, time, science, and emotion. Through thoughtful composition, meticulous post-processing, and continuous self-reflection, Krishnendu strives to create images that transcend documentation—inviting viewers to slow down, observe more deeply, and discover beauty in both the infinite universe above and the overlooked moments of everyday life.",
                        "For him, photography is not simply about preserving what was seen; it is about revealing what was always there, waiting to be observed."
                    ],
                    "yearsExperience":  23
                },
    "stories":  [
                    {
                        "bg":  "linear-gradient(145deg,#0a1a0a,#0f2010)",
                        "id":  0,
                        "tag":  "Wildlife · Long-form Project",
                        "desc":  "A four-year winter fieldwork series documenting the fragile high-altitude movement corridors of the ghost of the mountains in Spiti and Ladakh.",
                        "slug":  "snow-leopard-corridors",
                        "title":  "The Last Snow Leopard Corridors",
                        "views":  27,
                        "years":  "2019 — 2023",
                        "duration":  "4 Years",
                        "location":  "Spiti \u0026 Ladakh, India"
                    },
                    {
                        "bg":  "linear-gradient(145deg,#101a24,#1a2e3a)",
                        "id":  1,
                        "tag":  "Conservation · Visual Essay",
                        "desc":  "A visual study of the Gangotri glacier\u0027s retreat and the changing riparian communities along the first hundred kilometres of the river path.",
                        "slug":  "ganga-receding-source",
                        "title":  "Ganga: The Receding Source",
                        "years":  "2021 — 2022",
                        "duration":  "18 Months",
                        "location":  "Garhwal Himalayas, India"
                    }
                ],
    "homepagePhotos":  [
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  0,
                               "cat":  "macro",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1782985049/image_d6khfe.webp",
                               "exif":  "",
                               "meta":  "sub",
                               "title":  "title"
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "cat":  "macro",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1782985049/image_d6khfe.webp",
                               "exif":  "",
                               "meta":  "sub",
                               "title":  "title"
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  3,
                               "cat":  "portrait",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783678286/image_p0emjs.webp",
                               "exif":  "1/640s · 112mm · f/6.3 · ISO 400",
                               "meta":  "my shelter",
                               "title":  "Mahiruha"
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  4,
                               "cat":  "wildlife",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783679323/image_elyezv.webp",
                               "exif":  "1/250s · 300mm · f/6.3 · ISO 5000",
                               "meta":  "Panthera pardus",
                               "title":  "COMMON LEOPARD "
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  5,
                               "cat":  "wildlife",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783707699/image_mvylfk.webp",
                               "exif":  "1/400s · 270mm · f/6.3 · ISO 800",
                               "meta":  "Ailurus fulgens fulgens",
                               "likes":  2,
                               "title":  "RED PANDA ",
                               "views":  14
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  6,
                               "cat":  "street",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783711319/image_hfmwnm.webp",
                               "exif":  "1/10s · f/1.9 · ISO 1000",
                               "meta":  "non-stationary",
                               "likes":  4,
                               "title":  "The Railyard Ghost",
                               "views":  34
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  2,
                               "cat":  "astrophotography",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783673993/image_cz4qxo.webp",
                               "exif":  "21s , 10 frames stack · f/1.89 · ISO 6400",
                               "meta":  "milky way band",
                               "title":  "The Cygnus Arm"
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  7,
                               "cat":  "nature",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783787901/image_hwruay.webp",
                               "exif":  "1/400 · 240mm · f/6 · ISO 200",
                               "meta":  "The beginning",
                               "likes":  0,
                               "title":  "GENESIS",
                               "views":  16
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  8,
                               "cat":  "splits",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783842582/image_sfytzh.webp",
                               "exif":  "1/60s · f/1.6",
                               "meta":  "fathom of faith",
                               "likes":  1,
                               "title":  "রাশের Rush ",
                               "views":  8
                           },
                           {
                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                               "id":  9,
                               "cat":  "street",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783847320/image_gs883d.webp",
                               "exif":  "1/640 · f/1.79 · ISO 100",
                               "meta":  "The masks within",
                               "likes":  1,
                               "title":  "3 MASK-ETTERS",
                               "views":  19
                           }
                       ],
    "journalEntries":  [
                           {
                               "bg":  "linear-gradient(135deg,#0d101a,#171c2f)",
                               "id":  1,
                               "cat":  "Technique",
                               "date":  "January 2024",
                               "likes":  0,
                               "title":  "Night Photography Without GPS: Navigating Dark Skies the Old Way",
                               "views":  2,
                               "excerpt":  "Star charts, local guides, and the irreplaceable value of arriving the night before — a guide to planning astrophotography expeditions.",
                               "readTime":  "6 min read"
                           },
                           {
                               "bg":  "linear-gradient(135deg,#151515,#2a2a2a)",
                               "id":  2,
                               "cat":  "Technique",
                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1784485754/image_n5vkvf.webp",
                               "date":  "January 2024",
                               "draft":  false,
                               "likes":  1,
                               "scale":  100,
                               "title":  "rajanigandha",
                               "views":  4,
                               "content":  "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"check if your blog editor supports \\\"Raw HTML\\\" blocks or \\\"Trusted Content\\\" rendering.\"},{\"type\":\"hardBreak\"},{\"type\":\"hardBreak\"},{\"type\":\"text\",\"text\":\"1. Text Emphasis \u0026 Markup Test\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"bold text\"},{\"type\":\"text\",\"text\":\" for strong emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"italic\"}],\"text\":\"italicized text\"},{\"type\":\"text\",\"text\":\" for subtle emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"},{\"type\":\"italic\"}],\"text\":\"bold and italicized\"},{\"type\":\"text\",\"text\":\" for maximum emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"strike\"}],\"text\":\"strikethrough text\"},{\"type\":\"text\",\"text\":\" to indicate obsolete information.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"code\"}],\"text\":\"inline code\"},{\"type\":\"text\",\"text\":\" for highlighting specific terminology.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"2. Mathematical \u0026 Scientific Notation\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"When writing about the physics of light or orbital mechanics, your blog must render mathematical symbols correctly:\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"The Exposure Equation:\"},{\"type\":\"text\",\"text\":\" The light collected ($L$) can be represented as $L = A \\\\cdot t \\\\cdot I$, where $A$ is the aperture area, $t$ is time, and $I$ is intensity.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Kepler’s Third Law:\"},{\"type\":\"text\",\"text\":\" $P^2 = a^3$, where $P$ is the orbital period and $a$ is the semi-major axis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Subscripts \u0026 Superscripts:\"},{\"type\":\"text\",\"text\":\" $H_2O$ and $E=mc^2$.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Greek Symbols:\"},{\"type\":\"text\",\"text\":\" The wavelength of light is often denoted by $\\\\lambda$, while the pixel scale is $\\\\theta$.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"3. Special Characters \u0026 Symbols\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Ensure your character encoding (UTF-8) supports these common scientific and decorative symbols:\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Mathematical:\"},{\"type\":\"text\",\"text\":\" $\\\\pm$, $\\\\approx$, $\\\\neq$, $\\\\geq$, $\\\\leq$, $\\\\int$, $\\\\sum$, $\\\\infty$\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Astronomy:\"},{\"type\":\"text\",\"text\":\" ☉ (Sun), ☽ (Moon), ♃ (Jupiter), ♄ (Saturn)\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"General/Typography:\"},{\"type\":\"text\",\"text\":\" ©, ®, ™, §, †, ‡, ¤, ¶, •, ‣\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"4. Hierarchical Elements\"}]},{\"type\":\"blockquote\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Blockquote Note:\"},{\"type\":\"text\",\"text\":\" This section is for highlighting important warnings, such as: \\\"Always ensure your tripod is weighted down to prevent micro-vibrations during long-exposure imaging.\\\"\"}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":3},\"content\":[{\"type\":\"text\",\"text\":\"Procedural List (Ordered)\"}]},{\"type\":\"orderedList\",\"attrs\":{\"start\":1,\"type\":null},\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Alignment:\"},{\"type\":\"text\",\"text\":\" Calibrate the equatorial mount.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Focusing:\"},{\"type\":\"text\",\"text\":\" Achieve critical focus using a Bahtinov mask.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Capturing:\"},{\"type\":\"text\",\"text\":\" Execute the sequence of light frames, dark frames, and bias frames.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":3},\"content\":[{\"type\":\"text\",\"text\":\"Comparative Data Layout\"}]},{\"type\":\"table\",\"content\":[{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Feature\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Importance\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Impact on Final Image\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Aperture\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"High\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Affects diffraction spikes\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"italic\"}],\"text\":\"ISO Speed\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Medium\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Affects signal-to-noise ratio\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"strike\"}],\"text\":\"Shutter\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"High\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Determines star trailing\"}]}]}]}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"System check complete.\"},{\"type\":\"text\",\"text\":\" If all elements above (especially the equations and symbols) appear with correct spacing and font rendering, your blog’s infrastructure is successfully configured for technical content.\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Do you need help testing any specific CSS overrides for these elements, such as custom font weights or color coding for the equations?\"}]}]}",
                               "excerpt":  "brief ",
                               "offsetY":  0,
                               "comments":  [

                                            ],
                               "readTime":  "6 min read",
                               "template":  "classic",
                               "contentHtml":  "\u003cp\u003echeck if your blog editor supports \"Raw HTML\" blocks or \"Trusted Content\" rendering.\u003cbr\u003e\u003cbr\u003e1. Text Emphasis \u0026amp; Markup Test\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003eThis is \u003cstrong\u003ebold text\u003c/strong\u003e for strong emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cem\u003eitalicized text\u003c/em\u003e for subtle emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cstrong\u003e\u003cem\u003ebold and italicized\u003c/em\u003e\u003c/strong\u003e for maximum emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cs\u003estrikethrough text\u003c/s\u003e to indicate obsolete information.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003ccode\u003einline code\u003c/code\u003e for highlighting specific terminology.\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e2. Mathematical \u0026amp; Scientific Notation\u003c/h2\u003e\u003cp\u003eWhen writing about the physics of light or orbital mechanics, your blog must render mathematical symbols correctly:\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eThe Exposure Equation:\u003c/strong\u003e The light collected ($L$) can be represented as $L = A \\cdot t \\cdot I$, where $A$ is the aperture area, $t$ is time, and $I$ is intensity.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eKepler’s Third Law:\u003c/strong\u003e $P^2 = a^3$, where $P$ is the orbital period and $a$ is the semi-major axis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eSubscripts \u0026amp; Superscripts:\u003c/strong\u003e $H_2O$ and $E=mc^2$.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eGreek Symbols:\u003c/strong\u003e The wavelength of light is often denoted by $\\lambda$, while the pixel scale is $\\theta$.\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e3. Special Characters \u0026amp; Symbols\u003c/h2\u003e\u003cp\u003eEnsure your character encoding (UTF-8) supports these common scientific and decorative symbols:\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eMathematical:\u003c/strong\u003e $\\pm$, $\\approx$, $\\neq$, $\\geq$, $\\leq$, $\\int$, $\\sum$, $\\infty$\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eAstronomy:\u003c/strong\u003e ☉ (Sun), ☽ (Moon), ♃ (Jupiter), ♄ (Saturn)\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eGeneral/Typography:\u003c/strong\u003e ©, ®, ™, §, †, ‡, ¤, ¶, •, ‣\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e4. Hierarchical Elements\u003c/h2\u003e\u003cblockquote\u003e\u003cp\u003e\u003cstrong\u003eBlockquote Note:\u003c/strong\u003e This section is for highlighting important warnings, such as: \"Always ensure your tripod is weighted down to prevent micro-vibrations during long-exposure imaging.\"\u003c/p\u003e\u003c/blockquote\u003e\u003ch3\u003eProcedural List (Ordered)\u003c/h3\u003e\u003col\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eAlignment:\u003c/strong\u003e Calibrate the equatorial mount.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eFocusing:\u003c/strong\u003e Achieve critical focus using a Bahtinov mask.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eCapturing:\u003c/strong\u003e Execute the sequence of light frames, dark frames, and bias frames.\u003c/p\u003e\u003c/li\u003e\u003c/ol\u003e\u003ch3\u003eComparative Data Layout\u003c/h3\u003e\u003ctable style=\"\"\u003e\u003ccolgroup\u003e\u003ccol\u003e\u003ccol\u003e\u003ccol\u003e\u003c/colgroup\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eFeature\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eImportance\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eImpact on Final Image\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eAperture\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eHigh\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eAffects diffraction spikes\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cem\u003eISO Speed\u003c/em\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eMedium\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eAffects signal-to-noise ratio\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cs\u003eShutter\u003c/s\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eHigh\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eDetermines star trailing\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003cp\u003e\u003cstrong\u003eSystem check complete.\u003c/strong\u003e If all elements above (especially the equations and symbols) appear with correct spacing and font rendering, your blog’s infrastructure is successfully configured for technical content.\u003c/p\u003e\u003cp\u003eDo you need help testing any specific CSS overrides for these elements, such as custom font weights or color coding for the equations?\u003c/p\u003e"
                           },
                           {
                               "bg":  "linear-gradient(135deg,#151515,#2a2a2a)",
                               "id":  3,
                               "cat":  "topic",
                               "src":  "",
                               "date":  "January 2024",
                               "draft":  false,
                               "likes":  0,
                               "scale":  100,
                               "title":  " Navigating Dark Skies the Old Way",
                               "views":  2,
                               "content":  "{\"type\":\"doc\",\"content\":[{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"1. Text Emphasis \u0026 Markup Test\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"bold text\"},{\"type\":\"text\",\"text\":\" for strong emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"italic\"}],\"text\":\"italicized text\"},{\"type\":\"text\",\"text\":\" for subtle emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"},{\"type\":\"italic\"}],\"text\":\"bold and italicized\"},{\"type\":\"text\",\"text\":\" for maximum emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"strike\"}],\"text\":\"strikethrough text\"},{\"type\":\"text\",\"text\":\" to indicate obsolete information.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"code\"}],\"text\":\"inline code\"},{\"type\":\"text\",\"text\":\" for highlighting specific terminology.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"2. Mathematical \u0026 Scientific Notation\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"When writing about the physics of light or orbital mechanics, your blog must render mathematical symbols correctly:\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"The Exposure Equation:\"},{\"type\":\"text\",\"text\":\" The light collected ($L$) can be represented as $L = A \\\\cdot t \\\\cdot I$, where $A$ is the aperture area, $t$ is time, and $I$ is intensity.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Kepler’s Third Law:\"},{\"type\":\"text\",\"text\":\" $P^2 = a^3$, where $P$ is the orbital period and $a$ is the semi-major axis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Subscripts \u0026 Superscripts:\"},{\"type\":\"text\",\"text\":\" $H_2O$ and $E=mc^2$.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Greek Symbols:\"},{\"type\":\"text\",\"text\":\" The wavelength of light is often denoted by $\\\\lambda$, while the pixel scale is $\\\\theta$.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"3. Special Characters \u0026 Symbols\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Ensure your character encoding (UTF-8) supports these common scientific and decorative symbols:\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Mathematical:\"},{\"type\":\"text\",\"text\":\" $\\\\pm$, $\\\\approx$, $\\\\neq$, $\\\\geq$, $\\\\leq$, $\\\\int$, $\\\\sum$, $\\\\infty$\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Astronomy:\"},{\"type\":\"text\",\"text\":\" ☉ (Sun), ☽ (Moon), ♃ (Jupiter), ♄ (Saturn)\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"General/Typography:\"},{\"type\":\"text\",\"text\":\" ©, ®, ™, §, †, ‡, ¤, ¶, •, ‣\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"4. Hierarchical Elements\"}]},{\"type\":\"blockquote\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Blockquote Note:\"},{\"type\":\"text\",\"text\":\" This section is for highlighting important warnings, such as: \\\"Always ensure your tripod is weighted down to prevent micro-vibrations during long-exposure imaging.\\\"\"}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":3},\"content\":[{\"type\":\"text\",\"text\":\"Procedural List (Ordered)\"}]},{\"type\":\"orderedList\",\"attrs\":{\"start\":1,\"type\":null},\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Alignment:\"},{\"type\":\"text\",\"text\":\" Calibrate the equatorial mount.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Focusing:\"},{\"type\":\"text\",\"text\":\" Achieve critical focus using a Bahtinov mask.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Capturing:\"},{\"type\":\"text\",\"text\":\" Execute the sequence of light frames, dark frames, and bias frames.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":3},\"content\":[{\"type\":\"text\",\"text\":\"Comparative Data Layout\"}]},{\"type\":\"table\",\"content\":[{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Feature\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Importance\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Impact on Final Image\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Aperture\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"High\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Affects diffraction spikes\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"italic\"}],\"text\":\"ISO Speed\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Medium\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Affects signal-to-noise ratio\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"strike\"}],\"text\":\"Shutter\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"High\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Determines star trailing\"}]}]}]}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"System check complete.\"},{\"type\":\"text\",\"text\":\" If all elements above (especially the equations and symbols) appear with correct spacing and font rendering, your blog’s infrastructure is successfully configured for technical content.\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Do you need help testing any specific CSS overrides for these elements, such as custom font weights or color coding for the equations?\"}]}]}",
                               "excerpt":  "excerpt",
                               "offsetY":  0,
                               "comments":  [

                                            ],
                               "readTime":  "3 min read",
                               "template":  "magazine",
                               "contentHtml":  "\u003ch2\u003e1. Text Emphasis \u0026amp; Markup Test\u003c/h2\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003eThis is \u003cstrong\u003ebold text\u003c/strong\u003e for strong emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cem\u003eitalicized text\u003c/em\u003e for subtle emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cstrong\u003e\u003cem\u003ebold and italicized\u003c/em\u003e\u003c/strong\u003e for maximum emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cs\u003estrikethrough text\u003c/s\u003e to indicate obsolete information.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003ccode\u003einline code\u003c/code\u003e for highlighting specific terminology.\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e2. Mathematical \u0026amp; Scientific Notation\u003c/h2\u003e\u003cp\u003eWhen writing about the physics of light or orbital mechanics, your blog must render mathematical symbols correctly:\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eThe Exposure Equation:\u003c/strong\u003e The light collected ($L$) can be represented as $L = A \\cdot t \\cdot I$, where $A$ is the aperture area, $t$ is time, and $I$ is intensity.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eKepler’s Third Law:\u003c/strong\u003e $P^2 = a^3$, where $P$ is the orbital period and $a$ is the semi-major axis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eSubscripts \u0026amp; Superscripts:\u003c/strong\u003e $H_2O$ and $E=mc^2$.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eGreek Symbols:\u003c/strong\u003e The wavelength of light is often denoted by $\\lambda$, while the pixel scale is $\\theta$.\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e3. Special Characters \u0026amp; Symbols\u003c/h2\u003e\u003cp\u003eEnsure your character encoding (UTF-8) supports these common scientific and decorative symbols:\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eMathematical:\u003c/strong\u003e $\\pm$, $\\approx$, $\\neq$, $\\geq$, $\\leq$, $\\int$, $\\sum$, $\\infty$\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eAstronomy:\u003c/strong\u003e ☉ (Sun), ☽ (Moon), ♃ (Jupiter), ♄ (Saturn)\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eGeneral/Typography:\u003c/strong\u003e ©, ®, ™, §, †, ‡, ¤, ¶, •, ‣\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e4. Hierarchical Elements\u003c/h2\u003e\u003cblockquote\u003e\u003cp\u003e\u003cstrong\u003eBlockquote Note:\u003c/strong\u003e This section is for highlighting important warnings, such as: \"Always ensure your tripod is weighted down to prevent micro-vibrations during long-exposure imaging.\"\u003c/p\u003e\u003c/blockquote\u003e\u003ch3\u003eProcedural List (Ordered)\u003c/h3\u003e\u003col\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eAlignment:\u003c/strong\u003e Calibrate the equatorial mount.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eFocusing:\u003c/strong\u003e Achieve critical focus using a Bahtinov mask.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eCapturing:\u003c/strong\u003e Execute the sequence of light frames, dark frames, and bias frames.\u003c/p\u003e\u003c/li\u003e\u003c/ol\u003e\u003ch3\u003eComparative Data Layout\u003c/h3\u003e\u003ctable style=\"\"\u003e\u003ccolgroup\u003e\u003ccol\u003e\u003ccol\u003e\u003ccol\u003e\u003c/colgroup\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eFeature\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eImportance\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eImpact on Final Image\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eAperture\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eHigh\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eAffects diffraction spikes\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cem\u003eISO Speed\u003c/em\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eMedium\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eAffects signal-to-noise ratio\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cs\u003eShutter\u003c/s\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eHigh\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eDetermines star trailing\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003cp\u003e\u003cstrong\u003eSystem check complete.\u003c/strong\u003e If all elements above (especially the equations and symbols) appear with correct spacing and font rendering, your blog’s infrastructure is successfully configured for technical content.\u003c/p\u003e\u003cp\u003eDo you need help testing any specific CSS overrides for these elements, such as custom font weights or color coding for the equations?\u003c/p\u003e"
                           },
                           {
                               "bg":  "linear-gradient(135deg,#151515,#2a2a2a)",
                               "id":  4,
                               "cat":  "entry 3",
                               "src":  "",
                               "date":  "January 2024",
                               "draft":  false,
                               "likes":  0,
                               "scale":  100,
                               "title":  "just a title",
                               "views":  2,
                               "content":  "{\"type\":\"doc\",\"content\":[{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"1. Text Emphasis \u0026 Markup Test\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"bold text\"},{\"type\":\"text\",\"text\":\" for strong emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"italic\"}],\"text\":\"italicized text\"},{\"type\":\"text\",\"text\":\" for subtle emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"},{\"type\":\"italic\"}],\"text\":\"bold and italicized\"},{\"type\":\"text\",\"text\":\" for maximum emphasis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"strike\"}],\"text\":\"strikethrough text\"},{\"type\":\"text\",\"text\":\" to indicate obsolete information.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"This is \"},{\"type\":\"text\",\"marks\":[{\"type\":\"code\"}],\"text\":\"inline code\"},{\"type\":\"text\",\"text\":\" for highlighting specific terminology.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"2. Mathematical \u0026 Scientific Notation\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"When writing about the physics of light or orbital mechanics, your blog must render mathematical symbols correctly:\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"The Exposure Equation:\"},{\"type\":\"text\",\"text\":\" The light collected ($L$) can be represented as $L = A \\\\cdot t \\\\cdot I$, where $A$ is the aperture area, $t$ is time, and $I$ is intensity.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Kepler’s Third Law:\"},{\"type\":\"text\",\"text\":\" $P^2 = a^3$, where $P$ is the orbital period and $a$ is the semi-major axis.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Subscripts \u0026 Superscripts:\"},{\"type\":\"text\",\"text\":\" $H_2O$ and $E=mc^2$.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Greek Symbols:\"},{\"type\":\"text\",\"text\":\" The wavelength of light is often denoted by $\\\\lambda$, while the pixel scale is $\\\\theta$.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"3. Special Characters \u0026 Symbols\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Ensure your character encoding (UTF-8) supports these common scientific and decorative symbols:\"}]},{\"type\":\"bulletList\",\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Mathematical:\"},{\"type\":\"text\",\"text\":\" $\\\\pm$, $\\\\approx$, $\\\\neq$, $\\\\geq$, $\\\\leq$, $\\\\int$, $\\\\sum$, $\\\\infty$\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Astronomy:\"},{\"type\":\"text\",\"text\":\" ☉ (Sun), ☽ (Moon), ♃ (Jupiter), ♄ (Saturn)\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"General/Typography:\"},{\"type\":\"text\",\"text\":\" ©, ®, ™, §, †, ‡, ¤, ¶, •, ‣\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":2},\"content\":[{\"type\":\"text\",\"text\":\"4. Hierarchical Elements\"}]},{\"type\":\"blockquote\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Blockquote Note:\"},{\"type\":\"text\",\"text\":\" This section is for highlighting important warnings, such as: \\\"Always ensure your tripod is weighted down to prevent micro-vibrations during long-exposure imaging.\\\"\"}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":3},\"content\":[{\"type\":\"text\",\"text\":\"Procedural List (Ordered)\"}]},{\"type\":\"orderedList\",\"attrs\":{\"start\":1,\"type\":null},\"content\":[{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Alignment:\"},{\"type\":\"text\",\"text\":\" Calibrate the equatorial mount.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Focusing:\"},{\"type\":\"text\",\"text\":\" Achieve critical focus using a Bahtinov mask.\"}]}]},{\"type\":\"listItem\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Capturing:\"},{\"type\":\"text\",\"text\":\" Execute the sequence of light frames, dark frames, and bias frames.\"}]}]}]},{\"type\":\"heading\",\"attrs\":{\"textAlign\":\"left\",\"level\":3},\"content\":[{\"type\":\"text\",\"text\":\"Comparative Data Layout\"}]},{\"type\":\"table\",\"content\":[{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Feature\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Importance\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Impact on Final Image\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Aperture\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"High\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Affects diffraction spikes\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"italic\"}],\"text\":\"ISO Speed\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Medium\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Affects signal-to-noise ratio\"}]}]}]},{\"type\":\"tableRow\",\"content\":[{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"strike\"}],\"text\":\"Shutter\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"High\"}]}]},{\"type\":\"tableCell\",\"attrs\":{\"colspan\":1,\"rowspan\":1,\"colwidth\":null},\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Determines star trailing\"}]}]}]}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"System check complete.\"},{\"type\":\"text\",\"text\":\" If all elements above (especially the equations and symbols) appear with correct spacing and font rendering, your blog’s infrastructure is successfully configured for technical content.\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"left\"},\"content\":[{\"type\":\"text\",\"text\":\"Do you need help testing any specific CSS overrides for these elements, such as custom font weights or color coding for the equations?\"}]}]}",
                               "excerpt":  "vfshdjfshdf",
                               "offsetY":  0,
                               "comments":  [

                                            ],
                               "readTime":  "3 min read",
                               "template":  "photo_essay",
                               "contentHtml":  "\u003ch2\u003e1. Text Emphasis \u0026amp; Markup Test\u003c/h2\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003eThis is \u003cstrong\u003ebold text\u003c/strong\u003e for strong emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cem\u003eitalicized text\u003c/em\u003e for subtle emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cstrong\u003e\u003cem\u003ebold and italicized\u003c/em\u003e\u003c/strong\u003e for maximum emphasis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003cs\u003estrikethrough text\u003c/s\u003e to indicate obsolete information.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003eThis is \u003ccode\u003einline code\u003c/code\u003e for highlighting specific terminology.\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e2. Mathematical \u0026amp; Scientific Notation\u003c/h2\u003e\u003cp\u003eWhen writing about the physics of light or orbital mechanics, your blog must render mathematical symbols correctly:\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eThe Exposure Equation:\u003c/strong\u003e The light collected ($L$) can be represented as $L = A \\cdot t \\cdot I$, where $A$ is the aperture area, $t$ is time, and $I$ is intensity.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eKepler’s Third Law:\u003c/strong\u003e $P^2 = a^3$, where $P$ is the orbital period and $a$ is the semi-major axis.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eSubscripts \u0026amp; Superscripts:\u003c/strong\u003e $H_2O$ and $E=mc^2$.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eGreek Symbols:\u003c/strong\u003e The wavelength of light is often denoted by $\\lambda$, while the pixel scale is $\\theta$.\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e3. Special Characters \u0026amp; Symbols\u003c/h2\u003e\u003cp\u003eEnsure your character encoding (UTF-8) supports these common scientific and decorative symbols:\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eMathematical:\u003c/strong\u003e $\\pm$, $\\approx$, $\\neq$, $\\geq$, $\\leq$, $\\int$, $\\sum$, $\\infty$\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eAstronomy:\u003c/strong\u003e ☉ (Sun), ☽ (Moon), ♃ (Jupiter), ♄ (Saturn)\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eGeneral/Typography:\u003c/strong\u003e ©, ®, ™, §, †, ‡, ¤, ¶, •, ‣\u003c/p\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch2\u003e4. Hierarchical Elements\u003c/h2\u003e\u003cblockquote\u003e\u003cp\u003e\u003cstrong\u003eBlockquote Note:\u003c/strong\u003e This section is for highlighting important warnings, such as: \"Always ensure your tripod is weighted down to prevent micro-vibrations during long-exposure imaging.\"\u003c/p\u003e\u003c/blockquote\u003e\u003ch3\u003eProcedural List (Ordered)\u003c/h3\u003e\u003col\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eAlignment:\u003c/strong\u003e Calibrate the equatorial mount.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eFocusing:\u003c/strong\u003e Achieve critical focus using a Bahtinov mask.\u003c/p\u003e\u003c/li\u003e\u003cli\u003e\u003cp\u003e\u003cstrong\u003eCapturing:\u003c/strong\u003e Execute the sequence of light frames, dark frames, and bias frames.\u003c/p\u003e\u003c/li\u003e\u003c/ol\u003e\u003ch3\u003eComparative Data Layout\u003c/h3\u003e\u003ctable style=\"\"\u003e\u003ccolgroup\u003e\u003ccol\u003e\u003ccol\u003e\u003ccol\u003e\u003c/colgroup\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eFeature\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eImportance\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eImpact on Final Image\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cstrong\u003eAperture\u003c/strong\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eHigh\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eAffects diffraction spikes\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cem\u003eISO Speed\u003c/em\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eMedium\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eAffects signal-to-noise ratio\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003e\u003cs\u003eShutter\u003c/s\u003e\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eHigh\u003c/p\u003e\u003c/td\u003e\u003ctd colspan=\"1\" rowspan=\"1\"\u003e\u003cp\u003eDetermines star trailing\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\u003cp\u003e\u003cstrong\u003eSystem check complete.\u003c/strong\u003e If all elements above (especially the equations and symbols) appear with correct spacing and font rendering, your blog’s infrastructure is successfully configured for technical content.\u003c/p\u003e\u003cp\u003eDo you need help testing any specific CSS overrides for these elements, such as custom font weights or color coding for the equations?\u003c/p\u003e"
                           },
                           {
                               "bg":  "linear-gradient(135deg,#151515,#2a2a2a)",
                               "id":  5,
                               "cat":  "",
                               "src":  "",
                               "date":  "",
                               "draft":  true,
                               "likes":  0,
                               "scale":  100,
                               "title":  "",
                               "views":  0,
                               "content":  "",
                               "excerpt":  "halleluya\n",
                               "offsetY":  0,
                               "comments":  [

                                            ],
                               "readTime":  "",
                               "template":  "classic",
                               "contentHtml":  ""
                           }
                       ],
    "categoriesOrder":  [
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
    "recognitionLogos":  [
                             {
                                 "src":  "websitelogos/Atverts.webp",
                                 "name":  "Atverts"
                             },
                             {
                                 "src":  "websitelogos/Chandannagar College.png",
                                 "name":  "Chandannagar College"
                             },
                             {
                                 "src":  "websitelogos/IIT KGP.png",
                                 "name":  "IIT Kharagpur"
                             },
                             {
                                 "src":  "websitelogos/Jadavpur University.png",
                                 "name":  "Jadavpur University"
                             },
                             {
                                 "src":  "websitelogos/NSSC 2022.png",
                                 "name":  "National Students\u0027 Space Challenge"
                             },
                             {
                                 "src":  "websitelogos/Ramkrishna Mission College Narendrapur.png",
                                 "name":  "Ramakrishna Mission College, Narendrapur"
                             }
                         ],
    "galleryCategories":  {
                              "macro":  {
                                            "em":  "cro",
                                            "desc":  "The perspective we often overlook, looked over at a different scale.",
                                            "title":  "Ma",
                                            "years":  "",
                                            "photos":  [
                                                           {
                                                               "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                               "id":  0,
                                                               "cam":  "",
                                                               "exp":  "",
                                                               "iso":  "",
                                                               "loc":  "baidyabati",
                                                               "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1782985049/image_d6khfe.webp",
                                                               "tag":  "people",
                                                               "date":  "2026-07-02",
                                                               "lens":  "",
                                                               "focal":  "",
                                                               "likes":  1,
                                                               "story":  "",
                                                               "title":  "title",
                                                               "views":  26,
                                                               "caption":  "sub",
                                                               "qFactor":  44,
                                                               "shutter":  "",
                                                               "aperture":  "",
                                                               "featured":  true
                                                           }
                                                       ],
                                            "filters":  [
                                                            "macro"
                                                        ],
                                            "location":  "",
                                            "photosCount":  "1 Photographs"
                                        },
                              "nature":  {
                                             "em":  "ure",
                                             "desc":  "Life unfiltered, away from human design — capturing the intricate textures of organic existence and the subtle patterns woven by earth, water, and time.",
                                             "title":  "Nat",
                                             "years":  "",
                                             "photos":  [
                                                            {
                                                                "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                "id":  7,
                                                                "cam":  " NIKON D3500",
                                                                "exp":  "1/400 · 240mm · f/6 · ISO 200",
                                                                "iso":  "200",
                                                                "loc":  "Darjeeling, West Bengal - India",
                                                                "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783787901/image_hwruay.webp",
                                                                "tag":  "flower, nature, dawn",
                                                                "date":  "2026-04-01",
                                                                "lens":  "70-300mm",
                                                                "focal":  "240mm",
                                                                "likes":  0,
                                                                "story":  "The day’s very first sunlight pierces through the forest canopy, casting a dramatic, golden beam that crowns a freshly bloomed cluster of pink wildflowers. The stark, high-contrast interplay between the radiant, backlit petals and the deep, moody shadows of the background perfectly embodies the raw, quiet energy of a new day beginning.",
                                                                "title":  "GENESIS",
                                                                "views":  16,
                                                                "hidden":  false,
                                                                "caption":  "The beginning",
                                                                "qFactor":  85,
                                                                "shutter":  "1/400",
                                                                "aperture":  "f/6",
                                                                "featured":  true,
                                                                "telescope":  ""
                                                            }
                                                        ],
                                             "filters":  [
                                                             "all",
                                                             "mammals",
                                                             "birds",
                                                             "flower",
                                                             ""
                                                         ],
                                             "location":  "",
                                             "photosCount":  "1 Photographs"
                                         },
                              "splits":  {
                                             "em":  "composites",
                                             "desc":  "A cinematic visual narrative of isolated frames, binding distinct dimensions of time and perspective into a singular, interconnected canvas.",
                                             "title":  "Split ",
                                             "years":  "",
                                             "photos":  [
                                                            {
                                                                "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                "id":  8,
                                                                "cam":  "Iphone 15",
                                                                "exp":  "1/60s · f/1.6",
                                                                "iso":  "",
                                                                "loc":  "Baidyabati, West Bengal - India",
                                                                "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783842582/image_sfytzh.webp",
                                                                "tag":  "split, faith , festival , festive",
                                                                "date":  "2025-11-05",
                                                                "lens":  "",
                                                                "focal":  "",
                                                                "likes":  1,
                                                                "story":  "A three-panel photographic study capturing the atmosphere of the Rash Utsav rituals. The triptych juxtaposes moments of quiet devotion and hands raised toward a sacred flame against the sharp silhouette of a ceremonial trident. Swirling incense smoke, rich green undertones, and the warm reflection of brass artifacts document the vivid energy of the heritage festival.",
                                                                "title":  "রাশের Rush ",
                                                                "views":  8,
                                                                "shares":  2,
                                                                "_viewed":  true,
                                                                "caption":  "fathom of faith",
                                                                "offsetY":  250,
                                                                "qFactor":  85,
                                                                "shutter":  "1/60s",
                                                                "aperture":  "f/1.6",
                                                                "comments":  [

                                                                             ],
                                                                "featured":  true,
                                                                "telescope":  ""
                                                            }
                                                        ],
                                             "filters":  [
                                                             "all",
                                                             "religion",
                                                             "festive",
                                                             "metaphoric"
                                                         ],
                                             "location":  "",
                                             "photosCount":  "1 Photographs"
                                         },
                              "street":  {
                                             "em":  "eet",
                                             "desc":  "The chaotic harmony of public spaces — capturing the geometry of environments shaped by habit, and the fleeting micro-dramas of a single frame.",
                                             "title":  "Str",
                                             "years":  "",
                                             "photos":  [
                                                            {
                                                                "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                "id":  6,
                                                                "cam":  "poco X4pro",
                                                                "exp":  "1/10s · f/1.9 · ISO 1000",
                                                                "iso":  "1000",
                                                                "loc":  "Uttarpradesh- India",
                                                                "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783711319/image_hfmwnm.webp",
                                                                "tag":  "people, slowshutter , aesthetic , moody",
                                                                "date":  "2025-03-23",
                                                                "lens":  "",
                                                                "focal":  "",
                                                                "likes":  4,
                                                                "story":  "",
                                                                "title":  "The Railyard Ghost",
                                                                "views":  34,
                                                                "caption":  "non-stationary",
                                                                "qFactor":  90,
                                                                "shutter":  "1/10s",
                                                                "aperture":  "f/1.9",
                                                                "comments":  [
                                                                                 {
                                                                                     "id":  "c_1783833796649_qxdkuj0ze",
                                                                                     "date":  "Jul 12, 2026",
                                                                                     "name":  "abc",
                                                                                     "text":  "great",
                                                                                     "timestamp":  1783833796665
                                                                                 },
                                                                                 {
                                                                                     "id":  "c_1783835133048_poowodfhn",
                                                                                     "date":  "Jul 12, 2026",
                                                                                     "name":  "Aman",
                                                                                     "text":  "Lovely",
                                                                                     "timestamp":  1783835133127
                                                                                 }
                                                                             ],
                                                                "featured":  true
                                                            },
                                                            {
                                                                "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                "id":  9,
                                                                "cam":  "Poco-X3",
                                                                "exp":  "1/640 · f/1.79 · ISO 100",
                                                                "iso":  "100",
                                                                "loc":  "New Digha Sea Beach , West Bengal - India",
                                                                "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783847320/image_gs883d.webp",
                                                                "tag":  "street, people , bnw ,",
                                                                "date":  "2023-09-14",
                                                                "lens":  "",
                                                                "focal":  "",
                                                                "likes":  1,
                                                                "story":  "A study in identity, symmetry, and social geometry. Captured against a brooding, monochromatic horizon, two classic masks dominate the foreground while nine distant figures divide into three distinct groups along the sea wall. This visual rhythm creates a subtle, unsettling dialogue between the overt anonymity of plastic faces and the quiet, invisible facades worn within human connections. It leaves the viewer with a lingering question: where is the third mask? Is it the crowd watching the horizon, or is it hiding within us?",
                                                                "title":  "3 MASK-ETTERS",
                                                                "views":  19,
                                                                "caption":  "The masks within",
                                                                "offsetY":  -81,
                                                                "qFactor":  85,
                                                                "shutter":  "1/640",
                                                                "aperture":  "f/1.79",
                                                                "comments":  [

                                                                             ],
                                                                "featured":  true,
                                                                "telescope":  ""
                                                            }
                                                        ],
                                             "filters":  [
                                                             "all",
                                                             "monochrome",
                                                             "portraits",
                                                             "geometry",
                                                             "night",
                                                             "featured"
                                                         ],
                                             "location":  "",
                                             "photosCount":  "2 Photographs"
                                         },
                              "travel":  {
                                             "em":  "vel",
                                             "desc":  "Journeys documented with curiosity — cultures, borders, and the roads that connect them.",
                                             "title":  "Tra",
                                             "years":  "2017 — 2023",
                                             "photos":  [

                                                        ],
                                             "filters":  [
                                                             "all",
                                                             "people",
                                                             "architecture",
                                                             "landscapes",
                                                             "festivals",
                                                             "featured"
                                                         ],
                                             "location":  "Rajasthan, Ladakh, Northeast India",
                                             "photosCount":  "0 Photographs"
                                         },
                              "portrait":  {
                                               "em":  "trait",
                                               "desc":  "Faces that hold entire histories — quiet collaborations between photographer and subject.",
                                               "title":  "Por",
                                               "years":  "2016 — 2023",
                                               "photos":  [
                                                              {
                                                                  "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                  "id":  3,
                                                                  "cam":  "nikon D 3500",
                                                                  "exp":  "1/640s · 112mm · f/6.3 · ISO 400",
                                                                  "iso":  "400",
                                                                  "loc":  "Peace Pagoda,Darjeeling, West Bengal - India",
                                                                  "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783678286/image_p0emjs.webp",
                                                                  "tag":  "portrait, bnw , people",
                                                                  "date":  "2026-04-02",
                                                                  "lens":  "70-300mm",
                                                                  "focal":  "112mm",
                                                                  "likes":  1,
                                                                  "story":  "",
                                                                  "title":  "Mahiruha",
                                                                  "views":  21,
                                                                  "shares":  1,
                                                                  "caption":  "my shelter",
                                                                  "qFactor":  75,
                                                                  "shutter":  "1/640s",
                                                                  "aperture":  "f/6.3",
                                                                  "featured":  true
                                                              }
                                                          ],
                                               "filters":  [
                                                               "all",
                                                               "editorial",
                                                               "fineart",
                                                               "environmental",
                                                               "featured"
                                                           ],
                                               "location":  "Remote Himalayan Villages, Tribal Areas",
                                               "photosCount":  "1 Photographs"
                                           },
                              "wildlife":  {
                                               "em":  "life",
                                               "desc":  "Intimate encounters with creatures in their natural habitat — patience rendered visible, silence translated into light.",
                                               "title":  "Wild",
                                               "years":  "2018 — 2024",
                                               "photos":  [
                                                              {
                                                                  "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                  "id":  4,
                                                                  "cam":  "Nikon D3500",
                                                                  "exp":  "1/250s · 300mm · f/6.3 · ISO 5000",
                                                                  "iso":  "5000",
                                                                  "loc":  "Padmaja Naidu Himalayan Zoological Park Darjeeling, West Bengal - India",
                                                                  "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783679323/image_elyezv.webp",
                                                                  "tag":  "animal, wild, leopard,",
                                                                  "date":  "2026-04-01",
                                                                  "lens":  "70-300mm",
                                                                  "focal":  "300mm",
                                                                  "likes":  6,
                                                                  "story":  "Though the common leopard could be confused with the jaguar, the jaguar is less stocky and have its rosette patterned marking on its coat with no internal spots.\n\n\u003cb\u003eDISTRIBUTION\u003c/b\u003e : Indian subspecies of common leopard is widely distributed in India, extends into Nepal, Myanmar and Sri Lanka. In Himalayas found upto an altitude of 3000 mts.\n\u003cb\u003eFOOD\u003c/b\u003e : Leopards will kill and eat anything they can over power easily.\n\u003cb\u003eBreeding\u003c/b\u003e : Breed all the year round. Has a gestation period of 87~94 days and gives birth to 1~2 cubs per litter. Common Leopard has been in Darjeeling Zoo since its inception and have done well in captivity.",
                                                                  "title":  "COMMON LEOPARD ",
                                                                  "views":  27,
                                                                  "caption":  "Panthera pardus",
                                                                  "qFactor":  33,
                                                                  "shutter":  "1/250s",
                                                                  "aperture":  "f/6.3",
                                                                  "featured":  true
                                                              },
                                                              {
                                                                  "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                  "id":  5,
                                                                  "cam":  "Nikon D3500",
                                                                  "exp":  "1/400s · 270mm · f/6.3 · ISO 800",
                                                                  "iso":  "800",
                                                                  "loc":  "Padmaja Naidu Himalayan Zoological Park, Darjeeling, West Bengal - India",
                                                                  "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783707699/image_mvylfk.webp",
                                                                  "tag":  "animal, wild,panda,zoo",
                                                                  "date":  "2026-04-01",
                                                                  "lens":  "70-300mm",
                                                                  "focal":  "270mm",
                                                                  "likes":  2,
                                                                  "story":  "\u003ci\u003eRed Pandas\u003c/i\u003e are medium sized bear like mammal with a thick rusty to deep chestnut colored coat. The muzzle, eye patches and the fronts of the large pointed ears are white along with broad white cheek patches. The tail is long, bushy and with ginger rings.\nRed pandas are classified as Endangered on the IUCN Red List, with their wild population estimated to have dropped by 50% over the last three generations. Fewer than 10,000 individuals are left in the wild today.main reasons include:\nHabitat Loss: Deforestation from logging and agriculture shrinks their Himalayan forest homes.\n\nDietary Risk: They depend on bamboo for 98% of their diet, making them highly vulnerable when forests vanish.\n\nPoaching \u0026 Traps: They face illegal hunting for their fur and are often caught in traps meant for other wildlife.\n\n\u003cb\u003eDISTRIBUTION\u003c/b\u003e : Central Nepal to Arunachal Pradesh and this stretch includes Sikkim and Darjeeling Himalayas. The distribution is further extended from Arunachal Pradesh to Myanmar and China.\n\u003cb\u003eFOOD\u003c/b\u003e : 90% of Red Panda\u0027s diet consists of bamboo leaves and the rest consist of bamboo shoots, fruits and berries.\n\n\u003cb\u003eBreeding \u003c/b\u003e: Mating season is between January to March. Gestation period is 100-150 days to deliver 1-4 cubs in a litter during May / June. Survives and breed well in captivity.",
                                                                  "title":  "RED PANDA ",
                                                                  "views":  14,
                                                                  "caption":  "Ailurus fulgens fulgens",
                                                                  "qFactor":  85,
                                                                  "shutter":  "1/400s",
                                                                  "aperture":  "f/6.3",
                                                                  "featured":  true
                                                              }
                                                          ],
                                               "filters":  [
                                                               "all",
                                                               "mammals",
                                                               "birds",
                                                               "reptiles",
                                                               "macro",
                                                               "featured"
                                                           ],
                                               "location":  "India, Nepal, Bhutan",
                                               "photosCount":  "2 Photographs"
                                           },
                              "landscape":  {
                                                "em":  "scape",
                                                "desc":  "The earth at its most eloquent — mountains, valleys, and the horizons between them, captured in moments of transient light.",
                                                "title":  "Land",
                                                "years":  "2015 — 2024",
                                                "photos":  [
                                                               {
                                                                   "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                   "id":  1,
                                                                   "cam":  "poco x3 ",
                                                                   "exp":  "f/1.89 · 200",
                                                                   "iso":  "200",
                                                                   "loc":  "kolkata, West Bengal - India",
                                                                   "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783672948/image_rcm2d0.webp",
                                                                   "tag":  "street , kolkata , moody , dusk",
                                                                   "date":  "2025-09-28",
                                                                   "lens":  "",
                                                                   "focal":  "",
                                                                   "likes":  5,
                                                                   "story":  "",
                                                                   "title":  "Victoria Memorial",
                                                                   "views":  6,
                                                                   "caption":  "through the maidan",
                                                                   "qFactor":  50,
                                                                   "shutter":  "",
                                                                   "aperture":  "f/1.89",
                                                                   "featured":  false
                                                               }
                                                           ],
                                                "filters":  [
                                                                "all",
                                                                "mountains",
                                                                "valleys",
                                                                "coastal",
                                                                "astrophotography",
                                                                "featured"
                                                            ],
                                                "location":  "Himalayas, Western Ghats, Kutch",
                                                "photosCount":  "1 Photographs"
                                            },
                              "astrophotography":  {
                                                       "em":  "photography",
                                                       "desc":  "Intercepting photons at the terminal end of their journey through the cosmic vacuum, translating different eras of space-time into a synchronized grid of pixels.",
                                                       "title":  "Astro",
                                                       "years":  "",
                                                       "photos":  [
                                                                      {
                                                                          "bg":  "linear-gradient(145deg,#151515,#2a2a2a)",
                                                                          "id":  2,
                                                                          "cam":  "poco X3",
                                                                          "exp":  "21s , 10 frames stack · f/1.89 · ISO 6400",
                                                                          "iso":  "6400",
                                                                          "loc":  "BANTOLI, [MADHYAMAHESHWAR], RUDRAPRAYAG, UTTARAKHAND, INDIA.",
                                                                          "src":  "https://res.cloudinary.com/yrwqu5an/image/upload/v1783673993/image_cz4qxo.webp",
                                                                          "tag":  "milkyway, galaxy,astro,",
                                                                          "date":  "2022-10-17",
                                                                          "lens":  "",
                                                                          "focal":  "",
                                                                          "likes":  1,
                                                                          "story":  "The Target: I have captured NGC 7000, famously known as the North America Nebula, located in the constellation Cygnus.\n\nThe Emission Glow: The deep pinkish-red hues come from massive clouds of \u003cb\u003ehydrogen\u003c/b\u003e gas (Hα or Hydrogen-alpha emission). This gas is being ionized and energized by the intense ultraviolet radiation from hot, massive stars hidden within or near the nebula.The Dark Nebulae: The striking dark structures cutting into the bright red areas are cosmic dust lanes (primarily LDN 935). This dense interstellar dust blocks the light from the stars and glowing gas behind it, creating the distinct silhouette that shapes the \"Gulf of Mexico\" and \"Hudson Bay\" features of the nebula.\n\nThe Cygnus Wall: The brightest, most defined vertical structure near the center is the Cygnus Wall. This is a region of rapid, concentrated star formation where young stars are sculpting the surrounding gas with powerful stellar winds.",
                                                                          "title":  "The Cygnus Arm",
                                                                          "views":  25,
                                                                          "hidden":  false,
                                                                          "caption":  "milky way band",
                                                                          "qFactor":  96,
                                                                          "shutter":  "21s , 10 frames stack",
                                                                          "aperture":  "f/1.89",
                                                                          "featured":  true
                                                                      }
                                                                  ],
                                                       "filters":  [
                                                                       "astro"
                                                                   ],
                                                       "location":  "",
                                                       "photosCount":  "1 Photographs"
                                                   }
                          },
    "homepageFilterTabs":  [
                               "wildlife",
                               "landscape",
                               "travel",
                               "portrait",
                               "street"
                           ],
    "portfolioFilterTabs":  [
                                {
                                    "id":  "all",
                                    "label":  "All Genres",
                                    "categories":  [
                                                       "wildlife",
                                                       "landscape",
                                                       "travel",
                                                       "street",
                                                       "portrait",
                                                       "commercial"
                                                   ]
                                },
                                {
                                    "id":  "outdoors",
                                    "label":  "Outdoors",
                                    "categories":  [
                                                       "wildlife",
                                                       "landscape",
                                                       "travel"
                                                   ]
                                },
                                {
                                    "id":  "humanity",
                                    "label":  "Humanity",
                                    "categories":  [
                                                       "portrait",
                                                       "street"
                                                   ]
                                },
                                {
                                    "id":  "creative",
                                    "label":  "Creative",
                                    "categories":  [
                                                       "commercial"
                                                   ]
                                }
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

// Helper to merge content interactions (likes/views) from separate table
async function mergeInteractions(dataObj) {
  try {
    const { data: interactions, error } = await supabaseClient
      .from('content_interactions')
      .select('*');
      
    if (!error && interactions) {
      interactions.forEach(row => {
        const id = parseInt(row.item_id);
        const type = row.item_type;
        
        if (type === 'journal' || type === 'deep_dive') {
          const item = dataObj.journalEntries ? dataObj.journalEntries.find(j => j.id === id) : null;
          if (item) {
            item.likes = row.likes || 0;
            item.views = row.views || 0;
          }
        } else if (type === 'story') {
          const item = dataObj.stories ? dataObj.stories.find(s => s.id === id) : null;
          if (item) {
            item.likes = row.likes || 0;
            item.views = row.views || 0;
          }
        } else if (type === 'gallery_photo') {
          if (dataObj.galleryCategories) {
            Object.keys(dataObj.galleryCategories).forEach(catKey => {
              const cat = dataObj.galleryCategories[catKey];
              if (cat && cat.photos) {
                const item = cat.photos.find(p => p.id === id);
                if (item) {
                  item.likes = row.likes || 0;
                  item.views = row.views || 0;
                }
              }
            });
          }
          if (dataObj.homepagePhotos) {
            const item = dataObj.homepagePhotos.find(p => p.id === id);
            if (item) {
              item.likes = row.likes || 0;
              item.views = row.views || 0;
            }
          }
        }
      });
    }
  } catch (e) {
    console.warn("Failed to merge content interactions", e);
  }
}

// Explicit application connection state
window.databaseConnected = false;
window.currentDataTimestamp = null;
let saveQueuePromise = Promise.resolve();

// ── ASYNC DB SYNCHRONIZATION ── //
async function initDatabase() {
  window.initDatabase = initDatabase;
  window.databaseConnected = false;
  let loadedFromSupabase = false;

  try {
    // Attempt to load from Supabase portfolio_data (ID = 1) along with updated_at timestamp
    const { data, error } = await supabaseClient
      .from('portfolio_data')
      .select('data, updated_at')
      .eq('id', 1)
      .single();
      
    if (error) {
      console.warn("Supabase connection / row query failed. Operating in FALLBACK mode.", error);
      const rawData = localStorage.getItem(DB_KEY);
      if (rawData) {
        try {
          siteData = JSON.parse(rawData);
        } catch (e) {
          siteData = DEFAULT_SITE_DATA;
        }
      } else {
        siteData = DEFAULT_SITE_DATA;
      }
    } else if (data && data.data) {
      siteData = data.data;
      window.currentDataTimestamp = data.updated_at || null;
      window.databaseConnected = true; // Connection explicitly verified!
      loadedFromSupabase = true;
    }
  } catch (e) {
    console.error("Supabase network error, reverting to read-only fallback mode.", e);
    window.databaseConnected = false;
    try {
      const rawData = localStorage.getItem(DB_KEY);
      if (rawData) {
        siteData = JSON.parse(rawData);
      }
    } catch (err) {
      siteData = DEFAULT_SITE_DATA;
    }
  }

  // Sanitize in-memory arrays (in-memory cleanup ONLY - NEVER saved back to Supabase)
  if (siteData.homepagePhotos) {
    siteData.homepagePhotos = siteData.homepagePhotos.filter(p => p && p.src && p.src.trim() !== '' && !p.src.includes('unsplash.com'));
  }
  if (siteData.galleryCategories) {
    for (const catKey in siteData.galleryCategories) {
      const cat = siteData.galleryCategories[catKey];
      if (cat && cat.photos) {
        cat.photos = cat.photos.filter(p => p && p.src && p.src.trim() !== '' && !p.src.includes('unsplash.com'));
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

  // Merge interactions from separate tables into in-memory structure
  await mergeInteractions(siteData);

  // Export globally
  window.siteData = siteData;
  window.siteDataLoaded = true;

  // Dispatch global custom event for UI updates
  document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: siteData }));
  
  // NOTE: AUTOMATIC SAVES / WRITES ARE STRICTLY REMOVED HERE.
  // Opening pages, initializing DB, or merging interactions NEVER writes back to portfolio_data!
}

// Kick off immediately
initDatabase();

// ── OPTIMISTIC CONCURRENCY CONTROLLED SAVE METHOD ── //
window.saveSiteData = async function(newData, options = {}) {
  // Queue saves sequentially to prevent race conditions & duplicate writes
  return new Promise((resolve) => {
    saveQueuePromise = saveQueuePromise.then(async () => {
      try {
        const result = await _executeOptimisticSave(newData, options);
        resolve(result);
      } catch (err) {
        console.error("Save execution failed:", err);
        resolve({ success: false, error: err.message || 'Unknown save error' });
      }
    });
  });
};

// Internal execution method
async function _executeOptimisticSave(newData, options = {}) {
  try {
    // REQUIREMENT 1 & 2: STRICT APPLICATION DATABASE CONNECTION GUARD
    if (!window.databaseConnected) {
      const connErr = "Save aborted: Database is not connected (Application running in Fallback / Offline mode).";
      console.warn(connErr);
      return { success: false, connected: false, error: connErr };
    }

    if (!newData) newData = window.siteData;

    // RULE 1: OPTIMISTIC CONCURRENCY CHECK BEFORE WRITING
    if (!options.force) {
      const { data: remoteMeta, error: checkError } = await supabaseClient
        .from('portfolio_data')
        .select('updated_at, data')
        .eq('id', 1)
        .single();

      if (!checkError && remoteMeta) {
        const remoteTime = remoteMeta.updated_at;
        const localTime = window.currentDataTimestamp;

        if (localTime && remoteTime && new Date(remoteTime).getTime() > new Date(localTime).getTime()) {
          console.warn("Optimistic Concurrency Conflict detected!", { localTime, remoteTime });
          
          // Refresh memory state with latest remote data
          if (remoteMeta.data) {
            window.siteData = remoteMeta.data;
            window.currentDataTimestamp = remoteTime;
            document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: remoteMeta.data }));
          }

          const conflictError = "Save conflict: Another browser tab/session updated the database. Loaded latest data.";
          if (typeof window.showConflictAlert === 'function') {
            window.showConflictAlert(conflictError);
          } else {
            alert(conflictError);
          }

          window.lastSaveResult = { success: false, conflict: true, error: conflictError };
          return window.lastSaveResult;
        }
      }
    }

    const timestamp = new Date().toISOString();

    // 1. Perform write to Supabase
    const { error: saveError } = await supabaseClient
      .from('portfolio_data')
      .upsert({ id: 1, data: newData, updated_at: timestamp });

    if (saveError) throw saveError;

    // 2. STRICT DOUBLE-CHECK VERIFICATION: Query Supabase immediately to confirm write
    let verifiedTimestamp = timestamp;
    let isVerified = false;
    
    const { data: verifyData, error: verifyError } = await supabaseClient
      .from('portfolio_data')
      .select('updated_at')
      .eq('id', 1)
      .single();

    if (!verifyError && verifyData && verifyData.updated_at) {
      isVerified = true;
      verifiedTimestamp = verifyData.updated_at;
    } else {
      console.error("Supabase double-check verification failed:", verifyError);
      return { success: false, verified: false, error: "Double-check verification failed: Supabase did not confirm the update." };
    }

    // Update in-memory concurrency timestamp to confirmed timestamp
    window.currentDataTimestamp = verifiedTimestamp;

    const timeObj = new Date(verifiedTimestamp);
    const timeString = timeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    window.lastSaveResult = {
      success: true,
      verified: true,
      timestamp: verifiedTimestamp,
      timeString: timeString
    };

    // Backup to local storage
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(newData));
    } catch (lsError) {
      console.warn("LocalStorage backup failed.", lsError);
    }

    window.siteData = newData;
    document.dispatchEvent(new CustomEvent('siteDataLoaded', { detail: newData }));
    return window.lastSaveResult;
  } catch (e) {
    console.error("Failed to execute saveSiteData.", e);
    window.lastSaveResult = { success: false, error: e.message };
    return window.lastSaveResult;
  }
}

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
        const freshData = data.data;
        await mergeInteractions(freshData);
        return freshData;
      }
    } catch (e) {
      console.warn("Could not fetch latest database state, using memory fallback.", e);
    }
    await mergeInteractions(window.siteData);
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
    
    const memItem = this.findItemOnData(window.siteData, type, itemId, subId);
    if (memItem) {
      // Direct memory synchronization
      if (typeof isLike === 'boolean') {
        // If isLike is boolean, adjust likes accordingly
        const currentLikes = memItem.likes || 0;
        memItem.likes = isLike ? currentLikes + 1 : Math.max(0, currentLikes - 1);
      }
    }

    if (this._likeDebounceTimers[key]) {
      clearTimeout(this._likeDebounceTimers[key]);
    }

    return new Promise((resolve) => {
      const updatedLikes = memItem ? (memItem.likes || 0) : 0;
      resolve(updatedLikes);

      this._likeDebounceTimers[key] = setTimeout(() => {
        delete this._likeDebounceTimers[key];
        
        this._enqueueWrite(async () => {
          if (memItem) {
            const actualType = (type === 'home_photo') ? 'gallery_photo' : type;
            const targetId = String(memItem.id !== undefined ? memItem.id : (subId !== undefined ? subId : itemId));
            await supabaseClient.from('content_interactions').upsert({
              item_id: targetId,
              item_type: actualType,
              likes: memItem.likes || 0,
              views: memItem.views || 0
            }, { onConflict: 'item_id' });
          }
          return memItem ? memItem.likes : 0;
        });
      }, 500);
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

/* ── AUTOMATED TEST SUITE FOR FALLBACK & CONCURRENCY PROTECTIONS ── */
window.runFallbackProtectionTests = async function() {
  console.log("%c[TEST SUITE] Running Fallback & Concurrency Safeguard Tests...", "color:#c9a96e; font-weight:bold; font-size:14px;");
  const results = [];

  // TEST 1: Supabase unavailable / databaseConnected = false -> save is blocked
  const origConnState = window.databaseConnected;
  window.databaseConnected = false;
  const test1Res = await window.saveSiteData(window.siteData);
  const test1Passed = test1Res && test1Res.success === false && test1Res.connected === false;
  results.push({
    test: "Test 1: Save blocked when databaseConnected == false (Fallback mode)",
    passed: test1Passed,
    output: test1Res
  });

  // TEST 2: Cloned fallback object -> still blocked when databaseConnected == false
  const clonedFallback = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
  const test2Res = await window.saveSiteData(clonedFallback);
  const test2Passed = test2Res && test2Res.success === false && test2Res.connected === false;
  results.push({
    test: "Test 2: Cloned fallback object (structured clone) blocked when databaseConnected == false",
    passed: test2Passed,
    output: test2Res
  });

  // Restore connection state
  window.databaseConnected = origConnState;

  // TEST 3: Supabase reconnected / databaseConnected = true -> check connection state flag
  const test3Passed = window.databaseConnected === true;
  results.push({
    test: "Test 3: Connection flag explicitly true when database is connected",
    passed: test3Passed,
    output: { databaseConnected: window.databaseConnected }
  });

  // TEST 4: Concurrency Check (Stale timestamp detection)
  const origTime = window.currentDataTimestamp;
  window.currentDataTimestamp = "2020-01-01T00:00:00.000Z"; // Artificial stale timestamp
  const test4Res = await window.saveSiteData(window.siteData);
  const test4Passed = test4Res && test4Res.success === false && test4Res.conflict === true;
  results.push({
    test: "Test 4: Stale timestamp detected & write aborted by Optimistic Concurrency Control",
    passed: test4Passed,
    output: test4Res
  });

  // Restore verified timestamp
  window.currentDataTimestamp = origTime;

  console.table(results);
  const allPassed = results.every(r => r.passed);
  if (allPassed) {
    console.log("%c✓ ALL 4 SAFEGUARD TESTS PASSED 100%!", "color:#10b981; font-weight:bold; font-size:14px;");
  } else {
    console.warn("%c! TEST SUITE COMPLETED WITH FAILURES", "color:#ef4444; font-weight:bold; font-size:14px;");
  }
  return results;
};
