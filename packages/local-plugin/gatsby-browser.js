import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const MyH1 = (props) => <h1 style={{ color: `tomato` }} {...props} />;
const MyParagraph = (props) => <p style={{ fontSize: '18px', lineHeight: 1.6 }} {...props} />;

const components = {
  h1: MyH1,
  p: MyParagraph
};

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <div style={{ border: '1px solid red' }}>{element}</div>
    </MDXProvider>
  );
};
