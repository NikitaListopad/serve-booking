import {FC} from 'react';
import 'react-infinite-calendar/styles.css';
import InfiniteCalendar, {Calendar, withRange} from 'react-infinite-calendar';

const Filters: FC = () => {

    const CalendarWithRange = withRange(Calendar);

    return (
       <div>
           <InfiniteCalendar
               Component={CalendarWithRange}
               selected={{
                   start: new Date(2017, 1, 10),
                   end: new Date(2017, 1, 18),
               }}
               locale={{
                   headerFormat: 'MMM Do',
               }}
           />
       </div>
    )
}

export default Filters