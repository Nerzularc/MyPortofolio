/* Portfolio interactions — vanilla JS, no external APIs, works on GitHub Pages and from file://. */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */
  const toggle = $(".nav-toggle"), nav = $(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  /* ---------- hero: raw → structured ---------- */
  const tf = $(".transform");
  if (tf) {
    const btns = $$(".switch button", tf);
    const show = (mode, animate) => {
      tf.classList.toggle("is-raw", mode === "raw");
      btns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
      if (mode === "structured" && animate && !reduce) {
        const rows = $$(".structured tr", tf);
        tf.classList.add("animating");
        requestAnimationFrame(() => requestAnimationFrame(() => {
          rows.forEach((r, i) => { r.style.transitionDelay = (i * 70) + "ms"; });
          tf.classList.remove("animating");
        }));
      }
    };
    btns.forEach(b => b.addEventListener("click", () => show(b.dataset.mode, true)));
    // single orchestrated moment on load: show raw briefly, then structure it
    if (!reduce) { show("raw"); setTimeout(() => show("structured", true), 1400); } else show("structured");
  }

  /* ---------- case-study TOC highlight ---------- */
  const tocLinks = $$(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    const map = new Map(tocLinks.map(a => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { tocLinks.forEach(a => a.classList.remove("active")); const a = map.get(e.target.id); if (a) a.classList.add("active"); }
    }), { rootMargin: "-30% 0px -60% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- tooltip ---------- */
  let tip;
  function tooltip(html, x, y) {
    if (!tip) { tip = document.createElement("div"); tip.className = "tooltip"; tip.setAttribute("role", "status"); document.body.appendChild(tip); }
    if (html == null) { tip.classList.remove("show"); return; }
    tip.innerHTML = html; tip.classList.add("show");
    const w = tip.offsetWidth; tip.style.left = Math.min(x + 14, innerWidth - w - 8) + "px"; tip.style.top = (y + 14) + "px";
  }

  /* ---------- bar chart (single series, values labelled) ---------- */
  window.barChart = function (el, items, opts = {}) {
    if (!el) return;
    const fmt = opts.format || (v => v.toLocaleString("en-US"));
    const max = opts.max || Math.max(...items.map(d => d.value)) || 1;
    el.classList.add("chart");
    el.innerHTML = (opts.title ? `<div class="chart-title">${opts.title}</div>` : "") + items.map(d =>
      `<div class="bar-row" tabindex="0" data-tip="${(d.tip || d.label + ": " + fmt(d.value)).replace(/"/g, "&quot;")}">
         <span class="lbl" title="${d.label}">${d.label}</span>
         <span class="bar-track"><span class="bar${d.alt ? " alt" : ""}" style="width:${(d.value / max * 100).toFixed(1)}%"></span></span>
         <span class="val">${fmt(d.value)}</span></div>`).join("") + (opts.note ? `<p class="small muted" style="margin-top:.6rem">${opts.note}</p>` : "");
    $$(".bar-row", el).forEach(r => {
      r.addEventListener("mousemove", e => tooltip(r.dataset.tip, e.clientX, e.clientY));
      r.addEventListener("mouseleave", () => tooltip(null));
      r.addEventListener("focus", () => { const b = r.getBoundingClientRect(); tooltip(r.dataset.tip, b.left + 170, b.top); });
      r.addEventListener("blur", () => tooltip(null));
    });
  };

  /* ---------- sortable, filterable, paged data table ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  window.dataTable = function (el, rows, cols, opts = {}) {
    if (!el || !rows) return;
    const state = { q: "", filters: {}, sort: opts.sort || null, dir: opts.dir || 1, page: 0 };
    const size = opts.pageSize || 25;
    const filterDefs = (opts.filters || []).map(k => ({ k, vals: [...new Set(rows.map(r => r[k]))].sort() }));
    el.innerHTML = `
      <div class="table-tools">
        <label><span class="sr-only" style="position:absolute;left:-9999px">Search</span><input type="search" placeholder="Search this table" aria-label="Search this table"></label>
        ${filterDefs.map(f => `<select data-k="${f.k}" aria-label="Filter by ${esc(cols.find(c => c.k === f.k)?.label || f.k)}"><option value="">All ${esc((cols.find(c => c.k === f.k)?.label || f.k).toLowerCase())}</option>${f.vals.map(v => `<option>${esc(v)}</option>`).join("")}</select>`).join("")}
        <span class="count" aria-live="polite"></span>
      </div>
      <div class="table-scroll" tabindex="0" role="region" aria-label="${esc(opts.label || "Data table")}"><table class="data"><thead><tr>${cols.map(c => `<th scope="col" data-k="${c.k}" tabindex="0">${esc(c.label)}</th>`).join("")}</tr></thead><tbody></tbody></table></div>
      <div class="pager"><button type="button" data-p="-1">Previous</button><span class="pg"></span><button type="button" data-p="1">Next</button></div>`;
    const tbody = $("tbody", el), count = $(".count", el), pg = $(".pg", el);
    function view() {
      let v = rows.filter(r => Object.entries(state.filters).every(([k, val]) => !val || String(r[k]) === val));
      if (state.q) { const q = state.q.toLowerCase(); v = v.filter(r => cols.some(c => String(r[c.k] ?? "").toLowerCase().includes(q))); }
      if (state.sort) v = v.slice().sort((a, b) => { const x = a[state.sort], y = b[state.sort]; return (typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y))) * state.dir; });
      return v;
    }
    function render() {
      const v = view(), pages = Math.max(1, Math.ceil(v.length / size));
      state.page = Math.min(state.page, pages - 1);
      const slice = v.slice(state.page * size, state.page * size + size);
      tbody.innerHTML = slice.map(r => `<tr>${cols.map(c => {
        const raw = r[c.k], html = c.render ? c.render(raw, r) : esc(raw);
        return `<td class="${c.num ? "num" : ""}${c.wrap ? " wrap-cell" : ""}">${html}</td>`;
      }).join("")}</tr>`).join("") || `<tr><td colspan="${cols.length}">No rows match. Clear the search or filters to see all ${rows.length} records.</td></tr>`;
      count.textContent = `${v.length} of ${rows.length} records`;
      pg.textContent = `Page ${state.page + 1} of ${pages}`;
      $$(".pager button", el).forEach(b => b.disabled = (b.dataset.p === "-1" ? state.page === 0 : state.page >= pages - 1));
      $$("th", el).forEach(th => th.setAttribute("aria-sort", th.dataset.k === state.sort ? (state.dir > 0 ? "ascending" : "descending") : "none"));
      if (opts.onRender) opts.onRender(v);
    }
    $("input", el).addEventListener("input", e => { state.q = e.target.value; state.page = 0; render(); });
    $$("select", el).forEach(s => s.addEventListener("change", e => { state.filters[s.dataset.k] = e.target.value; state.page = 0; render(); }));
    $$("th", el).forEach(th => { const go = () => { state.dir = state.sort === th.dataset.k ? -state.dir : 1; state.sort = th.dataset.k; render(); }; th.addEventListener("click", go); th.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }); });
    $$(".pager button", el).forEach(b => b.addEventListener("click", () => { state.page += Number(b.dataset.p); render(); }));
    render();
  };

  window.statusChip = s => {
    const c = /Tier A/.test(s) ? "st-a" : /Tier B/.test(s) ? "st-b" : /Nurture/.test(s) ? "st-n" : "st-d";
    return `<span class="st ${c}">${esc(s)}</span>`;
  };
  window.countBy = (rows, k) => rows.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {});
  window.esc = esc;

  /* footer year */
  $$("[data-year]").forEach(e => e.textContent = new Date().getFullYear());
})();
