import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const InstructionText = ({children, sStyle}) => {
  return (
     <Text style={[styles.instructionText, sStyle]}>{children}</Text>
  )
}

export default InstructionText;


const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
      },
})