const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
}
function printf(e) {
    e.preventDefault()
    let weather = document.getElementById("weather")
    let data = ``;
    let input = document.getElementById("input").value.trim().toUpperCase()
    let warning=document.getElementById("warning")
    let check = false;
    for (let i in weatherData) {
        if (i.toUpperCase().includes(input)) {
            let juan = weatherData[i]
            data += `<div style="width: 700px; height: 300px; background-color: white; border-radius: 10px; display: flex; flex-direction: column;">
                <h2 style="margin-top: 30px;margin-left: 30px; font-weight:900; font-size: 40px;">${i}</h2>
                <div style="display: flex; margin-left: 30px; align-items: center; gap: 20px;">
                    <div style="font-size: 120px;">${juan.icon}</div>
                    <div style="font-size: 80px; font-weight: 600;">${juan.temperature}°C</div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="font-size: 30px;">${juan.description}</div>
                        <div style="font-size: 30px;">Độ ẩm: ${juan.humidity}%</div>
                        <div style="font-size: 30px;">Tốc Độ gió: ${juan.windSpeed}km/h</div>
                    </div>
                </div>
            </div>`
            check=true;
            warning.innerText=""
        }
    }
    if(check===false){
        warning.innerText="không có thành phố bạn tìm"
    }
    weather.innerHTML = data


}