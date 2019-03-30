export function mutationCreator(type, mutation, handler) {
  return {
    Mutation: mutation,
    Type: type,
    handler,
  };
}
