import { BrowserRouter, Route, Routes } from "react-router-dom"
import AccordionView from "./views/accordion/AccordionView"
import { AlertView } from "./views/alert/AlertView"
import { AvatarView } from "./views/avatar/AvatarView"
import { BadgeView } from "./views/badge/BadgeView"
import { BreadCrumbView } from "./views/breadcrumb/BreadCrumbView"
import { ButtonView } from "./views/button/ButtonView"
import { CardView } from "./views/card/CardView"
import { CarouselView } from "./views/carousel/CarouselView"

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
      <CarouselView />
    </div>
  );
}
export default App
