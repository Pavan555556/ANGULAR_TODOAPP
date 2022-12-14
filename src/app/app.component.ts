import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {



	/* An empty array that is responsible
	to add a division */
	public items:any[] = [];

	/* A two-way binding performed which
	pushes text on division */
	 public newTask;


	/* When input is empty, it will
	not create a new division */
	public addToList(newTask: any) {
		if (this.newTask == '') {
		}
		else {
			this.items.push(this.newTask);
			this.newTask = '';
		}
	}

	/* This function takes to input the
	task, that has to be deleted*/
	public deleteTask(index: number) {
		this.items.splice(index, 1);
	}
}
