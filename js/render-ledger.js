/* render-ledger.js — builds the Ledger DOM from DATA. */
(function () {
  var d = DATA;
  function tags(t) {
    return '<div class="tags">' + (t || []).map(function (x) {
      return '<span class="tag">' + x + "</span>";
    }).join("") + "</div>";
  }
  function links(ls, suffix) {
    return (ls || []).map(function (l) {
      return '<a href="' + l.url + '">' + l.label + (suffix || "") + "</a>";
    }).join(' <span class="sep">·</span> ');
  }

  byId("name").textContent = d.profile.name;
  byId("links").innerHTML = links(d.profile.links);

  byId("exp").innerHTML = d.experience.map(function (e) {
    return '<details class="row"><summary>' +
      '<span class="org">' + e.org + "</span>" +
      '<span class="role">' + e.role + "</span>" +
      '<span class="yr">' + e.year + "</span>" +
      '<span class="plus">+</span></summary>' +
      '<div class="detail"><p>' + e.detail + "</p>" + tags(e.tags) + "</div></details>";
  }).join("");

  byId("edu").innerHTML =
    '<div class="edu"><span class="org">' + d.education.org + "</span>" +
    '<span class="role">' + d.education.detail + "</span></div>";

  var live = d.projects.filter(function (p) { return p.status === "live"; });
  var soon = d.projects.filter(function (p) { return p.status === "soon"; });

  var html = live.map(function (p) {
    var sec = p.secondary
      ? '<img class="hero" style="margin-top:.7rem" src="' + p.secondary + '" alt="">' +
        '<p class="cap">' + (p.secondaryCaption || "") + "</p>"
      : "";
    return '<div class="proj">' +
      '<img class="hero" src="' + p.hero + '" alt="' + p.title + '">' +
      '<p class="cap">' + (p.heroCaption || "") + "</p>" +
      "<h3>" + p.title + "</h3>" +
      '<p class="blurb">' + p.blurb + "</p>" +
      '<div class="links">' + links(p.links, " ↗") + "</div>" +
      '<details class="more"><summary>more</summary>' +
        "<p>" + p.detail + "</p>" + sec + tags(p.tags) +
      "</details></div>";
  }).join("");

  html += soon.map(function (p) {
    return '<div class="soon"><span class="t">' + p.title + "</span>" +
      '<span class="b">' + p.blurb + "</span>" +
      '<span class="badge">soon</span></div>';
  }).join("");

  byId("projects").innerHTML = html;

  function byId(id) { return document.getElementById(id); }
})();
