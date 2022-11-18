import {doc, setDoc} from "firebase/firestore";
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

/**
 * Add data user to collection "UsersRequestingHelp".
 * Overwrites if user data already exists.
 *
 * @param username username of person that needs help
 * @param latitude current latitude
 * @param longitude current longitude
 * @param timestamp Date class instance that will be saved as timestamp.toString()
 */
export async function addUserRequestingHelp(username: string, latitude: string, longitude: string, timestamp: Date) {
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