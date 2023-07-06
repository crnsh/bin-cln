import { Stack } from "@mui/material";
import BinanceLogo from "./BinanceLogo";
import NavBarMenu from "./NavBarMenu";
import Link from "next/link";

const navBarLeftData = [
  {
    buttonLabel : "Hello",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },
  {
    buttonLabel : "Nine Squares SVG",
    menuItems: [{
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }, {
      svgElement : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>,
      title : "Binance Card",
      description : "Get up to 8% cashback when you spend at 90M merchants worldwide"
    }]
  },
]

export default function NavBarLeft () {
  
  // This is a stack of logo, and NavBarMenus

  return(
    <Stack
      direction="row"
    >
      <a href="">
        <BinanceLogo/>
      </a>
      {navBarLeftData.map((element, index) => (
        <NavBarMenu
        menuItems={element.menuItems}
        >
          {element.buttonLabel}
        </NavBarMenu>
      ))}
    </Stack>
  );

}