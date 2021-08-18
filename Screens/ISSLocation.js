import React,{Component} from 'react';
import { Text, View,StyleSheet ,ImageBackground,StatusBar,SafeAreaView,Platform, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios'


export default class IssLocationScreen extends Component{
    constructor(){
        super()
        this.state={
           location:{}
        }
    }

    componentDidMount=()=>{
        this.getIssLocation()
    }


    
    getIssLocation=()=>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
        .then((response)=>{
            this.setState({
                location: response.data
            })
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    
    
    
    
    render(){
        console.log(this.state.location.latitude)
        return(
            <View style={styles.container}> 
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground  source={require("../assets/iss_bg.jpg")} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
                   <Text style={styles.titleText}>ISS Location</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView    
                    style={styles.map}
                    region= {{
                        latitude: this.state.location.latitude,
                        longitude: this.state.location.longitude,
                        latitudeDelta:100,
                        longitudeDelta:100
                    }}
                    >
                        <Marker
                        coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}
                        >
                            <Image source={require("../assets/iss_icon.png")} style={{width:50,height:50}}/>
                        </Marker>
                    </MapView>
                </View>
            </ImageBackground>
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    },
})