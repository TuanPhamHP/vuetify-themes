// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
	theme: {
		themes: {
			// Custom your themes here buds. more info : https://next.vuetifyjs.com/en/features/theme/
			light: {
				colors: {
					primary: '#000',
					secondary: '#b0bec5',
					anchor: '#8c9eff',
					navigatorText: '#2b2b2b',
					navigatorText__hover: '#fff',
					navigatorItemBackground__hover: '#2b2b2b',
					navigationDrawerBackground: '#fff',
				},
				variables: {},
			},
			dark: {
				colors: {
					primary: '#fff',
					secondary: '#b0bec5',
					anchor: '#8c9eff',
					navigatorText: '#fff',
					navigatorText__hover: '#2b2b2b',
					navigatorItemBackground__hover: '#f0f0f0',
					navigationDrawerBackground: '#2b2b2b',
				},
				variables: {},
			},
		},
	},
});
