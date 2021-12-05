import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  Linking,
  Box,
  AspectRatio,
  Heading,
  NativeBaseProvider,
  ScrollView,
} from "native-base";

export default function ComingSoon() {
  
  URL = `https://www.freetogame.com/api/games?platform=pc`;
  const [query, setQuery] = useState([]);
  useEffect(() => {
    fetch(URL).then(
      (response) => response.json().then((data) => setQuery(data))
    );
   // console.log(query);
  }, []);
 // console.log(query);
  return (
    <NativeBaseProvider>
      <ScrollView>
        {query.map((item) => (
          <Box
            key={item.id}
            overflow="hidden"
            mb="5" 
            rounded="lg"
            _text={{
              fontSize: 'md',
              fontWeight: 'medium',
              color: 'warmGray.50',
              textAlign: 'center',
            }}
            width="95%"
            left="2"
          >
              <AspectRatio  ratio={16 / 9} >
                <Image source={{ url: item.thumbnail }} alt="image" />
              </AspectRatio>
            <Box backgroundColor="black"            
            
            >
              <Heading
                key={item}
                fontSize="30"
                color="white"
                textAlign="center"              
               padding = "2"
              >
                {item.title}
              </Heading>          
              <Text textAlign="center" color="white" fontSize="15"  padding = "5" >
                {item.short_description}
              </Text>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </NativeBaseProvider>
  
  );
}

