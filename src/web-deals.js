import React from 'react';
import slid from '../src/Component/images/08/slid.png'
import slid1 from '../src/Component/images/08/slid1.png'
import pen from '../src/Component/images/09/pen.png'
import set from '../src/Component/images/09/set.png'
import set1 from '../src/Component/images/09/set1.png'
import set2 from '../src/Component/images/09/set2.png'
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
       <div className="ban-container">
       <div className="col-12">
         <div className="ban-deals">
         <div className="ban-deals-img">
         <div>
         <img src={slid1}/>
         </div>
         </div>
         {/* <div className="ban-img2">
         <img src={slid}/>
         </div> */}
         <div className="ban-deals-head">
         <h1>Phillippines</h1>
         <h4>ADVENTURES ON A PARADISE ISLAND-(LADIES ONLY)</h4>
         </div>
         </div>
       </div>
   <div className="container-fluid">
     <div className="container">
       <div className="row">
         <div className="col-12 tab-name">
         <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All Campaigns</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Lifestyle</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Watches</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Auto</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Cash</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Coming Soon</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-2 badge-card">
           <h5>AED 14.00</h5>
         </div>
         <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div>
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set}/>
              <div className="inner-text3">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
            </div>
          </div>
         </div>
       </div>

       <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-2 badge-card">
           <h5>AED 14.00</h5>
         </div>
         <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div>
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set1}/>
              <div className="inner-text2">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
            </div>
          </div>
         </div>
       </div>
       <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-2 badge-card">
           <h5>AED 14.00</h5>
         </div>
         <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div>
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set2}/>
              <div className="inner-text1">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
            </div>
          </div>
         </div>
       </div>
       <div className="row">
         <div className="col-12 sales-heading">
           <h1>Sold</h1>
         </div>
       </div>
       <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-2 badge-card">
           <h5>AED 14.00</h5>
         </div>
         <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div>
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set2}/>
              <div className="inner-text1">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
              <div className="sold">
                <h3>Draw Date: 20 January 2020</h3>
              </div>
            </div>
          </div>
         </div>
       </div>
       <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-2 badge-card">
           <h5>AED 14.00</h5>
         </div>
         <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div>
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set2}/>
              <div className="inner-text1">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
              <div className="sold">
                <h3>Draw Date: 20 January 2020</h3>
              </div>
            </div>
          </div>
         </div>
       </div>
       <div className="row">
         <div className="col-12 sales-heading">
           <h1>Winners</h1>
         </div>
       </div>
       <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-12 badge-card1">
           <h5>CONGRATULATIONS!</h5>
         </div>
         {/* <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div> */}
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set2}/>
              <div className="inner-text1">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
            </div>
          </div>
         </div>
       </div>
       <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-5 badge-card1">
           <h5>CONGRATULATIONS!</h5>
         </div>
         {/* <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div> */}
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set2}/>
              <div className="inner-text1">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
            </div>
          </div>
         </div>
       </div>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-2 badge-card">
           <h5>AED 14.00</h5>
         </div>
         <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div>
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set}/>
              <div className="inner-text1">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
            </div>
          </div>
         </div>
       </div>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="row">
         <div className="col-12 sale shadow p-3 mb-5 bg-white">
       <div className="row">
         <div className="col-2 badge-card">
           <h5>AED 14.00</h5>
         </div>
         <div className="col-2 badge-text">
         <p>Product price per unit<br></br>Including all taxes</p>

         </div>
       </div>
          <div className="row space">
            <div className="col-4 sale-inner">
              <img src={pen}/>
              <div className="inner-text">
                <h3><b>Buy a</b><br></br><span>Ideal Pen</span></h3>
                <p>Introducing the first realease of the Ideal ballpoint from Yes Travels,<br></br>our premium writing solution</p>
              </div>
            </div>
            <div className="col-4 sale-inner-2">
              <h2>Hassam</h2>
            </div>
            <div className="col-4 sale-inner-3">
              <img src={set}/>
              <div className="inner-text1">
                <h3><b>Get a chance to win:</b><br></br><span>Return Ticket To Paris</span></h3>
                <p>With the Hublot Classic Fusion Titanium, the Swiss Luxury<br></br>watchmaker has created a truly timeless collection that just...</p>
              </div>
            </div>
          </div>
         </div>
       </div>
  </div>
</div>
         </div>
       </div>
    
     </div>

   </div>
    </div> 
   </div>
   </div>
   
 </div>
  );
}

export default App;
