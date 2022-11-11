/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodoGroup = /* GraphQL */ `
  mutation CreateTodoGroup(
    $input: CreateTodoGroupInput!
    $condition: ModelTodoGroupConditionInput
  ) {
    createTodoGroup(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodoGroup = /* GraphQL */ `
  mutation UpdateTodoGroup(
    $input: UpdateTodoGroupInput!
    $condition: ModelTodoGroupConditionInput
  ) {
    updateTodoGroup(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodoGroup = /* GraphQL */ `
  mutation DeleteTodoGroup(
    $input: DeleteTodoGroupInput!
    $condition: ModelTodoGroupConditionInput
  ) {
    deleteTodoGroup(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      content
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      content
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      content
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
