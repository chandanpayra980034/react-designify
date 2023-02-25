import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/button"
import AccordionView from "./views/accordion/AccordionView"
import { AlertView } from "./views/alert/AlertView"
import { AvatarView } from "./views/avatar/AvatarView"
import { BadgeView } from "./views/badge/BadgeView"
import { BreadCrumbView } from "./views/breadcrumb/BreadCrumbView"
import { ButtonView } from "./views/button/ButtonView"
import { CardView } from "./views/card/CardView"
import { CarouselView } from "./views/carousel/CarouselView"
import { DrawerView } from "./views/drawer/DrawerView"

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
  const [toggleDrawer, setToggleDrawer] = useState(false)
  return (
    <div style={{ margin: 16 }}>
      {/* <Button text="Toggle" type="dark" size="sm" onClick={() => { setToggleDrawer(!toggleDrawer) }} />
      <DrawerView open={toggleDrawer} onClose={() => { setToggleDrawer(!toggleDrawer) }} /> */}
      <CarouselView />
      <ButtonView />
      <AccordionView />
      <BadgeView />
      <CardView />
      <AlertView />
      <AvatarView />
      <BreadCrumbView />
    </div>
  );
}
export default App
