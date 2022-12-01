import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
  setDoc,
  where,
  getDoc,
} from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";

/**
 * Can create and overwrite data
 */
const setData = async ({
  collection,
  fileName,
  data,
}: {
  collection: string;
  fileName: string;
  data: object;
}) => {
  await setDoc(doc(dbFirestore, collection, fileName), data);
};

/**
 * Deletes whole file
 */
const deleteData = async (collection: string, fileName: string) => {
  await deleteDoc(doc(dbFirestore, collection, fileName));
};

/**
 * Add data user to collection "UsersRequestingHelp".
 * Overwrites if user data already exists.
 *
 * @param username username of person that needs help
 * @param latitude current latitude
 * @param longitude current longitude
 * @param timestamp Date class instance that will be saved as timestamp.toString()
 */
export const addUserRequestingHelp = async (
  username: string,
  latitude: string,
  longitude: string,
  timestamp: Date
) => {
  await setData({
    collection: "UsersRequestingHelp",
    fileName: username,
    data: {
      latitude: latitude,
      longitude: longitude,
      timestamp: timestamp.toString(),
    },
  });
};

/**
 * Cleanup after cancellation of requesting help.
 * @param username user that cancels requesting help
 */
export const deleteUserRequestingHelp = async (username: string) => {
  await deleteData("UsersRequestingHelp", username);
};

/**
 * Returns a list of objects with username and phoneNumber key:value pairs.
 * @param username username of user who is in need of help
 */
export const getUsersWhoWantToHelp = async (
  username: string
): Promise<Array<{ username: string; phoneNumber: string }>> => {
  const querySnapshot = await getDocs(
    query(
      collection(dbFirestore, "UsersWantingToHelp"),
      where("wantToHelpUser", "==", username)
    )
  );
  let toReturn: Array<{ username: string; phoneNumber: string }> = [];
  querySnapshot.forEach((doc) => {
    toReturn.push({ username: doc.id, phoneNumber: doc.data().phoneNumber });
  });
  return toReturn;
};

export const getUsersWhoRequestHelp = async (
  username: string,
  latitude: string,
  longitude: string,
  timestamp: Date
) => {
  const querySnapshot = await getDocs(
    query(collection(dbFirestore, "UsersRequestingHelp"))
  );
  let toReturn: Array<{
    username: string;
    latitude: string;
    longitude: string;
    timestamp: Date;
  }> = [];
  querySnapshot.forEach((doc) => {
    toReturn.push({
      username: doc.id,
      latitude: doc.data().latitude,
      longitude: doc.data().longitude,
      timestamp: doc.data().data,
    });
  });
  return toReturn;
};

/**
 * Delete user from list of users wanting to help.
 * @param username username of user you want to delete
 */
export const declineHelpFromUser = async (username: string) => {
  await deleteData("UsersWantingToHelp", username);
};

/**
 * Used to clean users wanting to help someone who is no longer in need of any help
 * @param username user that cancelled requesting for help
 */
export const deleteEveryoneWhoWantedToHelpUser = async (username: string) => {
  const querySnapshot = await getDocs(
    query(
      collection(dbFirestore, "UsersWantingToHelp"),
      where("wantToHelpUser", "==", username)
    )
  );
  querySnapshot.forEach((doc) => {
    deleteData("UsersWantingToHelp", doc.id);
  });
};

/**
 * Add new user to collection "UsersData"
 *
 * @param address address of user
 * @param email email of user
 */
export const addUserData = async (
  email: string,
  address?: string,
  phone?: string
) => {
  await setData({
    collection: "UsersData",
    fileName: email,
    data: {
      phone: phone,
      address: address,
    },
  });
};
