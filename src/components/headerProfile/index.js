import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/profile.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>Zacky Argya Tarigan</Text>
        <Text style={styles.hobbyText}>Hobi: Basketball</Text>
        <Text style={styles.cityText}>Kota: Medan</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f8ff",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  hobbyText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  cityText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
});

export default ProfileHeader;