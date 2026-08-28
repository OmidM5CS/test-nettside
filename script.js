// DAG/NATT-MODUS

const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  const isDark =
    document.documentElement.style.colorScheme === "dark" ||
    (document.documentElement.style.colorScheme !== "light" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.style.colorScheme = isDark ? "light" : "dark";
});

// DAG/NATT-MODUS

// POENGTELLER

let counterDisplayElem = document.querySelector(".counter-display");
let counterMinusElem = document.querySelector(".counter-minus");
let counterPlusElem = document.querySelector(".counter-plus");

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
  count++;
  updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}

// POENGTELLER
