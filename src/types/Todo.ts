type Todo={
    title:string;
    description:string;
    checked:string;
};

export type TodoList={
    list:[Todo];
    name:string;
}