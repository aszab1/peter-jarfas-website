
const BubbleBg = ({ children }) => {
  // Function to generate the bubble SVG string
  const generateBubbleSVG = () => {
    const bubbles = Array.from({ length: 40 }, () => ({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 3 + 0.3,
    }))


    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#60a6f0"/>
        <defs>
          <radialGradient id="bubbleGradient" cx="30%" cy="30%" r="52%" fx="30%" fy="30%">
            <stop offset="0%" stop-color="rgb(255, 255, 255)" stop-opacity="0.8" />
            <stop offset="70%" stop-color="rgb(96, 166, 240)" stop-opacity="0.6" />
            <stop offset="100%" stop-color="rgb(96, 166, 240)" stop-opacity="0.3" />
          </radialGradient>
          <filter id="dropShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.1"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
            <feFlood flood-color="rgba(0,0,0,0.4)"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        ${bubbles
          .map(
            (bubble) => `
          <g filter="url(#dropShadow)">
                <circle cx="${bubble.cx}%" cy="${bubble.cy}%" r="${bubble.r}%" fill="url(#bubbleGradient)"/>
                <circle cx="${bubble.cx}%" cy="${bubble.cy}%" r="${bubble.r}%" fill="none" stroke="rgba(187, 214, 242, 0.4)" stroke-width="1.2"/>
              </g>
          
        `
          )
          .join('')}
      </svg>
    `

    return `data:image/svg+xml,${encodeURIComponent(svgString)}`
  }

  // Styles for the background container
  const containerStyle = {
    backgroundImage: `url("${generateBubbleSVG()}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'fixed',
    backgroundAttachment: 'fixed', // either 'fixed' to 'scroll'
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'inherit',
    overflow: 'hidden',
  }




  return <div style={containerStyle}>{children}</div>
}



export default BubbleBg
