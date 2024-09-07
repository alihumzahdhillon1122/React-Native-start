// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   TouchableOpacity,
//   StyleSheet
// } from 'react-native';

// const App: React.FC = () => {
//   const [input, setInput] = useState<string>('');
//   const [result, setResult] = useState<string>('');

//   const handleInput = (value: string) => {
//     setInput(input + value);
//   };

//   const handleClear = () => {
//     setInput('');
//     setResult('');
//   };

//   const handleEqual = () => {
//     try {
//       // eval is generally unsafe, but for simplicity, we're using it here
//       const calculation = eval(input); 
//       setResult(calculation.toString());
//     } catch (error) {
//       setResult('Error');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.resultContainer}>
//         <Text style={styles.resultText}>{input}</Text>
//         <Text style={styles.resultText}>{result}</Text>
//       </View>

//       <View style={styles.buttonContainer}>
//         {['1', '2', '3', '+'].map((item) => (
//           <TouchableOpacity
//             key={item}
//             style={styles.button}
//             onPress={() => handleInput(item)}
//           >
//             <Text style={styles.buttonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.buttonContainer}>
//         {['4', '5', '6', '-'].map((item) => (
//           <TouchableOpacity
//             key={item}
//             style={styles.button}
//             onPress={() => handleInput(item)}
//           >
//             <Text style={styles.buttonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.buttonContainer}>
//         {['7', '8', '9', '*'].map((item) => (
//           <TouchableOpacity
//             key={item}
//             style={styles.button}
//             onPress={() => handleInput(item)}
//           >
//             <Text style={styles.buttonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.buttonContainer}>
//         {['C', '0', '=', '/'].map((item) => (
//           <TouchableOpacity
//             key={item}
//             style={styles.button}
//             onPress={() =>
//               item === 'C' ? handleClear() : item === '=' ? handleEqual() : handleInput(item)
//             }
//           >
//             <Text style={styles.buttonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   resultContainer: {
//     flex: 2,
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     backgroundColor: '#f3f3f3',
//     padding: 20,
//   },
//   resultText: {
//     fontSize: 36,
//     color: '#333',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 20,
//     borderRadius: 10,
//     width: '20%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 24,
//     color: '#fff',
//   },
// });

// export default App;
