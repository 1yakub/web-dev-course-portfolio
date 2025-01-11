import { ChakraProvider, Box, Container, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, VStack } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

const weeks = [
  {
    title: "সপ্তাহ ১: ফাউন্ডেশন",
    sections: [
      {
        title: "HTML বেসিক (দিন ১-৩)",
        assignments: [
          "পার্সোনাল পোর্টফোলিও পেজের কাঠামো তৈরি",
          "Semantic HTML ডকুমেন্ট তৈরি করা",
          "একটি ডিজাইন HTML স্ট্রাকচারে রূপান্তর করা"
        ]
      },
      {
        title: "CSS ফান্ডামেন্টালস (দিন ৪-৭)",
        assignments: [
          "পোর্টফোলিও পেজে স্টাইল যোগ করা",
          "রেসপন্সিভ ডিজাইন বাস্তবায়ন",
          "রেসপন্সিভ প্রোডাক্ট ল্যান্ডিং পেজ তৈরি"
        ]
      }
    ]
  },
  {
    title: "সপ্তাহ ২: লেআউট এবং ডিজাইন",
    sections: [
      {
        title: "CSS Flexbox এবং Grid (দিন ৮-১০)",
        assignments: [
          "সার্ভিস মার্কেটপ্লেস লেআউট তৈরি",
          "কমন ওয়েবসাইট লেআউট প্র্যাকটিস",
          "রেসপন্সিভ ড্যাশবোর্ড তৈরি"
        ]
      },
      {
        title: "CSS Frameworks এবং Bootstrap (দিন ১১-১৪)",
        assignments: [
          "আগের প্রজেক্টগুলো Bootstrap এ রূপান্তর",
          "কম্পোনেন্ট তৈরি করা",
          "ফ্রিল্যান্সার প্রোফাইল পেজ তৈরি"
        ]
      }
    ]
  },
  {
    title: "সপ্তাহ ৩: জাভাস্ক্রিপ্ট এসেনশিয়ালস",
    sections: [
      {
        title: "জাভাস্ক্রিপ্ট বেসিক (দিন ১৫-১৮)",
        assignments: [
          "ফর্ম ভ্যালিডেশন",
          "DOM ম্যানিপুলেশন প্র্যাকটিস",
          "ইন্টারেক্টিভ প্রাইসিং ক্যালকুলেটর"
        ]
      },
      {
        title: "জাভাস্ক্রিপ্ট অ্যাডভান্সড (দিন ১৯-২১)",
        assignments: [
          "API ইন্টিগ্রেশন",
          "JSON নিয়ে কাজ করা",
          "API ব্যবহার করে ওয়েদার উইজেট তৈরি"
        ]
      }
    ]
  },
  {
    title: "সপ্তাহ ৪: রিয়েল ওয়ার্ল্ড অ্যাপ্লিকেশন",
    sections: [
      {
        title: "মার্কেটপ্লেস প্রিপারেশন (দিন ২২-২৪)",
        assignments: [
          "৩টি ভিন্ন ল্যান্ডিং পেজ তৈরি",
          "স্পিড অপটিমাইজেশন",
          "সকল প্রজেক্ট নিয়ে পোর্টফোলিও ওয়েবসাইট"
        ]
      },
      {
        title: "AI টুলস ইন্টিগ্রেশন (দিন ২৫-২৭)",
        assignments: [
          "কোড অপটিমাইজেশনে AI ব্যবহার",
          "ওয়েব ডেভেলপমেন্টে প্রম্পট ইঞ্জিনিয়ারিং",
          "AI সহায়তায় রেসপন্সিভ ডিজাইন"
        ]
      },
      {
        title: "ফ্রিল্যান্সিং প্রস্তুতি (দিন ২৮-৩০)",
        assignments: [
          "মার্কেটপ্লেস প্রোফাইল তৈরি",
          "প্রজেক্ট এস্টিমেশন প্র্যাকটিস",
          "ক্লায়েন্ট প্রজেক্ট সিমুলেশন"
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
                  ওয়েব ডেভেলপমেন্ট কোর্স পোর্টফোলিও
                </Heading>
                <Text fontSize="xl" color="gray.600">
                  আধুনিক ওয়েব ডেভেলপমেন্টের একটি পূর্ণাঙ্গ যাত্রা
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
