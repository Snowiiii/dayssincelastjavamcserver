// Generic formatting and comparison helpers used across the app.

export const STATUS_LABELS = {
  maintained: "Maintained",
  "rarely-updated": "Rarely updated",
  migrated: "Migrated",
  deprecated: "Deprecated",
  abandoned: "Abandoned",
};

export function getYear(dateStr) {
  if (!dateStr) return null;
  const match = String(dateStr).match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : null;
}

export function formatDate(dateStr) {
  if (!dateStr) return null;
  const clean = String(dateStr).replace(/^>/, "");
  const parts = clean.split("-");
  if (parts.length === 3) {
    const y = parts[0];
    const m = String(parts[1]).padStart(2, "0");
    const d = String(parts[2]).padStart(2, "0");
    return `${d}/${m}/${y}`;
  }
  return clean;
}

export function getDaysSinceRelease(dateStr) {
  if (!dateStr) return null;
  const clean = String(dateStr).replace(/^>/, "");
  const time = Date.parse(clean);
  if (Number.isNaN(time)) return null;
  const days = Math.floor((Date.now() - time) / 86_400_000);
  return days >= 0 ? days : 0;
}

// Returns a date's timestamp for sorting, falling back to Jan 1st of its year.
export function getYearFull(dateStr) {
  if (!dateStr) return 0;
  const clean = String(dateStr).replace(/^>/, "");
  const time = Date.parse(clean);
  if (!isNaN(time)) return time;
  const year = getYear(dateStr);
  return year ? Date.parse(year + "-01-01") : 0;
}

// Price can be a flat number, an object of tiers (returns the lowest), or missing.
export function priceValue(price) {
  if (price === 0) return 0;
  if (typeof price === "number") return price;
  if (price && typeof price === "object") {
    const nums = Object.values(price)
      .map((v) => (typeof v === "number" ? v : parseFloat(String(v))))
      .filter((n) => !isNaN(n));
    return nums.length ? Math.min(...nums) : null;
  }
  return null;
}

export function isFree(price) {
  return priceValue(price) === 0;
}

export function isPaid(price) {
  const value = priceValue(price);
  return value !== null && value > 0;
}

export function formatPrice(price) {
  if (price === 0) return { text: "Free", free: true };
  if (typeof price === "number") return { text: "$" + price, free: false };
  if (price && typeof price === "object") {
    const value = priceValue(price);
    return { text: value === 0 ? "Free" : "From $" + value, free: value === 0 };
  }
  return null;
}

// Numeric comparison of version strings like "1.20" vs "1.9".
export function compareVersion(a, b) {
  const partsA = a.split(".").map(Number);
  const partsB = b.split(".").map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const na = partsA[i] || 0;
    const nb = partsB[i] || 0;
    if (na !== nb) return na - nb;
  }
  return 0;
}
