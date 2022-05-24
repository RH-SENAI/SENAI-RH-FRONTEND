// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const usuarioAutenticado = () => AsyncStorage.getItem('userToken') !== null;

// export const parseJwt = () => {
//     let base64 = AsyncStorage.getItem('userToken').split('.')[1];

//     return JSON.parse(window.atob(base64))
// }
import AsyncStorage from "@react-native-async-storage/async-storage";

export const usuarioAutenticado = async () => await AsyncStorage.getItem('userToken') !== null;

export const parseJwt = async () => {
    let base64 = await AsyncStorage.getItem('userToken').split('.')[1];
    

    return JSON.parse(window.atob(base64))
}
