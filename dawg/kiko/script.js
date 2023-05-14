$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});
function displayDate() {
  const selectedDate = document.getElementById("selectedDate").value;
  const displayedDate = document.getElementById("displayedDate");

  displayedDate.innerHTML = selectedDate;
}
