import { BrowserRouter, Route, Routes } from "react-router-dom"
import AccordionView from "./views/accordion/AccordionView"
import { AlertView } from "./views/alert/AlertView"
import { AvatarView } from "./views/avatar/AvatarView"
import { BadgeView } from "./views/badge/BadgeView"
import { BreadCrumbView } from "./views/breadcrumb/BreadCrumbView"
import { ButtonView } from "./views/button/ButtonView"
import { CardView } from "./views/card/CardView"

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
    <div style={{ margin: 16 }}>
      {/* <AccordionView />
      <BadgeView />
      <ButtonView />
      <AlertView />
      <BreadCrumbView />
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:16}}>
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      </div> */}
      <ButtonView />
    </div>
  );
}
export default App
