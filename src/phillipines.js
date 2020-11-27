import React from 'react';
import slid from '../src/Component/images/08/slid.png'
import slid1 from '../src/Component/images/08/slid1.png'
import coin2 from '../src/Component/images/08/coin2.png'
import event2 from '../src/Component/images/08/event2.png'
import duration2 from '../src/Component/images/08/duration2.png'
import level2 from '../src/Component/images/08/level2.png'
import map from '../src/Component/images/08/map.png'

function App() {
 
  return (
 <div>
   <div className='container-fluid'>
     <div className="row">
       <div className="col-12">
         <div className="ban">
         <div className="ban-img">
         <div>
         <img src={slid1}/>
         </div>
         </div>
         {/* <div className="ban-img2">
         <img src={slid}/>
         </div> */}
         <div className="ban-head">
         <h1>Phillippines</h1>
         <h4>ADVENTURES ON A PARADISE ISLAND-(LADIES ONLY)</h4>
         </div>
         </div>
       </div>
    </div> 
   </div>
   <div className="container">
     <div className="box">
     <div className="row">
       <div className="col-4 price">
          <img src={coin2}/>
          <p>Price:1,495 USD/ 455 KWD / 5,515 AED</p>
       </div>
       <div className="col-3 price-2">
       <img src={event2}/>
        <p>Departure:February 21,2020</p>
       </div>
       <div className="col-2 price-3">
       <img src={duration2}/>
       <p>Duration: 5 days</p>
       </div>
       <div className="col-2 price-4">
       <img src={level2}/>
       <p>Level: easy</p>
         </div>
     </div>
   </div>
   </div>
   <div className="container">
     <div className="box-2">
     <div className="row">
       <div className="col-12 desc">
         <h3>About Phillippines</h3>
         <p>The Philippines is an archipelagic country comprising of 7,107 islands that are broadly categorized into three main divisions: Luzon, Visayas and Mindanao. Each area showcases a vast array of tourist attractions, like the crystal-clear waters of Palawan, the beautiful white-sand beaches of Boracay, the chocolate-coated hills of Bohol and the busy streets of Manila.
This trip focuses exclusively on El Nido island, one of the most beautiful places in the Philippines and a renowned destination for all those seeking peace and relaxation. You will discover its natural beauties through island-hopping, swimming, snorkeling, walking, and hiking, and you will spend time at your leisure, sunbathing and unwinding at the beach.</p>
       </div>
     </div>
     <div className="row">
       <div className="col-12 desc">
         <h3>Trips Highlights:</h3>
         <ul>
           <li>
             Visit with a private island-hopping tour three of the most beautiful lagoons in the country: the Small, the Big and the Secret lagoon.
           </li>
           <li>
             Relax at the "7 Commando Beach", enjoying the surrounding landscape.
           </li>
           <li>
             Explore Napcan Beach: the most famous beach around El Nido.
           </li>
         </ul>
         <p><b>Activities</b>: snorkeling, swimming, walking</p>
         <center><button type="button" className="btn btn-secondary"><img src={event2}/>Book Now</button></center>
      </div>
     </div>
     </div>
   </div>
   <div className="container-fluid">
     <div className="row">
       <div className="col-12 map-sec">
         <img src={map}/>
        </div>
     </div>
   </div>
   <div className="container">
     <div className="row">
       <div className="col-12 det-desc">
         <h3>DETAILED <span>ITINERARY</span></h3>
         <h5><span><b>Day :1</b></span> Arrival Muscat (D)</h5>
         <p>Upon your arrival in Muscat, you will be welcomed by a Rahhalah representative. Recommended arrival time: by 4 pm Drive to the foothills of Jabal Shams mountain range. Arrival to the base camp approximately at 7 pm. Dinner and overnight stay at the camp.</p>
         <h5><span><b>Day :2</b></span> Jebel Shams Summit (3,009 m) (B,L,D)</h5>
         <p>Early Breakfast at 6 am. Climb approximately 10-12 hours. The hike to the summit of Jabal Shams officially called the W4 hike, giving views of the Grand Canyon and multiple wadis. A round trip should take anywhere from 10-12 hours from the base camp, with the ascent taking 5-7 hours depending on how many stops you take. Return to Muscat - approximately at around 8-9 pm Overnight stay at Mysk Al Mouj Hotel or similar.</p>
         <h5><span><b>Day :3</b></span> Departure Muscat (B)</h5>
         <p>Breakfast at the hotel. Departure from Muscat (approx. at 10am)</p>
        </div>
     </div>
   </div>
   <div className="container">
     <div className="row">
       <div className="col-12 tabs">
     <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Notes
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        <ul>
          <li>This cost is based on Double Occupancy. Single supplement cost is 665 AED per person.</li>
          <li>All services stipulated above are subject to availability at the time of booking/reservation. All prices are subject to change.</li>
          <li>All accommodation is subject to change to a similar one depending on availability.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          This Includes
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      <ul>
          <li>This cost is based on Double Occupancy. Single supplement cost is 665 AED per person.</li>
          <li>All services stipulated above are subject to availability at the time of booking/reservation. All prices are subject to change.</li>
          <li>All accommodation is subject to change to a similar one depending on availability.</li>
        </ul> 
       </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          This Excludes
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      <ul>
          <li>This cost is based on Double Occupancy. Single supplement cost is 665 AED per person.</li>
          <li>All services stipulated above are subject to availability at the time of booking/reservation. All prices are subject to change.</li>
          <li>All accommodation is subject to change to a similar one depending on availability.</li>
        </ul>
              </div>
    </div>
  </div>
</div>
 <p><b style={{color:'red'}}>Important:</b> The itinerary and schedule are subject due to change in weather, road conditions and operating conditions. At any moment, the guide has the right to change the program for safety and convenience of the travelers.</p>
     </div>
   </div>
   </div>
 </div>
  );
}

export default App;
