import React, { Component } from 'react';
import { View, TextInput, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import * as images from './Assets/Images/map';
import countryList from './countryCode.json';
import CountryItemComponent from './CountryItemComponent';
import { PlaceHolderColor, Black } from './Globals';

type IProps = {
    searchViewStyle: Object,
    searchFieldStyle: Object,
    placeholderTitle: String,
    placeholderTextColor: String,
    // backArrowTintColor: String,
}

type IState = {
    selectedCountry: Object,
    searchString: String,
    placeholderTitle: String,
    placeholderTextColor: String,
    navigationTheme: String
}

export default class CountryCode extends Component<IProps, IState> {
    constructor(props) {
        super(props);

        const { navigation } = this.props
        const { params } = this.props.route
        let backArrowTintColor = (params != undefined && params.backArrowTintColor != undefined && params.backArrowTintColor != '') ? params.backArrowTintColor : Black

        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.backTouchable}>
                    <Image source={images.search.back} style={[styles.backButton, { tintColor: backArrowTintColor }]} />
                </TouchableOpacity>
            )
        });
        this.state = {
            countryList: countryList.country,
            searchString: '',
            placeholderTitle: (params !== undefined && params.placeholderTitle !== undefined && params.placeholderTitle !== '') ? params.placeholderTitle : 'Search Country',
            placeholderTextColor: (params !== undefined && params.placeholderTextColor !== undefined && params.placeholderTextColor !== '') ? params.placeholderTextColor : PlaceHolderColor,
            navigationTheme: (params !== undefined && params.navigationTheme !== undefined && params.navigationTheme !== '') ? params.navigationTheme : 'light',
        };
    }

    flatListItemSeparator = () => <View style={styles.lineStyles} />;

    render() {
        const { navigationTheme, placeholderTitle, placeholderTextColor } = this.state;
        const { searchFieldStyle } = this.props.route.params;
        const searchImageColor = (this.state.searchString.length > 0) ? (searchFieldStyle != undefined && searchFieldStyle.color != undefined && searchFieldStyle.color != '') ? searchFieldStyle.color : placeholderTextColor : placeholderTextColor;

        var countryList = this.state.countryList;
        var searchString = this.state.searchString.trim().toLowerCase();
        if (this.state.searchString.length > 0) {
            countryList = countryList.filter(
                countryItem =>
                    countryItem.country.toLowerCase().match(searchString) ||
                    countryItem.countryCode.toLowerCase().match(searchString)
            );
        }

        return (
            <View style={(navigationTheme == 'dark') ? styles.darkContainerStyles : styles.containerStyles}>
                <View style={[styles.flexRow, this.props.route.params.searchViewStyle]}>
                    <Image source={images.search.search} style={[styles.searchIconStyle, { tintColor: searchImageColor }]} />
                    <TextInput
                        style={[(navigationTheme == 'dark') ? styles.darkSearchTextInputStyles : styles.searchTextInputStyles, searchFieldStyle]}
                        onChangeText={text => { this.setState({ searchString: text }) }}
                        value={this.state.searchString}
                        placeholder={placeholderTitle}
                        placeholderTextColor={placeholderTextColor}
                        ref="search"
                    />
                </View>
                <FlatList
                    data={countryList}
                    renderItem={({ item }) => <CountryItemComponent {...item} item={item}
                        navigation={this.props.navigation}
                        isFrom={this.props.route.params.isFrom}
                        onChangeValue={this.props.route.params.onChangeValue}
                        selectedValue={this.props.route.params.selectedValue}
                        selectedValueStyle={this.props.route.params.selectedValueStyle}
                        defaultValueStyle={this.props.route.params.defaultValueStyle}
                        navigationTheme={this.props.route.params.navigationTheme}
                    />}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => this.flatListItemSeparator()}
                />
            </View>
        );
    }
}
