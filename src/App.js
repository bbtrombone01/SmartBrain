import React, {Component} from 'react';

import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkform from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import SignIn from './components/singin/Signin';

class App extends Component {

state = {
  route: "signin"
}

SignInTOSite  =(status) =>{
  this.setState ({route: status})
}
  

  
render(){


    return (
      <div className="App">
    
      <Navigation returnToSignIn ={this.SignInTOSite} />
      <Logo />

      { this.state.route === 'signin' 
        
        ? <SignIn signInButton ={ this.SignInTOSite} />
        : <div> 
          <Rank />
          <ImageLinkform />
        </div>
      }
    
        {/*
        planning on bulidng these later
    
        <ImageLinkform />
        <FaceRecognition /> */}
      </div>
    );

}

}

export default App;
