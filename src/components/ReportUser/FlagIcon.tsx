import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg width={11} height={15} viewBox="0 0 11 15" fill="none">
      <Path
        d="M10.367 4.763a.86.86 0 010 1.474l-6.065 3.64A.86.86 0 013 9.138V1.861a.86.86 0 011.302-.737l6.065 3.639z"
        fill="#E15554"
      />
      <Rect width={2} height={15} rx={1} fill="#E15554" />
    </Svg>
  )
}

export default SvgComponent
