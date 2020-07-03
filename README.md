# React Native Country Code Component

A pure JavaScript ReactNative component for listing Country codes in your app.

## Getting started

- [Installation](#installation)
- [Supported versions](#supported-versions)
- [Usage](#usage)
- [Props](#props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute?)
- [Need Help?](#need-help?)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#keywords)

## Installation

`$ npm install rn-weblineindia-country-code --save`

## Supported versions

We have tested this component in ReactNative 0.60 - 0.62.5. You can still use it in other versions.

## Usage

First of all, Register CountryCode Component to the navigation stack
```javascript
import CountryCode from 'rn-weblineindia-country-code';

<Stack.Screen 
    name="CountryCode" 
    component={CountryCode}
/>
```

Here is your screen in which you want to implement the Country List Component

```javascript
openCountryCode() {
    this.props.navigation.navigate('CountryCode', {
    // Pass all props here... 
      isFrom: "HomeScreen",     // Your routeName
      selectedValue: this.state.countryData
    });
  }

<TouchableOpacity onPress={()=> this.openCountryCode()}>
    // Your code here
</TouchableOpacity>
```

Object of `selectedValue` is as below:
```javascript
{
    "country": "Australia",
    "countryCode": "+61"
}
```

## Props

| **Props**            | **Type** | **Required** | **Description**                                                               |
|----------------------|----------|--------------|-------------------------------------------------------------------------------|
| navigation           | `object` | yes          | Pass the navigation                                                           |
| isFrom               | `string` | yes          | Pass the routeName \(Your current screen\)                                    |
| navigationTheme      | `string` | no           | Navigation theme for the component\. There are two options 'light' and 'dark' |
| selectedValue        | `object` | yes          | Default selected value                                                        |
| placeholderTitle     | `string` | no           | Placeholder title                                                             |
| placeholderTextColor | `string` | no           | Placeholder title color                                                       |
| backArrowTintColor   | `string` | no           | Color to be displayed to the header back arrow                                |
| searchViewStyle      | `object` | no           | Styles is passed to the search view                                           |
| searchFieldStyle     | `object` | no           | Styles is passed to the search field text                                     |
| selectedValueStyle   | `object` | no           | Styles is passed to the selected value                                        |
| defaultValueStyle    | `object` | no           | Styles is passed to the default value \(Not Selected\)                        |

## Methods

| **Method**           | **Description**                                                 |
|----------------------|-----------------------------------------------------------------|
| onChangeValue        | Callback method that is called when the selected value changes  |

-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this ReactNative Country Code Component in their software project. In case you want to customize this Country Code Component to suit your development needs, then feel free to contact our [ReactNative developers](https://www.weblineindia.com/hire-react-native-developers.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

------

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/React-Native-Country-Code/blob/master/LICENSE

------

### Keywords

 rn-weblineindia-country-code, react-native-country-code, country-code, react-native
