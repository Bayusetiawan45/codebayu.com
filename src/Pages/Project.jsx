import { HStack, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Project from '../Components/Project';
import { FaBrain } from 'react-icons/fa';

import projects from '../Service/projects.json';

export const ProjectSection = () => {
  return (
    <Stack
      as="section"
      overflow="hidden"
      spacing={5}
      px={{ base: '1rem', lg: '10rem' }}
      py={{ base: '3rem', lg: '7rem' }}
      id="projects"
      position="relative"
      height="100%"
      data-testid="project-section"
    >
      <HStack data-aos="fade-down" data-testid="header">
        <FaBrain size={30} />
        <Heading fontSize={{ base: 20, lg: 30 }}>Projects</Heading>
      </HStack>
      <Text data-aos="fade-down">List of my projects</Text>
      <SimpleGrid minChildWidth="300px" spacing="25px">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
