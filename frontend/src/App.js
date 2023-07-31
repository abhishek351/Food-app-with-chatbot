import { Fragment } from 'react';
import ChatBot from './ChatBot';
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals"
function App() {
  
  return (
    <Fragment>
      
      <Header />
      <main>
        <Meals />
      </main>
    {/* <ChatBot/> */}
     
    </Fragment>
    
  );
}

export default App;