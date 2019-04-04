import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Home'
import PersonScreen from './Person'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Person: { screen: PersonScreen }
})

const App = createAppContainer(MainNavigator)

export default App
