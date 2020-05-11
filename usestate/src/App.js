import React, { useState } from 'react';
const api = {
  key: "00e191444f8db177744da31dfc1ae87e",
  url: "https://api.openweathermap.org/data/2.5/",
}

function App() {
  const dateBuilder = (d) => {
    // d = new Date() which enable us to use todays date
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    // days[Sun-Sat] depending on the day
    let date = d.getDate();
    // this gets the day that we are in
    let month = months[d.getMonth()];
    // fetched the month 
    let year = d.getFullYear();
    // fetched the year
    
    return `${day} ${date} ${month} ${year}`
  }
  
  return (
    <div className="app">
     <main>
       <div className="search-box">
         <input
         type="text"
         className="search-bar"
         placeholder="Search..."
         />
         <div className="location-box">
           <div className="location">New York City, US</div>
            <div className="date">{dateBuilder(new Date())}</div>
         </div>
       </div>
     </main>
    </div>
  );
}

export default App;
