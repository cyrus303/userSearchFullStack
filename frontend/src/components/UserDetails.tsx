import React, {useState} from 'react';
import {ApiResponse} from './SearchComponent';
import axios from 'axios';

interface UserDetailsProps {
  userInfo: ApiResponse[];
}

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const {userInfo} = props;
  const {email, name, id} = userInfo[0];
  const [deleteStatus, setDeleteStatus] = useState(false);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deleteUser();
    setDeleteStatus(true);
    setTimeout(() => {
      setDeleteStatus(false);
    }, 1000);
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        'http://localhost:3001/api/user/' + id
      );
      console.log(response.status);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="user-container">
      {deleteStatus === false ? (
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
              </div>
              <div className="message">
                <div className="text-container">
                  <span className="span-label">Email:</span>
                  {email}
                </div>
              </div>
              <div className="btn-container">
                <button type="button" className="edit-btn">
                  Edit
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={(event) => handleClick(event)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="header">
            <div className="content">
              <span className="title">User Details Deleted</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
