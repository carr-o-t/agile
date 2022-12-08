var id;
var title = "";
var desc = "";
var asset = "";
const data = [
  {
    id: 1,
    title: "task heading 1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
    asset: "",
  },
  {
    id: 2,
    title: "task heading 2",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    asset: "https://www.youtube.com/embed/s8H0Sx7jy7c",
  },

  {
    id: 3,
    title: "task heading 3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    asset: "https://media.giphy.com/media/IzjhI7ggjDlEnMxZMu/giphy.gif",
  },
  {
    id: 5,
    title: "task heading 5",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    asset: "https://www.youtube.com/embed/s8H0Sx7jy7c",
  },
  {
    id: 4,
    title: "task heading 4",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    asset: "",
  },
  {
    id: 6,
    title: "task heading 6",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    asset: "",
  },
];

class assetContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
                <div class="asset">
      <div class="asset-container">
        <div class="asset-heading">
          ${title}
        </div>
        ${
          asset !== ""
            ? `<div class="asset-media">
          <embed type="" src=${asset} >
        </div>`
            : ""
        }
        ${
          desc !== ""
            ? `<div class="asset-description">
          <div class="description">
            ${desc}
          </div>
          <div class="read-more">
            <button id="arrow">
              <img class="chevron-down" src="/assets/chevron-down.svg" alt="">
            </button>
          </div>
        </div>`
            : ""
        }
      </div>
    </div>
        `;
    this.querySelector("#arrow").addEventListener("click", () => {
      this.querySelector("#arrow").classList.toggle("active");
      console.log(this.querySelector("#arrow"));
      var description = this.querySelector(".description");
      console.log(description);
      description.classList.toggle("data-expand");
      var isExpand = description.classList.contains("data-expand");
      if (isExpand) {
        this.querySelector(".data-expand").style.height =
          description.scrollHeight + "px";
      } else {
        description.style.height = 116 + "px";
      }
    });
  }
}

data.map((item) => {
  id = item.id;
  title = item.title;
  desc = item.desc;
  asset = item.asset;
  if (!customElements.get("asset-container")) {
    customElements.define("asset-container", assetContainer);
  } else {
    let item = document.createElement("asset-container");
    document.getElementsByClassName("grid-container")[0].appendChild(item);
  }
});

window.onload = () => {
  customElements.define("asset-container", assetContainer);
};

const arrowDown = document.getElementById("arrow");
const hamburger = document.querySelector(".hamburger");

console.log(hamburger);

hamburger.addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".sidebar").classList.toggle("active");
});

arrowDown.addEventListener("click", () => {
  arrowDown.classList.toggle("active");
  var description = document.getElementsByClassName("description");
  description[0].classList.toggle("data-expand");
  var isExpand = description[0].classList.contains("data-expand");
  if (isExpand) {
    document.getElementsByClassName("data-expand")[0].style.height =
      description[0].scrollHeight + "px";
  } else {
    description[0].style.height = 116 + "px";
  }
});
