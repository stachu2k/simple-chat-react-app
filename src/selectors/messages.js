function getIsFetching(state) {
  return state.messages.isFetching;
}

function getMessages(state) {
  return state.messages.items;
}

export {
  getIsFetching,
  getMessages,
}
