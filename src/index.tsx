import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import MercurioApp from './MercurioApp'

ReactDOM.render(
  <MercurioApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
