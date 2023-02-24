import { Drawer } from "../../components/drawer";
import ReactDOM from 'react-dom'
export const DrawerView = ({open,onClose}) =>{
    return(
        ReactDOM.createPortal(<Drawer open={open} onClose={onClose} />,document.body)
    )
}