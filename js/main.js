import { fetchMenu } from "./api.js";
import { elements, renderCards } from "./ui.js";

//sayfa yüklenince..
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  renderCards(data);

  //category inpularındaki değişim olayı...

  elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;

      if (selected == "all") {
        renderCards(data);
      } else {
        const filtered = data.filter((item) => item.category == selected);
        renderCards(filtered);
      }
    });
  });
});
