async function fetchGeoLocation() {
    // Fetch the geolocation data
    const response = await fetch('https://reallyfreegeoip.org/json/');
    const geoData = await response.json();

    // Display the location information
    displayLocationInfo(geoData);
}

function displayLocationInfo(geoData) {
    const thirdInfoBox = document.getElementById('thirdInfoBox');
    thirdInfoBox.innerHTML = `
    <p>IP Address: ${geoData.ip}</p>
    <p>Country Code: ${geoData.country_code}</p>
    <p>Country Name: ${geoData.country_name}</p>
    <p>Region Code: ${geoData.region_code}</p>
    <p>Region Name: ${geoData.region_name}</p>
    <p>City: ${geoData.city}</p>
    <p>Zip Code: ${geoData.zip_code}</p>
    <p>Time Zone: ${geoData.time_zone}</p>
    <p>Latitude: ${geoData.latitude}</p>
    <p>Longitude: ${geoData.longitude}</p>
    <p>Metro Code: ${geoData.metro_code}</p>
        `;
        }
        
        // Adding an event listener to trigger the function
        document.addEventListener('DOMContentLoaded', fetchGeoLocation);
