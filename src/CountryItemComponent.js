import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type IProps = {
  item: Object,
  countryCode: String,
  country: String,
  navigation: Object,
  isFrom: String,
  onChangeValue: Function,
  selectedValue: Object,
  selectedValueStyle: Object,
  defaultValueStyle: Object,
  navigationTheme: String
};

type IState = {
  selectedValue: Object
};

export default class CountryItemComponent extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.selectedValue
    };
  }

  onNavigate() {
    this.props.navigation.navigate(this.props.isFrom, { countryData: this.props.item });
    // this.props.navigation.navigate(this.props.isFrom, { countryData: this.props.item });
    this.props.onChangeValue(this.props.item);
  }

  render() {
    const { navigationTheme } = this.props;

    return (
      <View style={styles.itemContainerStyles}>
        <TouchableOpacity
          style={styles.btnContainerStyle}
          onPress={() => this.onNavigate()}>
          <View style={styles.btnContainerStyle}>
            <View style={styles.itemStyle}>
              <Text style={[(navigationTheme == 'dark') ? styles.darkCountryTextStyle : styles.countryTextStyle,
              (this.state.selectedValue.id === this.props.id) ? this.props.selectedValueStyle : this.props.defaultValueStyle,
              { fontWeight: (this.state.selectedValue.id === this.props.id) ? '600' : '300' }
              ]}>{this.props.country}</Text>
            </View>
            <View>
              <Text style={[
                (navigationTheme == 'dark') ? styles.darkCountryCodeTextStyle : styles.countryCodeTextStyle,
                (this.state.selectedValue.id === this.props.id) ? this.props.selectedValueStyle : this.props.defaultValueStyle,
                { fontWeight: (this.state.selectedValue.id === this.props.id) ? '600' : '300' }
              ]}>
                {this.props.countryCode}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
