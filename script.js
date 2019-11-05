$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);




  })

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"My Pet Name", weight=0, happiness=0};

    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness = pet_info.happiness + 1;
      // Increase pet weight
      pet_info.weight = pet_info.weight + 1;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness = pet_info.happiness + 1;
      // Decrease pet weight
      pet_info.weight = pet_info.weight - 1;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness = pet_info.happiness - 1;
      // Decrease pet weight
      pet_info.weight = pet_info.weight - 1;
      checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();
      updatePetInfoInHtml();
    }

    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info.Weight <= 0){
          pet_info.Weight = 0;
          
      }
      if (pet_info.Happiness <= 0){
         pet_info.Happiness = 0;
      }
    }

    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
