import DesktopTabletFooter from '@/components/DesktopTabletFooter'
import MainBody from '../MainBody';
import NavBar from '../NavBar';

function getConnectionStatus(): "CONNECTING" | "STABLE" | "UNSTABLE" | "DISCONNECTED" {
  return "CONNECTING";
}

export default function Desktop () {
  return (
    <div className="only-desktop-view">
      <NavBar></NavBar>
      <MainBody></MainBody>
      <DesktopTabletFooter connectionStatus={getConnectionStatus()}/>
    </div>
  );
}