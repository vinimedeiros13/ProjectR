import {
  Heading, Image, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import { Container } from '../Container';

export const Gallery = () => {
  const image = 'data:image/jpeg;base64,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';
  return (
    <Container color="secondary" display="flex" h={{ base: '140vh', xl: '100vh' }}>
      <Heading
        fontSize={{ base: '1.6rem', xl: '2.6rem' }}
      >
        Eu e você sempre
      </Heading>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        gap="4"
        mt="8"
        alignSelf={{ base: 'center', xl: 'normal' }}
      >
        <Image src={image} height={{ base: 200, xl: 300 }} />
        <Image src={image} height={{ base: 200, xl: 300 }} />
        <Image src={image} height={{ base: 200, xl: 300 }} />
        <Image src={image} height={{ base: 200, xl: 300 }} />
      </SimpleGrid>
    </Container>
  );
};