import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  Text,
  Image,
  Appearance,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors } from "@/constants/Colors";
import MenuItems from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);
  const SeparatorComp = <View style={styles.separator} />;
  //   const footerComp = <Text> end of menu</Text>;
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <Container>
      <FlatList
        data={MenuItems}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={SeparatorComp}
        // ListFooterComponent={footerComp}
        // ListFooterComponentStyle={styles.footerComps}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No Items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuText}>
              <Text style={[styles.menuHeader, styles.menuDisc]}>
                {item.title}
              </Text>
              <Text style={styles.menuDisc}>{item.description}</Text>
            </View>
            <Image style={styles.menuImage} source={MenuImages[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      padding: 20,
 
      paddingBottom: 20,
      paddingHorizontal: 12,
        backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxHeight: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
  
    },
    footerComps: {
      textTransform: "uppercase",
      textAlign: "center",
      marginHorizontal: "auto",
    },
    row: {
      flexDirection: "row",
      width: "100% ",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      marginTop: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "black",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    menuText: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuHeader: {
      fontSize: 18,
      textDecorationLine: "underline",
    },
    menuDisc: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
    },
  });
}
