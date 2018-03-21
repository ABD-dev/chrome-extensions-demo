function onLoad() {
  const title = document.getElementsByTagName('h3')[0];
  chrome.storage.sync.get(['demo_lunch_name'], items => {
    if (items.demo_lunch_name) {
      title.innerText += ` Are you hungry, ${items.demo_lunch_name}?`;
    } else {
      title.innerText += ` Are you hungry?`;
    }
  });
}

window.onload = onLoad;