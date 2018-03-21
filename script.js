function onLoad() {
  const title = document.getElementsByTagName('h3')[0];
  const hungryButton = document.getElementById('hungry');
  const notHungryButton = document.getElementById('not-so-hungry');

  hungryButton.addEventListener('click', hungry, true);
  notHungryButton.addEventListener('click', notHungry, true);

  chrome.storage.sync.get(['demo_lunch_name'], items => {
    if (items.demo_lunch_name) {
      title.innerText += ` Are you hungry, ${items.demo_lunch_name}?`;
    } else {
      title.innerText += ` Are you hungry?`;
    }
  });
}

function hungry() {
  const ul = document.getElementById('snack-list');
  chrome.tabs.query({active: true, lastFocusedWindow: true }, tabs => {
    chrome.tabs.executeScript(null, {file: 'crawler.js'});
    chrome.runtime.onMessage.addListener((data) => {
      if(data.length) {
        data.forEach(element => {
          const li = document.createElement('li');
          li.appendChild(document.createTextNode(element));
          ul.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
          li.appendChild(document.createTextNode('Nothing to eat here...'));
          ul.appendChild(li);
      }
    });
  });
}

function notHungry() {
  chrome.tabs.query({active: true, lastFocusedWindow: true }, tabs => {
    chrome.tabs.insertCSS(null, {file: 'hungry.css'});
  });
}

window.onload = onLoad;