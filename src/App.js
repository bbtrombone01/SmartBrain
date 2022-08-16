
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkform from './components/imageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">

    <Navigation />
    <Logo />
    <ImageLinkform />

      {/*
      planning on bulidng these later

      <ImageLinkform />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
