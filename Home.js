/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  state = {
    users: [],
    homePage: true,
    selectedUser: ''
  }

  fetchUsers = async () => {
    const userData = await fetch('https://api.github.com/users')
    const users = await userData.json()
    return users
  }

  async componentDidMount() {
    const users = await this.fetchUsers()
    const firstFiveUsers = users.slice(0, 5)
    this.setState({ users: firstFiveUsers })
  }

  render() {
    const { users } = this.state
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Top 5 GitHub Users</Text>
        <Text style={styles.instructions}>
          Tap the username to see more information
        </Text>
        {users.map(user => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Person', { person: user.url })}
            key={user.id}
          >
            <Text>{user.login}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    margin: 10
  },
  instructions: {
    margin: 10,
    color: '#333333',
    marginBottom: 5
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 0,
    color: 'skyblue',
    textAlign: 'center',
    margin: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center'
  }
})
