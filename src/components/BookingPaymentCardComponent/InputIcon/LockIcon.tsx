import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={20} height={19} viewBox="0 0 15 19" fill="none">
      <Path
        d="M7.5 0C4.617 0 2.25 2.306 2.25 5.115v2.193H0V19h15V7.308h-2.25V5.115C12.75 2.306 10.383 0 7.5 0zm0 1.462c2.065 0 3.75 1.64 3.75 3.653v2.193h-7.5V5.115c0-2.012 1.685-3.653 3.75-3.653zm-6 7.307h12v8.77h-12v-8.77z"
        fill="#000"
        fillOpacity={0.3}
      />
    </Svg>
  )
}

export default SvgComponent
