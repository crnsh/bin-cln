import { green, grey } from "@mui/material/colors";

export default function ConnectionStatus ({ connectionStatus } : {
  connectionStatus : "STABLE" | "UNSTABLE" | "CONNECTING" | "DISCONNECTED",
}) {

  let ConnectionIcon : JSX.IntrinsicElements['svg']; // Can only be of type Icon NEEDS TO BE CHANGED
  let ConnectionText : JSX.IntrinsicElements['div']; // Can only be of type ConnectionText NEEDS TO BE CHANGED

  if (connectionStatus === "STABLE") {
    ConnectionIcon = <svg className="fill-success_main" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#0ECB81"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#0ECB81"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#0ECB81"></rect><rect x="13.3333" width="1.66667" height="15" fill="#0ECB81"></rect></svg>;
    ConnectionText = <div className="text-success_main">Stable Connection</div>
  } 
  else if (connectionStatus === "UNSTABLE") {
    ConnectionIcon = <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#0ECB81"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#0ECB81"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#0ECB81"></rect><rect x="13.3333" width="1.66667" height="15" fill="#848E9C"></rect></svg>
    ConnectionText = <div className="text-success_main">Unstable Connection</div>
  }
  else if (connectionStatus === "CONNECTING") {
    ConnectionIcon = <svg className="fill-secondary_main" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#F0B90B"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#F0B90B"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#F0B90B"></rect><rect x="13.3333" width="1.66667" height="15" fill="#848E9C"></rect></svg>
    ConnectionText = <div className="text-secondary_main">Connecting</div>
  }
  else { // connectionStatus === "DISCONNECTED"
    ConnectionIcon = <svg className="text-text_tertiary" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#848E9C"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#848E9C"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#848E9C"></rect><rect x="13.3333" width="1.66667" height="15" fill="#848E9C"></rect></svg>
    ConnectionText = <div className="text-text_tertiary">Disconnected</div>
  }

  return (
    <div className='w-44 text-xs primary-element flex flex-row content-center justify-start [&>*]:mx-2 [&>*]:m-auto'>
      {ConnectionIcon}
      {ConnectionText}
    </div>
  )
}