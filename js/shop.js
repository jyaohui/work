window.onload = () => {};

function getlist() {
  let http = new XMLHttpRequest();
  http.open("get", "./shop.json");
  http.send();
  http.onreadystatechange = () => {
    let arr = JSON.parse(http.responseText).list;
    let text = `
    <div class="ll">
      <img src="assets/w1.webp" alt="" />
      <span style="color: #fff">${arr[0].name}</span>
    </div>
    <div class="ll" style="margin: 0 10px">
      <img src="assets/w2.webp" alt="" />
      <span style="color: #fff">${arr[1].name}</span>
    </div>
    <div class="ll">
      <img src="assets/w3.webp" alt="" />
      <span style="color: #fff">${arr[2].name}</span>
    </div>
    `;
    let el = document.querySelector(".mainshop");
    el.innerHTML = text;
  };
}
