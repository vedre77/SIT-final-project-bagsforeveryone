import { SidebarContainer } from "./Sidebar.styled";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";
import StickyCart from '../StickyCart/StickyCart.js'

export default function Sidebar(props) {

  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  return (
    <SidebarContainer>
      <div className={sidebarClass}>
        <div> I slide into view </div>
        <div> Me Too! </div>
        <div> Me Three! </div>
        <StickyCart onClick={props.toggleSidebar}></StickyCart>
        <button onClick={props.toggleSidebar} className="sidebar-toggle">
          toggle sidebar button
        </button>

      </div>
    </SidebarContainer>
  );
}
