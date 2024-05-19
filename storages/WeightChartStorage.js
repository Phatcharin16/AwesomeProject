import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@weightchart"; //เปลี่ยนแค่ KEY 
//ดึงข้อมูลทั้งหมดขึ้นมาแสดง
const readItems = async () => {
  try {
    let string_value = await AsyncStorage.getItem(STORAGE_KEY);
    let items = string_value != null ? JSON.parse(string_value) : [];
    return items;
  } catch (error) {
    console.log(error);
  }
};

//เพิ่มข้อมูลและอัพเดทข้อมูล ตาม item ที่ระบุไว้
const writeItems = async (values) => {
  // console.log("PRESS!!");
  try {    
    //WRITE
    string_values = JSON.stringify(values);
    await AsyncStorage.setItem(STORAGE_KEY, string_values);
  } catch (error) {
    console.log(error);
  }
};

export default { readItems, writeItems };

