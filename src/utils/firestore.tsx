import {collection, deleteDoc, doc, getDocs, query, setDoc, where} from "firebase/firestore";
import {dbFirestore} from "../../firebaseConfig";

type setDataProps = {
    collection: string,
    fileName: string,
    data: object
}

/**
 * Can create and overwrite data
 */
const setData = async ({collection, fileName, data}: setDataProps) => {
    await setDoc(doc(dbFirestore, collection, fileName), data);
}

const deleteData = async (collection: string, fileName: string) => {
    await deleteDoc(doc(dbFirestore, collection, fileName));
}

/**
 * Add data user to collection "UsersRequestingHelp".
 * Overwrites if user data already exists.
 *
 * @param username username of person that needs help
 * @param latitude current latitude
 * @param longitude current longitude
 * @param timestamp Date class instance that will be saved as timestamp.toString()
 */
export const addUserRequestingHelp = async (username: string, latitude: string, longitude: string, timestamp: Date) => {
    await setData({
        collection: "UsersRequestingHelp",
        fileName: username,
        data: {
            latitude: latitude,
            longitude: longitude,
            timestamp: timestamp.toString()
        }
    })
}


export const deleteUserRequestingHelp = async (username: string) => {
    await deleteData("UsersRequestingHelp", username);
}

export const getUsersWhoWantToHelp = async (username: string): Promise<Array<{ username: string, phoneNumber: string }>> => {
    const querySnapshot = await
        getDocs(
            query(
                collection(dbFirestore, "UsersWantingToHelp"),
                where("wantToHelpUser", "==", username)));
    let toReturn: Array<{ username: string, phoneNumber: string }> = [];
    querySnapshot.forEach((doc) => {
        if (doc.data().helpWanted && doc.data().wantToHelpUser == username) {
            toReturn.push({username: doc.id, phoneNumber: doc.data().phoneNumber});
        }
    });
    return toReturn;
}