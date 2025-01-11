import { ChakraProvider, Box, Container, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, VStack } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

const weeks = [
  {
    title: "Week 1: Foundations",
    sections: [
      {
        title: "HTML Basics (Days 1-3)",
        assignments: [
          "Create a personal portfolio page structure",
          "Building semantic HTML documents",
          "Convert a given design into HTML structure"
        ]
      },
      {
        title: "CSS Fundamentals (Days 4-7)",
        assignments: [
          "Style your portfolio page",
          "Implementing responsive designs",
          "Create a responsive product landing page"
        ]
      }
    ]
  },
  {
    title: "Week 2: Layout & Design",
    sections: [
      {
        title: "CSS Flexbox & Grid (Days 8-10)",
        assignments: [
          "Build a service marketplace layout",
          "Common website layouts",
          "Create a responsive dashboard"
        ]
      },
      {
        title: "CSS Frameworks & Bootstrap (Days 11-14)",
        assignments: [
          "Convert previous projects to Bootstrap",
          "Building components",
          "Create a freelancer profile page"
        ]
      }
    ]
  }
]

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box bg="gray.50" minH="100vh" py={8}>
          <Container maxW="container.xl">
            <VStack spacing={8} align="stretch">
              <Box textAlign="center" py={8}>
                <Heading as="h1" size="2xl" mb={4}>
                  Web Development Course Portfolio
                </Heading>
                <Text fontSize="xl" color="gray.600">
                  A comprehensive journey through modern web development
                </Text>
              </Box>

              {weeks.map((week, weekIndex) => (
                <Box key={weekIndex} bg="white" p={6} borderRadius="lg" shadow="md">
                  <Heading as="h2" size="lg" mb={6}>
                    {week.title}
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {week.sections.map((section, sectionIndex) => (
                      <Card key={sectionIndex}>
                        <CardHeader>
                          <Heading size="md">{section.title}</Heading>
                        </CardHeader>
                        <CardBody>
                          <VStack align="stretch" spacing={3}>
                            {section.assignments.map((assignment, assignmentIndex) => (
                              <Text key={assignmentIndex}>• {assignment}</Text>
                            ))}
                          </VStack>
                        </CardBody>
                      </Card>
                    ))}
                  </SimpleGrid>
                </Box>
              ))}
            </VStack>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
