import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ActivityIndicator } from "./components/activityIndicator"
import { Avatar } from "./components/avatar"
import { Button } from "./components/button"
import { Drawer } from "./components/drawer"
import { Dropdown } from "./components/dropdown"
import { Form } from "./components/form"
import { Input } from "./components/form/input/Input"
import { Portal } from "./components/portal/Portal"
import { Position } from "./components/position"
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
    <div className="h-96" style={{ padding: 16, position: "relative" }}>
      <Position position="middle center">
        <ActivityIndicator size="md" type="green" />
      </Position>
      {/* <Button type="dark" onlyIcon={() => {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )
      }} size="sm" onClick={() => { setToggleDrawer(!toggleDrawer) }} />
      <Portal>
        <Drawer open={toggleDrawer} onClose={() => { setToggleDrawer(!toggleDrawer) }} dir="right" style={{ width: "50%" }}>
          <div className="flex gap-y-3 flex-col">
            <Button type="green" className={"w-full"} text="Home" />
          </div>
        </Drawer>
      </Portal> */}
      {/* <Form>
        <Input placeholder={"Email"} />
      </Form> */}
      {/*<CarouselView />
      <ButtonView />
      <AccordionView />
      <BadgeView />
      <CardView />
      <AlertView />
      <AvatarView />
      <BreadCrumbView /> */}
      {/* <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 120 }}>
        <Dropdown
          buttonComp={(onClick) => {
            return (
              <Button onClick={onClick} type="dark" text="Dropdown" rightIcon={() => {
                return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ml-2 transition duration-150 ease-in-out ${toggleDrawer ? "rotate-180" : "rotate-0"}`}>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                )
              }} />
            )
          }}
          currentState={setToggleDrawer}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, margin: 6 }}>
            <Button fullWidth text="Facebook" type="primary" />
            <Button fullWidth text="Google" type="yellow" />
            <Button fullWidth text="Instagram" type="red" gradient />
          </div>
        </Dropdown>
      </div> */}
      {/* <CardView /> */}
    </div>
  );
}
export default App