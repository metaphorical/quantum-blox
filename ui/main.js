/**
 * This is point of convergence, everything just gets set up here, nothing more. 
 * 
 * For mroe relevant application code, refer to ./app.js
 * 
 * Also, I love to put my general hacks here 
 * (for instance, if you are messing with inlined lazy loaded css hacks, this is your place)
 * 
 */
import ReactDOM from 'react-dom';

import App from "./app";



ReactDOM.render(App(), window.document.getElementById('app'));

