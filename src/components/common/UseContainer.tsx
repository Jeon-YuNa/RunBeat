import { SafeAreaView, StyleSheet } from "react-native";
import RunBeatLogo from "./RunBeatLogo";

const UseContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={styles.container}>
      <RunBeatLogo />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default UseContainer;
