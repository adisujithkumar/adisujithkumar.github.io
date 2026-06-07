/* render-console.js — builds the Console DOM from the same DATA. */
(function () {
  var d = DATA;
  var SHOW_HEROES = false; // text-only projects. Flip to true to bring back hero images.

  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
  function linkline(ls) {
    return (ls || []).map(function (l) {
      return '<a href="' + l.url + '">' + (l.short || l.label.toLowerCase()) + "</a>";
    }).join(" · ");
  }
  function tagline(t) {
    return '<div class="tags">' + (t || []).map(function (x) { return '<span class="tag">' + x + "</span>"; }).join("") + "</div>";
  }

  byId("who").textContent = d.profile.name;
  byId("clinks").innerHTML = linkline(d.profile.links);

  byId("cexp").innerHTML = d.experience.map(function (e) {
    return '<details class="crow"><summary>' +
      '<span class="mark"></span>' +
      '<span class="k">' + slug(e.org) + "</span>" +
      '<span class="lead"></span>' +
      '<span class="v">' + e.role.toLowerCase() + " · " + e.year + "</span></summary>" +
      '<div class="detail"><span class="txt">' + e.detail + "</span></div></details>";
  }).join("") +
  '<div class="comment">edu: ' + d.education.detail.toLowerCase() + "</div>";

  var live = d.projects.filter(function (p) { return p.status === "live"; });
  var soon = d.projects.filter(function (p) { return p.status === "soon"; });

  var html;
  if (SHOW_HEROES) {
    html = '<div class="pgrid">' + live.map(function (p) {
      return '<div class="pcard">' +
        '<img class="hero" src="' + p.hero + '" alt="' + p.title + '">' +
        '<div class="t">' + p.title + "</div>" +
        '<div class="b">' + p.blurb + "</div>" +
        '<div class="links">' + linkline(p.links) + "</div></div>";
    }).join("") + "</div>";
  } else {
    html = live.map(function (p) {
      return '<div class="prow">' +
        '<div class="pname">' + p.title + "</div>" +
        '<div class="pblurb">' + p.blurb + "</div>" +
        '<div class="plink">' + linkline(p.links) + "</div>" +
        '<details class="pmore"><summary>more</summary>' +
          '<div class="txt">' + p.detail + "</div>" + tagline(p.tags) +
        "</details></div>";
    }).join("");
  }

  html += soon.length
    ? '<div class="comment">coming soon — ' + soon.map(function (p) { return slug(p.title); }).join(" · ") + "</div>"
    : "";

  byId("cproj").innerHTML = html;

  function byId(id) { return document.getElementById(id); }
})();
