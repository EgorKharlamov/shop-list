import { Todos } from '@/modules/todos/components/Todos/Todos';

const TodosPage = () => {
  return (
    <>
      <div class='p-5'>
        <h1 class='text-red-400'>Todos Page</h1>
        <div class='mt-2 flex flex-col gap-2'>
          <Todos />
        </div>
      </div>
    </>
  );
};
export default TodosPage;
