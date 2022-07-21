import {TextStyle} from 'react-native';

const size = {
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
}
const weight: {[key: string]: TextStyle['fontWeight']} = {
    thin: '400',
    normal: 'normal',
    semi: '600',
    full: '900',
    bold: 'bold',
  };

export default {size, weight};
