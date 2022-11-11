/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodoGroup = /* GraphQL */ `
  subscription OnCreateTodoGroup(
    $filter: ModelSubscriptionTodoGroupFilterInput
    $owner: String
  ) {
    onCreateTodoGroup(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodoGroup = /* GraphQL */ `
  subscription OnUpdateTodoGroup(
    $filter: ModelSubscriptionTodoGroupFilterInput
    $owner: String
  ) {
    onUpdateTodoGroup(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodoGroup = /* GraphQL */ `
  subscription OnDeleteTodoGroup(
    $filter: ModelSubscriptionTodoGroupFilterInput
    $owner: String
  ) {
    onDeleteTodoGroup(filter: $filter, owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      content
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      content
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      content
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
