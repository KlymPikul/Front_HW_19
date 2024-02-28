// Выберите одну API из списка. Сделайте fetch запрос, 
// разместите полученную от API информацию на странице html.

// IPify - это бесплатный API, который позволяет получить вам ваш текущий IP-адрес.
// Пример запроса:
// https://api.ipify.org?format=json


newIpAddress = document.querySelector('#ipAddress');

async function ipAdressNow() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;
    newIpAddress.textContent = `Your IP Address is: ${ipAddress}`;
}

ipAdressNow();