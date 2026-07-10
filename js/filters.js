import { PROJECTS } from "./data.js";
import { state } from "./state.js";
import { isFree, isPaid, priceValue, getYearFull } from "./utils.js";

export function applyFilters() {
  const list = PROJECTS.filter((p) => {
    if (state.search && !p.name.toLowerCase().includes(state.search.toLowerCase())) return false;
    if (state.author && (!p.author || !p.author.toLowerCase().includes(state.author.toLowerCase()))) return false;
    if (state.version && p.version !== state.version) return false;
    if (state.language && !(p.languages || []).includes(state.language)) return false;
    if (state.origin && p.origin !== state.origin) return false;
    if (state.category && p.category !== state.category) return false;
    if (state.status && p.status !== state.status) return false;
    if (state.price === "free" && !isFree(p.price)) return false;
    if (state.price === "paid" && !isPaid(p.price)) return false;

    const projectTime = getYearFull(p.date);
    if (state.dateMin) {
      const minTime = Date.parse(state.dateMin);
      if (!projectTime || projectTime < minTime) return false;
    }
    if (state.dateMax) {
      const maxTime = Date.parse(state.dateMax);
      if (!projectTime || projectTime > maxTime) return false;
    }

    return true;
  });

  return sortList(list);
}

export function sortList(list) {
  const arr = [...list];
  switch (state.sort) {
    case "name-asc":
      arr.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      arr.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "date-desc":
      arr.sort((a, b) => getYearFull(b.date) - getYearFull(a.date));
      break;
    case "date-asc":
      arr.sort((a, b) => getYearFull(a.date) - getYearFull(b.date));
      break;
    case "price-asc":
      arr.sort((a, b) => (priceValue(a.price) ?? Infinity) - (priceValue(b.price) ?? Infinity));
      break;
    case "price-desc":
      arr.sort((a, b) => (priceValue(b.price) ?? -Infinity) - (priceValue(a.price) ?? -Infinity));
      break;
  }
  return arr;
}
