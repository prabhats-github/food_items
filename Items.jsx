import React from 'react';
import './items.css';
import img1 from './img/pizza.jpg'
import img2 from './img/chowmeen.jpg'
import img3 from './img/momoz.jpg'
import img4 from './img/pav.jpg'
// import img5 from './img/paties.png'
import img6 from './img/paties.png'
// import img7 from './img/pizza.jpg'
import img8 from './img/bhelpuri.webp'
import img9 from './img/frenchfries.jpg'
import img10 from './img/pasta1.jpg'
// import img11 from './img/.jpg'
import img12 from './img/chole.jpg'

export const Items = () => {
  return (
    <div id='maindiv'>
      <div id="d1">
        <h1>Foods to Eat If You're Always Hungry &#128523;</h1>
        <h1>Favourite Fast Food Items Are Here  ↓ ↓ ↓... </h1>
       
        <ul>
        <li class="k"><a href="#pizza">PIZZA</a></li>
       <li class="k"><a href="#chow">CHOWMEEN</a></li>
       <li class="k"><a href="#momoz">MOMOZ</a></li>
       <li class="k"><a href="#pav">PAV-BHAJI</a></li>
       {/* <li class="k"><a href="#spring">SPRING ROLLS</a></li> */}
       <li class="k"><a href="#paties">PATIES</a></li>
       {/* <li class="k"><a href="#chaat">CHAAT</a></li> */}
       <li class="k"><a href="#bhel">BHEL-PURI</a></li>
       <li class="k"><a href="#french">FRENCH-FRIES</a></li>
       <li class="k"><a href="#pasta">CHEESY-PASTA</a></li>
       {/* <li class="k"><a href="#man">MANCHOORIAN</a></li> */}
       <li class="k"><a href="#ch">CHHOLE BHATURE </a></li>
          <img src={img1} alt="" id='pizza' />
          <img src={img2} alt="" id='chow' />
          <img src={img3} alt="" id='momoz' />
          <img src={img4} alt="" id='pav' />
          {/* <img src={img5} alt="" id='spring' /> */}
          <img src={img6} alt="" id='paties' />
          {/* <img src={img7} alt="" id='chaat' /> */}
          <img src={img8} alt="" id='bhel' />
          <img src={img9} alt="" id='french' />
          <img src={img10} alt="" id='pasta' />
          {/* <img src={img11} alt="" id='man' /> */}
          <img src={img12} alt="" id='ch' />
        </ul>
        </div>

    </div>
  )
}

export default Items;
