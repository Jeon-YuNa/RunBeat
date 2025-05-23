import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import ButtonForm from "../common/ButtonForm";
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
  const [selectedTime, setSelectedTime] = useState("");
  const registerButton = () => {
    return console.log("예약하기 성공");
  };

  const PTdata = [
    { time: "09:00", available: false },
    { time: "10:00", available: true },
    { time: "11:00", available: true },
    { time: "12:00", available: true },
    { time: "13:00", available: true },
    { time: "14:00", available: true },
    { time: "15:00", available: true },
    { time: "16:00", available: true },
    { time: "17:00", available: true },
    { time: "18:00", available: false },
  ];
  const AM = PTdata.filter((item) => parseInt(item.time.slice(0, 2)) < 12);
  const PM = PTdata.filter((item) => parseInt(item.time.slice(0, 2)) >= 12);

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
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.ampmText}>오전</Text>
        <View style={styles.timeWrapper}>
          {AM.map((v, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.timeButton,
                  selectedTime === v.time && styles.timeButtonActive,
                  v.available === false && styles.timeButtonEmpty,
                ]}
                onPress={() => setSelectedTime(v.time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === v.time && styles.timeTextActive,
                    v.available === false && styles.timeTextEmpty,
                  ]}
                >
                  {v.time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.ampmText}>오후</Text>
        <View style={styles.timeWrapper}>
          {PM.map((v, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.timeButton,
                  selectedTime === v.time && styles.timeButtonActive,
                  v.available === false && styles.timeButtonEmpty,
                ]}
                onPress={() => setSelectedTime(v.time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === v.time && styles.timeTextActive,
                    v.available === false && styles.timeTextEmpty,
                  ]}
                >
                  {v.time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <ButtonForm name={"예약하기"} onPress={registerButton}></ButtonForm>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -25,
  },
  timeWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  ampmText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333333",
    marginTop: 20,
    marginBottom: 10,
  },
  timeButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: "#ffffff",
    borderRadius: 999,
    borderColor: "#E6E6E6",
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  timeButtonActive: {
    backgroundColor: "#3C23D7",
  },
  timeText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#333333",
  },
  timeTextActive: {
    color: "#ffffff",
  },
  timeButtonEmpty: {
    backgroundColor: "#e6e6e6",
  },
  timeTextEmpty: {
    color: "#B3B3B3",
  },
});
export default PTRegister;
