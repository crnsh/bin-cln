import DesktopTabletFooter from '@/components/DesktopTabletFooter'

export default function Desktop () {
  return (
    <div className="only-desktop-view">
      <DesktopTabletFooter connectionStatus="CONNECTING"/>
    </div>
  );
}