import { Id, Nullable } from '@/types';

export interface TodoItem {
  id: Id;
  text: string;
  complete: boolean;
  author: string;
  createdDate: string;
  modifiedDate: Nullable<string>;
  removed: boolean;
}

export interface TodoStore {
  todos: TodoItem[];
}

export enum TodoMode {
  Edit,
  View,
}
