import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

type NumberProps = {
  num1: number;
  num2: number;
};

export default function CalculatorQ4Screen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');

  const handleClearBtn = () => {
    setInput('');
    setResult('');
    setOperator('');
  };

  const handleOperatorInput = (selectedOperator: string) => {
    if (input === '') return; // prevent operator press without number
    setOperator(selectedOperator);
    setResult(input);
    setInput('');
  };

  const handleEqualBtn = () => {
    const number1 = parseFloat(result);
    const number2 = parseFloat(input);

    if (isNaN(number1) || isNaN(number2)) {
      Alert.alert('Invalid input');
      return;
    }

    let computed = '';
    switch (operator) {
      case '+':
        computed = add({ num1: number1, num2: number2 }).toString();
        break;
      case '-':
        computed = subtract({ num1: number1, num2: number2 }).toString();
        break;
      case '*':
        computed = multiply({ num1: number1, num2: number2 }).toString();
        break;
      case '/':
        if (number2 === 0) {
          Alert.alert("Cannot divide by zero");
          return;
        }
        computed = divide({ num1: number1, num2: number2 }).toString();
        break;
      default:
        return;
    }

    setResult(computed);
    setInput(computed);
    setOperator('');
  };

  const handleButtonPress = (num: string) => {
    if (num === '.' && input.includes('.')) return;
    if (input === '0' && num !== '.') {
      setInput(num);
    } else {
      setInput(input + num);
    }
  };

  const subtract = ({ num1, num2 }: NumberProps): number => num1 - num2;
  const multiply = ({ num1, num2 }: NumberProps): number => num1 * num2;
  const divide = ({ num1, num2 }: NumberProps): number => num1 / num2;
  const add = ({ num1, num2 }: NumberProps): number => num1 + num2;

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={input}
        onChangeText={setInput}
        placeholder="Enter number"
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClearBtn}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handleEqualBtn}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
