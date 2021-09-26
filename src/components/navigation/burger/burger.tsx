import * as React from 'react'
import {AppState} from '../../../app'

interface Props {
    appState: AppState
}
export class Burger extends React.Component<Props> {

    constructor(props){
        super(props)
    }
    open(){
        this.props.appState.navigationOpen = true
    }
    render() {
        return (<div onClick={this.open} className='burger'>
            <img src='public/images/burger-open.svg' />
        </div>)
    }
}