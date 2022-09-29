const btn = document.querySelector("#search-btn");
const input = document.querySelector("#ip_adress");
const map =document.querySelector(".map")


const ipp = document.querySelector("#current_ip");
const town = document.querySelector("#current_town");
const zone = document.querySelector("#current_zone");
const ısp = document.querySelector("#current_Isp");




const getIp = async ()=>{
const url = `https://geo.ipify.org/api/v2/country?apiKey=at_eFWbOEoIwMNa36i36Q8uhdp5RH5Nl&ipAddress=`+input.value;


try{
const res = await fetch(url);

if(!res.ok){
    alert("ikazzzzz!!!!")
    throw new Error("ikazz")
}
//? ****data'yı çektik
const data = await res.json()
console.log(data)
const {
  ip,
  location: { timezone },
  location: { region },
  location: { country },
  isp,
} = data;

ipp.innerHTML = `${ip}`;
town.innerHTML = `${country},${region}`;
zone.innerHTML = `UTC${timezone}`;
ısp.innerHTML =`${isp}`


}
catch(err){
    console.log(err)
}


}
// getIp();
btn.addEventListener("click",(e)=>{
console.log(e.target)
   e.preventDefault()
   getIp()

})

// https://geo.ipify.org/api/v2/country,city?apiKey=at_eFWbOEoIwMNa36i36Q8uhdp5RH5Nl&ipAddress=8.8.8.8