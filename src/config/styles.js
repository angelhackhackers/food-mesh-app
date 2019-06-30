'use strict';
import {StyleSheet} from 'react-native';
import color from '../constants/Colors';

// this is some random color name
var food='#ffffff'  //green#73c700
var lightFood='#fefefe'
var lighterFood='#ff9f99'


export default StyleSheet.create({
    createEventText: {
        color: 'black',
        fontSize:20
    },
    createContainer: {
        paddingTop:10,
        paddingBottom:10,
    },
    createEventTextUnderline: {
        borderBottomColor: 'lightgrey',
    },
    createEventView: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    smallFont: {
        fontSize: 25,
        color: 'white'
    },
    bigFont: {
        fontSize: 50,
        color: 'white',
    },
    requestListView:{
        flexDirection:'row',
        flex:1,
        paddingTop:5,
        paddingBottom:5,
    },
    requestListConfirm:{
        alignSelf:'flex-end',
        paddingLeft:5
    },
    eventlistSubtitle:{
        fontSize:15,
        color:'grey'
    },
    eventlistCellHeight:{
        height:50
    },
    eventListavatar:{
        borderWidth:2,
        borderColor:food,
    },
    createEventButtonContainer: {
        marginTop:30
    },
    createEventButton: {
        backgroundColor:lighterFood,
        height: 48,
        width: '100%',
        borderRadius:8,
    },
    createEventButtonGroup:{
        backgroundColor:lighterFood,
        borderRadius:8,
    },
    createEventButtonTitle: {
        color:food,
        fontSize: 20
    },
    avatar:{
        borderWidth:4,
        borderColor:food,
    },
    loginView: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: food,
    },
    loginButtonTitle: {
        color:food,
        fontSize:20
    },
    login2ButtonTitle: {
        color:'white',
        fontSize:20
    },
    loginButton: {
        paddingRight:50,
        paddingLeft:50,
        height:48,
        borderRadius:8,
        width:'100%',
        backgroundColor:'white',
    },
    login2Button: {
        paddingRight:50,
        paddingLeft:50,
        height:48,
        borderRadius:8,
        width:'100%',
        backgroundColor:'#73c700',
        marginTop:40
    },
    loginButtonContainer: {
        marginTop:30,
    },
    logoCombined: {
        alignItems: 'center',
        flex:0.3
    },
    loginText: {
        color: 'white',
        fontSize: 20
    },
    loginContainer: {
        paddingTop:10,
        paddingBottom:10,
        marginBottom:10
    },
    loginTextUnderline: {
        borderBottomColor: 'rgba(255,255,255,0.5)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    title: {
        fontSize: 12,
        color: '#000',
        backgroundColor: '#fff'
    },

    button: {
        fontSize: 12,
        color: '#000',
        backgroundColor: '#fff'
    }

});
