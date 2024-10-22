import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import NowPlaying from './lastfm';

function App() {
  return (
    <div className="App">
      <div className="welcomeMsg">
      <WelcomeMsg />
      </div>
      <div className="nowPlaying">
      <NowPlaying />
      </div>
    </div>

  );
}


const WelcomeMsg = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hello', // Types 'Hello'
        2000, // Waits 1s
        'I am currently listening to...', 
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={0}
    />
  );
};

export default App;