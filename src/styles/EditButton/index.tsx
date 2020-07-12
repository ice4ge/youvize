import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
import { Container } from "./styles"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
type TProps = {
    top?: number,
    right?: number,
}

const SvgComponent: React.FC<TProps> = (props) => {
    const { top, right } = props;
    return (
        <Container top={top} right={right}>
            <Svg width={38} height={38} viewBox="0 0 38 38" fill="none">
                <G>
                    <Circle cx={19} cy={17} r={15} fill="#FFBE9D" />
                </G>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.596 11.255a2 2 0 012.828 0l.32.318a2 2 0 010 2.829l-.16.16-3.147-3.148.159-.16zm-.946.946l3.147 3.147-5.507 5.508-3.147-3.148 5.507-5.507zM13.73 22.9a.5.5 0 01-.632-.633l1.258-3.772 3.147 3.147L13.73 22.9z"
                    fill="#fff"
                />
                <Defs></Defs>
            </Svg>
        </Container>

    )
}

export default SvgComponent
