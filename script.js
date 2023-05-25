document.addEventListener('DOMContentLoaded', function() {
    var showMoreButton = document.getElementById('show-more');
    var hiddenSections = document.querySelectorAll('.hidden-section');
    var isExpanded = false;
  
    showMoreButton.addEventListener('click', function() {
      if (isExpanded) {
        // Compress the sections and change button text to "Show More"
        hiddenSections.forEach(function(section) {
          section.style.display = 'none';
        });
        showMoreButton.textContent = 'Show More';
        isExpanded = false;
      } else {
        // Expand the sections and change button text to "Show Less"
        hiddenSections.forEach(function(section) {
          section.style.display = 'block';
        });
        showMoreButton.textContent = 'Show Less';
        isExpanded = true;
      }
    });
  
    // Add click event listeners to navbar items
    var navbarItems = document.querySelectorAll('.meniu a');
    navbarItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        if (!isExpanded) {
          showMoreButton.click(); // Trigger "Show More" button click
          isExpanded = true;
        }
        var targetSectionId = item.getAttribute('href').substring(1); // Get the target section ID
        var targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var calculareRataButton = document.getElementById('calculare-rata');
    var pretMasinaInput = document.getElementById('pret-masina');
    var tipMasinaSelect = document.getElementById('tip-masina');
    var perioadaFinantareSelect = document.getElementById('perioada-finantare');
    var valoareAvansInput = document.getElementById('valoare-avans');
    var rataLunaraContainer = document.getElementById('rata-lunara');
  
    calculareRataButton.addEventListener('click', function() {
      var pretMasina = parseFloat(pretMasinaInput.value);
      var tipMasina = tipMasinaSelect.value;
      var perioadaFinantare = parseInt(perioadaFinantareSelect.value);
      var valoareAvans = parseFloat(valoareAvansInput.value);
  
      // Calculate the monthly installment
      var avans = (valoareAvans / 100) * pretMasina;
      var sumaFinantata = pretMasina - avans;
      var rataLunara = sumaFinantata / perioadaFinantare;
  
      // Display the result
      rataLunaraContainer.textContent = 'Rata lunară: ' + rataLunara.toFixed(2) + ' lei';
    });
  });
  