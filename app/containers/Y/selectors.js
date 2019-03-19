import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the y state domain
 */

const selectYDomain = state => state.get('y', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Y
 */

const makeSelectY = () =>
  createSelector(selectYDomain, substate => substate.toJS());

export default makeSelectY;
export { selectYDomain };
