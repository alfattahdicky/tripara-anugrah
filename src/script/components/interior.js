class ProductInterior extends HTMLElement {
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
      .product-interior-image {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 10px;
      }
      
      .product-interior-image-card {
        margin: 20px;
        border: 1px solid rgba(0, 0, 0, 0.507);
        border-radius: var(--border-radius);
        transition: all .3s ease-in-out;
      }
      
      .product-interior-image-card:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,.3);
      }

      .product-interior-image-card img {
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
        .product-interior-image {
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
      }
      </style>
      <div class="product-interior-image">
      <div class="product-interior-image-card">
        <img src="./img/sm/backdrop-sm.jpg" alt="Room Backdrop" data-original="./img/lg/backdrop-lg.jpg" loading="lazy">
        <p>Room Backdrop</p>
      </div>
      <div class="product-interior-image-card">
        <img src="./img/sm/resepsionist-sm.jpg" alt="Receptionist Table" data-original="./img/lg/resepsionist-lg.jpg"
        >
        <p>Receptionist Table</p>
      </div>
      <div class="product-interior-image-card">
        <img src="./img/sm/living-room-sm.jpg" alt="Living Room" data-original="./img/lg/living-room-large.jpg"
        >
        <p>Living Room</p>
      </div>
      <div class="product-interior-image-card">
        <img src="./img/sm/workshop-sm.jpg" alt="Workshop" data-original="./img/lg/workshop-large.jpg"
        >
        <p>Workshop</p>
      </div>
      <div class="product-interior-image-card">
        <img src="./img/sm/wardrop-sm.jpg" alt="Wardrobe" data-original="./img/lg/wardrop-lg.jpg">
        <p>Wardrobe</p>
      </div>
      <div class="product-interior-image-card">
        <img src="./img/sm/kitchen-sm.jpg" alt="Kitchen" data-original="./img/lg/kitchen-lg.jpg">
        <p>Kitchen</p>
      </div>
    </div>
    <div class="modal">
      <img src="./img/lg/kitchen-lg.jpg" alt="Beatiful Sea" class="full-img">
      <p class="caption">Hello World</p>
    </div>
    `;
    const images = this.ShadowDOM.querySelectorAll(
      ".product-interior-image-card img"
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

customElements.define("product-interior", ProductInterior);