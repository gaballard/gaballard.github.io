import { ThemeType, grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const customTheme: ThemeType = {
  global: {},
  tip: {
    content: {
      background: 'white',
    },
  },
};

export default deepMerge(grommet, customTheme);
