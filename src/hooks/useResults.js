import {useState, useEffect} from 'react';
import yelp from '../api/yelp'


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('');

    //search yelpapi
    const  searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
                
            })
            setResults(response.data.businesses)
    } 
    catch(err) {
        console.log(err)
        setErrorMessage('opps Something went wrong')
    }
    }

    //useeffect hook
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]

}