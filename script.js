let count = document.getElementById("count");
let sales = document.getElementById("sales");
let earnings = document.getElementById("earnings");

fetch(
  "https://script.google.com/macros/s/AKfycbwer7YqkBVBVV4gfeQUKvqwSVDyVNLjIe1oRQXEY2sKEN3LfpYZcvotxw/exec"
)
  .then((data) => data.json())
  .then((res) => {
    let { total_number, total_amount, total_earning } = res.data;
    count.innerHTML = total_number;
    sales.innerHTML = total_amount + " BDT";
    earnings.innerHTML = total_earning + " BDT";
  });
