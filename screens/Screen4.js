import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const data = [
  {
    link: "video.mp4",
    name: "Mỹ, Trung Quốc tranh vai trò hòa giải ở Gaza, bên nào “thắng”?",
  },
  {
    link: "video2.mp4",
    name: "Thanh niên Việt Nam 'LẦN ĐẦU' gặp Ronaldo ngoài đời và 'BIỂU CẢM' cực hài",
  },
  {
    link: "video3.mp4",
    name: "CÚ HATTRICK HỦY DIỆT CỦA MESSI - MBAPPE - NEYMAR",
  },
  {
    link: "video4.mp4",
    name: "Mpabee toả sáng như Beckharm",
  },
];

export default function Screen4() {
  const [videoRefs, setVideoRefs] = useState({});
  const [isPlaying, setIsPlaying] = useState({});

  useEffect(() => {
    const refs = {};
    const playingState = {};
    data.forEach((item) => {
      refs[item.link] = React.createRef();
      playingState[item.link] = false;
    });
    setVideoRefs(refs);
    setIsPlaying(playingState);
  }, []);

  const playPauseVideo = async (link) => {
    if (videoRefs[link].current) {
      const status = await videoRefs[link].current.getStatusAsync();
      if (status.isPlaying) {
        videoRefs[link].current.pauseAsync();
      } else {
        videoRefs[link].current.playAsync();
      }
      setIsPlaying({
        ...isPlaying,
        [link]: !isPlaying[link],
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={["#5eb4ba", "#155380"]}
          style={styles.headerGradient}
        >
          <Text style={styles.fontVideo}>Video</Text>
        </LinearGradient>
      </View>

      <View style={styles.listvideo}>
        <ScrollView nestedScrollEnabled={true}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.link}
            renderItem={({ item }) => (
              <View style={styles.videoContainer}>
                <Video
                  ref={videoRefs[item.link]}
                  source={require(`../video/${item.link}`)}
                  style={styles.video}
                  resizeMode="contain"
                  shouldPlay={false}
                  isLooping={false}
                  useNativeControls
                />
                <TouchableOpacity
                  onPress={() => playPauseVideo(item.link)}
                  style={styles.playPauseButton}
                >
                  <AntDesign
                    name={isPlaying[item.link] ? "pausecircleo" : "playcircleo"}
                    size={50}
                    color="#fff"
                  />
                </TouchableOpacity>
                <Image
                  style={styles.logo}
                  source={require("../images/logoKenh.png")}
                  resizeMode="cover"
                />
                <Text style={styles.videoName}>{item.name}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerGradient: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: screenHeight * 0.1,
    backgroundImage: "linear-gradient(to right, #5eb4ba, #155380)",
    alignItems: "center",
    justifyContent: "center",
  },
  listvideo: {
    flex: 1,
  },
  fontVideo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  videoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",

    marginBottom: 50,
  },
  video: {
    width: screenWidth,
    height: screenHeight * 0.4,
    backgroundColor: "transparent",
  },
  playPauseButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  logo: {
    height: 30,
    width: 100,
    marginTop: 5,
  },
  videoName: {
    width: "80%",
    color: "#000",
    fontFamily: "Inter",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: 600,
  },
});
