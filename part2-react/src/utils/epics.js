import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loginEpics from '../containers/Login/epics';
import { ajax } from 'rxjs/observable/dom/ajax';

const rootEpics = combineEpics(
    loginEpics,
);

export default createEpicMiddleware(rootEpics, {
    dependencies: {
        getJSON: ajax.getJSON,
        getApi: ajax.get,
        postApi: ajax.post,
        patchApi: ajax.patch,
        deleteApi: ajax.delete,
    }
});
