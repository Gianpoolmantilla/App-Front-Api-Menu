import React, { useState, useEffect } from "react";
import ViewError from './ViewError';
import {
  Text,
  Image,
  Box,
  AspectRatio,
  Heading,
  NativeBaseProvider,
  ScrollView,
  Link,
  Center,
  Button
} from "native-base";

export function Card({ route }) {
  console.log(route);
  let nombre = `${route.params?.input}`;
  URL = `https://www.freetogame.com/api/games?category=${nombre}`;

  let [query, setQuery] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => response.json().then((data) => setQuery(data)));

  }, [route]);

  try {
    let valido = query.map(function (item) {
      return item
    });
  } catch (error) {
    // throw new Error ("error");
    // si entra al catch es porque del lado del servidor no encontro datos
    return (
      <ViewError></ViewError>
    );
  }

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
            <AspectRatio ratio={16 / 9} >
              <Image source={{ url: item.thumbnail }} alt="image" />
            </AspectRatio>
            <Box backgroundColor="black"
            >
              <Heading
                key={item}
                fontSize="35"
                color="white"
                textAlign="center"
                padding="2"
              >
                {item.title}
              </Heading>
              <Text textAlign="center" color="white" fontSize="15" padding="3" >
                {item.short_description}
              </Text>
              <Center padding="3">
                <Link href={item.game_url}>
                  <Text textAlign="center" color="cyan.100" fontSize="25" padding="5" >
                    Descargar
                  </Text>
                </Link>
              </Center>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </NativeBaseProvider>

  );
}

