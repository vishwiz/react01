import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem';
import TodoForm from './todoForm';
import './index.css';

class TodoList extends React.Component{
        constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);

        this.state = {
            tasks : [{
                name: 'Buy Milk',
                completed: false
            },
            {
                name: 'Buy Cheese',
                completed: false
            },
            {
                name: 'Buy Dahi',
                completed: false
            }],
            currentTask: ''
        }
    }
    editTask(index,newValue){
        console.log(index,newValue)
        var tasks = this.state.tasks;
        var task = tasks[index];
        task['name'] = newValue;
        this.setState({
            tasks : tasks
        })
    }

    deleteTask(index){
        console.log(index);
        let tasks = this.state.tasks;
        tasks.splice(index,1);
        this.setState({
            tasks: tasks
        })
    }

    addTask(event){
        event.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name : currentTask,
            completed: false
        })
        this.setState({
            tasks: tasks ,
            currentTask: ''
        })
    }

    updateTask(newValue){
        this.setState({
            currentTask : newValue.target.value
        });
    }

    changeStatus(index){
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks : tasks
        });
    }



    render(){
        return(
            <section>
            <TodoForm
            currentTask = {this.state.currentTask}
            updateTask = {this.updateTask}
            addTask = {this.addTask}
             />
                <ul>
                {
                    this.state.tasks.map( (task,index) =>{
                       return <TodoItem
                        key={index}
                        clickHandler = {this.changeStatus}
                         index ={index}
                         editTask = {this.editTask}
                        deleteTask = {this.deleteTask}
                         details={task} />
                    })
                }
                </ul>
            </section>

            )
    }
 }


ReactDOM.render(<TodoList />, document.getElementById('root'));
