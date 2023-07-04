import FooterButton from "../components/FooterButton"

export default {
  component: FooterButton,
  title: 'FooterButton',
  tags: ['autodocs']
}

export const Annoucements = {
  args: {
    displayText: 'Announcements',
    children: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="t.secondary" className='w-3 h-3'><title>Bell Icon</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>
  },
  render: ( args : any ) => {
    return (
      <FooterButton
        displayText={args.displayText}
        onClickFn={() => null}
        onHoverFn={() => null}
      >
        {args.children}
      </FooterButton>
    )
  }
}

export const Feed = {
  args: {
    displayText: 'Feed',
    children: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-3 h-3'><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3h18v16H11l-4 4v-4H3V3zm5.222 4.67c4.143 0 7.501 3.358 7.501 7.5h2a9.5 9.5 0 00-9.5-9.5v2zm3.5 7.5a3.5 3.5 0 00-3.5-3.5v-2a5.5 5.5 0 015.5 5.5h-2zm-3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor"></path></svg>
  },
  render: ( args : any ) => {
    return (
      <FooterButton
        displayText={args.displayText}
        onClickFn={() => null}
        onHoverFn={() => null}
      >
        {args.children}
      </FooterButton>
    )
  }
}