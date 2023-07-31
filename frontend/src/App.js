import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals"
function App() {
  const iframeStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '350px',
    height: '430px',
    border: 'none',
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      {/* <iframe
    allow="microphone;"
    style={iframeStyle}
    
    src="https://console.dialogflow.com/api-client/demo/embedded/21105ea5-d1f1-4242-9478-df6caa55b317">
</iframe> */}
    </Fragment>
    
  );
}

export default App;