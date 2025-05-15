import UseContainer from "@/src/components/common/UseContainer";
import LoginScreen from "../common/LoginScreen";

const UserHomeScreen = () => {
  return (
    // <IndexScreen />
    <UseContainer>
      {/* <Text>유저 홈 페이지</Text> */}
      <LoginScreen />
      {/* <SignUpScreen /> */}
    </UseContainer>
  );
};
export default UserHomeScreen;
