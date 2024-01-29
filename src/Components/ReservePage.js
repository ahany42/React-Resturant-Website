import { HiMiniInformationCircle } from "react-icons/hi2";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

function ReservePage(){
 return(
 <div className="ReservePage"> 
  <div class="alert alert-info" role="alert">
  <HiMiniInformationCircle /> Reserve through the official website
</div>
<div className="calendarContainer">
<Calendar/>
</div>
 </div>
 );
}
export default ReservePage;