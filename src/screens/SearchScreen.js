import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';



const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage ] = useResults();
    
    return (
        <View style={styleS.ScreenBackground}>
            <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} 
            onTermSubmit={() => searchApi(term)}
            />
            { errorMessage? <Text>{errorMessage}</Text> : null}
            <Text>we have found {results.length} results</Text>
        </View>
    )
}


const styleS = StyleSheet.create({
    ScreenBackground: {
        
    }
})


export default SearchScreen