import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'

export default class PersonScreen extends Component {
  static navigationOptions = {
    title: 'Person'
  }
  state = { user: {} }

  async componentWillMount() {
    const user = await this.fetchUser()
    this.setState({ user })
  }

  fetchUser = async () => {
    const { navigation } = this.props
    const userURL = navigation.getParam('person')
    const userData = await fetch(userURL)
    const user = await userData.json()
    return user
  }

  render() {
    const {
      user: { name, avatar_url }
    } = this.state

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: avatar_url }}
          style={{ width: 150, height: 150, borderRadius: 75 }}
        />
        <Text style={{ marginTop: 50 }}>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  }
})
