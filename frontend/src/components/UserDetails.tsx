import React, {useEffect, useState} from 'react';
import {ApiResponse} from './SearchComponent';
import axios from 'axios';

interface UserDetailsProps {
  userInfo: ApiResponse[];
}

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const {userInfo} = props;
  const {email, name, id} = userInfo[0];
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [edit, setEdit] = useState(true);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  useEffect(() => {
    setInputEmail(email);
    setInputName(name);
    setDeleteStatus(false);
  }, [email, name]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    deleteUser();
    setDeleteStatus(true);
  };

  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setEdit(false);
  };

  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setEdit(true);
    console.log('name:', name);
    console.log('inputname:', inputName);
    updateUser();
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

  const updateUser = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: 'http://localhost:3001/api/user/' + id,
        data: {
          id: 1,
          name: inputName,
          email: inputEmail,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-container">
      {deleteStatus === false ? (
        <div className="card">
          {/* <button className="dismiss" type="button">
            ×
          </button> */}
          <div className="header">
            <div className="content">
              <span className="title">User Details</span>
              <div className="message">
                <div className="text-container">
                  <span className="span-label">ID:</span>
                  {id}
                </div>
              </div>
              <div className="message">
                <div className="text-container">
                  <span className="span-label">Name:</span>
                  {edit ? (
                    inputName
                  ) : (
                    <input
                      type="text"
                      value={inputName}
                      onChange={(event) => {
                        setInputName(event.target.value);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="message">
                <div className="text-container">
                  <span className="span-label">Email:</span>
                  {edit ? (
                    inputEmail
                  ) : (
                    <input
                      type="text"
                      value={inputEmail}
                      onChange={(event) => {
                        setInputEmail(event.target.value);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="btn-container">
                {edit ? (
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={(event) => handleEdit(event)}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={(event) => handleSave(event)}
                  >
                    save
                  </button>
                )}

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
