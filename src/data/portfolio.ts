export type Category = "All" | "Posters" | "Branding" | "Social Media" | "Sports";

export interface DesignWork {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
}

export const categories: Category[] = ["All", "Posters", "Branding", "Social Media", "Sports"];

export const designs: DesignWork[] = [
  { id: 1, title: "Church Poster", category: "Posters", description: "A vibrant church event poster with strong visual identity.", image: "/church.webp" },
  { id: 6, title: "Benji Visuals — Brand Identity", category: "Branding", description: "Complete brand identity for Benji Visuals including logo, colour palette, typography and business card.", image: "/BRAND.webp" },
  { id: 2, title: "Fighting Invisible Battles Vol. 2", category: "Posters", description: "A redesigned version of the Fighting Invisible Battles poster with a fresh layout and updated visuals.", image: "/Fighting invisible battles vol 2.webp" },
  { id: 3, title: "Crusade Poster", category: "Posters", description: "A powerful church crusade event poster.", image: "/CRUSADE POSTER.webp" },
  { id: 4, title: "Fighting Invisible Battles", category: "Posters", description: "The original church poster on mental health and spiritual warfare.", image: "/Fighting invisible battles.webp" },
  { id: 5, title: "Chapel Event Poster", category: "Posters", description: "A clean and bold event poster for a chapel service.", image: "/CHAPEL.webp" },
  { id: 6, title: "Benji Visuals — Brand Identity", category: "Branding", description: "Complete brand identity for Benji Visuals including logo, colour palette, typography and business card.", image: "/BRAND.webp" },
  { id: 7, title: "100 Followers Milestone", category: "Social Media", description: "A celebratory social media post marking a 100 followers milestone.", image: "/100 followers.webp" },
  { id: 8, title: "Merry Christmas", category: "Posters", description: "A festive Christmas poster with warm seasonal greetings.", image: "/mc-merry-chritsmas.webp" },
  { id: 9, title: "Merry Christmas", category: "Posters", description: "A bold Christmas celebration poster with festive typography.", image: "/MERRY CHRISTMAS.webp" },
  { id: 10, title: "Happy New Year Vol. 2", category: "Posters", description: "A vibrant New Year poster bursting with celebration.", image: "/Happy new year 2.webp" },
  { id: 11, title: "Happy New Year", category: "Posters", description: "A clean and elegant New Year greeting poster.", image: "/Happy new year.webp" },
  { id: 12, title: "Man United Attackers", category: "Sports", description: "A dynamic football poster highlighting Manchester United's attack.", image: "/MAN U ATTACKERS.webp" },
  { id: 13, title: "Birthday Poster Vol. 2", category: "Posters", description: "A vibrant birthday celebration poster.", image: "/Alex birthday poster 2.webp" },
  { id: 14, title: "Birthday Poster Vol. 1", category: "Posters", description: "A bold and colourful birthday poster design.", image: "/Alex birthday poster 1.webp" },
  { id: 15, title: "Jamuhuri Day", category: "Posters", description: "A patriotic poster celebrating Kenya's Jamuhuri Day.", image: "/JAMUHURI.webp" },
  { id: 16, title: "Chelsea vs Atalanta", category: "Sports", description: "A match day poster for the Chelsea vs Atalanta fixture.", image: "/CHELSEA vs ATALANTA.webp" },
  { id: 17, title: "AFCON", category: "Sports", description: "A bold Africa Cup of Nations tournament poster.", image: "/AFCON.webp" },
  { id: 18, title: "Jamuhuri Day Celebration", category: "Posters", description: "A detailed Jamuhuri Day poster with rich Kenyan imagery.", image: "/Jamuhuri Day.webp" },
  { id: 19, title: "Leverkusen vs Newcastle", category: "Sports", description: "A match day poster for the Leverkusen vs Newcastle fixture.", image: "/Leverkusen vs Newcastle.webp" },
  { id: 20, title: "Real Madrid vs Man City", category: "Sports", description: "A high-stakes match day poster for Real Madrid vs Man City.", image: "/Real vs city.webp" },
  { id: 21, title: "Inter Milan vs Liverpool", category: "Sports", description: "A dramatic Champions League match day poster.", image: "/INTER MILAN VS LIVERPOOL.webp" },
  { id: 22, title: "Raphinha Poster", category: "Sports", description: "A stunning player spotlight poster featuring Raphinha.", image: "/Raphinha poster.webp" },
  { id: 23, title: "Full Time", category: "Sports", description: "A football full time result poster.", image: "/fulltime.webp" },
  { id: 24, title: "Seasonal Greetings", category: "Posters", description: "A warm seasonal greetings poster for the festive period.", image: "/seasonal greetings.webp" },
  { id: 25, title: "Majesty Academy", category: "Branding", description: "A branding poster for Majesty Academy.", image: "/Majesty academy.webp" },
  { id: 26, title: "Barcelona vs Atletico Madrid", category: "Sports", description: "A fierce El Derbi match day poster.", image: "/Barcelona vs Atm.webp" },
  { id: 27, title: "Dealing", category: "Posters", description: "A thought-provoking motivational poster.", image: "/Dealing.webp" },
  { id: 28, title: "Fasting", category: "Posters", description: "A spiritual fasting and prayer poster.", image: "/fasting.webp" },
  { id: 29, title: "DFB Pokal", category: "Sports", description: "A German Cup match day poster.", image: "/DFB POKAL.webp" },
  { id: 30, title: "Chelsea vs Arsenal", category: "Sports", description: "A London Derby match day poster.", image: "/Chelsea vs Arsenal.webp" },
  { id: 31, title: "Happy New Month", category: "Posters", description: "A fresh and uplifting new month greeting poster.", image: "/Happy new month.webp" },
  { id: 32, title: "Bayern vs Arsenal", category: "Sports", description: "A Champions League match day poster — Bayern vs Arsenal.", image: "/Bayern vs Arsenal.webp" },
  { id: 33, title: "Arsenal vs Bayern", category: "Sports", description: "The second leg Champions League poster — Arsenal vs Bayern.", image: "/Arsenal vs Bayern.webp" },
  { id: 34, title: "Happy Holidays", category: "Posters", description: "A warm and festive happy holidays poster.", image: "/Happy holidays.webp" },
  { id: 35, title: "New Year Poster", category: "Posters", description: "A bold new year celebration poster.", image: "/new year poster.webp" },
  { id: 36, title: "Nail Art", category: "Social Media", description: "A stylish nail art promotional poster.", image: "/Nail Art.webp" },
  { id: 37, title: "Merry Christmas Vol. 2", category: "Posters", description: "A festive Christmas poster with a unique layout.", image: "/merry 2.webp" },
  { id: 38, title: "Merry Christmas Vol. 1", category: "Posters", description: "A classic Christmas greeting poster.", image: "/merry.webp" },
  { id: 39, title: "Arsenal vs Tottenham", category: "Sports", description: "The North London Derby match day poster.", image: "/Arsenal vs totenham.webp" },
  { id: 40, title: "Milan Derby", category: "Sports", description: "A dramatic Derby della Madonnina match day poster.", image: "/MILAN DERBY.webp" },
  { id: 41, title: "Exousia Night", category: "Posters", description: "A powerful church night event poster.", image: "/Exousia Night.webp" },
  { id: 42, title: "Sunrise Cafe — Advert", category: "Social Media", description: "A promotional advertisement poster for Sunrise Cafe.", image: "/ad.webp" },
  { id: 43, title: "Sunrise Cafe — Branding", category: "Social Media", description: "A branding and promotional poster for Sunrise Cafe.", image: "/sunrise.webp" },
  { id: 44, title: "Perfume Poster", category: "Social Media", description: "A luxury perfume product advertisement poster.", image: "/perfume poster.webp" },
  { id: 45, title: "Into The Badlands", category: "Posters", description: "A cinematic and dramatic poster design.", image: "/into the bad lands.webp" },
  { id: 46, title: "Fashion Poster", category: "Social Media", description: "A sleek and modern fashion promotional poster.", image: "/fashion.webp" },
  { id: 47, title: "Typography Poster", category: "Posters", description: "A creative exploration of typography and layout.", image: "/Typography poster.webp" },
  { id: 48, title: "Benchester Cutz", category: "Social Media", description: "An advert for Benchester Cutz barbershop.", image: "/Barber.webp" },
  { id: 49, title: "Coffee Advert", category: "Social Media", description: "A rich and warm coffee product advertisement.", image: "/cofee.webp" },
  { id: 50, title: "Party Poster", category: "Posters", description: "A bold and energetic party event poster.", image: "/shh.webp" },
  { id: 51, title: "Mariana Store — New Arrivals", category: "Social Media", description: "A new arrivals promotional poster for Mariana Store.", image: "/mariana store.webp" },
  { id: 52, title: "Veluxe Wears", category: "Social Media", description: "A stylish advert for Veluxe Wears clothing.", image: "/veluxe wears.webp" },
  { id: 53, title: "Black Friday", category: "Social Media", description: "A high-impact Black Friday sales poster.", image: "/black friday.webp" },
  { id: 54, title: "Typography Trial", category: "Posters", description: "An early typography exploration poster.", image: "/first.webp" },
  { id: 55, title: "Benji Visuals — Services Advert", category: "Branding", description: "A promotional poster advertising Benji Visuals design services.", image: "/advert.webp" },
  { id: 56, title: "New Week Poster", category: "Posters", description: "A fresh and motivating new week greeting poster.", image: "/nw2.webp" },
];