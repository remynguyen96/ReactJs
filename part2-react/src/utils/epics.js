import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpics = combineEpics(

);

export default createEpicMiddleware(rootEpics);

