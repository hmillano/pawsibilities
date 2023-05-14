function colorStars() {
  // Clear existing yellow stars
  const stars = document.getElementsByClassName("star");
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("yellow");
  }

  // Generate a random number between 1 and 5 (inclusive)
  const randomCount = Math.floor(Math.random() * 5) + 1;

  // Color the corresponding number of stars yellow
  for (let i = 0; i < randomCount; i++) {
    stars[i].classList.add("yellow");
  }
}
