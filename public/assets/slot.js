/* The one idea: a single sticky line whose value changes as you move through
   the work. Same mechanism as the reference site's scroll-bound year counter,
   rebuilt on a vertical axis so it costs the reader nothing to learn.

   Deliberately small and dependency-free. If this file fails to load, every
   project still states who uses it in its own markup (see .who in styles.css)
   and the page reads correctly — the continuity is the only thing lost. */

(function () {
  'use strict';

  var rails = document.querySelector('.rails');
  var railValue = document.getElementById('railSlotValue');
  var slot = document.querySelector('.slot');
  var value = document.getElementById('slotValue');
  var projects = Array.prototype.slice.call(
    document.querySelectorAll('.project[data-who]')
  );

  if (!slot || !value || !projects.length || !('IntersectionObserver' in window)) {
    return; // leave the no-JS arrangement in place
  }

  slot.hidden = false;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var current = '';
  var timer = null;

  function set(who) {
    if (!who || who === current) return;
    current = who;

    if (reduced.matches) {
      value.textContent = who;
      if (railValue) railValue.textContent = who;
      return;
    }

    window.clearTimeout(timer);
    value.classList.add('is-changing');
    if (railValue) railValue.classList.add('is-changing');
    timer = window.setTimeout(function () {
      value.textContent = who;
      value.classList.remove('is-changing');
      if (railValue) {
        railValue.textContent = who;
        railValue.classList.remove('is-changing');
      }
    }, 180);
  }

  /* Track how much of each project is on screen and show whichever is winning.
     Comparing ratios rather than reacting to each crossing keeps the value
     stable when two sections are visible at once, and when scrolling upward. */
  var ratios = new WeakMap();

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
    });

    var best = null;
    var bestRatio = 0;

    projects.forEach(function (p) {
      var r = ratios.get(p) || 0;
      if (r > bestRatio) { bestRatio = r; best = p; }
    });

    if (best) {
      slot.classList.remove('is-idle');
      set(best.getAttribute('data-who'));
    } else {
      /* Scrolled above the work or past it — say nothing rather than leaving
         the last project's audience sitting there, which would be untrue. */
      slot.classList.add('is-idle');
    }
  }, {
    threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    rootMargin: '-15% 0px -25% 0px'
  });

  projects.forEach(function (p) { observer.observe(p); });

  set(projects[0].getAttribute('data-who'));

  /* ---- the rails ----
     The name travels out of the header to the left edge and holds there while
     the work scrolls past; the contacts do the same on the right; both fade
     out once the page ends. Wide screens only — below that there is no empty
     margin to park in, and the layout is left alone. */

  if (!rails) return;

  var wide = window.matchMedia('(min-width: 80rem)');
  var headEnd = document.getElementById('headEnd');
  var tail = document.querySelector('footer');
  if (!headEnd || !tail) return;

  var headerGone = false;
  var atEnd = false;

  function apply() {
    if (!wide.matches) { rails.classList.remove('is-on'); return; }
    rails.classList.toggle('is-on', headerGone && !atEnd);
  }

  /* The rails arrive once the header's end is into the top of the viewport,
     not once it has fully cleared it — otherwise the first project sits on
     screen with no audience line while the bar is already hidden. */
  new IntersectionObserver(function (es) {
    var e = es[0];
    headerGone = !e.isIntersecting &&
                 e.boundingClientRect.top < window.innerHeight * 0.5;
    apply();
  }, { threshold: 0, rootMargin: '-18% 0px 0px 0px' }).observe(headEnd);

  new IntersectionObserver(function (es) {
    atEnd = es[0].isIntersecting;
    apply();
  }, { threshold: 0 }).observe(tail);

  function sizeChanged() {
    document.documentElement.classList.toggle('has-rails', wide.matches);
    apply();
  }
  wide.addEventListener ? wide.addEventListener('change', sizeChanged)
                        : wide.addListener(sizeChanged);
  sizeChanged();
}());
