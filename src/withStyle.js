import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'

function withStyle(Component, styles) {

    const NewCom = (props) => {
        if (props.staticContext) {
            props.staticContext.css.push(styles._getCss())
        }
        return <Component {...props}></Component>
    }
    hoistNonReactStatic(NewCom, Component)
    return NewCom
}

export default withStyle