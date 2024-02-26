const progress = document.querySelector("progress")
const zone = document.querySelector('#loading-zone')

const state = {
  val: .1
}
function setProgress() {
  zone.setAttribute("aria-busy", state.val < 1);
  const value = roundDecimals(state.val, 2);
  const valPercent = value * 100 + "%"


  progress.value = value;
  progress.setAttribute('aria-valuenow', valPercent)
  progress.innerText = valPercent;


  progress.focus();

}

setTimeout(() => {
  setProgress()
}, 1000)
setTimeout(() => {
  state.val = .4
  setProgress()
}, 4000)

setTimeout(() => {
  state.val = .8

  setProgress()
}, 8000)

setTimeout(() => {
  state.val = 1;
  setProgress()
}, 10000)


// DEMO EVENTS
window.increase = e => {
  state.val += .2

  if (state.val > 1)
    state.val = 1

  setProgress()
}

window.decrease = e => {
  state.val -= .2

  if (state.val < 0)
    state.val = 0

  setProgress()
}

window.complete = e => {
  state.val = 1
  setProgress()
}

window.reset = e => {
  state.val = .0
  setProgress()
}



function roundDecimals(value, places) {
  return +(Math.round(value + "e+" + places) + "e-" + places)
}
