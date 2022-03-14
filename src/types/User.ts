import { TodoList } from "./Todo";

export type user={
    name:String;
    password?:String;
    url?:string;
    todoList?:[TodoList];
}