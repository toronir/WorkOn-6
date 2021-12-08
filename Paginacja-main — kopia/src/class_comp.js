import React from 'react'
import { MyContext } from './my_context'

class ClassComp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MyContext.Consumer>
                {(ctx) => {
                return    <h1>This name is class{ctx.name}</h1>
                }}

            </MyContext.Consumer>
        )
    }
}
export default ClassComp