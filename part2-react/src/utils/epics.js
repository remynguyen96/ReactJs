import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loginEpics from '../containers/Login/epics';

const rootEpics = combineEpics(
    loginEpics,
);

export default createEpicMiddleware(rootEpics);

