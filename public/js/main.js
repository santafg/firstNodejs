const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById("submitBtn");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
var cors = require('cors');
const dataHide = document.querySelector(".middle_layer");
app.use(cors());




const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please Write the city name before search";
        dataHide.classList.add('data_hide'); 
    } else {
        try {   
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=db32c57d21c418692ebe9d5fff9ebee0`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`; 
            temp.innerText = arrData[0].main.temp;
            dataHide.classList.remove('data_hide'); 
        } catch (error) {
            city_name.innerText = "Please Write the city name properly"; 
            dataHide.classList.add('data_hide'); 
            
        }

    }
  };
submitBtn.addEventListener("click", getInfo);
