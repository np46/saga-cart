/**
 *
 * Asynchronously loads the component for Y
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
