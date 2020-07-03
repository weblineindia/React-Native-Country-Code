import { StyleSheet } from 'react-native';

import { ScreenWidth, Black, Black70, White, IPhoneX, White70 } from './Globals';

export default StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: White
  },
  darkContainerStyles: {
    flex: 1,
    backgroundColor: Black
  },
  searchTextInputStyles: {
    marginVertical: ScreenWidth * 0.026,
    fontSize: 18,
  },
  darkSearchTextInputStyles: {
    marginVertical: ScreenWidth * 0.026,
    fontSize: 18,
    color: White
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    marginHorizontal: ScreenWidth * 0.04,
    marginVertical: ScreenWidth * 0.026
  },
  searchIconStyle: {
    marginHorizontal: ScreenWidth * 0.026,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  // Flat List Styles

  itemContainerStyles: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: ScreenWidth * 0.04,
    paddingHorizontal: ScreenWidth * 0.04
  },
  btnContainerStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  itemStyle: {
    flex: 2,
    alignSelf: 'center',
  },
  countryTextStyle: {
    fontSize: 20,
    color: Black,
  },
  darkCountryTextStyle: {
    fontSize: 20,
    color: White,
  },
  countryCodeTextStyle: {
    fontSize: 20,
    color: Black70,
  },
  darkCountryCodeTextStyle: {
    fontSize: 20,
    color: White70,
  },
  lineStyles: {
    flex: 1,
    height: 1,
    backgroundColor: "lightgray",
    marginLeft: ScreenWidth * 0.04
  },
  backTouchable: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: ScreenWidth * 0.133,
    marginLeft: ScreenWidth * 0.03,
  },
  backButton:{ 
    height: ScreenWidth * 0.05, 
    width: ScreenWidth * 0.05, 
    resizeMode: 'contain'
  }
});
