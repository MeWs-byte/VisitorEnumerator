function getVisitorInfo() {
   
 var info = {
       screenWidth: window.screen.width,
       screenHeight: window.screen.height,
       colorDepth: window.screen.colorDepth,
       pixelDepth: window.screen.pixelDepth,
       userAgent: navigator.userAgent,
       browserLanguage: navigator.language,
       platform: navigator.platform,
       cookiesEnabled: navigator.cookieEnabled,
       javaEnabled: navigator.javaEnabled() ? 'Yes' : 'No',
       onlineStatus: navigator.onLine ? 'Online' : 'Offline',
       timezoneOffset: new Date().getTimezoneOffset(),
       currentURL: window.location.href,
       referrerURL: document.referrer,
       browserInnerWidth: window.innerWidth,
       browserInnerHeight: window.innerHeight,
       browserOuterWidth: window.outerWidth,
       browserOuterHeight: window.outerHeight,
       deviceMemory: navigator.deviceMemory || 'Not Available',
       hardwareConcurrency: navigator.hardwareConcurrency || 'Not Available',
       connectionType: navigator.connection ? navigator.connection.effectiveType : 'Not Available',
       touchPoints: navigator.maxTouchPoints || 'Not Available',
       batteryCharging: (navigator.battery && navigator.battery.charging) ? 'Charging' : 'Not Charging',
        screenOrientation: window.screen.orientation ? window.screen.orientation.type : 'Not Available',
        usedJSHeapSize: performance.memory ? performance.memory.usedJSHeapSize : 'Not Available',
        totalJSHeapSize: performance.memory ? performance.memory.totalJSHeapSize : 'Not Available',
        networkDownlink: navigator.connection ? navigator.connection.downlink : 'Not Available'
   };

   

   return info;
}

async function displayVisitorInfo() {
   var info = await getVisitorInfo();
   updateDisplay(info);
}

function updateDisplay(info) {
   var infoBox = document.getElementById('infoBox');
   infoBox.innerHTML = '<h2>Your Information:</h2>';
   for (var key in info) {
       infoBox.innerHTML += '<p><b>' + key + ':</b> ' + JSON.stringify(info[key]) + '</p>';
   }
}

displayVisitorInfo();
// document.getElementById('infoButton').addEventListener('click', displayVisitorInfo);
