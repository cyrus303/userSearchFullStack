import React from 'react';
import {ApiResponse} from './SearchComponent';

interface UserDetailsProps {
  userInfo: ApiResponse[];
}

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const {userInfo} = props;
  const {email, name, id} = userInfo[0];
  return (
    <div className="card">
      <button className="dismiss" type="button">
        ×
      </button>
      <div className="header">
        <div className="content">
          <span className="title">User Details</span>
          <div className="message">
            <div className="text-container">
              <span className="span-label">ID:</span> {id}
            </div>
          </div>
          <div className="message">
            <div className="text-container">
              <span className="span-label">Name:</span>
              {name}
            </div>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                Edit
              </button>
              <button type="button" className="delete-btn">
                Delete
              </button>
            </div>
          </div>
          <div className="message">
            <div className="text-container">
              <span className="span-label">Email:</span>
              {email}
            </div>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                Edit
              </button>
              <button type="button" className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
