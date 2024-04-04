import './style.css'
import logo from '/spyder-logo.svg'
import { setupCounter } from './counter.js'
import * as threads from './threads.js'

const homeUrl = 'https://www.spyder-ide.org/'

document.querySelector('#app').innerHTML = `
  <div class="card">
    <a href="${homeUrl}" target="_blank">
      <img src="${logo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

`

setupCounter(document.querySelector('#counter'))
