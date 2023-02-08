import React from 'react';
import Navbar from './components/Navbar';
//TODO: check if it imports properly
import './assets/fonts/DMSans-Regular.ttf';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
        <div className="imageBg">
          <Text fontSize={'6xl'} fontWeight={'600'} mt={250}>
            Varsovia
          </Text>
          <Text className="test">
            Realizado por Eryk Janczek, Mateusz Marczyk, Łukasz Lewański, Aleksander Cybulski
          </Text>
        </div>

        <Flex padding={100}>
          <Box>
            <Text mt={50} fontSize={'3xl'} as="b">Pałac kultury</Text>
            <Text w={800}>El segundo edificio más alto de Polonia. Se encuentra en el centro de Varsovia, en Plac Defilad 1. El propietario del edificio es la ciudad capital de Varsovia y está gestionado por la empresa municipal Zarząd Pałacu Kultury i Nauki Sp. z.o.o. . El palacio es la sede del Ayuntamiento de Varsovia, que delibera en el Salón de Varsovia. En 2007, el edificio se inscribió en el registro de monumentos.</Text>
          </Box>
          <Image borderRadius={10} align={"right"} h={400} src="palac_kultury.png" alt="Image" />
        </Flex>
        <Flex padding={100}>
          <Image borderRadius={10} align={"right"} h={300} src="palac_prezydencki.png" alt="Image" />
          <Box ml={50}>
            <Text mt={50} fontSize={'3xl'} as="b">Pałac prezydencki</Text>
            <Text w={500}>Palacio histórico en el centro de la ciudad de Varsovia en ul. Krakowskie Przedmiescie 46/48. En los años 1918-1939, la sede oficial del Consejo de Ministros y el Primer Ministro. Desde 1994, la sede oficial del Presidente de la República de Polonia.</Text>
          </Box>
        </Flex>
        <Flex padding={100}>
          <Box mr={50}>
            <Text mt={50} fontSize={'3xl'} as="b">Schodki warszawskie</Text>
            <Text w={500}>Es una calle muy pintoresca del casco antiguo. Toda la calle consta únicamente de escaleras y edificios a ambos lados. Las primeras escaleras de la calle en la ciudad, gozando de gran interés entre los habitantes de la Vieja Varsovia, que caminaban sobre ellas día y noche.</Text>
          </Box>
          <Image borderRadius={10} align={"right"} h={300} src="schodki.png" alt="Image" />
        </Flex>
        <Flex padding={100}>
          <Image borderRadius={10} align={"right"} h={400} src="palac_w_wilanowie.png" alt="Image" />
          <Box ml={50}>
            <Text mt={50} fontSize={'3xl'} as="b">Pałac w Wilanowie</Text>
            <Text w={500}>Palacio real barroco ubicado en Varsovia, en el distrito de Wilanów. Fue erigido en los años 1681-1696 para el rey Jan III Sobieski y Maria Kazimiera, diseñado por Augustyn Wincenty Locci; se agregaron alas laterales en los años 1723-1729 . La sede del Museo del Palacio del Rey Jan III en Wilanów.</Text>
          </Box>
        </Flex>

        <Flex padding={100}>
          <Box mr={50}>
            <Text mt={50} fontSize={'3xl'} as="b">Łazienki królewskie</Text>
            <Text w={500}>Un complejo de palacio y jardín en Varsovia fundado en el siglo XVIII por Stanisław August Poniatowski. El nombre proviene del pabellón de la casa de baños barroca, erigido en la década de 1780 por Stanisław Herakliusz Lubomirski y reconstruido por Stanisław August Poniatowski en el Palacio de la Isla. Además de edificios, pabellones y esculturas exentas, hay cuatro jardines: Real, Romántico, Modernista y Chino. Desde 1960, el complejo ha sido la sede del Museo Real Łazienki</Text>
          </Box>
          <Image borderRadius={10} align={"right"} h={400} src="lazienki.png" alt="Image" />
        </Flex>
        <Text mb={50} textAlign={"center"} fontSize={"3xl"}>¡Gracias por su atención!</Text>
      </header>
    </div>
  );
}

export default App;
