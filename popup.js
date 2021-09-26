buttonReplace.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replaceHashsToAlias,
  });
});

function replaceHashsToAlias() {
  chrome.storage.sync.get("hashs", ({ hashs }) => {
    var regex = /^0x[A-Fa-f0-9]{40,64}$/;

    let span_elements = document.querySelectorAll("span");
    for (let elem of span_elements) {
      if (regex.test(elem.innerHTML) && hashs[elem.innerHTML]) {
        let hash = hashs[elem.innerHTML];
        elem.innerHTML =
          '<span style="color:' + hash.color + '">' + hash.name + "</span>";
      }
    }

    let a_elements = document.querySelectorAll("a");
    for (let elem of a_elements) {
      if (regex.test(elem.innerHTML) && hashs[elem.innerHTML]) {
        let hash = hashs[elem.innerHTML];
        elem.innerHTML =
          '<span style="color:' + hash.color + '">' + hash.name + "</span>";
      }
    }
    console.log(hashs);
  });
}

function constructHashs() {
  chrome.storage.sync.get("hashs", ({ hashs }) => {
    let ul = document.getElementsByClassName("app-content__alias-list");
    for (let hash in hashs) {
      let li_item = document.createElement("li");
      li_item.innerHTML = `${hashs[hash].name}[${hash.substring(
        0,
        10
      )}]: <span style="color:${hashs[hash].color};">${
        hashs[hash].color
      }</span>`;
      ul[0].appendChild(li_item);
    }
  });
}
constructHashs();
