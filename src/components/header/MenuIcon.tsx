import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={28} height={21} viewBox="0 0 28 21" fill="none">
      <Path
        d="M0 1.23C0 .552.33 0 .737 0h26.526C27.67 0 28 .551 28 1.23c0 .68-.33 1.232-.737 1.232H.737C.33 2.462 0 1.91 0 1.23zm27.263 8.54H.737C.33 9.77 0 10.32 0 11c0 .68.33 1.23.737 1.23h26.526c.407 0 .737-.55.737-1.23 0-.68-.33-1.23-.737-1.23zm0 8.768H.737C.33 18.538 0 19.09 0 19.77 0 20.45.33 21 .737 21h26.526c.407 0 .737-.551.737-1.23 0-.68-.33-1.232-.737-1.232z"
        fill="#A2A2A2"
      />
    </Svg>
  )
}

export default SvgComponent
