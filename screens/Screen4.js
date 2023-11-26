import React, { useState, useEffect } from "react";
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

      <ScrollView>
        <View style={{ width: "100%", alignItems: "center", height: "auto" }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.link}
            renderItem={({ item }) => (
              <View style={styles.videoContainer}>
                <Video
                  ref={videoRefs[item.link]}
                  source={require(`../video/${item.link}`)}
                  style={styles.video}
                  resizeMode="cover" // hoặc "contain", tùy thuộc vào cách bạn muốn hiển thị
                  shouldPlay={false}
                  isLooping={false}
                  useNativeControls={true}
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
        </View>
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
  },
  fontVideo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  videoContainer: {
    alignItems: "center",
    marginBottom: 50,
    width: 380,
    marginTop: 3,
  },
  video: {
    // resizeMode: "vertical",
    width: "100%",
    height: screenHeight * 0.35,
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  playPauseButton: {
    position: "absolute",
    top: 120,
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
