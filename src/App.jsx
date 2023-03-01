import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/button";
import { Flex, FlexRow } from "./components/flex";
import { List } from "./components/list";

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
      <Flex dir="row" className="space-x-4" wrap="nowrap">
        <FlexRow size="1/3" style={{ height: 100, background: "red" }}>
        </FlexRow>
        <FlexRow size="1/3" style={{ height: 100, background: "blue" }}>
        </FlexRow>
        <FlexRow size="1/3" style={{ height: 100, background: "green" }}>
        </FlexRow>
        {/* <Button text="Dark" type="dark" />
        <Button text="Green" type="green" />
        <Button text="Red" type="red" />
        <Button text="Yellow" type="yellow" />
        <Button text="Light" type="light" /> */}
      </Flex>
    </div>
  );
}
export default App