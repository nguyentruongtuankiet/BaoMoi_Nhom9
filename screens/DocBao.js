import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { FlatList } from "react-native";
  import { AntDesign } from "@expo/vector-icons";
  export default function DocBao({ route, navigation }) {
    const [data, setData] = useState([]);
    const { articleId, name, content, image } = route.params;
    console.log(articleId);
  
    useEffect(() => {
      fetch(`http://localhost:3000/articles/${articleId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((x) => x.json())
        .then((data) => {
          setData(data);
        });
    }, []);
    //   const generateInterleavedData = (content, image) => {
    //     return content.reduce(
    //       (result, paragraph, index) => [
    //         ...result,
    //         paragraph,
    //         image[index],
    //       ],
    //       []
    //     );
    //   };
    //   const interleavedData = generateInterleavedData(content, image);
  
    return (
      <View style={styles.container}>
        <View style = {{padding: 15, marginBottom: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate("screen3")}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ position: "absolute", top: 2, left: 5 }}
            />
          </TouchableOpacity>
        </View>
       
          <View style={{ flex: 9 }}>
          <ScrollView>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.content}>{content[0]}</Text>
            <Image source={{ uri: image[0] }} style={styles.image} />
            <Text style={styles.content}>{content[1]}</Text>
            <Image source={{ uri: image[1] }} style={styles.image} />
            <Text style={styles.content}>{content[2]}</Text>
            <Image source={{ uri: image[2] }} style={styles.image} />
            </ScrollView>
          </View>
       
        {/* {Array.isArray(content) &&
            content.map((paragraph, index) => (
              <Text key={index} style={styles.content}>
                {paragraph}
              </Text>
            ))} */}
  
        {/* {Array.isArray(image) &&
            image.map((imageUrl, index) => (
              <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
            ))} */}
        {/* {interleavedData.map((item, index) => {
            if (typeof item === "string") {
              return (
                <Text key={index} style={styles.content}>
                  {item}
                </Text>
              );
            } else {
              return (
                <Image key={index} source={{ uri: item }} style={styles.image} />
              );
            }
          })} */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginLeft: 10,
    },
    content: {
      fontSize: 16,
      marginBottom: 8,
    },
    image: {
      width: "100%",
      height: 400,
      marginBottom: 16,
      borderRadius: 8,
      
    },
  });