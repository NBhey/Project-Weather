// Сохраняет список
export function saveList(items) {
    localStorage.setItem("list", JSON.stringify(items));
  }
  
  // Должна возвращать список пользователя если пользователь
  //  ничего не вводил - пустой список
  export async function readList() {
    const data = localStorage.getItem("list");
    if (data === null) return [];
    return JSON.parse(data);
  }