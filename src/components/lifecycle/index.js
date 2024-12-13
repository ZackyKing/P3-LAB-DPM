import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Count berubah menjadi", count);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      console.log("Count is a multiple of 5!");
    }
  }, [count]);

  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
    setElapsedTime(0);
  };

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 1000) + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Cycle Component</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
      <Button title="Reset Count" onPress={resetCount} />
      <Button title="Generate Random Number" onPress={generateRandomNumber} />
      <Text style={[styles.countText, { color: count > 10 ? "red" : "black" }]}>Count: {count}</Text>
      <Text style={styles.timerText}>Elapsed Time: {elapsedTime} seconds</Text>
      <Text style={styles.clockText}>Current Time: {currentTime}</Text>
      {randomNumber !== null && <Text style={styles.randomNumberText}>Random Number: {randomNumber}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  countText: {
    fontSize: 16,
    marginTop: 10,
  },
  timerText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  clockText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    color: "blue",
  },
  randomNumberText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    color: "green",
  },
});

export default Lifecycle;
