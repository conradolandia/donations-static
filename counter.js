export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Donate`
  }
  element.addEventListener('click', () => setCounter(counter + 5))
  setCounter(0)
}
