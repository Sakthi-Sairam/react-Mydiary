import React from 'react';
import { Link } from 'react-router-dom';
import './DiaryList.css';
import CalendarComponent from '../../Components/CalendarComponent/CalendarComponent';

const DiaryList = ({ diaries }) => {
  return (
    <div className="diary-list-wrapper">
      <h1 className="diary-h1">Diary Entries</h1>
      <div className="diary-list">
        {diaries.map((diary, index) => (
          <div key={index} className="diary-entry">
            <Link to={`/diaries/${index}`}>
              <h2>{diary.title}</h2>
            </Link>
            <p>{diary.content.slice(0,200)+"...."}</p>
            <small>{diary.date}</small>
          </div>
        ))}
      </div>
      <h1 className="diary-h1">Calendar</h1>
      <CalendarComponent events={diaries} />
    </div>
  );
};

export default DiaryList;
