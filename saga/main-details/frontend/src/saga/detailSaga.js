import { all } from "redux-saga/effects";
import { cardsSaga } from "./cardsSaga";
import { detailSaga } from "./cardsSaga";

function* rootSaga() {
    yield all([
        detailSaga(),
        cardsSaga()
    ])
}

export default rootSaga;