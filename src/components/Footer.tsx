export default function Footer ({ connectionStatus } : {
  connectionStatus : "STABLE" | "UNSTABLE" | "CONNECTING" | "DISCONNECTED",
}) {
  
  // assert : The component should have the following functionality -
  // 
  // based on whether the connection status is 'STABLE', 'UNSTABLE',
  // 'CONNECTING' or 'DISCONNECTED', the the left component should 
  // change
  // 
  // Middle element should be a static ticker imported externally
  // 
  // Right-most elements should be FooterButton which do certain things

  return (
    <>
    </>
  );
}