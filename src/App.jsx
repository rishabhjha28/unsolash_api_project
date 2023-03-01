import { useContext } from 'react';
import './App.css';
import MainBody from './component/MainBody';
import TopBar from './component/TopBar';
import modeContext from './context/mode/ModeContext';
import SearchState from './context/search/SearchState';

function App() {
  const darkMode = useContext(modeContext).mode
  return (
    <SearchState>
      <div className={darkMode?'dark':''}>
        <div className='dark:bg-[#232323]'>
          <TopBar/>
          <MainBody/>
        </div>
      </div>
    </SearchState>
  );
}

export default App;
