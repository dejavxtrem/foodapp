import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList'



const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage ] = useResults();

    const filterResultByPrice = (price) => {
        //check if the result.price  === '$' || '$$ || '$$$'
        return results.filter((result) => {
            return result.price === price;
        })
    }
    
    return (
        <View style={styles.ScreenBackground}>
            <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} 
            onTermSubmit={() => searchApi(term)}
            />
            { errorMessage? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultList title="Cost Effective" results={filterResultByPrice('$')}/>
            <ResultList title="Bit Pricier"   results={filterResultByPrice('$$')}/>
            <ResultList title="Big Spender"  results={filterResultByPrice('$$$')}/>
            <ResultList title="Extra Spender"  results={filterResultByPrice('$$$$')}/>
            </ScrollView>
            
        </View>
    )
}


const styles = StyleSheet.create({
    ScreenBackground: {
        flex: 1
    }
})


export default SearchScreen