import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import "./css/landingPage.css";
import PizzaMaker from "./components/pizzaMaker/PizzaMaker";

const App = () => {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const [isSection5Visible, setIsSection5Visible] = useState(false);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // IntersectionObserver callback function to set visibility state
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === section2Ref.current) {
          setIsSection2Visible(true);
        } else if (entry.target === section3Ref.current) {
          setIsSection3Visible(true);
        } else if (entry.target === section4Ref.current) {
          setIsSection4Visible(true);
        } else if (entry.target === section5Ref.current) {
          setIsSection5Visible(true);
        }
      } else {
        if (entry.target === section2Ref.current) {
          setIsSection2Visible(false); // Hide box when section2 is out of view
        } else if (entry.target === section3Ref.current) {
          setIsSection3Visible(false);
        } else if (entry.target === section4Ref.current) {
          setIsSection4Visible(false);
        } else if (entry.target === section5Ref.current) {
          setIsSection5Visible(false);
        }
      }
    });
  };

  useEffect(() => {
    const section2Node = section2Ref.current;
    const section3Node = section3Ref.current;
    const section4Node = section4Ref.current;
    const section5Node = section5Ref.current;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (section2Node) observer.observe(section2Node);
    if (section3Node) observer.observe(section3Node);
    if (section4Node) observer.observe(section4Node);
    if (section5Node) observer.observe(section5Node);

    return () => {
      if (section2Node) observer.unobserve(section2Node);
      if (section3Node) observer.unobserve(section3Node);
      if (section4Node) observer.unobserve(section4Node);
      if (section5Node) observer.unobserve(section5Node);
    };
  }, []);

  return (
    <Box overflowX={"hidden"} color={"black"} position={"relative"}>
      <PizzaMaker
        isSection2Visible={isSection2Visible}
        isSection3Visible={isSection3Visible}
        isSection4Visible={isSection4Visible}
        isSection5Visible={isSection5Visible}
        scrollToSection={scrollToSection}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
        section5Ref={section5Ref}
      />
      {/* Section 1: Introduction to the Company */}
      <Box>
        <Box
          minH={"100vh"}
          maxW={"100vw"}
          className="section-1"
          color={"black"}
          display={"flex"}
          flexDir={"row"}
          zIndex={"11"}
          pos={"relative"}
          bg={"wheat"}
        >
          <Image
            display={["none", "none", "none", "flex"]}
            src="pec.png"
            w={"200px"}
            h={"200px"}
            position={"absolute"}
            top={"200px"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            zIndex={12}
          />
          <Box
            minW={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#FFF7E2"}
          >
            {" "}
            <Image
              src="title-image.png"
              width="500px"
              height="500px"
              objectFit="cover"
              className="slide-in-from-left"
            ></Image>
          </Box>

          <Box
            minW={"50%"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#5D0201"}
            h={"100vh"}
            position={"relative"}
          >
            <Box
              className="slide-in-from-right"
              w={"100%"}
              display={"flex"}
              justifyContent={"center"}
              marginBottom={"auto"}
            >
              <Heading
                size={"7xl"}
                fontFamily={"Poppins, serif"}
                textAlign={"center"}
                color={"#FFF7E2"}
                position={"absolute"}
                top={"100px"}
              >
                A-TRI
              </Heading>
              <Heading
                size={"5xl"}
                fontFamily={"Poppins, serif"}
                textAlign={"center"}
                color={"#FFF7E2"}
                position={"absolute"}
                top={"220px"}
              >
                PIZZA CATERING
              </Heading>
            </Box>
            <Box
              className="slide-in-from-right"
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={"auto"}
            >
              <Heading
                size={"4xl"}
                fontFamily={"Poppins, serif"}
                textAlign={"center"}
                color={"#FFF7E2"}
              >
                Vaše pizza dobrodružství čeká!
              </Heading>
              <Button
                w={"fit-content"}
                bg={"#FFF7E2"}
                color={"#5D0201"}
                size={"2xl"}
                fontFamily={"Poppins, serif"}
                className="pulse-button slide_right "
                onClick={() => scrollToSection(section2Ref)}
              >
                Pojďme na to
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Section 2: The Dough */}
        <Box className="section" ref={section2Ref}>
          <Box
            maxW={"1440px"}
            style={{
              transform: isSection2Visible
                ? "translateX(0)"
                : "translateX(-100%)",
              opacity: isSection2Visible ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out",
            }}
          >
            <Heading
              size={"2xl"}
              fontFamily={"Poppins, serif"}
              textAlign={"center"}
            >
              1. Těsto - Pokládání základu pro vaši perfektní akci
            </Heading>
            <Box
              display={"flex"}
              mt={"20px"}
              flexDir={["column", "row"]}
              alignItems={"center"}
              gap={["15px", "20px"]}
              px={["10px", "20px"]}
            >
              <Image
                src="DSC_9181.JPG"
                w={["100%", "300px"]}
                maxW={"100%"}
                borderRadius={"10px"}
                alt="Pizza Image"
              />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                  lineHeight: "1.5",
                }}
              >
                Stejně jako skvělá pizza začíná skvělým těstem, naše společnost
                začíná tím, že připraví dokonalý základ pro vaši akci.
                Specializujeme se na vytváření nezapomenutelných zážitků z
                pizzy, přizpůsobených vašim potřebám.
              </p>
            </Box>
          </Box>
        </Box>

        {/* Section 3: Marinara */}
        <Box className="section" ref={section3Ref}>
          <Box
            maxW={"1440px"}
            style={{
              transform: isSection3Visible
                ? "translateX(0)"
                : "translateX(100%)",
              opacity: isSection3Visible ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out",
            }}
            pos={"relative"}
            zIndex={2}
          >
            {" "}
            <Heading
              size={"2xl"}
              fontFamily={"Poppins, serif"}
              textAlign={"center"}
              zIndex={3}
              pos={"inherit"}
            >
              2. Marinara - Přidávání chutných doteků do vaší akce
            </Heading>
            <Box
              display={"flex"}
              mt={"20px"}
              flexDir={["column", "row"]}
              alignItems={"center"}
              gap={["15px", "20px"]}
              px={["10px", "20px"]}
            >
              <Box pos={"relative"}>
                <Image
                  src="DSC_9183.JPG"
                  w={["100%", "300px"]}
                  maxW={"100%"}
                  borderRadius={"10px"}
                  alt="Marinara image"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  }}
                />
                <Text
                  color={"white"}
                  zIndex={3}
                  borderRadius={"10px"}
                  pos={"absolute"}
                  top={"30px"}
                  right={"10px"}
                  fontSize={["2xl", "5xl"]}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  maxW={"230px"}
                  lineHeight={1.3}
                  boxShadow={"0 4px 12px rgba(0, 0, 0, 0.6)"}
                  padding={"10px"}
                  letterSpacing={"2px"}
                  textTransform={"uppercase"}
                >
                  Pizza k zakousnutí
                </Text>
              </Box>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                  lineHeight: "1.5",
                }}
              >
                Naše pizza cateringová služba dodává vaší akci tu správnou chuť.
                Zajišťujeme přípravu, pečení a servírování výjimečné pizzy,
                přičemž se soustředíme výhradně na její kvalitní průběh. Ostatní
                detaily vaší akce necháváme na vás.
              </p>
            </Box>
          </Box>
        </Box>

        {/* Section 4: Mozzarella */}
        <Box className="section" ref={section4Ref}>
          <Box
            maxW={"1440px"}
            style={{
              transform: isSection4Visible
                ? "translateX(0)"
                : "translateX(-100%)",
              opacity: isSection4Visible ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out",
            }}
          >
            <Heading
              size={"2xl"}
              fontFamily={"Poppins, serif"}
              textAlign={"center"}
            >
              3. Mozzarella - Krémový zážitek pro vaše smysly
            </Heading>
            <Box
              display={"flex"}
              mt={"20px"}
              flexDir={["column", "row"]}
              alignItems={"center"}
              gap={["15px", "20px"]}
              px={["10px", "20px"]}
            >
              <Image
                src="DSC_8647.JPG"
                w={["100%", "300px"]}
                maxW={"100%"}
                borderRadius={"10px"}
                alt="Pizza"
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                  lineHeight: "1.5",
                }}
              >
                Mozzarella je tím, co tvoří pizzu jedinečnou. U nás to platí
                stejně – přidáváme dokonalý, jemný dotek, který váš zážitek z
                pizzy povýší na novou úroveň. Naším cílem je poskytnout vám
                autentický a kvalitní zážitek z pizza cateringu, který si každý
                zapamatuje.
              </p>
            </Box>
          </Box>
        </Box>

        {/* Section 5: Basil */}
        <Box className="section" ref={section5Ref} pb={"40px"}>
          <Box
            maxW={"1440px"}
            style={{
              transform: isSection5Visible
                ? "translateX(0)"
                : "translateX(-100%)",
              opacity: isSection5Visible ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out",
            }}
          >
            <Heading
              size={"2xl"}
              fontFamily={"Poppins, serif"}
              textAlign={"center"}
            >
              4. Bazalka - Konečný dotek nezapomenutelného zážitku
            </Heading>

            <Box
              display={"flex"}
              mt={"20px"}
              flexDir={["column", "row"]}
              alignItems={"center"}
              gap={["15px", "20px"]}
              px={["10px", "20px"]}
            >
              <Image
                src="DSC_8959.JPG"
                w={["100%", "300px"]}
                maxW={"100%"}
                borderRadius={"10px"}
                alt="Pizza"
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                  lineHeight: "1.5",
                }}
              >
                Bazalka dodává pizze jedinečný charakter, a stejně tak přidáváme
                dokonalý závěr vašemu zážitku. Naší odpovědností je zajistit, že
                pizza na vaší akci bude perfektní.
              </p>
            </Box>
          </Box>
        </Box>
        <Box
          textAlign={"center"}
          bg={"#5D0201"}
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "1.2rem",
            transform: isSection5Visible ? "translateX(0)" : "translateX(100%)",
            opacity: isSection5Visible ? 1 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out",
          }}
        >
          <p>Email: info@pizzacatering.com</p>
          <p>Telefon: +123-456-7890</p>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
