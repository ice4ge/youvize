import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31 1.333H19a1 1 0 011 1V3a1 1 0 01-1 1H6.31a2.666 2.666 0 01-4.62 0H1a1 1 0 01-1-1v-.667a1 1 0 011-1h.69a2.666 2.666 0 014.62 0zm12 7.334H19a1 1 0 011 1v.666a1 1 0 01-1 1h-.69a2.666 2.666 0 01-4.62 0H1a1 1 0 01-1-1v-.666a1 1 0 011-1h12.69a2.666 2.666 0 014.62 0zM19 16h-6.69a2.666 2.666 0 00-4.62 0H1a1 1 0 00-1 1v.667a1 1 0 001 1h6.69a2.666 2.666 0 004.62 0H19a1 1 0 001-1V17a1 1 0 00-1-1z"
        fill="#FFA550"
      />
    </Svg>
  )
}

export default SvgComponent
