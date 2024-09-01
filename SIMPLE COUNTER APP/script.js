document.addEventListener("DOMContentLoaded", () => {
  //   Select elements
  const counterValue = document.getElementById("counter-value");
  const increaseBtn = document.getElementById("increase-btn");
  const decreaseBtn = document.getElementById("decrease-btn");
  const resetBtn = document.getElementById("reset-btn");

  //   Global value
  let count = 0;

  //   add events to the buttons
  increaseBtn.addEventListener("click", () => {
    count++;
    // update the counter value
    // counterValue.textContent = count;
    updatecounter();
  });
  decreaseBtn.addEventListener("click", () => {
    count--;
    // update the counter value
    // counterValue.textContent = count;
    updatecounter();
  });
  resetBtn.addEventListener("click", () => {
    count = 0;
    // update the counter value
    // counterValue.textContent = count;
    updatecounter();
  });
  // update counter fn
  function updatecounter() {
    counterValue.textContent = count;
  }
});
