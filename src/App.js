import ParticlesBg from 'particles-bg';
import { useState } from 'react';
import './App.css';

function App() {

  const light = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '200vh',
    zIndex: -1,
    background: 'white'
  }

  const dark = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    height: '200vh',
    background: 'black'
  }

  const matrix = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '200vh',
    zIndex: -1,
    background: 'lightcoral'
  }
  
  const [theme, setTheme] = useState(light)
  const [color, setColor] = useState('black')
  const [btnColor, setbtnColor] = useState('btnblack')

  return (
    <>
      <ParticlesBg type="square" num={20} bg={ theme } />
      <div className="container">
        <h1 className = { color } > Hi, I am</h1>
        <h2 className = { color } > Abhinav Srivastava </h2>
        <button className = { btnColor } onClick = { () => 
          {

            if (theme.background === 'white')
            {
              setTheme(dark)
              setColor('white')
              setbtnColor('btnyellow')
            }
            if (theme.background === 'black')
            {
              setTheme(matrix)
              setColor('yellow')
              setbtnColor('btnwhite')
            }
            if (theme.background === 'lightcoral')
            {
              setTheme(light)
              setColor('black')
              setbtnColor('btnblack')
            }

            console.log(theme.background)
          }} ></button>
          <div className="icon-bar">
            <a href="https://github.com/ABHIYANSHU/" className="github"><i className="fa fa-github"></i></a>  
            <a href="https://www.linkedin.com/in/abhiyanshu/" className="linkedin"><i className="fa fa-linkedin"></i></a>
            <a href="https://iamabhinavsriv.medium.com/" className="medium"><i className="fa fa-medium"></i></a>
            <a href="mailto:iamabhinavsriv@gmail.com" className="gmail"><i className="fa fa-envelope"></i></a> 
          </div>
      </div>
      <div className="container">
          <h3 className = { color } >About Me</h3>
          <p className = { color } >I am a Software Developer with experience in Java, Spring Boot, .NET Core, React and Redux. I have also worked on RPA technologies such as UIPath.</p>
      </div>      
    </>
  );
}

export default App;
