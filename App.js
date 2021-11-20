import React, { Component } from "react";
import { View } from "native-base";
import { Provider } from "react-redux";
import { store } from "./store";
import MainNavigator from "./navigation";
import { setLocalNotification } from "./utils/notifications";

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, paddingTop: 22 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
