/* console-boot.js — boot + typing animation as progressive enhancement.
   Content is visible by default; this only hides rows it also reveals, with a
   safety timeout and a click/keydown skip. Plays once per tab session —
   append ?replay (or #replay) to force it again. Respects reduced-motion. */
(function () {
  var seq = document.getElementById("seq");
  if (!seq) return;

  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var force = /replay/.test(location.search + location.hash);
  var booted = false;
  try { booted = sessionStorage.getItem("booted") === "1"; } catch (e) {}
  if (reduce || (booted && !force)) return; // leave everything visible

  var rows = Array.prototype.slice.call(seq.querySelectorAll(".seqrow"));
  if (!rows.length) return;

  var boot = [
    "Last login: just now on ttys001",
    "[ok] mounting /home/adi",
    "[ok] loading experience.md",
    "[ok] loading projects/"
  ];
  var bootWrap = document.createElement("div");
  bootWrap.className = "bootblock";
  seq.insertBefore(bootWrap, seq.firstChild);

  rows.forEach(function (el) { el.classList.add("pending"); });

  var timers = [], done = false;
  function at(ms, fn) { timers.push(setTimeout(function () { if (!done) fn(); }, ms)); }
  function finish() {
    if (done) return; done = true;
    timers.forEach(clearTimeout); timers = [];
    bootWrap.innerHTML = boot.map(function (b) { return '<div class="bootline">' + b + "</div>"; }).join("");
    rows.forEach(function (el) {
      if (el.hasAttribute("data-cmd")) el.textContent = el.getAttribute("data-cmd");
      el.classList.remove("pending");
      el.classList.add("show");
    });
    try { sessionStorage.setItem("booted", "1"); } catch (e) {}
  }

  at(6000, finish); // safety net — never leave content hidden
  document.addEventListener("click", finish, { once: true });
  document.addEventListener("keydown", finish, { once: true });

  var t = 0;
  boot.forEach(function (b) {
    at(t, function () {
      var line = document.createElement("div");
      line.className = "bootline"; line.textContent = b;
      bootWrap.appendChild(line);
    });
    t += 150;
  });
  t += 220;

  rows.forEach(function (el) {
    if (el.hasAttribute("data-cmd")) {
      var text = el.getAttribute("data-cmd");
      at(t, function () { el.classList.remove("pending"); el.classList.add("show"); el.textContent = ""; });
      for (var i = 0; i < text.length; i++) {
        (function (n) { at(t + 24 + n * 26, function () { el.textContent = text.slice(0, n + 1); }); })(i);
      }
      t += 24 + text.length * 26 + 170;
    } else {
      at(t, function () { el.classList.remove("pending"); el.classList.add("show"); });
      t += 210;
    }
  });
  at(t + 50, function () { done = true; try { sessionStorage.setItem("booted", "1"); } catch (e) {} });
})();
