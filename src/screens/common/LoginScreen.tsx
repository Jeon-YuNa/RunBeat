import ButtonForm from "@/src/components/common/ButtonForm";
import InputForm from "@/src/components/common/InputForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const LoginScreen = () => {
  const [IdValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isChecked, setChecked] = useState(false);

  const loginHandler = async () => {
    if (isChecked) {
      try {
        await AsyncStorage.setItem("userId", IdValue);
        await AsyncStorage.setItem("userPassword", passwordValue);
        console.log("저장 완료:", IdValue, passwordValue);
      } catch (error) {
        console.error("저장 오류:", error);
      }
    } else {
      console.log("체크박스가 체크되지 않았으므로 저장되지 않음.");
    }
  };

  return (
    <View style={styles.section}>
      <InputForm
        value={IdValue}
        setValue={(e: string) => setIdValue(e)}
        title="아이디"
        placeholder="아이디를 입력하세요"
      />
      <InputForm
        value={passwordValue}
        setValue={(e: string) => setPasswordValue(e)}
        title="비밀번호"
        placeholder="비밀번호를 입력하세요"
      />
      <View style={styles.autoLogin}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#3C23D7" : undefined}
          style={styles.checkbox}
        />
        <Text style={styles.label}>자동로그인</Text>
      </View>
      <ButtonForm name="로그인" onPress={loginHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    paddingTop: 50,
  },
  autoLogin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    borderColor: "#aaaaaa",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#aaaaaa",
    marginLeft: 10,
  },
});
export default LoginScreen;
