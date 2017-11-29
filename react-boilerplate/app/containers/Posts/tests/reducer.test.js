
import { fromJS } from 'immutable';
import postsReducer from '../reducer';

describe('postsReducer', () => {
  it('returns the initial state', () => {
    expect(postsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
