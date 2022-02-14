import collectionActionTypes from "./collection.types";
import { firestore } from "../../firebase/firebase.utility";

export const fetchCollectionsSuccess = (collections) => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsStart = () => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart);
    collectionRef
      .get()
      .then((snapshot) => {
        const collections = snapshot.docs.map((object) => object.data());
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
