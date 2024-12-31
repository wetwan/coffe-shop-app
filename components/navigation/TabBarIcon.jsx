// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ComponentProps } from "react";

export function TabBarIcon({ iconType, ...rest }) {
  const IconComponent = iconType === 'Ionicons' ? Ionicons : MaterialCommunityIcons;
  return <IconComponent size={28} style={[{ marginBottom: -3 }]} {...rest} />;
}