type Todo={
    title:string;
    description:string;
    checked:boolean;
};

export type TodoList={
    list:Todo[];
    name:string;
}