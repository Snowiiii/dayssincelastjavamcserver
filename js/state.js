import { PROJECTS } from "./data.js";
import { compareVersion } from "./utils.js";

export const PAGE_SIZE = 9;

export const state = {
  search: "",
  author: "",
  version: "",
  language: "Java",
  origin: "",
  category: "",
  status: "",
  price: "",
  dateMin: "",
  dateMax: "",
  sort: "date-desc",
  page: 1,
};

export let ALL_AUTHORS = [];

// Fills the version/language <select> options and author suggestion list
// from the loaded project data, then updates the header stat counters.
export function populateFilters() {
  const versions = new Set();
  const languages = new Set();
  const authors = new Set();

  for (const p of PROJECTS) {
    if (p.version) versions.add(p.version);
    (p.languages || []).forEach((l) => languages.add(l));
    if (p.author) authors.add(p.author);
  }

  const versionSelect = document.getElementById("f-version");
  const sortedVersions = [...versions].filter((v) => v !== "latest").sort(compareVersion);
  if (versions.has("latest")) sortedVersions.push("latest");
  for (const v of sortedVersions) {
    versionSelect.append(new Option(v === "latest" ? "latest / vanilla base" : v, v));
  }

  const langSelect = document.getElementById("f-language");
  for (const l of [...languages].sort()) {
    langSelect.append(new Option(l, l));
  }
  langSelect.value = state.language;

  ALL_AUTHORS = [...authors].sort((a, b) => a.localeCompare(b));

  document.getElementById("stat-total").textContent = PROJECTS.length;
  document.getElementById("stat-forks").textContent = PROJECTS.filter((p) => p.origin === "fork").length;
}
