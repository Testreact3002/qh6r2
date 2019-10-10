const initialState = {
  items: [
    { name: "item 1" },
    { name: "item 2" },
    { name: "item 3" },
    { name: "item 4" },
    { name: "item 5" }
  ],
  selected: -1,
  last: null
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      let n = {
        ...state,
        items: state.items.concat({ name: action.name }),
        last: action.name
      };
      console.log(n)
      return n;
    }
    case "SELECT": {
      return {
        ...state,
        selected: action.index
      };
    }
    default:
      return state;
  }
};

export default list;
