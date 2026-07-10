import { state, PAGE_SIZE } from "./state.js";
import { applyFilters } from "./filters.js";
import { hasForks, countDescendants } from "./data.js";
import { formatDate, getDaysSinceRelease, formatPrice, STATUS_LABELS } from "./utils.js";
import { openTree } from "./tree.js";

export function render() {
  const all = applyFilters();
  const total = all.length;
  document.getElementById("result-count").textContent = total;

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (state.page > totalPages) state.page = totalPages;
  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = all.slice(start, start + PAGE_SIZE);

  renderCards(pageItems);
  renderPagination(totalPages);
}

function renderCards(items) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No projects match these filters.";
    container.append(empty);
    return;
  }

  for (const p of items) {
    container.append(buildCard(p));
  }
}

function buildCard(p) {
  const card = document.createElement("article");
  card.className = "card";

  const top = document.createElement("div");
  top.className = "card-top";

  const titleWrap = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "card-title";
  if (p.url) {
    const a = document.createElement("a");
    a.href = p.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = p.name;
    title.append(a);
  } else {
    title.textContent = p.name;
  }
  titleWrap.append(title);

  if (p.author) {
    const author = document.createElement("p");
    author.className = "card-author";
    author.textContent = "by " + p.author;
    titleWrap.append(author);
  }
  top.append(titleWrap);

  const priceInfo = formatPrice(p.price);
  if (priceInfo) {
    const tag = document.createElement("span");
    tag.className = "price-tag " + (priceInfo.free ? "price-free" : "price-paid");
    tag.textContent = priceInfo.text;
    top.append(tag);
  }
  card.append(top);

  const badges = document.createElement("div");
  badges.className = "badges";

  if (p.version) {
    const v = document.createElement("span");
    v.className = "badge version";
    v.textContent = p.version;
    badges.append(v);
  }

  const origin = document.createElement("span");
  origin.className = "badge origin-" + p.origin;
  origin.textContent = p.origin === "fork" ? "Fork" : "From scratch";
  badges.append(origin);

  for (const lang of p.languages || []) {
    const l = document.createElement("span");
    l.className = "badge lang";
    l.textContent = lang;
    badges.append(l);
  }

  if (p.status) {
    const s = document.createElement("span");
    s.className = "badge";
    const dot = document.createElement("span");
    dot.className = "status-dot status-" + p.status;
    s.append(dot, document.createTextNode(STATUS_LABELS[p.status] || p.status));
    badges.append(s);
  }
  card.append(badges);

  const meta = document.createElement("div");
  meta.className = "meta-list";

  if (p.origin === "fork" && p.basedOn) {
    meta.append(metaRow("Based on", p.basedOn));
  }
  const date = formatDate(p.date);
  if (date) {
    meta.append(metaRow("Date", date));
    const daysSince = getDaysSinceRelease(p.date);
    if (daysSince !== null) {
      meta.append(metaRow("Days since release", daysSince));
    }
  }
  meta.append(metaRow("Category", p.category === "proxy" ? "Proxy" : "Server"));
  meta.append(metaRow("Version", p.version || "N/A"));

  if (meta.children.length) card.append(meta);

  const actions = document.createElement("div");
  actions.className = "card-actions";

  if (p.url) {
    const visit = document.createElement("a");
    visit.className = "btn btn-primary";
    visit.href = p.url;
    visit.target = "_blank";
    visit.rel = "noopener noreferrer";
    visit.textContent = "Visit";
    actions.append(visit);
  }

  if (hasForks(p.name)) {
    const forksBtn = document.createElement("button");
    forksBtn.className = "btn";
    forksBtn.type = "button";
    const count = countDescendants(p.name);
    forksBtn.textContent = `View forks (${count})`;
    forksBtn.addEventListener("click", () => openTree(p.name));
    actions.append(forksBtn);
  }

  if (actions.children.length) card.append(actions);

  return card;
}

function metaRow(key, value) {
  const row = document.createElement("div");
  row.className = "row";
  const k = document.createElement("span");
  k.className = "k";
  k.textContent = key;
  const v = document.createElement("span");
  v.className = "v";
  v.textContent = value;
  row.append(k, v);
  return row;
}

function renderPagination(totalPages) {
  const nav = document.getElementById("pagination");
  nav.innerHTML = "";
  if (totalPages <= 1) return;

  const makeBtn = (label, page, opts = {}) => {
    const b = document.createElement("button");
    b.textContent = label;
    if (opts.active) b.classList.add("active");
    if (opts.disabled) b.disabled = true;
    b.addEventListener("click", () => {
      state.page = page;
      render();
      nav.scrollIntoView();
    });
    return b;
  };

  nav.append(makeBtn("‹", state.page - 1, { disabled: state.page === 1 }));

  const pages = pageRange(state.page, totalPages);
  for (const p of pages) {
    if (p === "...") {
      const span = document.createElement("span");
      span.className = "ellipsis";
      span.textContent = "…";
      nav.append(span);
    } else {
      nav.append(makeBtn(String(p), p, { active: p === state.page }));
    }
  }

  nav.append(makeBtn("›", state.page + 1, { disabled: state.page === totalPages }));
}

// Builds a compact page-number sequence like [1, "...", 4, 5, 6, "...", 12].
function pageRange(current, total) {
  const delta = 1;
  const range = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);
  if (left > 2) range.push("...");
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push("...");
  if (total > 1) range.push(total);
  return range;
}
