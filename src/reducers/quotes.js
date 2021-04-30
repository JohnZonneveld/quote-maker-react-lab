export default (state = [], action) => {

  let index

  switch (action.type) {
    case "ADD_QUOTE":
      return [
        ...state,
        action.quote
      ];

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      // debugger
      // index = state.findIndex(quote => quote.id === action.quoteId)
      // quote = state[index]
      // return [
      //   ...state.slice(0, index),
      //   Object.assign({}, quote, { votes: quote.votes += 1 }),
      //   ...state.slice(index + 1)
      // ]
      index = state.findIndex(quote => quote.id === action.quoteId)
      let temp_state = [...state];
      temp_state[index] = {...temp_state[index], votes: temp_state[index].votes += 1}
      state = temp_state
      return state

      case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId)
        temp_state = [...state];
        if (temp_state[index].votes > 0) {
          temp_state[index] = {...temp_state[index], votes: temp_state[index].votes -= 1}
          state = temp_state
          return state
        }
        return state
  
  
    default: return state;
  }
}
