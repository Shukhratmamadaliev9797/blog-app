import React from "react";
import TheLatestNews from "../components/TheLatestNews";
import Technology from "../components/Technology";
import World from "../components/World";
import Politics from "../components/Politics";
import Sport from "../components/Sport";
import MoreStories from "../components/MoreStories";
export default function HomeScreen() {
  return (
    <div className="homePage">
      <TheLatestNews />
      <Technology />
      <World />
      <Politics />
      <Sport />
      <MoreStories />
    </div>
  );
}
