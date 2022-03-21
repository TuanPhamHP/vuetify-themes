// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
	theme: {
		themes: {
			light: {
				colors: {
					primary: '#000',
					secondary: '#b0bec5',
					anchor: '#8c9eff',
				},
				variables: {},
			},
		},
	},
});
