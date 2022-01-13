export const createWorkspace = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add({
        ...user,
        fullName: "Noah Xavier",
        facebookUrl: "https://www.facebook.com/noahso",
        twitterUrl: "https://twitter.com/noahso",
      })
      .then(() => {
        dispatch({ type: "CREATE_WORKSPACE", user });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_WORKSPACE_ERROR", err });
      });
  };
};
