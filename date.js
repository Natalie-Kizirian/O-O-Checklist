window.addEventListener("load", getCurrentDate);

function getCurrentDate() {
  let div = document.querySelector("#cdate");

  let d = new Date();

  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let mday = d.getDate();
  if (mday < 10) mday = "0" + mday;
  if (month < 10) month = "0" + month;
  div.textContent = `${mday}-${month}-${year}`;
  window.addEventListener("load", getCurrentDate);
}
