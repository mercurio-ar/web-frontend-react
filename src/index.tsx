import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import MercurioApp from './MercurioApp'
import MercurioAppWrapper from './MercurioAppWrapper';

ReactDOM.render(
  <MercurioAppWrapper>
    <MercurioApp />
  </MercurioAppWrapper>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
