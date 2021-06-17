import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    addItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        const list = [...this.state.list];

        list.push(newItem);

        console.log('New item added');

        this.setState({
            list,
            newItem: ""
        });
    }

    deleteItem(id) { 
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
        console.log('Item deleted');
    }


    render() {
        const myStyle = {
            color: "black",
            backgroundColor: "lightblue",
            padding: "10px",
            fontFamily: "Arial",
            fontSize: "36px",
            textAlign: "center"
        };

        const myStyle2 = {
            color: "black",
            backgroundColor: "white",
            padding: "10px",
            fontFamily: "Arial",
            fontSize: "36px",
            textAlign: "center"
        };
        return (<
            div className = "App" >
            <div style = {myStyle}> Add an item... <br/>
            <
            input style = {myStyle2} type = "text"
            placeholder = "Type item here..."
            value = { this.state.newItem }
            onChange = { e => this.updateInput("newItem", e.target.value) }/> 

            <button onClick={()=>this.addItem()}> Add    </button>


            <ul style = {{textAlign: "center"}}> {
                this.state.list.map(item => {
                    return ( <
                        li key = { item.id } > { item.value } < button onClick = {()=>this.deleteItem(item.id)}> X </button> 
                        </li >
                        )
                    })
            } 
            </ul> 

            <body style = {myStyle}></body>
             </div>

            
            
           
            </div>
        );
    }
}

export default App;
