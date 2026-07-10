import { PROJECTS } from "./data.js";
import { state, ALL_AUTHORS, populateFilters } from "./state.js";
import { render } from "./render.js";
import { closeTree } from "./tree.js";
import { createAutocomplete } from "./autocomplete.js";

function bind(id, key, event = "input") {
  document.getElementById(id).addEventListener(event, (e) => {
    state[key] = e.target.value;
    state.page = 1;
    render();
  });
}

function bindEvents() {
  const searchInput = document.getElementById("f-name");
  const searchAutocomplete = createAutocomplete({
    input: searchInput,
    hideWhenEmpty: true,
    limit: 10,
    getMatches: (filterText) => {
      const names = PROJECTS
        .filter((p) => p.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((p) => p.name);
      return [...new Set(names)].sort((a, b) => a.localeCompare(b));
    },
    onSelect: (name) => {
      state.search = name;
      state.page = 1;
      render();
    },
  });
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    state.page = 1;
    render();
  });

  const authorInput = document.getElementById("f-author");
  const authorAutocomplete = createAutocomplete({
    input: authorInput,
    getMatches: (filterText) => ALL_AUTHORS.filter((author) => author.toLowerCase().includes(filterText.toLowerCase())),
    onSelect: (author) => {
      state.author = author;
      state.page = 1;
      render();
    },
  });
  authorInput.addEventListener("input", (e) => {
    state.author = e.target.value;
    state.page = 1;
    render();
  });

  document.addEventListener("click", (e) => {
    if (!authorAutocomplete.wrapper.contains(e.target)) authorAutocomplete.hide();
    if (!searchAutocomplete.wrapper.contains(e.target)) searchAutocomplete.hide();
  });

  bind("f-version", "version", "change");
  bind("f-language", "language", "change");
  bind("f-origin", "origin", "change");
  bind("f-category", "category", "change");
  bind("f-status", "status", "change");
  bind("f-price", "price", "change");
  bind("f-date-min", "dateMin", "change");
  bind("f-date-max", "dateMax", "change");

  const sortSelect = document.getElementById("f-sort");
  sortSelect.value = state.sort;
  sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    Object.assign(state, {
      search: "",
      author: "",
      version: "",
      language: "",
      origin: "",
      category: "",
      status: "",
      price: "",
      dateMin: "",
      dateMax: "",
      sort: "date-desc",
      page: 1,
    });
    document.getElementById("filter-form").reset();
    document.getElementById("f-sort").value = "date-desc";
    authorAutocomplete.hide();
    searchAutocomplete.hide();
    render();
  });

  document.getElementById("tree-close").addEventListener("click", closeTree);
  document.getElementById("tree-modal").addEventListener("click", (e) => {
    if (e.target.id === "tree-modal") closeTree();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeTree();
      authorAutocomplete.hide();
      searchAutocomplete.hide();
    }
  });
}

populateFilters();
bindEvents();
render();
