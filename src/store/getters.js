export default {
    weather(state) {
        return state.locationsWeather;
    },
    locations(state) {
        return state.locationsOrder;
    },
    inputLocationsErrorHandler(state) {
        return state.inputLocationErrorHandler;
    },
    geolocationErrorHandler(state) {
        return state.geolocationErrorHandler;
    },
};
