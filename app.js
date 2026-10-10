"use strict";

const state = { snapshot: null, category: "all", query: "" };
const $ = (selector) => document.querySelector(selector);

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function utc(value, short = false) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "时间未提供";
  const iso = date.toISOString();
  return short ? iso.slice(11, 16) + " UTC" : iso.slice(0, 10) + " " + iso.slice(11, 19);
}
function categoryTag(category) {
  const tag = element("span", "category", category);
  tag.dataset.sector = category;
  return tag;
}
function matches(item) {
  return (state.category === "all" || item.category === state.category) &&
    Object.values(item).filter(value => typeof value === "string").join(" ").toLowerCase().includes(state.query);
}
function newsCard(item) {
  const card = element("article", "news-card");
  const meta = element("div", "news-meta");
  const time = element("time", "", utc(item.published_at, true));
  time.dateTime = item.published_at;
  time.title = utc(item.published_at) + " UTC";
  meta.append(categoryTag(item.category), element("span", "sample-label", "虚构新闻"), time);
  const bottom = element("div", "news-bottom");
  bottom.append(element("span", "", item.source_label), element("span", "", item.id));
  card.append(meta, element("h4", "", item.title), element("p", "", item.summary), bottom);
  return card;
}
function marketCard(item) {
  const card = element("article", "market-card");
  const top = element("div", "market-top");
  const company = element("div", "");
  company.append(element("div", "symbol", item.symbol), element("div", "company", item.name + " · 虚构"));
  const quote = element("div", "quote");
  const negative = item.change_pct < 0;
  quote.append(element("div", "price", item.price.toFixed(2)), element("div", "change" + (negative ? " negative" : ""), (negative ? "" : "+") + item.change_pct.toFixed(2) + "%"));
  top.append(company, quote);
  const bottom = element("div", "market-bottom");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "spark" + (negative ? " negative" : ""));
  svg.setAttribute("viewBox", "0 0 100 26");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "虚构走势，仅作视觉示意");
  const line = document.createElementNS(svg.namespaceURI, "polyline");
  line.setAttribute("points", item.sparkline_points);
  svg.append(line);
  bottom.append(categoryTag(item.category), svg);
  const time = element("time", "market-time", "样本时点 " + utc(item.as_of, true));
  time.dateTime = item.as_of;
  card.append(top, bottom, element("p", "market-observation", item.observation), time);
  return card;
}
function render() {
  if (!state.snapshot) return;
  const news = state.snapshot.news.filter(matches).sort((a, b) => b.published_at.localeCompare(a.published_at));
  const markets = state.snapshot.markets.filter(matches);
  $("#news-list").replaceChildren(...news.map(newsCard));
  $("#market-list").replaceChildren(...markets.map(marketCard));
  if (!news.length) $("#news-list").append(element("p", "empty", "没有匹配的新闻样本，请尝试其他主题或关键词。"));
  if (!markets.length) $("#market-list").append(element("p", "empty", "没有匹配的市场样本。"));
  $("#result-count").textContent = `显示 ${news.length} 条新闻 · ${markets.length} 个市场样本`;
}

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach(other => {
      const active = other === button;
      other.classList.toggle("active", active);
      other.setAttribute("aria-pressed", String(active));
    });
    render();
  });
});
$("#search").addEventListener("input", event => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

async function loadSnapshot() {
  try {
    const response = await fetch("data/snapshot.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Snapshot unavailable");
    const snapshot = await response.json();
    if (snapshot.mode !== "fictional_demo" || !Array.isArray(snapshot.news) || !Array.isArray(snapshot.markets)) throw new Error("Invalid demo snapshot");
    state.snapshot = snapshot;
    $("#snapshot-time").textContent = utc(snapshot.generated_at);
    $("#snapshot-time").dateTime = snapshot.generated_at;
    $("#snapshot-id").textContent = snapshot.snapshot_id;
    $("#news-total").textContent = String(snapshot.news.length).padStart(2, "0");
    $("#market-total").textContent = String(snapshot.markets.length).padStart(2, "0");
    render();
  } catch {
    $("#load-error").hidden = false;
    $("#snapshot-time").textContent = "加载失败";
    $("#result-count").textContent = "快照不可用";
  }
}
loadSnapshot();
