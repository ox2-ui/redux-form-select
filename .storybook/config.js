import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import 'react-select/dist/react-select.css';
import '@ox2/select/index.css'; // Must come after react-select.css

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'redux-form-select',
});


configure(loadStories, module);
