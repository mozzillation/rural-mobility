import NProgress from "nprogress"

import("./src/style/main.sass")

export const onClientEntry = a => {
  const pluginOptions = { color: `#FF470F`, showSpinner: true }
  console.log(pluginOptions)

  window.onload = () => {

    document.body.className = document.body.className.replace(/\bno-js\b/, '');

    function hasTouch() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      )
    }

    if (hasTouch()) {
      // remove all the :hover stylesheets
      try {
        // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
          var styleSheet = document.styleSheets[si]
          if (!styleSheet.rules) continue

          for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue

            if (styleSheet.rules[ri].selectorText.match(":hover")) {
              styleSheet.deleteRule(ri)
            }
          }
        }
      } catch (ex) {}
    }
  }

  NProgress.configure(pluginOptions)
  NProgress.start()

  const styles = `#nprogress {
    pointer-events: none;
}
#nprogress .bar {
    background: ${pluginOptions.color};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
}
#nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${pluginOptions.color}, 0 0 5px ${pluginOptions.color};
    opacity: 1.0;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
}
#nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
}
#nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: ${pluginOptions.color};
    border-left-color: ${pluginOptions.color};
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
}
.nprogress-custom-parent {
    overflow: hidden;
    position: relative;
}
.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
    position: absolute;
}
@-webkit-keyframes nprogress-spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes nprogress-spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

  const node = document.createElement(`style`)
  node.id = `nprogress-styles`
  node.innerHTML = styles
  document.head.appendChild(node)
}
