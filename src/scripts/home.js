
// Home Page Animations
//let p1_element;
const selectors = [".i p", ".ii p", ".iii p", ".iv p"];
const p_next = {
  ".i p": ".ii p",
  ".ii p": ".iii p",
  ".iii p": ".iv p"
}
const p_prev = {
  ".iv p": ".iii p",
  ".iii p": ".ii p",
  ".ii p": ".i p"
}
const triggered = {};
const complete = {};
const numSteps = 100;
const stepLength = 10;
let thresholds;

window.addEventListener("load", (event) => {
  selectors.forEach(s => createObserver(s));
  thresholds = buildThresholds();
}, false);

function createObserver(selector) {
  let elem = document.querySelector(selector);
  let observer;

  let options = {
    threshold: 1.0
  };

  observer = new IntersectionObserver(handleIntersectFactory(selector), options);
  observer.observe(elem);
}

function buildThresholds() {
  let thresholds = [];

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  return thresholds;
}

function handleIntersectFactory(s) {
  triggered[s] = false;
  complete[s] = false;
  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      let ir = entry.intersectionRatio;
      if ((ir == 1) && (!triggered[s])) {
        triggered[s] = true;
        if (s in p_prev) {
          let p = p_prev[s]
          if (complete[p]) {
            revealElement(s, entry.target);
          };
        } else {
          revealElement(s, entry.target);
        };
      };
    });
  };
  return handleIntersect;
}

function revealElement(s, el) {
  const incrementOpacityAsync = (threshold) => (
    new Promise((resolve) => {
      setTimeout(() => {
        el.style.opacity = threshold;
        resolve();
      }, stepLength);
    })
  );
  const revealPromise = thresholds.reduce(
    (acc, threshold) => acc.then(() => incrementOpacityAsync(threshold)),
    Promise.resolve()
  );
  revealPromise.then(() => {
    complete[s] = true;
    if (s in p_next) {
      const n = p_next[s];
      if (triggered[n]) {
        revealElement(n, document.querySelector(n));
      }
    }
  });
}
