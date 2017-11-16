import {takeEvery} from 'redux-saga';
import {put, call, fork} from 'redux-saga/effects';
import {Request} from 'superagent';

function* getWeather(location) {
    const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D"${location}")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    return Request.get(url)
                .then((data) => {
                    return JSON.parse(data.text);
                });
}

function* callGetWeather({location, resolve, reject}) {
    const result = yield call(getWeather, location);
    console.log(result);
    if(result.query.results) {
        yield put({type: 'FETCH_WEATHER_DONE', result});
        yield call(resolve);
    } else {
        yield call(reject, {location: 'No data for that locations'})
    }
}

function* getWeatherSaga() {
    yield* takeEvery('FETCH_WEATHER', callGetWeather);
}

export default function* rootSaga() {
    yield[
      fork(getWeatherSaga)
    ]
}