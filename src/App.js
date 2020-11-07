import React from 'react';
import Button from './components/Button';
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>BUTTON</Button>
        <Button color="gray" outline>BUTTON</Button>
        <Button size="small" color="pink" outline>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button 
          size="large" 
          fullWidth 
          onClick={() => {
            console.log('클릭!');
          }}
          onMouseMove={()=> {
            console.log('마우스 무브!');
          }
          }
        >BUTTON</Button>
        <Button 
          size="large" 
          color="gray" 
          fullWidth onClick={() => {
            console.log('클릭!');
          }
        }
        onMouseMove={()=> {
          console.log('마우스 무브!');
        }}
        >BUTTON</Button>
        <Button 
          size="large" 
          color="pink" 
          fullWidth onClick={() => {
            console.log('클릭!');
          }}
          onMouseMove={()=> {
            console.log('마우스 무브!');
          }}
        >BUTTON</Button>
      </div>
    </div>
  );
}

export default App;