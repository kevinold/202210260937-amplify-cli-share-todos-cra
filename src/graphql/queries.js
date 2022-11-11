/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodoGroup = /* GraphQL */ `
  query GetTodoGroup($id: ID!) {
    getTodoGroup(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodoGroups = /* GraphQL */ `
  query ListTodoGroups(
    $filter: ModelTodoGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      content
      group
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        group
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
