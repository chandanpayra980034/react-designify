import { BrowserRouter, Route, Routes } from "react-router-dom"
import AccordionView from "./views/accordion/AccordionView"
import { AlertView } from "./views/alert/AlertView"
import { AvatarView } from "./views/avatar/AvatarView"
import { BadgeView } from "./views/badge/BadgeView"
import { BreadCrumbView } from "./views/breadcrumb/BreadCrumbView"
import { ButtonView } from "./views/button/ButtonView"

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
    <div style={{ width: '50%', margin: "48px auto" }}>
      <ButtonView />
    </div>
  );
}
export default App
