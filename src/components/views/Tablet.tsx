import DesktopTabletFooter from '@/components/DesktopTabletFooter'

export default function Tablet () {
  return (
    <div id="tablet-view" className="only-tablet-view">
      <DesktopTabletFooter connectionStatus="CONNECTING"/>
    </div>
  );
}