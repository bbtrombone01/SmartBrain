
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkform from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';

function App() {
  return (
    <div className="App">

    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkform />

      {/*
      planning on bulidng these later

      <ImageLinkform />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
