export default class Dealer {
  constructor(name, coordinate, price, drinks) {
    this.name = name;
    this.coordinate = coordinate;
    this.price = price
    this.drinks = drinks
  }

  get drinkStrings(){
    drinkTypeList = this.drinks.map(drink=>drink.type + " * " + drink.amount)
    return drinkTypeList.join('\n')
  }

}
