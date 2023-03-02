import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CheckBox } from "./components/form/checkbox";
import { Flex } from "./components/flex"
import { List } from "./components/list"
import { RadioButton, RadioButtonGroup } from "./components/form/radiobutton";
import {useState,useEffect} from "react"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}
const Main = () => {
  const [value, setValue] = useState(2)
  return (
    <div style={{ padding: 16, position: "relative" }}>
      <RadioButtonGroup
        value={value}
        onChange={setValue}
        horizontal
        data={[
          {
            "label": "First",
            "value": 1,
            "inputRest": {
              "value": "First"
            }
          },
          {
            "label": "Second",
            "value": 2
          },
          {
            "label": "Third",
            "value": 3
          }
        ]}
      />
    </div>
  );
}
export default App