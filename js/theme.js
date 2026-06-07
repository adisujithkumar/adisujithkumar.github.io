/* theme.js — cycles Light → Dark → Terminal, persists the choice, and lets each
   page declare its own default via <html data-default-theme="...">.
   Shared by every layout; no dependencies. */
(function () {
  var THEMES = ["light", "dark", "terminal"];
  var root = document.documentElement;
  var def = root.getAttribute("data-default-theme") || "light";

  function apply(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) {}
    var labels = document.querySelectorAll("[data-theme-label]");
    for (var i = 0; i < labels.length; i++) labels[i].textContent = t;
  }

  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  apply(THEMES.indexOf(saved) > -1 ? saved : def);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-theme-cycle]") : null;
    if (!btn) return;
    e.preventDefault();
    var i = THEMES.indexOf(root.getAttribute("data-theme"));
    apply(THEMES[(i + 1) % THEMES.length]);
  });
})();
