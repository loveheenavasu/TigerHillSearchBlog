import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import tigerHill from "../../images/Image.png";
import query from "../../ggl/Querys";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";

function Card({ searchValue }) {
  const { data, loading, error } = useQuery(query);
  let listOfcard = data?.contentCards?.edges || [];

  if (loading) {
    return (
      <>
        <VStack>
          {Array(20)
            .fill("")
            .map((item) => {
              return <Skeleton w={276} h={290} />;
            })}
        </VStack>
      </>
    );
  }

  if (error) {
    alert(error);
    return "No data found";
  }

  if (searchValue) {
    listOfcard = listOfcard.filter((item) =>
      item?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  return (
    <>
      {listOfcard.map((content) => {
        return (
          <>
            <VStack
              borderWidth="1px"
              borderRadius="5px"
              width="276px"
              height="290px"
              mb="10px"
              border="none"
              overflow="hidden"
            >
              <Image
                src={content?.image?.uri}
                alt={tigerHill}
                w="276px"
                h="130px"
                objectFit="cover"
              />
              <Box p="12px" background="#FFFFFF" h="158px">
                <Text
                  textAlign="left"
                  fontWeight="bold"
                  color="#FF8615"
                  fontSize="12px"
                  fontFamily="Averta Std"
                  lineHeight="15px"
                >
                  {content.categories[0].name}
                </Text>
                <Text
                  textAlign="left"
                  fontWeight="bold"
                  color="#000000"
                  fontSize="18px"
                  fontFamily="Averta Std"
                  lineHeight="22px"
                  mt="4px"
                >
                  {content.name}
                </Text>
                <Text
                  textAlign="left"
                  fontWeight={600}
                  color="#333333"
                  fontSize="14px"
                  fontFamily="Averta Std"
                  lineHeight="17px"
                  mt="4px"
                >
                  {`${content.experts[0].firstName}  ${content.experts[0].lastName} `}
                </Text>
                <Text
                  textAlign="left"
                  fontWeight={600}
                  color="#333333"
                  fontSize="14px"
                  fontFamily="Averta Std"
                  lineHeight="17px"
                  mt="4px"
                >
                  {content.experts[0].title}
                </Text>

                <Text
                  textAlign="left"
                  fontWeight={600}
                  color="#FF8615"
                  fontSize="14px"
                  fontFamily="Averta Std"
                  lineHeight="17px"
                  pb="32px"
                  noOfLines={1}
                >
                  {content.experts[0].company}
                </Text>
              </Box>
            </VStack>
          </>
        );
      })}
    </>
  );
}

export default Card;
