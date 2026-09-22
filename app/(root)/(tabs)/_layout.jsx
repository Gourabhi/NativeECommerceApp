// import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
// export default function TabLayout() {
//   return (
//     <NativeTabs  backgroundColor="#0E4D92"
//       tintColor="#FFFFFF"
//       color="#FFFFFF"
//       barStyle="default"
//     >
//       <NativeTabs.Trigger name="index">
//           <Icon sf="house.fill"/>
//         <Label>Home</Label>      
//       </NativeTabs.Trigger>

//       <NativeTabs.Trigger name="search">
//         <Icon sf="magnifyingglass"/>
//         <Label>Search</Label>
//       </NativeTabs.Trigger>

//       {/* Create Property Cards */}
//       <NativeTabs.Trigger name="saved">
//         <Icon sf="heart.fill"/>
//         <Label>Saved</Label>
//       </NativeTabs.Trigger>

//       <NativeTabs.Trigger name="profile">
//         <Icon sf="person.fill"/>
//         <Label>Profile</Label>
//       </NativeTabs.Trigger>
//     </NativeTabs>    
//   );
// }

import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}