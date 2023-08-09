import Vue from 'vue';

import Weather from '@/models/Weather';
import {
    ADD_LOCATION,
    REMOVE_LOCATION,
    UPDATE_LOCATIONS_ORDER,
    UPDATE_LOCATION_WEATHER,
} from './mutationsType';

export default {
    [ADD_LOCATION](state, { value, weather }) {
        if (!(value in Object.keys(state.locationsWeather))) {
            state.locationsOrder.push(value);
            Vue.set(state.locationsWeather, value, weather ?? new Weather(value));
        }
    },

    [REMOVE_LOCATION](state, index) {
        state.locationsOrder = state.locationsOrder.filter(
            (_, idx) => idx !== index
        );
        delete state.locationsWeather[location];
    },

    [UPDATE_LOCATIONS_ORDER](state, new_order) {
        state.locationsOrder = new_order;
    },

    [UPDATE_LOCATION_WEATHER](state, { location, new_weather_object }) {
        Vue.set(
            state.locationsWeather,
            location,
            new_weather_object ?? new Weather(location)
        );
    },
};
