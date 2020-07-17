import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../styles';

import tabNavigationData from './InvoiceTabNavigatorData';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      {tabNavigationData.map((item, idx) => (
        <Tab.Screen 
          key={`tab_item${idx+1}`}
          name={item.name}
          component={item.component}

          options={{
           title:item.name,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                resizeMode="contain"
                source={item.icon}
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.gray, marginBottom:3}}>{item.name}</Text>
        }} 
        />        
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,

   },
  tabBarIcon: {
    width: 18,
    height: 18,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
});