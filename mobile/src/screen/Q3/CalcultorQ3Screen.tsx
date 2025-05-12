import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles";

type taxProps = {
	title: string;
	description: string;
}

export default function CalculatorQ3Screen({ title, description }: taxProps) {
	const [income, setIncome] = useState('');
	const [tax, setTax] = useState('');

	const calculateTax = () => {
		const incomeValue = parseFloat(income);

		if (isNaN(incomeValue) || incomeValue < 0) {
			setTax('Invalid income');
			return;
		}

		let taxAmount = 0;
		if (incomeValue <= 1000000) {
			taxAmount = incomeValue * 0.1;
		} else if (incomeValue <= 5000000) {
			taxAmount = 1000000 * 0.1 + (incomeValue - 1000000) * 0.2;
		} else {
			taxAmount = 1000000 * 0.1 + 4000000 * 0.2 + (incomeValue - 5000000) * 0.3;
		}

		setTax(`Income tax: ${taxAmount.toFixed(1)}$`);
	}


	return (
		// Suggested code may be subject to a license. Learn more: ~LicenseLog:51803889.
		<View style={styles.container}>
			<Text style={styles.title}>{title.toUpperCase()}</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your income"
				keyboardType="numeric"
				value={income}
				onChangeText={setIncome}
			/>

			<TouchableOpacity style={styles.button} onPress={calculateTax}>
				<Text style={styles.buttonText}>{description}</Text>
			</TouchableOpacity>
			<Text style={styles.result}>{tax}</Text>

		</View>
	);
}