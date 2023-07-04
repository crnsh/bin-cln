import ConnectionStatus from "../components/ConnectionStatus"

export default {
  component: ConnectionStatus,
  title: 'ConnectionStatus',
  tags: ['autodocs']
}

export const Stable = {
  args: {
    connectionStatus: "STABLE"
  }
}

export const Connecting = {
  args: {
    connectionStatus: "CONNECTING"
  }
}

export const Unstable = {
  args: {
    connectionStatus: "UNSTABLE"
  }
}

export const Disconnected = {
  args: {
    connectionStatus: "DISCONNECTED"
  }
}