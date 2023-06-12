import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {

  }
  ngOnInit(): void {
     const localData = localStorage.getItem('todoItems');
     if(localData != null){
      this.todoItemsArray = JSON.parse(localData);
     }
  }
  open(content: any) {
    this.modalService.open(content);
  }
  todoItem: string = '';
  todoItemsArray: string[] =[];
  addTask(){
    this.todoItemsArray.push(this.todoItem);
    localStorage.setItem('todoItems',JSON.stringify(this.todoItemsArray))
    this.todoItem = '';
  }
  deleteTask(task: string) {
    const index = this.todoItemsArray.indexOf(task);
    if (index > -1) {
      this.todoItemsArray.splice(index, 1);
      localStorage.setItem('todoItems', JSON.stringify(this.todoItemsArray));
    }
  }
}
