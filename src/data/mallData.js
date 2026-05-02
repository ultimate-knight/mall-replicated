export const GOLD = "#c9a26b";
export const BLACK = "#060606";

export const SECTIONS = [
  {
    id: "retail",
    nav: "Retail",
    persona: "Tenant",
    title: "Retail\nReimagined",
    short:
      "Flagship visibility for brands that want footfall, dwell time, and cultural relevance.",
    body: "Mall of America is not passive retail square footage. It is a living commercial ecosystem where tourism, dining, entertainment, and store discovery compound into stronger business performance every single day.",
    emotional:
      "A tenant does not just open a store here. They enter a destination where visitors arrive ready to explore, spend time, post, eat, shop, and return.",
    video: "/mall-video5.mp4",
    accent: "#c9a26b",
    stats: [
      { value: "520+", label: "Stores & Attractions" },
      { value: "42M+", label: "Annual Visitors" },
      { value: "3.1hr", label: "Avg Dwell Time" },
      { value: "96%", label: "Occupancy Rate" },
    ],
  },
  {
    id: "luxury",
    nav: "Luxury",
    persona: "Premium Brand",
    title: "Luxury\nWith Scale",
    short:
      "Prestige positioning with the footfall most luxury corridors cannot manufacture.",
    body: "Luxury at Mall of America can become controlled theater: elevated arrival, curated appointment paths, premium service, and destination-level visibility inside one high-energy environment.",
    emotional:
      "Luxury here is not only exclusivity. It is exclusivity placed inside massive public energy — creating contrast, curiosity, and unstoppable commercial momentum.",
    video: "/mal-luxury1.mp4",
    accent: "#e8d5a3",
    stats: [
      { value: "$145K+", label: "Avg HHI Luxury Shopper" },
      { value: "4.2hr", label: "Avg Dwell Time" },
      { value: "38%", label: "YoY Sales Growth" },
      { value: "92%", label: "Awareness Lift" },
    ],
  },
  {
    id: "dining",
    nav: "Dining",
    persona: "Restaurant Group",
    title: "Dining\nAs Destination",
    short:
      "Food becomes the reason to arrive earlier, stay longer, and return with others.",
    body: "Dining expands the commercial day. It captures families, tourists, event visitors, date-night traffic, and shoppers who want the visit to become a full lifestyle experience worth remembering.",
    emotional:
      "The restaurant is no longer behind the mall experience. It becomes the memory that completes the entire visit.",
    video: "/mall-dine1.mp4",
    accent: "#d4836a",
    stats: [
      { value: "60+", label: "Dining Concepts" },
      { value: "85%", label: "Visitors Who Dine" },
      { value: "$38", label: "Avg Check Size" },
      { value: "18%", label: "Revenue from F&B" },
    ],
  },
  {
    id: "entertainment",
    nav: "Entertainment",
    persona: "Experience Operator",
    title: "Beyond\nRetail",
    short:
      "Attractions create repeat traffic that ordinary shopping environments cannot replicate.",
    body: "Entertainment turns a retail property into a destination. It brings birthdays, tourism, school trips, family days, creator content, and repeat visitation into one high-energy environment.",
    emotional:
      "This is where the pitch becomes physical: movement, sound, memory, and a reason to return even when no purchase was planned.",
    video: "/mall-entertain1.mp4",
    accent: "#6ab5c8",
    stats: [
      { value: "7", label: "Major Attractions" },
      { value: "7 Acres", label: "Indoor Theme Park" },
      { value: "30+", label: "Rides & Experiences" },
      { value: "12M+", label: "Entertainment Visits" },
    ],
  },
  {
    id: "events",
    nav: "Events",
    persona: "Event Partner",
    title: "A Global\nStage",
    short: "A launch can become a public moment instead of a private room rental.",
    body: "Events at Mall of America convert a brand message into a live cultural moment because the audience is already present, already moving, and already prepared to participate.",
    emotional:
      "Instead of renting space, the partner owns a day inside one of America's most recognizable destinations.",
    video: "/mall-event1.mp4",
    accent: "#a89fd8",
    stats: [
      { value: "400+", label: "Annual Events" },
      { value: "5,000+", label: "Max Capacity" },
      { value: "3B+", label: "Media Impressions" },
      { value: "200+", label: "Brand Activations" },
    ],
  },
];

export const OVERVIEW_STATS = [
  { value: "42M+", label: "Annual Visitors", note: "destination-scale demand" },
  { value: "520+", label: "Stores & Attractions", note: "commercial variety" },
  { value: "5.6M", label: "Square Feet", note: "room for immersive formats" },
  { value: "$2B+", label: "Economic Impact", note: "regional business engine" },
];

export const PARTNER_TYPES = [
  {
    id: "tenant",
    label: "Tenant",
    full: "Tenant / Retailer",
    ticketLabel: "Average transaction value",
    defaultTicket: 95,
    minTicket: 15,
    maxTicket: 600,
    stepTicket: 5,
    captureLabel: "Visitor capture rate",
    defaultCapture: 0.8,
    minCapture: 0.1,
    maxCapture: 6,
    stepCapture: 0.1,
    resultLabel: "Projected Annual Sales",
    closingLine: "That's your flagship year at Mall of America.",
    story:
      "The prospect stops seeing a lease and starts seeing their own year inside North America's highest-demand retail address.",
  },
  {
    id: "sponsor",
    label: "Sponsor",
    full: "Brand Sponsor",
    ticketLabel: "Value per brand engagement",
    defaultTicket: 18,
    minTicket: 1,
    maxTicket: 150,
    stepTicket: 1,
    captureLabel: "Audience engagement rate",
    defaultCapture: 4.5,
    minCapture: 0.5,
    maxCapture: 25,
    stepCapture: 0.5,
    resultLabel: "Projected Brand Value",
    closingLine: "That's your annual brand presence at Mall of America.",
    story:
      "The sponsor sees that this is not passive media. It is physical attention, social memory, and high-volume public engagement that no digital channel replicates.",
  },
  {
    id: "event",
    label: "Event",
    full: "Event Partner",
    ticketLabel: "Revenue per attendee",
    defaultTicket: 120,
    minTicket: 10,
    maxTicket: 900,
    stepTicket: 10,
    captureLabel: "Event traffic share",
    defaultCapture: 0.35,
    minCapture: 0.05,
    maxCapture: 4,
    stepCapture: 0.05,
    resultLabel: "Projected Event Revenue",
    closingLine: "That's your event at Mall of America.",
    story:
      "The event partner sees the venue differently: not as a room, but as a public stage with 42 million visitors worth of built-in audience energy.",
  },
];

export const CONTACTS = [
  {
    title: "Retail Leasing",
    desc: "Flagships, inline retail, pop-ups, kiosks, and market-test concepts across 5.6M sq ft.",
    email: "leasing@mallofamerica.com",
  },
  {
    title: "Brand Sponsorship",
    desc: "Experiential activations, naming rights, seasonal campaigns, and launch moments.",
    email: "partnerships@mallofamerica.com",
  },
  {
    title: "Event Partnerships",
    desc: "Product reveals, concerts, creator moments, corporate events, and public activations.",
    email: "events@mallofamerica.com",
  },
];

export const AI_VISUALS = [
  {
    title: "Luxury Arrival",
    tag: "AI-generated atmosphere",
    image: "/luxurzious.jpeg",
    desc: "A cinematic premium-brand arrival moment with gold lighting, editorial luxury, and destination-scale presence.",
  },
  {
    title: "Sponsor Tunnel",
    tag: "AI-generated motion concept",
    image: "/mallez.jpeg",
    desc: "An immersive sponsor activation tunnel using generative motion, interactive light, and social-first brand energy.",
  },
  {
    title: "Event Stage",
    tag: "AI-generated event world",
    image: "/Tunnelz.jpeg",
    desc: "A large-scale public launch environment built for crowd attention, content capture, and high-impact reveal moments.",
  },
];
