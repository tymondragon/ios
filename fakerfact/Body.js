import React, {Component} from 'react'

import {Text, TextInput, View, Linking, ScrollView} from 'react-native'
import Button from 'react-native-button'
import Styles from './Styles'
import Graph from './Graph'
import Spinner from './Spinner'

export default class Body extends Component {

  render() {
    const { predictions, linkingUrl, walt, spinner } = this.props

    let display = this.props.toggle ?
          <View>
            <View style={ Styles.checkingUrl }>
              <Text style={ Styles.checkingUrlText }>Checking URL:</Text>
                <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(linkingUrl)}>
                  { linkingUrl }
                </Text>
                </View>
              <View >
                <Text style={ Styles.waltSays }>{ walt }</Text>
              </View>
            <View>
              { predictions ? <Graph predictions={ predictions } /> : null  }
            </View>
          </View> : <View></View>

  return (

    <View style={Styles.body}>
      <ScrollView>
        <TextInput
          style={Styles.inputBox}
          onChangeText={(e) => this.props.inputText(e)}
          value={this.props.inputUrl}
          placeholder={this.props.placeHolder}
          clearButtonMode='always'
        />
          <View style={Styles.checkBox}>
            <Button
              containerStyle={ Styles.buttonBox }
              title='Check'
              style={Styles.button}
              onPress={ !this.props.inputUrl.length ? null : this.props.checkUrl }
              >Check
            </Button>
          </View>
          <View>
            {spinner ? <Spinner /> : display }
          </View>
        </ScrollView>
      </View>
  )
}
}
