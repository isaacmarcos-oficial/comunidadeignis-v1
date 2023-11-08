import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";

type Post = {
  slug: string;
  title: string;
  tag: string;
  banner: {
    url: string;
  };
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageSize, setPageSize] = useState(5);

  const getBlogPosts = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query(
      [Prismic.predicates.at("document.type", "post")],
      {
        fetch: ["post.title", "post.banner", "post.tag", "post.content"],
        pageSize: pageSize,
        orderings: "[document.last_publication_date desc]",
      }
    );

    const formattedPosts = response.results.map((post) => {
      return {
        slug: post.uid!,
        banner: {
          url: post.data.banner.url,
        },
        tag: post.data.tag,
        title: RichText.asText(post.data.title),
        excerpt:
          post.data.content.find(
            (content: { type: string }) => content.type === "paragraph"
          )?.text ?? "",
        updatedAt: post.last_publication_date
          ? new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "",
      };
    });
    setPosts(formattedPosts);
  };

  useEffect(() => {
    getBlogPosts();
  }, [pageSize]);

  return (
    <Flex direction="column" align="center" justify="center">
      <Header />

      <Flex
        direction="column"
        my="32px"
        mt="128px"
        align="center"
        justify="center"
      >
        <Heading
          fontSize="32px"
          my="8px"
          lineHeight="27px"
          mb="8px"
          color="yellow.800"
          textAlign={{ base: "center", md: "center", lg: "inherit" }}
        >
          BLOG
        </Heading>

        <Flex align="center" justify="center" px={{ base: "32px" }}>
          <Flex maxW="82.5rem" justify="space-between" py="32px">
            <Flex
              w={{ lg: "56.25rem", md: "100%", base: "100%" }}
              flexDirection={{ lg: "column", base: "column" }}
              gap="32px"
            >
              {posts.map((post) => (
                <Box
                  key={post.slug}
                  display={{ lg: "flex", md: "flex", base: "table-column" }}
                  lineHeight="24px"
                  pb="30px"
                  borderBottom=".0625rem"
                  borderColor="gray.200"
                >
                  <Flex
                    bgColor="black"
                    w={{ lg: "18.4375rem", md: "18.4375rem", base: "100%" }}
                    minW={{ lg: "18.4375rem", md: "18.4375rem", base: "100%" }}
                    h="11.5625rem"
                  >
                    <Link href={`/blog/${post.slug}`} w="100%">
                      <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src={post.banner.url}
                        _hover={{ opacity: 0.7 }}
                        transition="opacity 0.5s"
                      />
                    </Link>
                  </Flex>
                  <Flex
                    as={Link}
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none" }}
                    sx={{
                      textDecoration: "none",
                      "&:hover h2": {
                        color: "yellow.700",
                      },
                      "& h2": {
                        transition: "color 0.2s ease-in-out ",
                      },
                    }}
                    flexDirection="column"
                    px="8px"
                    ml="1.5625rem"
                  >
                    <Flex fontSize="12px" w="100%">
                      <Text
                        color="yellow.800"
                        fontWeight="700"
                        mr="10px"
                        textTransform="uppercase"
                      >
                        {post.tag}
                      </Text>
                      <Text
                        color="gray.700"
                        fontWeight="500"
                        fontSize="13px"
                        textTransform="lowercase"
                      >
                        | {post.updatedAt} {/* 17.jan.2023 */}
                      </Text>
                    </Flex>
                    <Heading
                      color="gray.900"
                      fontSize="22px"
                      my="8px"
                      lineHeight="27px"
                      mb="6px"
                    >
                      {post.title}
                    </Heading>
                    <Text
                      color="gray.600"
                      fontSize="17px"
                      lineHeight="25px"
                      white-space="nowrap"
                      text-overflow="ellipsis"
                      maxW="100%"
                      overflow="hidden"
                      display="-webkit-box"
                      letterSpacing="-0.4px"
                      noOfLines={4}
                    >
                      {post.excerpt}
                    </Text>
                  </Flex>
                </Box>
              ))}
              <Button
                onClick={() => setPageSize(pageSize + 5)}
                fontSize="18px"
                p="21px"
                h="3.75rem"
                bgColor="gray.600"
                color="gray.50"
                _hover={{ bgColor: "yellow.800", color: "gray.50" }}
              >
                Carregar mais
              </Button>
            </Flex>

            <Flex
              display={{ lg: "flex", md: "none", base: "none" }}
              direction="column"
              w="28.125rem"
              ml="3.125rem"
              align="center"
            >
              <Box
                w="100%"
                h="43.75rem"
                bgImage="/Lepanto.jpg"
                bgSize="cover"
                bgPosition="center"
                objectFit="contain"
                bgColor="gray.500"
              />

              <Text
                fontFamily="Gentium"
                mt="16px"
                textAlign="center"
                fontSize="1rem"
                w="90%"
                letterSpacing="-0.4px"
              >
                Dê-me, Senhor, agudeza para entender, capacidade para reter,
                método e faculdade para aprender, sutileza para interpretar,
                graça e abundância para falar. Dê-me, Senhor, acerto ao começar,
                direção ao progredir, e perfeição ao concluir. Amém.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
