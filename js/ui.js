const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("#buttons input"),
  detailContainer: document.querySelector("#outlet"),
};

//ürünleri anasayfada render etme..
const renderCards = (data) => {
  const cardsHTML = data
    .map(
      (item) => `
  <a href="/detail.html?id=${
    item.id
  }" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3" id="card">
        <img
          class="rounded img-fluid shadow"
          src="${item.img}"
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 20).toFixed(2)}₺</p>
          </div>
          <p class="lead">
          ${item.desc}
          </p>
        </div>
      </a>  
  `
    )
    .join("");

  elements.menuList.innerHTML = cardsHTML;
};

//ürünleri detayda render etme...

const renderDetailPage = (product, outlet) => {
  console.log(product);

  outlet.innerHTML = `
     <!-- top -->
      <div class="d-flex justify-content-between fs-6">
        <a href="/index.html">
          <img src="./images/home.png" alt="" width="35px" />
        </a>
        <p>anasayfa / ${product.category} / ${product.title}</p>
      </div>

      <!--  content -->
      <h1 class="text-center my-4">${product.title}</h1>
      <img
        class="rounded object-fit-cover shadow"
        style="max-height: 400px"
        src="${product.img}"
        alt=""
      />
      <h4 class="mt-4">
        ürünün kategorisi: <span class="text-success">${product.category}</span>
      </h4>
      <h4 class="mt-4">
        ürünün fiyatı: <span class="text-success">${(
          product.price * 20
        ).toFixed(2)}₺</span>
      </h4>
      <p class="lead">${product.desc}</p>`;
};

//aranılan parametrede ürün yoksa ekrana uyarı render etme..
const rederNotFound = (outlet) => {
  outlet.innerHTML = `
   
  <!-- From Uiverse.io by Praashoo7 --> 
<div class="main_wrapper">
  <div class="main">
    <div class="antenna">
      <div class="antenna_shadow"></div>
      <div class="a1"></div>
      <div class="a1d"></div>
      <div class="a2"></div>
      <div class="a2d"></div>
      <div class="a_base"></div>
    </div>
    <div class="tv">
      <div class="cruve">
        <svg
          class="curve_svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 189.929 189.929"
          xml:space="preserve"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div class="display_div">
        <div class="screen_out">
          <div class="screen_out1">
            <div class="screen">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
            <div class="screenM">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="buttons_div">
        <div class="b1"><div></div></div>
        <div class="b2"></div>
        <div class="speakers">
          <div class="g1">
            <div class="g11"></div>
            <div class="g12"></div>
            <div class="g13"></div>
          </div>
          <div class="g"></div>
          <div class="g"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="base1"></div>
      <div class="base2"></div>
      <div class="base3"></div>
    </div>
     <a href="/" class="not-founded-link" >ana sayfaya git</a>
  </div>
  <div class="text_404">
    <div class="text_4041">4</div>
    <div class="text_4042">0</div>
    <div class="text_4043">4</div>
  </div>
</div>
  `;
};

export { renderCards, elements, renderDetailPage, rederNotFound };
