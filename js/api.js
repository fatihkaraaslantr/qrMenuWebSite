//appi veri çekme..
const fetchMenu = async () => {
  const res = await fetch("../db.json");
  const data = await res.json();
  return data.menu;
};

export { fetchMenu };
