//her bir ürüne tıklandığında her ürünü aynı sayfada ayrı olarak dinamik render etme...

import { fetchMenu } from "./api.js";
import { elements, rederNotFound, renderDetailPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);

const id = parseInt(params.get("id"));

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();

  const product = data.find((item) => item.id === id);

  if (!product) {
    rederNotFound(elements.detailContainer);
  } else {
    renderDetailPage(product, elements.detailContainer);
  }
});
