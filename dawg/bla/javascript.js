$(document).ready(function () {
    function getRandomDogName(gender) {
        const maleNames = [
            "Max",
            "Charlie",
            "Cooper",
            "Rocky",
            "Duke",
            "Oliver",
            "Zeus",
            "Buddy",
            "Winston",
            "Jack",
          ];
        
          const femaleNames = [
            "Bella",
            "Daisy",
            "Luna",
            "Sadie",
            "Molly",
            "Sophie",
            "Chloe",
            "Bailey",
            "Lily",
            "Zoey",
          ];
          if (gender === "female") return femaleNames[Math.floor(Math.random() * femaleNames.length)];
          else return maleNames[Math.floor(Math.random() * maleNames.length)];
        }
    function fetchRandomDogImage(breedName) {
        if(breedName != "")
        $.get(`https://dog.ceo/api/breed/${breedName}/images/random`, function (data) {
          $("#dog-image").attr("src", data.message);
        });
        else $.get(`https://dog.ceo/api/breeds/image/random`, function (data) {
            $("#dog-image").attr("src", data.message);
          });
      }
    fetchRandomDogImage(document.getElementById("dog-breeds").value);
    document.getElementById("dogName").textContent = getRandomDogName(document.getElementById("dog-gender").value);
    document.getElementById('Age').textContent = "Age: " + (Math.floor(Math.random() * 10) + 1);
    $(".like-button, .dislike-button").on('click', function () {
        fetchRandomDogImage(document.getElementById("dog-breeds").value);
        document.getElementById("dogName").textContent = getRandomDogName(document.getElementById("dog-gender").value);
        document.getElementById('Age').textContent = "Age: " + (Math.floor(Math.random() * 10) + 1);
      });
  });