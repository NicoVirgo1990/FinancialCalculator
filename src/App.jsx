import Header from './components/Header.jsx'
import Input from './components/Input.jsx'
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });



  function handleChange(event){
      const { name, value } = event.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

  return (<>

   <Header></Header>
   <Input onSelected={handleChange} data={formData}></Input>


  </>); 
}

export default App
