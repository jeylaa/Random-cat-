const img = document.querySelector("img");
function fetchImg() {
  const res = fetch("https://api.thecatapi.com/v1/images/search");
  res
    .then(function (response) {
      return response.json();
    })
    .then(function (el) {
      renderImg(el);
    });
}

function renderImg(el) {
  el.forEach(function (list) {
    img.src = list.url;
    img.height = 300;
    img.width = 400;
  });
}

const button = document.querySelector("button");
button.onclick = fetchImg;
