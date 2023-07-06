import DesktopTabletFooter from '@/components/DesktopTabletFooter'
import MainBody from '../MainBody';
import NavBar from '../NavBar';

export default function Desktop () {
  return (
    <div className="only-desktop-view">
      <NavBar></NavBar>
      <MainBody></MainBody>
      <DesktopTabletFooter connectionStatus="CONNECTING"/>
    </div>
  );
}















  {/* <NavBarMenu
    menuItems={[{
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
    }
  ]}
  >Hey</NavBarMenu> */}