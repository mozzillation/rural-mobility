export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'no-js',
      style: {
        display: 'none',
    }
  });
};
