import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
export default function Index() {
  interface user {
    name: string;
    age: number;
  }
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<boolean>(true);
  const [object, setObject] = useState<user>({
    name: "name",
    age: 1,
  });
  const [count, setCount] = useState<number>(1);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <View // div
      // ko có khái niệm css
      style={styles.contaner}
    >
      <Text style={styles.hello}>
        {/* code style ko bảo trị đc "khó" => dùng  css in js . dùng thông qua 1 biến StyleSheet */}
        Hello world .
      </Text>
      <Text style={styles.name}>Ngô Đình Phước d!dd</Text>
      {/* // p */}

      <Text>State : {name}</Text>

      {/* state + button  */}
      <Text>{count}</Text>
      <Button title="Nhấn vào tôi" onPress={() => handlePlus()}></Button>

      {/*  imput */}
      <Text>Name: {name}</Text>
      <TextInput
        multiline // same textArae
        // senntences : thì có dấu chấm mới viết hoa

        autoCapitalize={"characters"}
        style={{
          borderColor: "green",
          borderWidth: 2,
          width: 200,
          padding: 10,
        }}
        //onChangeText :  truyền 1 string là value

        onChangeText={(value) => setName(value)}
      />
      <Text>Age: {name}</Text>
      <TextInput
        multiline // same textArae
        style={{
          borderColor: "green",
          borderWidth: 2,
          width: 200,
          padding: 10,
          
        }}
        keyboardType='numeric'
        onChangeText={(value) => setName(value)}
      />
    </View>
  );
}
// css in js
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hello: {
    color: "red",
    fontSize: 60,
    padding: 2,
    borderWidth: 1,
  },
  name: {
    fontSize: 30,
    color: "yellow",
    marginTop: 5,
    paddingTop: 5,
  },
});
// typescript:  check  cú pháp
//
