import { PropTypes } from "prop-types"
import { forwardRef} from "react"
import JBBoxStyle from "./JBBoxStyle"

const JBBox = forwardRef(({bgColor, color, children, ...rest}, ref) => (
    <JBBoxStyle 
        {...rest}
        ref={ref}
        ownerState={{bgColor, color}}
    >
        {children}
    </JBBoxStyle>
))

JBBox.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
}

JBBox.defaultProps = {
    bgColor: "transparent",
    color:" black"
}

export default JBBox