import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getMenuItem = async (collectionName) => {
  try {
    const data = await getDocs(collection(db, collectionName));
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const dataToReturn = {
      collection: collectionName,
      data: [...filteredData],
    };
    return dataToReturn;
  } catch (error) {
    console.log(error);
  }
};
