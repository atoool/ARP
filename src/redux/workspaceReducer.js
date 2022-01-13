const initState = {
  users: [
    {
      id: "1",
      name: "Sofian",
      email: "sofian@gmail",
      password: "123456",
      role: "admin",
      facebookUrl: "www.facebook.com/sofianso",
      twitterUrl: "www.twitter.com/sofianso",
    },
  ],
};

const workspaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_WORKSPACE":
      console.log("create workspace", action.user);
      return state;
    case "CREATE_WORKSPACE_ERROR":
      console.log("create workspace error", action.err);
      return state;
    default:
      return state;
  }
};

export default workspaceReducer;
