import { StatusBar } from "react-native";

import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = () => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} barStyle="dark-content"/> : null;
};

export default FocusedStatusBar;
