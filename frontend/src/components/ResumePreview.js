import {
    Box,
    Heading,
    HStack,
    Tag,
    TagLabel,
    Text,
    VStack,
    Wrap,
    UnorderedList,
    ListItem,
  } from "@chakra-ui/react";
  import { useResume } from "../components/Context";
  import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
  import { RiLinkedinBoxFill } from "react-icons/ri";
  import { BiLinkExternal } from "react-icons/bi";
  
  const ResumePreview = () => {
    const { theme, about, educationList, skills, workList, projects, printElem } =
      useResume();
      const imgStyle = {
        width:"115px",
        height:"115px",
       
        margin:"15px",
  
        borderRadius: "50%",
       
      };
    return (
      <>
        <Box
          bg={"white"}
          w={"full"}
          rounded={"md"}
          shadow={"md"}
          overflow={"hidden"}
          minH={"100vh"}
        >
          <div ref={printElem}>
            <HStack>
              {about.picture && (
                <img
                  style={imgStyle}
                  
                  src={about.picture}
                  alt="avatar"
                />
              )}
  
              <VStack m={4} alignItems={"flex-start"} spacing={0.5}>
                <Heading as="h4" size="md">
                  {about.name ? about.name : "Stevephen"}
                </Heading>
                <Text color={"gray.500"}>
                  {about.role ? about.role : "Full Stack Web Developer"}
                </Text>
              </VStack>
            </HStack>
  
            <HStack
              bg={theme}
              color={"white"}
              p={4}
              justifyContent={"space-between"}
            >
              <HStack spacing={1}>
                <MdMail />{" "}
                <Text>{about.email ? about.email : "Steve@gmail.com"}</Text>
              </HStack>
              <HStack spacing={1}>
                <MdLocalPhone />{" "}
                <Text>{about.phone ? about.phone : "+918870262701"}</Text>
              </HStack>
              <HStack spacing={1}>
                <MdLocationPin />{" "}
                <Text>{about.address ? about.address : "goa, kL"}</Text>
              </HStack>
              <HStack spacing={1}>
                <RiLinkedinBoxFill />{" "}
                <Text as="a" href={about.linkedin}>
                  LinkedIn
                </Text>
              </HStack>
            </HStack>
  
            <HStack
              w={"full"}
              h={"full"}
              my={2}
              mb={6}
              px={2}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              spacing={1}
            >
              <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
                // EDUCATION
                <VStack alignItems={"flex-start"}>
                  <Heading as="h4" size="md" color={"gray.700"}>
                    EDUCATION
                  </Heading>
  
                  {educationList.map((education) => {
                    const { degree, school, startYr, endYr, grade } = education;
  
                    return (
                      <VStack
                        spacing={0}
                        alignItems={"flex-start"}
                        w={"full"}
                        pb={2}
                      >
                        <Text fontWeight={"medium"}>
                          {degree ? degree : "B.Tech Computer Engineering"}
                        </Text>
                        <Text fontSize={"sm"}>
                          {school ? school : "College of Engineering Pune"}
                        </Text>
                        <HStack
                          fontSize={"xs"}
                          fontStyle={"italic"}
                          justifyContent={"space-between"}
                          w={"full"}
                        >
                          <Text>
                            {startYr ? startYr : 2014} - {endYr ? endYr : 2018}
                          </Text>
                          <Text>{grade ? grade : "9.5 CGPA"}</Text>
                        </HStack>
                      </VStack>
                    );
                  })}
                </VStack>
                // EDUCATION // WORK EXPERIENCE
                <VStack alignItems={"flex-start"}>
                  <Heading as="h4" size="md" color={"gray.700"}>
                    WORK EXPERIENCE
                  </Heading>
  
                  {workList.map((work) => {
                    const {
                      position,
                      type,
                      company,
                      startDate,
                      endDate,
                      description: desc,
                    } = work;
  
                    return (
                      <VStack
                        spacing={0.5}
                        alignItems={"flex-start"}
                        lineHeight={1.3}
                        pb={2}
                      >
                        <Text fontWeight={"medium"}>
                          {position ? position : "Full Stack Developer"}
                        </Text>
                        <Text fontSize={"sm"}>
                          {company ? company : "ABC Infotech Services"} -{" "}
                          {type ? type : "Full-time"}
                        </Text>
                        <Text fontSize={"xs"} fontStyle={"italic"}>
                          {startDate ? startDate : "2021-01"} -{" "}
                          {endDate ? endDate : "2024-12"}
                        </Text>
                        <Text fontSize={"sm"} as="p">
                          {desc
                            ? desc
                            : "..."}
                        </Text>
                      </VStack>
                    );
                  })}
                </VStack>
                WORK EXPERIENCE
              </VStack>
  
              <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
                SKILLS
                <VStack alignItems={"flex-start"}>
                  <Heading as="h4" size="md" color={"gray.700"}>
                    SKILLS
                  </Heading>
                  <Wrap>
                    {skills.map((skill, index) => (
                      <Tag
                        size={"md"}
                        borderRadius="md"
                        variant="solid"
                        bg={theme.replace("400", "500")}
                        key={index}
                      >
                        <TagLabel>{skill.name}</TagLabel>
                      </Tag>
                    ))}
                  </Wrap>
                </VStack>
                 
                <VStack alignItems={"flex-start"}>
                  <Heading as="h4" size="md" color={"gray.700"}>
                    PROJECTS
                  </Heading>
  
                  {projects.map((project) => {
                    const { name, url, description: desc } = project;
                    return (
                      <VStack
                        spacing={0.5}
                        alignItems={"flex-start"}
                        lineHeight={1.3}
                        pb={2}
                      >
                        <HStack as="a" href={url} target="_blank" spacing={0.5}>
                          <Text fontWeight={"medium"} flex={"row"}>
                            {name ? name : "Project Name"}{" "}
                          </Text>{" "}
                          <BiLinkExternal />
                        </HStack>
                        <UnorderedList pl={5}>
                          <ListItem>
                            <Text fontSize={"sm"} as="p">
                              {desc
                                ? desc
                                : "...."}
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </VStack>
                    );
                  })}
                </VStack>
                PROJECTS
              </VStack>
            </HStack>
          </div>
        </Box>
      </>
    );
  };
  
  export default ResumePreview;
  