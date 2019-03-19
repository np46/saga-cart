import { fromJS } from 'immutable';
import yReducer from '../reducer';

describe('yReducer', () => {
  it('returns the initial state', () => {
    expect(yReducer(undefined, {})).toEqual(fromJS({}));
  });
});
