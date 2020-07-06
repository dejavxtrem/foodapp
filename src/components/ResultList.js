import React from 'react';
import {View, Text, StyleSheet , FlatList} from 'react-native'
import ResultDetail from './ResultsDetails'


const ResultList = ({title, results}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.resultLength}>Results: {results.length}</Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor ={(result) => result.id}
            renderItem={({item}) => {
            return <ResultDetail result={item}/>
            }}
            />
        </View>
    
    
    )
}


const styles = StyleSheet.create ({
    titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
    },
    resultLength: {
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    }
})


export default ResultList