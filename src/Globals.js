import { Dimensions } from 'react-native';

const { width, height }: { width: number, height: number } = Dimensions.get('window');

export const IS_IOS: boolean = Platform.OS === 'ios';
export const IPhoneX: boolean = IS_IOS && ((height === 812 || height === 896) && (width === 375 || width === 414));
export const ScreenWidth: number = width;
export const ScreenHeight: number = height;
export const White = '#FFFFFF';
export const Black = '#000000';
export const Black70 = 'rgba(0,0,0,0.7)'
export const PlaceHolderColor = '#8c8c8c';
export const White70 = 'rgba(255,255,255,0.7)';

