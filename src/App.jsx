import { ChakraProvider, Box, Container, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, VStack, Button, Stack, Badge, List, ListItem, ListIcon, Divider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MdCheckCircle } from 'react-icons/md'

const courseContent = {
  hero: {
    title: "ওয়েব ডেভেলপমেন্ট শিখে",
    subtitle: "৩০ দিনের মধ্যে Income শুরু করুন",
    description: "প্র্যাক্টিক্যাল প্রজেক্ট ভিত্তিক লাইভ কোর্স",
    primaryCTA: "এনরোল করুন মাত্র ৫,৯৯৯ টাকায়",
    secondaryCTA: "রেগুলার প্রাইস ৮,০০০ টাকা"
  },
  benefits: [
    "১৫টি লাইভ ক্লাস (প্রতি সপ্তাহে ৩ দিন, রাত ৯টা-১০:৩০)",
    "১৫টি এসাইনমেন্ট + ৫টি প্র্যাক্টিক্যাল প্রজেক্ট",
    "৬ মাসের মেন্টরশিপ সাপোর্ট",
    "Lifetime ক্লাস রেকর্ডিং এক্সেস",
    "ফ্রিল্যান্সিং মার্কেটপ্লেস প্রোফাইল সেটআপ",
    "AI টুলস ব্যবহারের গাইডলাইন"
  ],
  weeks: [
    {
      title: "Week 1: Foundation Week",
      classes: [
        {
          title: "CLASS 1: Web Basic + HTML",
          topics: [
            "ওয়েব কিভাবে কাজ করে",
            "VS Code সেটআপ + GitHub একাউন্ট",
            "HTML Structure ও Tags"
          ]
        },
        {
          title: "CLASS 2: HTML Deep Dive",
          topics: [
            "Forms নিয়ে কাজ",
            "টেবিল ও লিস্ট",
            "Images ও Links"
          ]
        },
        {
          title: "CLASS 3: CSS Fundamentals",
          topics: [
            "CSS Selectors",
            "Colors ও Typography",
            "Box Model"
          ]
        }
      ]
    },
    {
      title: "Week 2: Design Week",
      classes: [
        {
          title: "CLASS 4: CSS Layouts",
          topics: [
            "Flexbox দিয়ে Layout",
            "Grid System",
            "Responsive Design"
          ]
        },
        {
          title: "CLASS 5: CSS Projects",
          topics: [
            "Landing Page Clone",
            "Product Cards",
            "Navigation Menus"
          ]
        },
        {
          title: "CLASS 6: Bootstrap Framework",
          topics: [
            "Bootstrap Grid",
            "Components ব্যবহার",
            "Responsive Utilities"
          ]
        }
      ]
    }
  ],
  success: [
    "১০০+ স্টুডেন্ট সফলভাবে কোর্স কমপ্লিট করেছে",
    "৫০+ স্টুডেন্ট মার্কেটপ্লেসে অর্ডার পেয়েছে",
    "গড় ইনকাম ২০-৩০ হাজার টাকা (৩-৪ মাস পর)"
  ],
  faq: [
    {
      question: "প্রোগ্রামিং নলেজ লাগবে?",
      answer: "না, আমরা জিরো থেকে শেখাবো"
    },
    {
      question: "ল্যাপটপ কি লাগবে?",
      answer: "হ্যাঁ, যেকোনো বেসিক ল্যাপটপ চলবে"
    },
    {
      question: "ক্লাস মিস হলে কি হবে?",
      answer: "সব ক্লাসের রেকর্ডিং পাবেন"
    },
    {
      question: "সাপোর্ট কিভাবে পাবো?",
      answer: "ডেডিকেটেড Facebook গ্রুপে"
    }
  ]
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box bg="gray.50" minH="100vh">
          {/* Hero Section */}
          <Box bg="blue.600" color="white" py={20}>
            <Container maxW="container.xl">
              <VStack spacing={6} align="center" textAlign="center">
                <Heading as="h1" size="2xl">
                  {courseContent.hero.title}
                </Heading>
                <Heading as="h2" size="xl">
                  {courseContent.hero.subtitle}
                </Heading>
                <Text fontSize="xl">
                  {courseContent.hero.description}
                </Text>
                <Stack direction={['column', 'row']} spacing={4} pt={6}>
                  <Button size="lg" colorScheme="green">
                    {courseContent.hero.primaryCTA}
                  </Button>
                  <Text fontSize="lg" pt={2}>
                    {courseContent.hero.secondaryCTA}
                  </Text>
                </Stack>
              </VStack>
            </Container>
          </Box>

          {/* Benefits Section */}
          <Container maxW="container.xl" py={16}>
            <VStack spacing={10}>
              <Heading as="h2" size="xl" textAlign="center" mb={8}>
                কোর্সে যা যা পাচ্ছেন
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {courseContent.benefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardBody>
                      <Stack direction="row" align="center">
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        <Text>{benefit}</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>

          {/* Course Content */}
          <Box bg="white" py={16}>
            <Container maxW="container.xl">
              <VStack spacing={12}>
                <Heading as="h2" size="xl" textAlign="center">
                  কোর্স কারিকুলাম
                </Heading>
                {courseContent.weeks.map((week, weekIndex) => (
                  <Box key={weekIndex} w="full">
                    <Heading as="h3" size="lg" mb={6}>
                      {week.title}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                      {week.classes.map((classItem, classIndex) => (
                        <Card key={classIndex}>
                          <CardHeader>
                            <Heading size="md">{classItem.title}</Heading>
                          </CardHeader>
                          <CardBody>
                            <List spacing={3}>
                              {classItem.topics.map((topic, topicIndex) => (
                                <ListItem key={topicIndex}>
                                  <ListIcon as={MdCheckCircle} color="green.500" />
                                  {topic}
                                </ListItem>
                              ))}
                            </List>
                          </CardBody>
                        </Card>
                      ))}
                    </SimpleGrid>
                  </Box>
                ))}
              </VStack>
            </Container>
          </Box>

          {/* Success Metrics */}
          <Box bg="gray.50" py={16}>
            <Container maxW="container.xl">
              <VStack spacing={8}>
                <Heading as="h2" size="xl" textAlign="center">
                  আমাদের সাফল্য
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                  {courseContent.success.map((metric, index) => (
                    <Card key={index}>
                      <CardBody>
                        <Text fontSize="lg" textAlign="center">{metric}</Text>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
              </VStack>
            </Container>
          </Box>

          {/* FAQ Section */}
          <Box bg="white" py={16}>
            <Container maxW="container.xl">
              <VStack spacing={8}>
                <Heading as="h2" size="xl" textAlign="center">
                  সাধারণ জিজ্ঞাসা
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                  {courseContent.faq.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <Heading size="md">{item.question}</Heading>
                      </CardHeader>
                      <CardBody>
                        <Text>{item.answer}</Text>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
              </VStack>
            </Container>
          </Box>

          {/* Final CTA */}
          <Box bg="blue.600" color="white" py={16}>
            <Container maxW="container.xl">
              <VStack spacing={6}>
                <Heading as="h2" size="xl" textAlign="center">
                  ওয়েব ডেভেলপমেন্ট শিখে নিজের ক্যারিয়ার শুরু করুন
                </Heading>
                <Stack direction={['column', 'row']} spacing={4}>
                  <Button size="lg" colorScheme="whatsapp">
                    WhatsApp এ যোগাযোগ করুন
                  </Button>
                  <Button size="lg" colorScheme="messenger">
                    Messenger এ যোগাযোগ করুন
                  </Button>
                </Stack>
              </VStack>
            </Container>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
