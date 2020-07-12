import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={20} height={14} viewBox="0 0 20 14" fill="none">
      <Path
        d="M.25 0v13.5h19.5V0H.25zm3.234 1.5h13.032L10 5.836 3.484 1.5zm-1.734.656l7.828 5.227.422.258.422-.258 7.828-5.227V12H1.75V2.156z"
        fill="#000"
        fillOpacity={0.3}
      />
    </Svg>
  )
}

export default SvgComponent
