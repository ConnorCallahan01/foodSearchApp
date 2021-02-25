import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //this is a helper function
  const searchApi = async (searchTerm) => {

        try
        {
        const response = await yelp.get('/search',{
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
          }
        }); //this gets the array of businesses
        setResults(response.data.businesses); //this will update the results state to be that array of data
      }
      catch (e){
        setErrorMessage('Something went wrong');
      }
  };
    useEffect(() => {
      searchApi('steak');
    }, []);

    return [searchApi, results, errorMessage];


};
