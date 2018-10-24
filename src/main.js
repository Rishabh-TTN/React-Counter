import React from 'react';
import Counter from "./counter";
import {ChangeAll} from "./counter"

class MainCounter extends  React.Component{

    constructor(){
        super();

        this.state = {
            value:'',
        }
    }

    incrementAll = () =>
    {
        this.setState({ value: 'inc'});
    }
    decrementAll = () =>
    {
        this.setState({ value: 'dec'});
    }
    /*showCounterNo = (counterNo) =>
    {
        this.setState({counterNo:counterNo});
    }*/

    render(){
        return(
            <div>
                <Counter value={this.state.value} />
                <Counter value={this.state.value} />
                <Counter value={this.state.value} />
                <ChangeAll incrementAll={this.incrementAll} decrementAll={this.decrementAll}/>
            </div>
        )

    }

}

export default MainCounter;