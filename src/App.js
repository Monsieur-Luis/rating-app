
import Container from './components/Container';
import Heading from './components/Heading';
import StarComponent from './components/StarComponent';
import Button from './components/Button';



function App() {

  const handleClick = (event) =>{
    console.log(event);
  }

  const handleButtonClick = (event) =>{
    alert (event.target.innerHTML);
  }


  return (
    <div className="App">
      <Container>
      <StarComponent onClick={handleClick}></StarComponent>
      <Button onClick={handleClick}></Button>
      <Button onClick={handleButtonClick}>1</Button>
      <Heading></Heading>
      </Container>
      
      
      
    </div>
  );
}

export default App;
