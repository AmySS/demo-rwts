import React, {Component} from 'react';
import './index.css';


interface IHelloProps {
    title: string
}
interface IState {
    sub_title: string,
    count: number
}
export default class Hello extends Component<IHelloProps, IState> {
    constructor(props: IHelloProps) {
        super(props);
        this.state = {
            count: 0,
            sub_title: 'initial sub title',
        }
    }
    
    render() {
        return (
            <div className="header">
                <span>{this.props.title}</span>
                <span className="sub-title">{this.state.sub_title}</span>
                <button onClick={this.onClick} >click me</button>
            </div>
        );
    }

    onClick = ()=> {
        const count: number = this.state.count + 1;
        this.setState({
            count,
            sub_title: count%2 === 0 ? 'initial sub title' :'changed sub title'
        })
    }
 }