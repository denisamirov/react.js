import React, {useState} from 'react';
import moment from 'moment';


const NewTime = (Component) => {
  return function(props) {
      const date = moment(props.date, 'YYYY-MM-DD HH:mm:ss')
      const diffMinutes = moment().diff(date, 'minutes');
      console.log(diffMinutes)
      let row;
      if (diffMinutes < 60) {
        row = `${Math.round(diffMinutes)} минут назад`
      }
      else if (diffMinutes > 60 && diffMinutes < 1440) {
        row = `${Math.round(diffMinutes/60)} часов назад`
      }
      else if (diffMinutes > 1440) {
        row = `${Math.round(diffMinutes/60/24)} дней назад`
      }
      const updateDate =row
      return <Component date = {updateDate}/>
  }
}


function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

const DateTime2 = NewTime(DateTime)


function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTime2 date={props.date}/>
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-07-22 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-07-22 21:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}