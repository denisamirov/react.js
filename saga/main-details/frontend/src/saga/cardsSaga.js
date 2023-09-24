import {call, put, takeEvery, takeLatest, select, race, delay } from 'redux-saga/effects'
import { getCardsSuccess, setCardsFailure, getDetailSuccess, 
        setDetailLink, setDetailFetch } from '../store/cardsSlice';

function* workerCardsFetch() {
    const link = 'http://localhost:7070/api/services'
    try {
        const cards = yield call(() => fetch(link))
        var data = yield cards.json()
        yield put(setCardsFailure(''))
        yield put(getCardsSuccess(data))
    }
    catch {
        yield put(setCardsFailure(link))
    }
    
}


function* cardsSaga() {
    yield takeLatest('cards/getCardsFetch', workerCardsFetch);
}


function* workerDetailFetch() {
    const dataLink = state => state.cards.link
    const link = yield select(dataLink)
    try {
        const {result, timeout} = yield race({
            result: call(() => fetch(link)),
            timeout: delay(5000)
        })
        if (result.status != 200) {
            yield put(setDetailFetch(data))
        }
        else if (timeout) {
            yield put(getDetailSuccess())
        }
        else {
            var data = yield result.json()
            yield put(getDetailSuccess(data))
            console.log(data)
        }

    }
    catch(err) {
        yield put(setDetailLink(link))
    }
    
}

function* detailSaga() {
    yield takeEvery('DETAILS_SAGA', workerDetailFetch);
}



export { cardsSaga, detailSaga }
