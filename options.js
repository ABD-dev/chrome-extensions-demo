function onLoad() {
  chrome.storage.sync.get(['demo_lunch_name'], items => {
    if (items.demo_lunch_name) {
      document.getElementById('name').value = items.demo_lunch_name;
    }
  });

  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', save, true);
}

function save() {
  const name = document.getElementById('name').value;
  chrome.storage.sync.set({
    demo_lunch_name: name
  }, () => window.close());
}

window.onload = onLoad;
