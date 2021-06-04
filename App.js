import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Transactions from './screens/transactions'
import Search from './screens/search'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const tabNavigator= createBottomTabNavigator({
  TransactionScreen:{screen:Transactions},
  SearchScreen:{screen:Search}
})
const AppContainer=createAppContainer(tabNavigator)