// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import './css/main.css';

const fontsCss = `
/* nunito-sans-regular - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/nunito-sans-v6-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-sans-v6-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-sans-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-sans-v6-latin-regular.svg#NunitoSans') format('svg'); /* Legacy iOS */
}
/* nunito-sans-700 - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/nunito-sans-v6-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-sans-v6-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-sans-v6-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-sans-v6-latin-700.svg#NunitoSans') format('svg'); /* Legacy iOS */
}
`;

// eslint-disable-next-line func-names
export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.style.push({
    type: 'text/css',
    cssText: fontsCss,
  });
}
