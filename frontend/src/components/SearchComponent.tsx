import {useState} from 'react';
import UserDetails from './UserDetails';
import axios from 'axios';

export type ApiResponse = {
  email: string;
  id: number;
  name: string;
  __v: number;
  _id: string;
};
const SearchComponent = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [userDetails, setUserDetails] = useState<ApiResponse[]>([]);
  const [userNotFound, setUserNotFound] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cleanedInput = event.target.value.replace(/[^0-9]/g, '');
    setSearchText(cleanedInput);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.length > 0) {
      fetchUser();
      setSearchText('');
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/api/user/' + searchText
      );
      setUserDetails(response.data);
    } catch (err) {
      console.log(err);
      setUserDetails([]);
      setUserNotFound(true);
    }
  };

  return (
    <div className="main-container">
      <div className="search-container">
        <form
          action="submit"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            type="text"
            className="submit-text"
            value={searchText}
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {userDetails.length > 0 ? (
        <UserDetails userInfo={userDetails} />
      ) : (
        userNotFound && (
          <div className="card">
            <div className="header">
              <div className="content">
                <span className="title">User Not Found</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SearchComponent;
