/* theme.js — cycles Light → Dark → Terminal within a visit. Every load starts at
   the page's own default (<html data-default-theme="...">), so the terminal look
   is always the first thing a visitor sees; a toggle lasts the visit and is
   deliberately not persisted. Shared by every layout; no dependencies. */
(function () {
  var THEMES = ["light", "dark", "terminal"];
  var root = document.documentElement;
  var def = root.getAttribute("data-default-theme") || "light";

  function apply(t) {
    root.setAttribute("data-theme", t);
    var labels = document.querySelectorAll("[data-theme-label]");
    for (var i = 0; i < labels.length; i++) labels[i].textContent = t;
  }

  // Clear the key older versions saved, so a stale pick stops shadowing the default.
  try { localStorage.removeItem("theme"); } catch (e) {}

  apply(def);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-theme-cycle]") : null;
    if (!btn) return;
    e.preventDefault();
    var i = THEMES.indexOf(root.getAttribute("data-theme"));
    apply(THEMES[(i + 1) % THEMES.length]);
  });
})();
