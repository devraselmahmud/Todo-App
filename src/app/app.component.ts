import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';

  //array to add all todos
  todoList: Todo [] = [];
  todo: Todo = this.initTodo;

  //initiating id and title by initTodo variable
  get initTodo(): Todo {
    return {
      id: null,
      title: ''
    }
  }

  addTodo (): void {
    console.log(this.todo);
    //update Logic
    if(this.todo.id){
      this.todoList = this.todoList.map(obj => {
        if(obj.id === this.todo.id){
          obj.title = this.todo.title;
        }
        return obj;
      });

    } else {
      //create todo
      // this.todo.id = this.todoList.length + 1;
      this.todo.id = Date.now();
      this.todoList.push({...this.todo});
    }

    console.log(this.todoList);

    //clearing input value
    this.todo = this.initTodo;
  }

  editTodo (todo: Todo): void {
    //referencing todo by spread operator to avoid unnecessary edit showing(ngModel do)
    this.todo = {...todo};
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(obj => obj.id != id);
  }

}
