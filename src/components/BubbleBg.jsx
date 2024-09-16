

const BubbleBg = ({ children }) => {
  // Function to generate the bubble SVG string
  const generateBubbleSVG = () => {
    const bubbles = Array.from({ length: 80 }, () => ({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 3 + 0.3,
    }))

    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#60a6f0"/>
        <defs>
          <radialGradient id="bubbleGradient" cx="30%" cy="30%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stop-color="rgb(255, 255, 255)" stop-opacity="0.8" />
            <stop offset="70%" stop-color="rgb(96, 166, 240)" stop-opacity="0.6" />
            <stop offset="100%" stop-color="rgb(96, 166, 240)" stop-opacity="0.3" />
          </radialGradient>
        </defs>
        ${bubbles
          .map(
            (bubble) => `
          <circle cx="${bubble.cx}%" cy="${bubble.cy}%" r="${bubble.r}%" fill="url(#bubbleGradient)" stroke="#d7e6f5" stroke-width="0.5"></circle>
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
    backgroundSize: 'cover',
    backgroundAttachment: 'scroll', // Changed from 'fixed' to 'scroll'
    minHeight: '100vh',
    width: '100%',
  }

  return <div style={containerStyle}>{children}</div>;
}

export default BubbleBg
