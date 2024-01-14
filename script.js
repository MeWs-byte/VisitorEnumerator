function getVisitorInfo() {
   
 var info = {

   userAgent: navigator.userAgent,
   browserLanguage: navigator.language,
       platform: navigator.platform,
       screenWidth: window.screen.width,
       screenHeight: window.screen.height,
       colorDepth: window.screen.colorDepth,
       pixelDepth: window.screen.pixelDepth,
       
     
       cookies: navigator.cookieEnabled,
       java: navigator.javaEnabled() ? 'Yes' : 'No',
       online: navigator.onLine ? 'Online' : 'Offline',
       timezoneOffset: new Date().getTimezoneOffset(),
       referrerURL: document.referrer,
       browserInnerWidth: window.innerWidth,
       browserInnerHeight: window.innerHeight,
       browserOuterWidth: window.outerWidth,
       browserOuterHeight: window.outerHeight,
       Memory: navigator.deviceMemory || 'Not Available',
       concurrency: navigator.hardwareConcurrency || 'Not Available',
       connection: navigator.connection ? navigator.connection.effectiveType : 'Not Available',
       touchPoints: navigator.maxTouchPoints || 'Not Available',
       battery: (navigator.battery && navigator.battery.charging) ? 'Charging' : 'Not Charging',
        orientation: window.screen.orientation ? window.screen.orientation.type : 'Not Available',
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
   
   for (var key in info) {
       infoBox.innerHTML += '<p><b>' + key + ':</b> ' + JSON.stringify(info[key]) + '</p>';
   }
}

displayVisitorInfo();
// document.getElementById('infoButton').addEventListener('click', displayVisitorInfo);
