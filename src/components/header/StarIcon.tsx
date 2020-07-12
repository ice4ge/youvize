import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <Path
        d="M6.827.82C7.04.17 7.961.17 8.173.82l1.444 4.446h4.674c.686 0 .97.877.416 1.28l-3.782 2.747 1.445 4.446c.212.651-.534 1.193-1.088.79L7.5 11.783 3.718 14.53c-.554.402-1.3-.14-1.088-.791l1.445-4.446L.293 6.546c-.554-.403-.27-1.28.416-1.28h4.674L6.827.821z"
        fill="#FFA550"
      />
    </Svg>
  )
}

export default SvgComponent
