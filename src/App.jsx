import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/button";
import { Flex } from "./components/flex";
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
      <Flex dir="row" gapY="4" gapX="2" align="start" justify="center">
        <Button text="First" type="primary" />
        <Button text="Second" type="dark" />
        <Button text="Third" type="green" />
        <Button text="Fourth" type="red" />
        <Button text="Fifth" type="yellow" />
        <Button text="Sixth" type="light" />
      </Flex>
    </div>
  );
}
export default App