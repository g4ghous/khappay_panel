import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import GridEvents from './component/GridEvents';
import { GridTerms } from './component/GridTerms';
import GridBusinessUsers from './component/GridBusinessUsers';
import { GridEventType } from './component/GridEventType';
import { GridSponsor } from './component/GridSponsor';
import { GridPolicy } from './component/GridPolicy'
import { CreateEvents } from './component/CreateEvents';
import { CreateEventType } from './component/CreateEventType';
import CreateBusinessUser from './component/CreateBusinessUser';
import { CreateSponsor } from './component/CreateSponsor';
import { CreateTerms } from './component/CreateTerms';
import { CreateGuidelines } from './component/CreateGuidelines';

import { UpdateEvents } from './component/UpdateEvents';
import { UpdateEventType } from './component/UpdateEventType';
import UpdateBusinessUser from './component/UpdateBusinessUser';
import { UpdateSponsor } from './component/UpdateSponsor';
import { UpdateTerms } from './component/UpdateTerms';
import UpdateProduct from './component/UpdateProduct';
import { UpdatePrivacy } from './component/UpdatePrivacy';

import { ViewSponsor } from './component/ViewSponsor'
import { ViewTerms } from './component/ViewTerms'
import { ViewEventType } from './component/ViewEventType'
import ViewSystemBusinessUser from './component/ViewSystemBusinessUser'
import { ViewPrivacy } from './component/ViewPrivacy'
import TravelLogin from './component/TravelLogin';
// import Iternary from './component/Iternary';
import GridBooking, { GridGuidelines } from './component/GridGuidelines';
import ViewBooking, { ViewGuidelines } from './component/ViewGuidelines';
// import ViewDealBuyersForClosedDeals from './component/ViewDealBuyerClosed'
import UpdateBooking, { UpdateGuidelines } from './component/UpdateGuidelines';
import Dashboard from './component/Dashboard';
import ViewEvents from './component/ViewEvents';
import GridEventList from './component/GridEventList';
import CreatePrivacy from './component/CreatePrivacy';
import GridFaourites from './component/GridEventList';
import GridFavourites from './component/GridFavourites';
import Slider from './component/Slider';
import CreateSLider from './component/CreateSLider';
import UpdateSlider from './component/UpdateSlider';
import ViewSlider from './component/ViewSlider';
import ViewProduct from './component/ViewProduct';
import ViewCategory from './component/ViewCategory';
import ViewCoupon from './component/ViewCoupon';
import ViewOrder from './component/ViewOrder';
import UploadEvents from './component/UploadEvents';
import GridProducts from './component/GridProducts';
import GridOrders from './component/GridOrders';
import GridCategories from './component/GridCategories';
import GridCoupon from './component/GridCoupon';
import GridReports from './component/GridReports';
import GridContact from './component/GridContact';
import CreateProduct from './component/CreateProduct';
import CreateCategory from './component/CreateCategory';
import CreateCoupon from './component/CreateCoupon';
import UpdateCategory from './component/UpdateCategory';
import UpdateCoupon from './component/UpdateCoupon';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className="container">
            {/* <Route path="/component/home" component={Home} /> */}
            <Route exact path="/" component={TravelLogin} />
            <Route path="/component/Dashboard" component={Dashboard}/>

            <Route path="/component/GridEvents" component={GridEvents} />

            <Route path="/component/UploadEvents" component={UploadEvents}/>
            <Route path="/component/GridTerms" component={GridTerms} />
            <Route path="/component/GridEventList" component={GridEventList} />
            <Route path="/component/GridEventType" component={GridEventType} />
            <Route path="/component/GridSponsor" component={GridSponsor} />
            <Route path="/component/GridPolicy" component={GridPolicy}/>
            <Route path="/component/GridGuidelines" component={GridGuidelines}/>
            <Route path="/component/GridFavourite" component={GridFaourites} />
            <Route path="/component/GridFavourites" component={GridFavourites} />
            <Route path="/component/Slider" component={Slider} />

            <Route path="/component/gridBusinessUsers" component={GridBusinessUsers} />
            <Route path="/component/GridProducts" component={GridProducts} />
            <Route path="/component/GridOrders" component={GridOrders} />
            <Route path="/component/GridCategories" component={GridCategories} />
            <Route path="/component/GridCoupon" component={GridCoupon} />
            <Route path="/component/GridReports" component={GridReports} />
            <Route path="/component/GridContact" component={GridContact} />
            




            <Route path="/component/CreateGuidelines" component={CreateGuidelines}/>
            <Route path="/component/CreateEvents" component={CreateEvents} />
            <Route path="/component/CreateEventType" component={CreateEventType} />
            <Route path="/component/CreateSponsor" component={CreateSponsor} />
            <Route path="/component/CreateTerms" component={CreateTerms} />
            <Route path="/component/CreatePrivacy" component={CreatePrivacy} />
            <Route path="/component/CreateSLider" component={CreateSLider} />

            <Route path="/component/createBusinessUser" component={CreateBusinessUser} />
            <Route path="/component/createProduct" component={CreateProduct} />
            <Route path="/component/createCategory" component={CreateCategory} />
            <Route path="/component/createCoupon" component={CreateCoupon} />

            <Route path="/component/ViewSponsor" component={ViewSponsor} />
            <Route path="/component/ViewTerms" component={ViewTerms} />
            <Route path="/component/ViewEventType" component={ViewEventType} />
            <Route path="/component/ViewPrivacy" component={ViewPrivacy} />
            <Route path="/component/ViewGuidelines" component={ViewGuidelines} />
            <Route path="/component/ViewEvents" component={ViewEvents} />
            <Route path="/component/ViewSlider" component={ViewSlider} />

            <Route path="/component/ViewSystemBusinessUser" component={ViewSystemBusinessUser} />
            <Route path="/component/ViewProduct" component={ViewProduct} />
            <Route path="/component/ViewCategory" component={ViewCategory} />
            <Route path="/component/ViewCoupon" component={ViewCoupon} />
            <Route path="/component/ViewOrder" component={ViewOrder} />


            <Route path="/component/UpdateEventType" component={UpdateEventType} />
            <Route path="/component/UpdateEvents" component={UpdateEvents} />
            <Route path="/component/UpdateSponsor" component={UpdateSponsor} />
            <Route path="/component/UpdatePrivacy" component={UpdatePrivacy} />
            <Route path="/component/UpdateGuidelines" component={UpdateGuidelines} />
            <Route path="/component/UpdateTerms" component={UpdateTerms} />
            <Route path="/component/UpdateSlider" component={UpdateSlider} />

            <Route path="/component/updateBusinessUser" component={UpdateBusinessUser} />
            <Route path="/component/updateProduct" component={UpdateProduct} />
            <Route path="/component/updateCategory" component={UpdateCategory} />
            <Route path="/component/updateCoupon" component={UpdateCoupon} />


          </div>
        </Router>

      </div>
    )
  }
}

export default App
