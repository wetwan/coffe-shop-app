import { View, Text, StyleSheet, ImageBackground } from "react-native";
import bgImage from "@/assets/images/iced-coffee.png";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMethod="cover"
        style={styles.image}
      >
        <Text style={styles.text}>coffe shop</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
