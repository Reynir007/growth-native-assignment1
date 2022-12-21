import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import "./App.css";

function App() {

  const [val, setValue] = useState('')

  const handleTextFieldChange = (event) =>{
    setValue(event.target.val);
  }

  return (
    <div className="App">
      <Container margin={10} padding={20}>
        <TextField
          id="standard basic"
          label="Roll Number"
          variant="standard"
          onChange={handleTextFieldChange}
        ></TextField>
      </Container>
    </div>
  );
}

export default App;
