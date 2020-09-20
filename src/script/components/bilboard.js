class ProductBillboard extends HTMLElement {
  constructor() {
    super();
    this.ShadowDOM = this.attachShadow({
      mode: "open",
    });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.ShadowDOM.innerHTML = `
      <style>
      .product-billboard-image {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 10px;
      }
      
      .product-billboard-image-card {
        margin: 20px;
        border: 1px solid rgba(0, 0, 0, 0.507);
        border-radius: var(--border-radius);
        transition: all .3s ease-in-out;
      }
      
      .product-billboard-image-card:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,.3);
      }

      .product-billboard-image-card img {
        border-radius: 5px 5px 0 0;
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: center;
        cursor: zoom-in;
      }
      
      .modal {
        background-color: rgba(0, 0, 0, 0.698);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: all .3s ease-out;
      }
      
      .modal.open {
        pointer-events: all;
        opacity: 1;
      }
      
      .modal .full-img {
        position: absolute;
        height: 70vmin;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .modal .caption {
        position: absolute;
        left: 50%;
        bottom: 5%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        color: #fff;
      }
      @media (min-width: 768px) {
        .product-billboard-image {
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
      }
      </style>
      <div class="product-billboard-image">
      <div class="product-billboard-image-card">
        <img src="./img/sm/geometri-sm.jpg" alt="Geometri" data-original="./img/lg/geometri-lg.jpg" loading="lazy">
        <p>Geometri</p>
      </div>
      <div class="product-billboard-image-card">
        <img src="./img/sm/led-sm.jpg" alt="LED Billboard" data-original="./img/lg/led-lg.jpg"
          loading="lazy">
        <p>LED Billboard</p>
      </div>
      <div class="product-billboard-image-card">
        <img src="./img/sm/neon-sm.jpg" alt="Neon Box" data-original="./img/lg/neon-lg.jpg"
          loading="lazy">
        <p>Neon Box</p>
      </div>
      <div class="product-billboard-image-card">
        <img src="./img/sm/neon-sign-sm.jpg" alt="Neon Sign" data-original="./img/lg/neon-sign-lg.jpg"
          loading="lazy">
        <p>Neon Sign</p>
      </div>
      <div class="product-billboard-image-card">
        <img src="./img/sm/neon-two-sm.jpg" alt="Neon Box" data-original="./img/lg/neon-two-lg.jpg" loading="lazy">
        <p>Neon Box</p>
      </div>
      <div class="product-billboard-image-card">
        <img src="./img/sm/led-billboard-two-sm.jpg" alt="LED Billboard" data-original="./img/lg/led-billboard-two-lg.jpg" loading="lazy">
        <p>LED Billboard</p>
      </div>
    </div>
    <div class="modal">
      <img src="./img/lg/kitchen-lg.jpg" alt="Beatiful Sea" class="full-img" loading="lazy">
      <p class="caption">Hello World</p>
    </div>
    `;
    const images = this.ShadowDOM.querySelectorAll(
      ".product-billboard-image-card img"
    );
    const fullImage = this.ShadowDOM.querySelector(".full-img");
    const modal = this.ShadowDOM.querySelector(".modal");
    const caption = this.ShadowDOM.querySelector(".caption");

    images.forEach((image) => {
      image.addEventListener("click", () => {
        modal.classList.add("open");
        const attr = image.getAttribute("data-original");
        fullImage.src = attr;
        const text = image.alt;
        caption.textContent = text;
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        modal.style.cursor = 'zoom-out';
      }
    });
  }
}

customElements.define("product-billboard", ProductBillboard);