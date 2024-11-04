import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import NowPlaying from './lastfm';
import ReactFooter from './Footer';
import Info from './info';
// import TemporaryDrawer from './Drawer';

function App() {
  return (
    <div className="App">
      <Info/>
      <div className="welcomeMsg">
      <WelcomeMsg />
      </div>
      <div className="nowPlaying">
      <NowPlaying />
      </div>
      <ReactFooter />
    </div>

  );
}


const WelcomeMsg = () => {
  return (
    <TypeAnimation className='type-animation'
      sequence={[
        'Hello', // Types 'Hello'
        2000, // Waits 1s
        'I am currently listening to...', 
        () => {
          console.log('Sequence completed');
        },
      ]}
      cursor={true}
      repeat={0}
    />
  );
};

export default App;