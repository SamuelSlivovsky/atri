import { Box } from "@chakra-ui/react";
import React from "react";

function PizzaMaker({
  isSection2Visible,
  isSection3Visible,
  isSection4Visible,
  isSection5Visible,
  scrollToSection,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
}) {
  return (
    <Box
      bg={"white"}
      height={"350px"}
      w={"10px"}
      borderRadius={"10px"}
      pos={"fixed"}
      right={
        isSection2Visible ||
        isSection3Visible ||
        isSection4Visible ||
        isSection5Visible
          ? "16px"
          : "-100px"
      }
      top={"50%"}
      transform={"translateY(-50%)"}
      zIndex={10}
      transition={"right 1s ease-out"}
    >
      <Box
        className="scroll-circle"
        border={isSection2Visible ? "2px solid #e9b263" : "none"}
        bg={isSection2Visible ? "#F2D1A2" : "white"}
        w={isSection2Visible ? "40px" : "16px"}
        h={isSection2Visible ? "40px" : "16px"}
        right={isSection2Visible ? "-15px" : "-3px"}
        top={"0"}
        onClick={() => scrollToSection(section2Ref)}
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      ></Box>
      <Box
        className="scroll-circle"
        top={isSection3Visible ? "100px" : "116px"}
        border={isSection3Visible ? "2px solid #e9b263" : "none"}
        bg={isSection3Visible ? "#F2D1A2" : "white"}
        w={isSection3Visible ? "40px" : "16px"}
        h={isSection3Visible ? "40px" : "16px"}
        right={isSection3Visible ? "-15px" : "-3px"}
        onClick={() => scrollToSection(section3Ref)}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box
          display={isSection3Visible ? "flex" : "none"}
          bg={"#b21807"}
          w={"33px"}
          h={"33px"}
          borderRadius={"50%"}
        ></Box>
      </Box>
      <Box
        className="scroll-circle"
        top={isSection4Visible ? "216px" : "232px"}
        border={isSection4Visible ? "2px solid #e9b263" : "none"}
        bg={isSection4Visible ? "#F2D1A2" : "white"}
        w={isSection4Visible ? "40px" : "16px"}
        h={isSection4Visible ? "40px" : "16px"}
        right={isSection4Visible ? "-15px" : "-3px"}
        onClick={() => scrollToSection(section4Ref)}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box
          display={isSection4Visible ? "flex" : "none"}
          bg={"#b21807"}
          w={"33px"}
          h={"33px"}
          borderRadius={"50%"}
        >
          <Box
            display={isSection4Visible ? "flex" : "none"}
            bg={"#b21807"}
            w={"34px"}
            h={"34px"}
            borderRadius={"50%"}
            position={"relative"}
          >
            {" "}
            <Box
              pos={"absolute"}
              w={"10px"}
              h={"10px"}
              bg={"white"}
              top={"2px"}
              left={"12px"}
              borderRadius={"50%"}
            ></Box>
            <Box
              pos={"absolute"}
              w={"10px"}
              h={"10px"}
              bg={"white"}
              top={"12px"}
              left={"2px"}
              borderRadius={"50%"}
            ></Box>
            <Box
              pos={"absolute"}
              w={"10px"}
              h={"10px"}
              bg={"white"}
              top={"16px"}
              left={"18px"}
              borderRadius={"50%"}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="scroll-circle"
        bottom={"0"}
        border={isSection5Visible ? "2px solid #e9b263" : "none"}
        bg={isSection5Visible ? "#F2D1A2" : "white"}
        w={isSection5Visible ? "40px" : "16px"}
        h={isSection5Visible ? "40px" : "16px"}
        right={isSection5Visible ? "-15px" : "-3px"}
        onClick={() => scrollToSection(section5Ref)}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box
          display={isSection5Visible ? "flex" : "none"}
          bg={"#b21807"}
          w={"34px"}
          h={"34px"}
          borderRadius={"50%"}
          position={"relative"}
        >
          <Box
            pos={"absolute"}
            w={"10px"}
            h={"10px"}
            bg={"white"}
            top={"2px"}
            left={"12px"}
            borderRadius={"50%"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"10px"}
            h={"10px"}
            bg={"white"}
            top={"12px"}
            left={"2px"}
            borderRadius={"50%"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"10px"}
            h={"10px"}
            bg={"white"}
            top={"16px"}
            left={"18px"}
            borderRadius={"50%"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"5px"}
            h={"5px"}
            bg={"#259925"}
            top={"2px"}
            left={"10px"}
            borderRadius={"0 4px"}
            transform={"rotate(0deg)"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"5px"}
            h={"5px"}
            bg={"#259925"}
            top={"10px"}
            left={"5px"}
            borderRadius={"0 4px"}
            transform={"rotate(0deg)"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"5px"}
            h={"5px"}
            bg={"#259925"}
            top={"12px"}
            left={"15px"}
            borderRadius={"0 4px"}
            transform={"rotate(0deg)"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"5px"}
            h={"5px"}
            bg={"#259925"}
            top={"12px"}
            left={"24px"}
            borderRadius={"0 4px"}
            transform={"rotate(0deg)"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"5px"}
            h={"5px"}
            bg={"#259925"}
            top={"5px"}
            left={"20px"}
            borderRadius={"0 4px"}
            transform={"rotate(0deg)"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"5px"}
            h={"5px"}
            bg={"#259925"}
            top={"20px"}
            left={"20px"}
            borderRadius={"0 4px"}
            transform={"rotate(0deg)"}
          ></Box>
          <Box
            pos={"absolute"}
            w={"5px"}
            h={"5px"}
            bg={"#259925"}
            top={"20px"}
            left={"10px"}
            borderRadius={"0 4px"}
            transform={"rotate(0deg)"}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PizzaMaker;
