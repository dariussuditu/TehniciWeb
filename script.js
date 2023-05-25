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

      if(combustibil=='benzina')
        {
            combustibil='petrol';
        }
      var searchUrl = `https://www.olx.ro/auto-masini-moto-ambarcatiuni/autoturisme/${marca}/?currency=EUR&search%5Bfilter_float_price:from%5D=${pretDeLa}&search%5Bfilter_float_price:to%5D=${pretPanaLa}&search%5Bfilter_float_year:from%5D=${anFabricatieDeLa}&search%5Bfilter_float_year:to%5D=${anFabricatiePanaLa}&search%5Bfilter_enum_petrol%5D%5B0%5D=${combustibil}&search%5Bfilter_float_rulaj_pana:from%5D=${kmDeLa}&search%5Bfilter_float_rulaj_pana:to%5D=${kmPanaLa}`;
      
      window.location.href = searchUrl;
    });
  });
  

  window.onload = function () {
    var titlu = document.getElementsByClassName("c1");
    for (let t of titlu) {
      t.style.color = "blue";
    }
    
    function randInt(a, b) {
      return Math.trunc(a + (b - a) * Math.random());
    }
    
    var modele = [
      "1 Series",
      "2 Series",
      "3 Series",
      "4 Series",
      "5 Series",
      "6 Series",
      "7 Series",
      "8 Series",
      "X1",
      "X2",
      "X3",
      "X4",
      "X5",
      "X6",
      "X7",
      "Z4",
      "i3",
      "i4",
      "i8",
      "M2",
      "M3",
      "M4",
      "M5",
      "M8",
    ];
    
    function pret_promotional() {
      var pret = [];
      pret.push(randInt(10000, 25000));
      return pret;
    }
    
    function pret_nepromotional() {
      var pret = [];
      pret.push(randInt(30000, 50000));
      return pret;
    }
    
    function modeleRandom() {
      return {
        Model: modele[randInt(0, modele.length)].toUpperCase(),
        "Pret promotional (euro)": pret_promotional(),
        "Pret nepromotional (euro)": pret_nepromotional(),
      };
    }
    
    function genereazaOferte(n) {
      var oferte = [];
      for (let i = 0; i < n; i++) {
        var text = modeleRandom();
        oferte.push(text);
      }
      return oferte;
    }
    
    function creeazaRand(tipCelula, vector) {
      var tr = document.createElement("tr");
      for (var x of vector) {
        var celula = document.createElement(tipCelula);
        celula.innerHTML = x;
        tr.appendChild(celula);
      }
      return tr;
    }
    
    function creeazaTabel(oferte) {
      if (!oferte || oferte.length == 0) return;
    
      var tabel = document.createElement("table");
      tabel.id = "tab";
      var thead = document.createElement("thead");
      tabel.appendChild(thead);
      var rand = creeazaRand("th", Object.keys(oferte[0]));
      thead.appendChild(rand);
    
      var tbody = document.createElement("tbody");
      tabel.appendChild(tbody);
      for (let v of oferte) {
        rand = creeazaRand("td", Object.values(v));
        tbody.appendChild(rand);
      }
      return tabel;
    }
    
    const myTime = setInterval(Hei, 3000);
    
    function Hei() {
      document.getElementById("p1").innerHTML =
        "Nu rata ofertele noastre speciale!";
    }
    
    function colorare(culoare, ob) {
      ob.style.color = culoare;
    }
    
    var v = genereazaOferte(10);
    document.getElementById("Tabel").appendChild(creeazaTabel(v));
    
    document.getElementById("buton1").onclick = function (e) {
      var linii = document.getElementsByTagName("tr");
      var maxim = -1;
      var pozitie = -1;
      for (let i = 1; i < linii.length; i++) {
        var numar = linii[i].childNodes[2].innerHTML;
        if (parseInt(numar) > maxim) {
          maxim = parseInt(numar);
          pozitie = i;
        }
      }
      localStorage.setItem("model_sters", linii[pozitie].innerHTML);
      linii[pozitie].parentNode.removeChild(linii[pozitie]);
      var text = "";
      for (let i = 4; i < localStorage.getItem("model_sters", linii[pozitie].innerHTML).length; i++)
        if (localStorage.getItem("model_sters", linii[pozitie].innerHTML)[i] != "<") {
          text += localStorage.getItem("model_sters", linii[pozitie].innerHTML)[i];
        } else {
          break;
        }
      alert(
        "Sigur doresti sa stergi: " +
          text +
          "\n" +
          "event target: " +
          e.target.id
      );
    };
    
    document.getElementById("buton2").onclick = function (e) {
      var linii = document.getElementsByTagName("tr");
      var numar = randInt(1, linii.length);
      for (let i = 1; i < linii.length; i++) {
        if (i == numar) {
          linii[i].style.background = "pink";
          linii[i].style.fontWeight = "bold";
          break;
        }
      }
      alert(
        "Sigur doresti sa selectezi?" +
          "\n" +
          "Event currentTarget: " +
          e.currentTarget.id +
          "\n" +
          "Caracteristici dupa apasarea butonului: " +
          window.getComputedStyle(linii[numar]).getPropertyValue("background")
      );
    };
    
    
    var pl = document.getElementsByTagName("button");
    for (var i = 0; i < pl.length; i++) {
      setTimeout(colorare, 3500 * (i + 1), "red", pl[i]);
    }
    
    var form = document.getElementById('myForm');
    form.addEventListener('submit', validateForm);
  };
  
  function validateForm(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\.com$/;
    var phonePattern = /^07\d{8}$/;
  
    if (!name.match(namePattern)) {
      alert('Please enter a valid name');
      return false;
    }
  
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    if (!phone.match(phonePattern)) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }
  
    alert('Form submitted successfully');
    return true;
  }
  
  
