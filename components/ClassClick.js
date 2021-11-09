import React, { Component } from 'react'


class ClassClick extends Component {
   clickHandler(){
        alert('hi classy')
    }  
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}> Click me classy!</button>
            </div>
        )
    }
}

export default ClassClick
