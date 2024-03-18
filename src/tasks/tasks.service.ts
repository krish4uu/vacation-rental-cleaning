import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      propertyName: 'Beach House',
      cleaningDate: '2024-03-01',
      description: 'Full house cleaning after checkout.',
      images: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      ],
    },
    {
      id: '2',
      propertyName: 'Mountain Cabin',
      cleaningDate: '2024-03-05',
      description: 'Prepare for new guests.',
      images: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      ],
    },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(task: Task): Task {
    const newTask = { id: Date.now().toString(), ...task };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(id: string): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }
}
