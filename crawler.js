var tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
var snacks = [];

for(var i = 0; i < tags.length; i++) {
  var heading = document.querySelectorAll(tags[i]);
  heading.forEach(h => {
    snacks.push(h.innerText);
  });
}


chrome.runtime.sendMessage(snacks, null);