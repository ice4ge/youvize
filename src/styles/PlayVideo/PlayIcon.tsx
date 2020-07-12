import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <Circle cx={7.5} cy={7.5} r={7.5} fill="#FFA550" />
      <Path
        d="M10.004 7.189a.5.5 0 010 .857l-3.528 2.117a.5.5 0 01-.758-.428V5.5a.5.5 0 01.758-.429l3.528 2.117z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent;
