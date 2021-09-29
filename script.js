fetch('https://restcountries.com/v2/all')
.then(function(data){
return data.json();
})
.then((data)=>{
    data.forEach(element => {
      
       let can=document.querySelector('.container');
       let div=document.createElement('div')
        div.className="Div1"
       let h1=document.createElement('h1');
       h1.innerText=element.name;
       let img=document.createElement('img')
       img.src=element.flags.svg;
       let capital=document.createElement('p');
       capital.innerText="Capital : "+element.capital;
       let region=document.createElement('p');
       region.innerText="Region : "+element.region;
       let countryCode=document.createElement('p');
       countryCode.innerText="Country Code : "+element.alpha2Code;
       let Latlng=document.createElement('p');
       Latlng.innerText="Latlng : ["+element.latlng+"]";
      div.appendChild(h1);
      div.appendChild(img)
       div.appendChild(capital);
       div.appendChild(region);
       div.appendChild(countryCode);
       div.appendChild(Latlng);
       let btn=`<a href="#myModal" role="button" class="btn btn-lg btn-primary button" data-bs-toggle="modal" onclick='Display-Weather("${element.capital}","${element.name}")'>Click For Weather</a>'
       div.innerHTML= div.innerHTML+btn
       can.appendChild(div);
    });
}
)
.catch()

function Display-Weather(code,name)
{
    
    let Div-Head=document.getElementById('Div-Head');
    Div-Head.innerText='Weather Report of '+name;

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${code}&appid=cdd9d644f9c43076864a476b120ddc44`;
    fetch(url)
    .then(function (data){
        return data.json();
    })
    .then((data)=>{

        let Div-Modal=document.getElementById('modal-body');

        let feels=document.createElement('p');
        let humid=document.createElement('p');
        let pressure=document.createElement('p');        
        let temp=document.createElement('p');        
        let maxtemp=document.createElement('p');        
        let mintemp=document.createElement('p');
        
        let feelsLike=data.main.feels_like;
        feels.innerHTML="Feels like :"+Math.round((feelsLike-273))+"&deg C"
        let humidity=data.main.humidity
        humidity.innerText=" Humidity:"+humidity+"%"
        let pressure=data.main.pressure
        pressure.innerText=" Pressure:"+pressure+" pascal"
        let temp=data.main.temp
        temp.innerHTML=" Temperatrure:"+Math.round((temp-273))+"&deg C"
        let maxtemp=data.main.maxtemp
        maxtemp.innerHTML=" Max Temperature:"+Math.round((maxtemp-273))+"&deg C"
        let mintemp=data.main.mintemp
        mintemp.innerHTML=" Min Temperature:"+Math.round((mintemp-273))+"&deg C"

        Div-Modal.innerText="";
        Div-Modal.appendChild(feels);
        Div-Modal.appendChild(humid);
        Div-Modal.appendChild(pressure);
        Div-Modal.appendChild(temp);
        Div-Modal.appendChild(maxtemp);
        Div-Modal.appendChild(mintemp);

        console.log("Feels like ="+feelsLike+" humidity="+humidity+" Pressure="+pressure+" Temperatrure="+temp+" Max Temperature="+temp_max+" Max Temperature="+temp_min)
    })
   
    .catch()
}

function reset()
{
    let modal-Body=document.getElementById('modal-body');
    modal-Body.innerText="";
}