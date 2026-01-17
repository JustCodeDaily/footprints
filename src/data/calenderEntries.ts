export interface CalendarEntry {
  date: string; // YYYY-MM-DD
  text: string;
  image: string;
  textOffset: { x: number; y: number };
  imageOffset: { x: number; y: number };
}

export const calendarEntries: Record<string, CalendarEntry> = {
  "2025-01-06": {
    date: "2025-01-06",
    text: "My first flight of the year",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&h=200&fit=crop",
    textOffset: { x: 100, y: -160 },
    imageOffset: { x: -80, y: 180 },
  },
  "2025-01-07": {
    date: "2025-01-07",
    text: "And my second one of the year.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop",
    textOffset: { x: -100, y: -200 },
    imageOffset: { x: 120, y: 140 },
  },
  "2025-01-11": {
    date: "2025-01-11",
    text: "Someone special knocked my door",
    image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=300&h=200&fit=crop",
    textOffset: { x: -120, y: -180 },
    imageOffset: { x: 80, y: 160 },
  },
  "2025-01-16": {
    date: "2025-01-16",
    text: "When a wine girl meets a whiskey boy",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=300&h=200&fit=crop",
    textOffset: { x: 80, y: -140 },
    imageOffset: { x: -60, y: 200 },
  },
  "2025-02-14": {
    date: "2025-02-14",
    text: "Handwritten letters still mean everything.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=200&fit=crop",
    textOffset: { x: 100, y: -160 },
    imageOffset: { x: -60, y: 180 },
  },
  "2025-03-21": {
    date: "2025-03-21",
    text: "Spring equinox. New beginnings whispered through the trees.",
    image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=300&h=200&fit=crop",
    textOffset: { x: -80, y: -200 },
    imageOffset: { x: 120, y: 140 },
  },
  "2025-04-08": {
    date: "2025-04-08",
    text: "Found an old photograph. Time folds in on itself.",
    image: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?w=300&h=200&fit=crop",
    textOffset: { x: 140, y: -140 },
    imageOffset: { x: -100, y: 200 },
  },
  "2025-05-01": {
    date: "2025-05-01",
    text: "Morning coffee on the balcony. Birds returned.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop",
    textOffset: { x: -60, y: -220 },
    imageOffset: { x: 100, y: 160 },
  },
  "2025-06-21": {
    date: "2025-06-21",
    text: "Longest day. We watched the sun refuse to set.",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=300&h=200&fit=crop",
    textOffset: { x: 80, y: -180 },
    imageOffset: { x: -80, y: 180 },
  },
  "2025-07-04": {
    date: "2025-07-04",
    text: "Fireworks reflected in the lake. Timeless.",
    image: "https://images.unsplash.com/photo-1498931299210-50409b10bb0c?w=300&h=200&fit=crop",
    textOffset: { x: -100, y: -160 },
    imageOffset: { x: 60, y: 200 },
  },
  "2025-08-15": {
    date: "2025-08-15",
    text: "Meteor shower. Made wishes we'll forget by morning.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=200&fit=crop",
    textOffset: { x: 120, y: -200 },
    imageOffset: { x: -120, y: 140 },
  },
  "2025-09-22": {
    date: "2025-09-22",
    text: "Leaves began their descent. Beautiful surrender.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    textOffset: { x: -140, y: -140 },
    imageOffset: { x: 80, y: 180 },
  },
  "2025-10-31": {
    date: "2025-10-31",
    text: "The veil between worlds felt thinner tonight.",
    image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=300&h=200&fit=crop",
    textOffset: { x: 60, y: -180 },
    imageOffset: { x: -60, y: 160 },
  },
  "2025-11-27": {
    date: "2025-11-27",
    text: "Gathered around the table. Gratitude in every silence.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop",
    textOffset: { x: -80, y: -200 },
    imageOffset: { x: 100, y: 180 },
  },
  "2025-12-25": {
    date: "2025-12-25",
    text: "Quiet morning. Gift of presence, not presents.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=300&h=200&fit=crop",
    textOffset: { x: 100, y: -160 },
    imageOffset: { x: -80, y: 200 },
  },
};
