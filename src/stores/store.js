
import {Animated} from 'react-native'
import {observable, computed, decorate, observer, autorun}from 'mobx'
import Dealer from '../models/dealer'
import Coordinates from './../models/coordinates'
import getRegionForCoordinates from './../functions/getRegionForCoordinates'
import Events from './../models/events'


class Store {

  uchida = new Dealer('Lunch at Cafe',new Coordinates(35.657938, 139.898271), 1000, this.uchidaList)
  domino = new Dealer('Lunch time!! Burgers??', new Coordinates(35.659905, 139.902691), 3000, this.dominoList)
  brinton = new Dealer('Lets eat pizza!', new Coordinates(35.649920, 139.911442), 1000,this.brintonList)
  sunroot = new Dealer('I like Italian',new Coordinates(35.64920, 139.918271),2000,this.brintonList)
  firstSelect = new Dealer('Vegitarian',new Coordinates(35.6549905, 139.90271),1000,this.brintonList)
  kaizo = new Dealer('I don\'t eat pork',new Coordinates(35.657938, 139.910299),3000,this.brintonList)
  tokyoBay = new Dealer('John Cena!',new Coordinates(35.653938, 139.899271),1000,this.brintonList)
  scheduleTime = new Date();
  scheduleEvent = new Events(this.scheduleTime,{name:'My Current Location'})
  detailsVisible = false
  AvatarURL=[]
  dealerList = [
    this.uchida,
    this.domino,
    this.brinton,
    this.sunroot,
    this.firstSelect,
    this.kaizo,
    this.tokyoBay
  ]
  displayRegion=new Coordinates(0,0)
  activeSlide=1
  switchViewToEvent(eventID){
    this.displayRegion.longitude=this.dealerList[eventID].coordinates.longitude
    this.displayRegion.latitude=this.dealerList[eventID].coordinates.latitude
  }
  coordinateList = []

  sliderRefArray = []
  constructor() {
    this.openDealer = new Animated.Value(0.2)
    this.detailsVisible = false
    this.dealerList.forEach((dealer)=>{
      dealer.id = this.dealerList.indexOf(dealer)
    })
    this.coordinateList = this.dealerList.map(dealer =>
      dealer.coordinate
    )
    this.displayRegion = getRegionForCoordinates(this.coordinateList)
  }
}

decorate(Store, {openDealer:observable},{displayRegion:observable},{activeSlide:observable}
  ,{detailsVisible:observable},
)
export default (new Store);
