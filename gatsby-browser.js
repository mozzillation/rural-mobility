/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import("./src/style/main.sass")

export const onClientEntry = () => {
  window.onload = () => {

    function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
    }

    if (hasTouch()) { // remove all the :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }

  }
}

// // Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }
