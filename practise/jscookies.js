document.getElementById("toggleTheme").addEventListener("click", () => {
  const newTheme = document.body.className === "light" ? "dark" : "light";
  document.body.className = newTheme;
  setCookie("theme", newTheme, 7);
});
const savedTheme = getCookie("theme") || "light";
document.body.className = savedTheme;
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}
// console.log(document.cookie);
// console.log((document.cookie = "theme"));
