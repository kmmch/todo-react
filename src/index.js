import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// ReactDom.render(<App />, document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


// memo 
// https://zenn.dev/kohski/articles/create-react-app-error-v18
// https://portaltan.hatenablog.com/entry/2015/08/06/174203
// https://qiita.com/yoshiwo/items/2d73f10fd1011b3a6b8a