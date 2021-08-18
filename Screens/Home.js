import React,{Component} from 'react';
import { Text, View,StyleSheet,Image,SafeAreaView,StatusBar,Platform ,TouchableOpacity, TouchableOpacityBase,ImageBackground} from 'react-native';



export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}> 
            <SafeAreaView style={styles.androidSafeArea}/>
                <ImageBackground source={require("../assets/bg.png")} style={styles.backgroundImage}> 
                <View style={styles.titleBar}>
                <Text style={styles.titleText}>ISS Tracker App</Text>
            
                </View>
                <TouchableOpacity style={styles.routetCard} onPress={()=>{
                    this.props.navigation.navigate("ISSLocation")
                }}>
                    <Text style={styles.routeText}>ISS Location</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Text style={styles.knowMore}>{"Know More --->"}</Text>
                    <Image style={styles.iconImage} source={require("../assets/iss_icon.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.routetCard} onPress={()=>{
                    this.props.navigation.navigate("Meteors")
                }}>
                    <Text style={styles.routeText}>Meteors</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Text style={styles.knowMore}>{"Know More --->"}</Text>
                    <Image style={styles.iconImage} source={require("../assets/meteor_icon1.png")} />
                </TouchableOpacity>
                </ImageBackground>
                </View>
        )
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'skyblue',
    },
    androidSafeArea : {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:'center'
    },
    routetCard:{
        flex:.25, 
        marginLeft:50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
})