// Rolls the copyright years forward so the footers never need a yearly edit.
//
// The markup carries a real year as its text, so a visitor with JavaScript
// disabled still sees a correct notice and this only ever replaces it with a
// fresher one. Nothing here is load-bearing.
//
// Deliberately NOT dynamic: the privacy policy's "Effective" and "Last updated"
// dates. Those must change only when the policy actually changes. A date that
// advances on its own claims an update that never happened and takes away the
// reader's only way to tell whether the terms moved since they last read them.

(function () {
  var year = String(new Date().getFullYear());
  var nodes = document.querySelectorAll("[data-current-year]");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].textContent = year;
  }
})();
