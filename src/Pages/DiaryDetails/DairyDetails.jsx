import React from 'react';
import { useParams } from 'react-router-dom';
import './DiaryDetails.css';

const temporaryImageLink = 'https://via.placeholder.com/150';

const DiaryDetails = ({ diaries }) => {
  const { id } = useParams();
  const numId = Number(id);

  const filteredDiary = diaries[numId]; // Assuming the id corresponds to the index in the array

  return (
    <div className="diary-details-container">
      <div className="diary-details-wrapper">
        <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Diary" />
        <div className="diary-details-content">
          <h3>Diary Title: {filteredDiary.title}</h3>
          <div className="small-details">
            <p className="date">
              <span className="font-weight-med">{new Date(filteredDiary.date).toLocaleDateString()}</span>
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Diary Content:</span>
            <span className="description-heading-para">
              {filteredDiary.content}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiaryDetails;
