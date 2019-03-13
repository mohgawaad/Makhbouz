import React  from 'react';
import {View , ActivityIndicator} from 'react-native';

  /** Spinner Component */
const Spinner = ( {size } ) => {

    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator color={'#fff'} size={size || 'large'}/>
        </View>
    
    );
}

const styles = {

    spinnerStyle :{
        justifyContent : 'center',
        alignItems : 'center',
    }


}

export {Spinner}