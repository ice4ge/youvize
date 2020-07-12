import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width="12" height="21" viewBox="0 0 12 21">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.2611 11.3459C11.64 10.9442 11.64 10.2928 11.2611 9.89104L10.6302 9.22223C10.6279 9.21981 10.6257 9.2174 10.6234 9.21501L2.61754 0.727358C2.23858 0.325597 1.62418 0.325597 1.24522 0.727359L0.63124 1.37829C0.252286 1.78006 0.252286 2.43144 0.631241 2.8332L7.95774 10.6007L0.698749 18.2965C0.319795 18.6983 0.319796 19.3497 0.69875 19.7514L1.32959 20.4203C1.70854 20.822 2.32295 20.822 2.7019 20.4203L11.2611 11.3459Z"
            fill="white" />
        </Svg>
    )
}

export default SvgComponent;