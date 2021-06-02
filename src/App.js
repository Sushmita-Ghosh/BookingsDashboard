import "./App.css";
import { Route, Switch, useParams } from "react-router-dom";

import Bookings from "./pages/bookings/bookings.component";
import Dashboard from "./pages/dashboard/dashboard.components";
import SideBar from "./components/sidebar/sidebar.components";
//import NewBookings from "./pages/new-bookings/new-bookings.component";
//import PastBookings from "./pages/new-bookings/new-bookings.component";

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();
//   console.log(topicId);
//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <SideBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/bookings" component={Bookings} />
      </Switch>
    </div>
  );
}

export default App;
