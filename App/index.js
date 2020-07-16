
import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Row from './Components/Row';
import Button from './Components/Button';
import Calculator,{initialState} from './Util/Calculator';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'flex-end',

    },
    value: {
        color: '#fff',
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10

    }
});


export default class App extends React.Component {

    state = initialState;
    handelTap = (type, value) => {
        this.setState(state => {
          return  Calculator(type,value,state);
            
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <Text style={styles.value}>{parseFloat(this.state.currentValue).toLocaleString()}</Text>

                    {/* 1st row */}
                    <Row>
                        <Button text="AC" theme="secondary" onPress={() => this.handelTap("clear")} />
                        <Button text="+/-" theme="secondary" onPress={() => this.handelTap("posneg")} />
                        <Button text="%" theme="secondary" onPress={() => this.handelTap("percentage")}/>
                        <Button text="/" theme="accent" onPress={() => this.handelTap('operator', "/")} />
                    </Row>

                    {/* 2nd row */}
                    <Row>
                        <Button text="7" onPress={() => this.handelTap('number', 7)} />
                        <Button text="8" onPress={() => this.handelTap('number', 8)} />
                        <Button text="9" onPress={() => this.handelTap('number', 9)} />
                        <Button text="x" theme="accent" onPress={() =>this.handelTap('operator', "*")} />
                    </Row>

                    {/* 3rd Row */}
                    <Row>
                        <Button text="4" onPress={() => this.handelTap('number', 4)} />
                        <Button text="5" onPress={() => this.handelTap('number', 5)} />
                        <Button text="6" onPress={() => this.handelTap('number', 6)} />
                        <Button text="-" theme="accent" onPress={() => this.handelTap('operator', "-")} />
                    </Row>

                    {/* 4th row */}
                    <Row>
                        <Button text="1" onPress={() => this.handelTap('number', 1)} />
                        <Button text="2" onPress={() => this.handelTap('number', 2)} />
                        <Button text="3" onPress={() => this.handelTap('number', 3)} />
                        <Button text="+" theme="accent" onPress={() => this.handelTap('operator', "+")} />
                    </Row>

                    {/* 5th row */}
                    <Row>
                        <Button text="0" size='double' onPress={() => this.handelTap('number', 0)} />
                        <Button text="." onPress={() => this.handelTap('number', ".")} />
                        <Button text="=" theme="accent" onPress={() => this.handelTap('equal')} />

                    </Row>
                </SafeAreaView>
            </View>
        );
    }

}


