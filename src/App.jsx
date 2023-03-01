import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CheckBox } from "./components/form/checkbox";
import { Flex } from "./components/flex"
import {List} from "./components/list"
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
  return (
    <div style={{ padding: 16, position: "relative" }}>
      <Flex gapX="2" dir="row">
        <CheckBox style={{ width: 24, height: 24 }} defaultChecked />
        <CheckBox />
      </Flex>
      {/* <Flex dir="row" className="space-x-4" wrap="nowrap">
        <FlexRow size="1/3" style={{ height: 100, background: "red" }}>
        </FlexRow>
        <FlexRow size="1/3" style={{ height: 100, background: "blue" }}>
        </FlexRow>
        <FlexRow size="1/3" style={{ height: 100, background: "green" }}>
        </FlexRow>
      </Flex> */}
      {/* <Button text="Check" type="primary" /> */}
    </div>
  );
}
export default App