import PokemonCard from "@/components/PokemonCard";
import {
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

export interface IPokemonCard {
  name: string;
  image: ImageSourcePropType;
  type: string;
  abilities: string[];
  hp: number;
  moves: string[];
  weaknesses: string[];
}

export default function Index() {
  const charmanderData: IPokemonCard = {
    name: "Charmander",
    image: require("../assets/images/charmander.png"),
    type: "Fire",
    abilities: ["Blaze", "Solar Power"],
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData: IPokemonCard = {
    name: "Squirtle",
    image: require("../assets/images/squirtle.png"), // Replace with the actual image path
    type: "Water",
    abilities: [],
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData: IPokemonCard = {
    name: "Bulbasaur",
    image: require("../assets/images/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    abilities: [],
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData: IPokemonCard = {
    name: "Pikachu",
    image: require("../assets/images/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    abilities: [],
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard data={charmanderData} style={styles.text} />
        <PokemonCard data={squirtleData} style={styles.text} />
        <PokemonCard data={bulbasaurData} style={styles.text} />
        <PokemonCard data={pikachuData} style={styles.text} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "plum",
    backgroundColor: "#F5F5F5",
    paddingTop: Platform.OS === "android" ? 24 : 56,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
