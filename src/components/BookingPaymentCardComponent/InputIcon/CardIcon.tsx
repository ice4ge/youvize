import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width="20" height="14" viewBox="0 0 19 14" fill="none">
            <Path d="M2.03571 0C0.919783 0 0 0.948828 0 2.1V11.9C0 13.0512 0.919783 14 2.03571 14H16.9643C18.0802 14 19 13.0512 19 11.9V2.1C19 0.948828 18.0802 0 16.9643 0H2.03571ZM2.03571 1.4H16.9643C17.3486 1.4 17.6429 1.70352 17.6429 2.1V3.5H2.03571V4.9H17.6429V11.9C17.6429 12.2965 17.3486 12.6 16.9643 12.6H2.03571C1.65137 12.6 1.35714 12.2965 1.35714 11.9V2.1C1.35714 1.70352 1.65137 1.4 2.03571 1.4Z"
            fill="#000" 
            fillOpacity={0.3}
            />
        </Svg>
    )
}

export default SvgComponent
