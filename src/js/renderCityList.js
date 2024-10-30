import changeCity from "./changeCity";
export function renderCityList(el,value) {
    for (let i = 0; i < value.length; i++) {
      if (value.length === 5) {
        value.splice(0, 1);
      }
    }
    el.innerHTML = value.map((el) => `<li>${el}</li>`).join("");
    for (let i = 0; i < el.children.length; i++) {
      el.children[i].addEventListener("click", (e) => {
        e.preventDefault();
        changeCity(el.children[i].textContent);
        
      });
    }
  }