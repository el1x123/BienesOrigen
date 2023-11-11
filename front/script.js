var jsonData;

//Consumiendo api para obtener las viviendas desde base de datos.
const apiUrlHouseholds = "http://localhost:1000/api/Households";
fetch(apiUrlHouseholds)
.then(response => response.json())
.then((data) => {
  console.log(data);
  MapearDatos(data);
  jsonData = data;
})

//Función para mostrar los datos del api de viviendas en el html.
function MapearDatos(data) {
  const cardContainer = document.getElementById('card-container');

  //Ciclo for para pintar cada vivienda
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'col-3 card border-info p-0 m-2';
    const imageSrc = (item.housingType === 'apartamento') ? 'https://cdn-icons-png.flaticon.com/512/1908/1908059.png' : 'https://img.freepik.com/vector-gratis/hermosa-casa_24877-50819.jpg';
    card.innerHTML = `
        <div class="col-12 d-flex m-0 my-4 justify-content-center"> <img width="250" height="150" src="${imageSrc}" alt=""></div>
        <div class="card-body">
            <p class="card-text m-0">${item.housingType} en ${item.housingStatus == true ? "venta" : "arriendo"}</p>
            <p class="card-text m-0">$${item.price}cop</p>
            <p class="card-text m-0">${item.area}m² • ${item.bedrooms}ha. • ${item.bathrooms}ba. • ${item.parking}pa.</p>
            <p class="card-text m-0">${item.city} • ${item.neighborhood} • Estrato ${item.stratum}</p>                
        </div>
        <div class="card-footer bg-transparent border-info">
          <p class="card-text m-0">Contacto: +57 399 999 9999</p>
        </div>
    `;
    cardContainer.appendChild(card);
  });
}

//Función para buscar vivienda por ciudad y tipo(arriendo o venta)
function filterData() {
  const citySelect = document.getElementById('citySelect');
  const statusSelect = document.getElementById('statusSelect');
  const sinData = document.getElementById('sinData');
  const cardContainer = document.getElementById('card-container');
  const selectedCity = citySelect.value;
  const selectedStatus = statusSelect.value;

  // Eliminar los resultados anteriores
  cardContainer.innerHTML = '';
  sinData.innerHTML = '';

  //Filtrar la data
  const filteredItems = jsonData.filter(item => {
    const cityMatch = selectedCity == "" || item.city === selectedCity;
    const statusMatch = selectedStatus == "" || (item.housingStatus == true && selectedStatus == "venta") || (item.housingStatus == false && selectedStatus == "arriendo");
    return cityMatch && statusMatch;
  });

  //Si no se encuentran viviendas se muestra el sigueinte mensaje
  if (filteredItems.length === 0) {
      sinData.innerHTML = '<p class="noData">No se encontraron resultados, por favor intenta otra combinación</p>';
  }

   //Mostras las viviendas encontradas en el html
  else {

      //Ciclo for para pintar cada vivienda
      filteredItems.forEach(item => {
        card = document.createElement('div');
        card.className = 'col-3 card border-info p-0 m-2';
        const imageSrc = (item.housingType === 'apartamento') ? 'https://cdn-icons-png.flaticon.com/512/1908/1908059.png' : 'https://img.freepik.com/vector-gratis/hermosa-casa_24877-50819.jpg';
        card.innerHTML = `
            <div class="col-12 d-flex m-0 my-4 justify-content-center"> <img width="250" height="150" src="${imageSrc}" alt=""></div>
            <div class="card-body">
                <p class="card-text m-0">${item.housingType} en ${item.housingStatus == true ? "venta" : "arriendo"}</p>
                <p class="card-text m-0">$${item.price}cop</p>
                <p class="card-text m-0">${item.area}m² • ${item.bedrooms}ha. • ${item.bathrooms}ba. • ${item.parking}pa.</p>
                <p class="card-text m-0">${item.city} • ${item.neighborhood} • Estrato ${item.stratum}</p>                
            </div>
            <div class="card-footer bg-transparent border-info">
              <p class="card-text m-0">Contacto: +57 399 999 9999</p>
            </div>
        `;
        cardContainer.appendChild(card);
      });
  }
}

//Login del usuario.
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginButton = document.getElementById("loginButton");
  const userDisplay = document.getElementById("userDisplay");
  const buttonSession = document.getElementById("buttonSession");
  
  loginButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe por defecto

      // Obtener los valores ingresados en los campos
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Api para validar si un usuario existe en la base de datos
      const apiUrl = "http://localhost:1000/api/User/ValidateUser?user="+username+"&pass="+password+"";
      fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        if(data == true){
          userDisplay.textContent = "Bienvenido: " + username;
          buttonSession.style.display = "none";
        }
      })

      // Restablecer los campos del formulario
      loginForm.reset();
  });
});