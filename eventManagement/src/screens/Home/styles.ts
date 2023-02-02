import { StyleSheet } from "react-native";
import themes from "../../themes/themes";

const styles = StyleSheet.create({
  homeContainer: {
    padding: 24,
    backgroundColor: themes.colors.background,
    flex: 1,
  },
  eventContainer: {
    marginTop: 40,
  },
  eventLabel: {
    color: themes.colors.purple,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: themes.fonts.InterBold700,
    marginTop: 48,
  },
  eventInput: {
    backgroundColor: themes.colors.darkerBackground,
    height: 58,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    color: themes.colors.lightWhite,
    fontSize: 16,
    fontFamily: themes.fonts.InterBold700,
  },

  eventDate: {
    color: themes.colors.gray,
    fontSize: 16,
  },

  form: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 42,
    width: "100%",
  },
  input: {
    height: 58,
    backgroundColor: themes.colors.darkerBackground,
    borderRadius: 5,
    color: themes.colors.lightWhite,
    padding: 10,
    fontSize: 16,
    flex: 1,
    marginRight: 10,
    fontFamily: themes.fonts.InterRegular400,
  },

  marginLine: {
    height: 2,
    backgroundColor: themes.colors.gray,
    marginBottom: 40,
  },

  fallbackContainer: {
    alignItems: "center",
  },
  emptyListText: {
    fontSize: 18,
    color: themes.colors.gray,
    fontFamily: themes.fonts.InterRegular400,
    textAlign: "center",
    marginBottom: 10,
  },
  eventText: {
    color: themes.colors.purple,
  },
  listIcon: {
    marginTop: 20,
  },
});

export default styles;
