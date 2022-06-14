import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import image from "./assets/bg-image.jpg";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Hello, {"\n"}Stacy</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} underlayColor="#fff">
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} underlayColor="#fff">
            <Text style={styles.textButton2}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    marginStart: 30,
    marginTop: 70,
  },
  textHeader: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(52, 52, 52, 0)",
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "white",
  },
  button2: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "white",
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "white",
  },
  buttonContainer: {
    marginTop: 400,
    marginBottom: 40,
    flex: 1,
    justifyContent: "space-around",
  },
  textButton: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  textButton2: {
    color: "#FF8C00",
    fontSize: 22,
    textAlign: "center",
  },
});
