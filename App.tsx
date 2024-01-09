import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  _View,
} from "react-native";
import Home from "./src/screeens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})