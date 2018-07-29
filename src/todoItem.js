import React from 'react';


class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);

        this.state = {
            isEditing: false
        }
    }
    updateItem(event){
        console.log(this.input.value)
        event.preventDefault();
        this.props.editTask(this.props.index , this.input.value);
        this.toggleState();
        }

    toggleState(){
        const isEditing = this.state.isEditing;
        this.setState({
            isEditing : !isEditing
        })
    }

    renderForm(){
        return(
            <form onSubmit = {this.updateItem}>
            <input type='text' ref = {(value)=>{
                this.input = value
            }} defaultValue={this.props.details.name} />
            <button type='submit'>update</button>
            </form>
            )
    }
    renderItem(){
        return(
            <li onClick = {() =>{
                this.props.clickHandler(this.props.index);
            }}
            className = {this.props.details.completed ? 'completed' : ''} >
            {this.props.details.name}
            <button onClick={(event)=>{
                event.stopPropagation();
                this.props.deleteTask(this.props.index)
            }}>delete</button>
            <button onClick={(event)=>{
                event.stopPropagation();
                this.toggleState();
            }}>edit</button>
            </li>
            )
    }


    render(){
        const isEditing =this.state.isEditing
        return(
        <section>
          {
            isEditing ? this.renderForm(): this.renderItem()
          }
           </section>
            )
    }
}


export default TodoItem;