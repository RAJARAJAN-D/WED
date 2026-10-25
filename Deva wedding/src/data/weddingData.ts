export type ScheduleItem = {
  label?: string;
  time?: string;
  text?: string; // For text-based items e.g. "Followed by Dinner" or "Vivah Sanskar — Shubh Lagnanusar"
};

export type LocationId = "familyResidence" | "sharmaFarms";

export type VenueLocation = {
  id: LocationId;
  name: string;
  address: string[];
  googleMapsUrl: string;
  embedUrl?: string;
};

export type WeddingEvent = {
  id: string;
  locationId: LocationId;
  title: string;
  date: string;
  shortDate: string;
  fullDate: string;
  chapter: string;
  line: string;
  scheduleLabel?: string;
  schedule: ScheduleItem[];
  venueLabel?: string;
  venueTitle?: string;
  venueAddress: string[];
  baratRoute?: string[];
  isMainVenueEmphasized?: boolean;
  time?: string;
  venue?: string;
  address?: string;
  mapUrl?: string;
};
export type WeddingDateConfig = {
  year: number | null;
  month: number;
  day: number;
  dateLabel: string;
  time: string | null;
  timezone: string;
  todayMessage: string;
  pastMessage: string;
};

const wedding: WeddingDateConfig = {
  // Set the confirmed year here. Never infer the next occurrence automatically.
  year: 2026,
  month: 11,
  day: 15,
  dateLabel: "15 November",
  // Local HH:mm ceremony time. Null counts to the start of the wedding DAY,
  // once the year is confirmed; midnight is never presented as a ceremony time.
  time: "07:00",
  timezone: "Asia/Kolkata",
  todayMessage: "Our forever begins today.",
  pastMessage: "And so our forever began.",
};

export const weddingData = {
  couple: { groom: "Devanand", bride: "SenthamaraiSelvi" },
  wedding,
  familyDetails: "",
  familySignOff: [
   
    {
      heading:  "WE WELCOME YOU WARMLY",
      names: [
        "Mrs. Tharaheswari & Mr. Soundharajan",
        "Mrs. Chitra & Mr. Kurinchi Selvan",
      ],
    },
     {
      heading: "WITH WARMTH AND AFFECTION",
      names: ["Mr. Kumanan", "Mr. Gurudevanathan", "Mr. Deepan"],
    },
  ],
  closing: { message: "Join us as we begin our forever." },
  locations: {
    familyResidence: {
      id: "familyResidence" as const,
      name: "Family Residence",
      address: [
        "Logalakshimi Mahal",
        "East Pondy Road, Villupuram",
      ],
      googleMapsUrl:
        "https://maps.app.goo.gl/ndNEFeF7k4oae1119",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5347271878263!2d79.50866717483643!3d11.937433688290891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356e3dd0bec61%3A0x225dc1f3389d1679!2sLogalakshmi%20Mahal!5e0!3m2!1sen!2sin!4v1792771817354!5m2!1sen!2sin",
    },
    sharmaFarms: {
      id: "sharmaFarms" as const,
      name: "Sri Muthambigai Udanirai",
      address: [
        "Thiruvamathur, Villupuram",
      ],
      googleMapsUrl: "https://maps.app.goo.gl/Wyigj2DerHhWyoZr8",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.0993004581137!2d79.463765674837!3d11.967626388263028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5353fec2a7be97%3A0x77aeacd249dfd91d!2sAbirameshwarar%20Temple!5e0!3m2!1sen!2sin!4v1792772399157!5m2!1sen!2sin",
    },
  },
  location: {
    venue: "Sharma Farms",
    address: "Bahuwala, Dehradun",
    googleMapsUrl: "https://maps.app.goo.gl/RHxXSteNytH2wAbE9",
    embedUrl:
      "https://maps.google.com/maps?cid=2478930000041440583&hl=en&z=16&output=embed",
  },
  musicUrl: "/audio/aaj-sajeya.mp3",
  events: [
    
     
    {
      id: "mehendi",
      locationId: "familyResidence" as const,
      title: "Mehandi & Cocktail",
      date: "14 November",
      shortDate: "14 NOVEMBER",
      fullDate: "SATURDAY ·14 NOVEMBER 2026",
      chapter: "Under the stars",
      // Non-breaking space keeps "A" with the second sentence when the line wraps.
      line: "Henna on our hands. A little magic in the air.",
      scheduleLabel: "TIME",
      schedule: [
        {
          text: "7:00 PM onwards",
        },
        {
          text: "Followed by Dinner",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "Family Residence",
      venueAddress: ["MGR Nagar", "Marudhu, Villlupuram"],
      venue: "Family Residence, Rudrapur, Vikas Nagar",
      address: "Village & Post Rudrapur, Vikas Nagar, Dehradun",
      mapUrl: "https://maps.app.goo.gl/s63AymCiJmfkugBp9?g_st=ic",
    },

    {
      id: "mata",
      locationId: "sharmaFarms" as const,
      title: "Wedding",
      date: wedding.dateLabel,
      shortDate: "15 NOVEMBER",
      fullDate: "SUNDAY · 15 NOVEMBER 2026",
      chapter: "The beginning of forever",
      line: "Two hearts. Seven promises. A lifetime together.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Mandha Poojan",
          time: "06:00 AM",
        },
        {
          label: "Sehrabandi",
          time: "07:00 AM",
        },
        {
          label: "Barat Departure",
          time: "08:00 AM",
        },
        {
          label: "BreakFast",
          time: "09:00 AM",
        },
      ],
    
      venueLabel: "MAIN VENUE",
      venueTitle: "Sri Muthambigai Udanirai",
      venueAddress: ["Thiruvamathur, Villupuram"],
      isMainVenueEmphasized: true,
      venue: "Sri Muthambigai Udanirai, Abirameshwarar sannidhi",
      address: "Thiruvamathur, Villupuram",
      mapUrl: "https://maps.app.goo.gl/RHxXSteNytH2wAbE9",
    },
    
    {
      id: "vivah",
      locationId: "familyResidence" as const,
      title: "Reception",
      date: "16 November",
      shortDate: "16 NOVEMBER",
      fullDate: "MONDAY · 16 NOVEMBER 2026",
      chapter: "A little sunshine",
      line: "Bathed in turmeric, laughter, and the love of our own.",
      scheduleLabel: "SCHEDULE",
      schedule: [
        {
          label: "Our Beautiful Bride",
          time: "05:00 PM",
        },
        {
          label: "Wedding Queen",
          time: "06:00 AM",
        },
        {
          label: "Dinner",
          time: "08:00 PM",
        },
      ],
      venueLabel: "VENUE",
      venueTitle: "Family Residence",
      venueAddress: ["East Pondy Road", "Villupuram"],
      venue: "Logalakshmi Mahal",
      address: "East Pondy Road, Villupuram",
      mapUrl: "https://maps.app.goo.gl/s63AymCiJmfkugBp9?g_st=ic",
    },
    
    
  ] as WeddingEvent[],
};
