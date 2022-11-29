import React from "react";

export default function Contact(props) {
  console.log(props)
  return (

    <div className="App">
      
      <div className="App-header1">
        <img src="https://pngimg.com/uploads/cat/cat_PNG50438.png" alt="cat2" height="160"/>

        <h3>{props.name}</h3>

        <div className="App-header11">
          <img src="https://th.bing.com/th/id/R.e75b3f3be26600e5d1c1f914c069cc26?rik=6RWCyr9HcQC%2fnA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdtafalonso%2fandroid-lollipop%2f64%2fPhone-icon.png&ehk=h5pr14lXEcDKrgw%2bSkZdzY%2fNbtZP5XzeXQVEPDmVOA4%3d&risl=&pid=ImgRaw&r=0" alt="tel" height="20"></img>
          <p>{props.phone}</p>
          <img src="https://icon-library.com/images/small-email-icon-png/small-email-icon-png-7.jpg" alt="mail" height="40"></img>
          <p>{props.email}</p>
        </div>
  
      </div>

      <div className="App-header2">
        <img src="https://pngimg.com/uploads/cat/cat_PNG50438.png" alt="cat2" height="160"/>

        <h3>{props.name}</h3>
        
        <img src="https://th.bing.com/th/id/R.e75b3f3be26600e5d1c1f914c069cc26?rik=6RWCyr9HcQC%2fnA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdtafalonso%2fandroid-lollipop%2f64%2fPhone-icon.png&ehk=h5pr14lXEcDKrgw%2bSkZdzY%2fNbtZP5XzeXQVEPDmVOA4%3d&risl=&pid=ImgRaw&r=0" alt="tel"  height="20"></img>
        <p>{props.phone}</p>
        <img src="https://icon-library.com/images/small-email-icon-png/small-email-icon-png-7.jpg" alt="mail" height="40"></img>
        <p>{props.email}</p>
      </div>

    </div>

  )
};