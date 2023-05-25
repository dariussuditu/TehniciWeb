document.addEventListener('DOMContentLoaded', function() {
    var cautaButton = document.getElementById('btn');
    
    cautaButton.addEventListener('click', function() {
      var urele = "https://www.olx.ro/auto-masini-moto-ambarcatiuni/autoturisme";
      window.location.href = urele;
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var showMoreButton = document.getElementById('show-more');
    var hiddenSections = document.querySelectorAll('.hidden-section');
    var isExpanded = false;
  
    showMoreButton.addEventListener('click', function() {
      if (isExpanded) {
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

 
      
    var navbarItems = document.querySelectorAll('.meniu a');
    navbarItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        if (!isExpanded) {
          showMoreButton.click(); 
          isExpanded = true;
        }
        var targetSectionId = item.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
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
  
      var avans = (valoareAvans / 100) * pretMasina;
      var sumaFinantata = pretMasina - avans;
      var rataLunara = sumaFinantata / perioadaFinantare;
  
      var delay = 2000; 
      var intervalId = setInterval(function() {
      
        rataLunaraContainer.textContent = 'Calculating...';
  
        clearInterval(intervalId);
        setTimeout(function() {
          rataLunaraContainer.textContent = 'Rata lunară: ' + rataLunara.toFixed(2) + ' euro';
        }, delay);
      }, delay);
    });
  });
  

  
  

  document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', function() {
        var marca = document.getElementById('marca').value;
    
        var pretDeLaSelect = document.getElementById('pret-de-la');
        var pretDeLa = pretDeLaSelect.value;
        if (pretDeLa === '') {
          pretDeLa = document.getElementById('pret-de-la-custom').value;
        }
        
        var pretPanaLaSelect = document.getElementById('pret-pana-la');
        var pretPanaLa = pretPanaLaSelect.value;
        if (pretPanaLa === '') {
          pretPanaLa = document.getElementById('pret-pana-la-custom').value;
        }
        
        var anFabricatieDeLaSelect = document.getElementById('an-fabricatie-de-la');
        var anFabricatieDeLa = anFabricatieDeLaSelect.value;
        if (anFabricatieDeLa === '') {
          anFabricatieDeLa = document.getElementById('an-fabricatie-de-la-custom').value;
        }
        
        var anFabricatiePanaLaSelect = document.getElementById('an-fabricatie-pana-la');
        var anFabricatiePanaLa = anFabricatiePanaLaSelect.value;
        if (anFabricatiePanaLa === '') {
          anFabricatiePanaLa = document.getElementById('an-fabricatie-pana-la-custom').value;
        }
        
        var combustibil = document.getElementById('combustibil').value;
        
        var kmDeLaSelect = document.getElementById('km-de-la');
        var kmDeLa = kmDeLaSelect.value;
        if (kmDeLa === '') {
          kmDeLa = document.getElementById('km-de-la-custom').value;
        }
        
        var kmPanaLaSelect = document.getElementById('km-pana-la');
        var kmPanaLa = kmPanaLaSelect.value;
        if (kmPanaLa === '') {
          kmPanaLa = document.getElementById('km-pana-la-custom').value;
        }
        
        marca = marca.toLowerCase();
        combustibil = combustibil.toLowerCase();

      if(combustibil=='BENZINA')
        {
            combustibil='petrol';
        }
      var searchUrl = `https://www.olx.ro/auto-masini-moto-ambarcatiuni/autoturisme/${marca}/?currency=EUR&search%5Bfilter_float_price:from%5D=${pretDeLa}&search%5Bfilter_float_price:to%5D=${pretPanaLa}&search%5Bfilter_float_year:from%5D=${anFabricatieDeLa}&search%5Bfilter_float_year:to%5D=${anFabricatiePanaLa}&search%5Bfilter_enum_petrol%5D%5B0%5D=${combustibil}&search%5Bfilter_float_rulaj_pana:from%5D=${kmDeLa}&search%5Bfilter_float_rulaj_pana:to%5D=${kmPanaLa}`;
      
      window.location.href = searchUrl;
    });
  });
  
