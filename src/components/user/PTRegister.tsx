import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
LocaleConfig.locales["ko"] = {
  monthNames: [
    "01월 ",
    "02월 ",
    "03월 ",
    "04월 ",
    "05월 ",
    "06월 ",
    "07월 ",
    "08월 ",
    "09월 ",
    "10월 ",
    "11월 ",
    "12월 ",
  ],
  monthNamesShort: [
    "01월 ",
    "02월 ",
    "03월 ",
    "04월 ",
    "05월 ",
    "06월 ",
    "07월 ",
    "08월 ",
    "09월 ",
    "10월 ",
    "11월 ",
    "12월 ",
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
};
LocaleConfig.defaultLocale = "ko";

const PTRegister = () => {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <View>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#3C23D7" },
        }}
        theme={{
          todayTextColor: "#3C23D7",
          selectedDayBackgroundColor: "#3C23D7",
          arrowColor: "#3C23D7",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default PTRegister;
