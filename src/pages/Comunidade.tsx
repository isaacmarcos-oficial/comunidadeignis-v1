import { Flex, Heading, Text, Image } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Fundator } from "../components/PageCommunity/Fundator";

export function Comunidade() {
  return (
    <Flex flexDirection="column" align="center" justify="center">
      <Header />

      <Flex direction="column" maxW="1320px" w="100%" mt="4rem" py="2rem" align="center" px={{ base: "3rem", lg: "none" }}>
        
        <Flex direction={{ base:"column-reverse", lg:"row" }} align="center" justify="space-between" >

          <Flex direction="column" w={{ base:"100%", lg:"50%"}} mt={{ base:"2rem", md:"2rem", lg:"none" }} mr={{ md:"none", lg: "4rem"}}>
            <Heading fontSize="2rem" my="0.5rem" lineHeight="1.6875rem" mb=".5rem" color="yellow.800" textAlign={{ base:"center", md: "center", lg:"inherit" }}>
              Quem Somos
            </Heading>

            <Text fontSize="1.0625rem" lineHeight="1.5625rem">
              A <strong>Comunidade Católica Missionária IGNIS</strong> – Associação Maria Auxílio dos Cristãos – foi fundada no dia 7 de outubro de 2009, dia de Nossa Senhora do Rosário que deu a vitória aos católicos na Batalha de Lepanto.
            </Text>

            <Heading fontSize="2rem" mt="2.5rem" lineHeight="1.6875rem" mb="0.5rem" color="yellow.800" textAlign={{ base:"center", md: "center", lg:"inherit" }}>
              Nossa Missão
            </Heading>
            <Text fontSize="1.0625rem" lineHeight="1.5625rem" >
              Promover e defender a Fé Católica em total amor, lealdade e submissão ao depositum fidei, deixado por Nosso Senhor Jesus Cristo; também a consagração total à Santíssima Virgem Maria – Método de São Luís Maria Grignion de Montfort; a piedade Eucarística, fonte e ápice de nossa Fé Católica, a piedosa e frutuosa participação no Santo Sacrifício da Missa; a reparação dos Corações de, Jesus e sua mãe Maria Santíssima, dos imensos pecados da humanidade.
            </Text>
          </Flex>

          <Flex align="center">
            <Image src="/Lepanto.jpg" h={{ base:"250px", md:"300px"}} w={{ base:"100vw", md:"500px"}} objectFit="cover" />
          </Flex>
        </Flex>
      </Flex>


      <Fundator
        title="Celito Garcia"
        description="Celito Garcia é leigo católico, pregador, casado com a Micheli Garcia. Pai do Bruno Augusto e do Caio Tomás. Missionário e membro fundador da Comunidade Católica Missionária IGNIS. É também Freire de Armas na Militia Santae Mariae onde atua na Academia Internacional de Estudos Litúrgicos São Gregório Magno. Pertence a Diocese de Votuporanga – SP."
        image="/Lepanto.jpg"
      />

      <Fundator
        title="Robson Maria"
        description="SEM DESCRIÇÃO"
        image="/Lepanto.jpg"
      />

      <Fundator
        title="Paulo Júnior"
        description="SEM DESCRIÇÃO"
        image="/Lepanto.jpg"
      />

      <Fundator
        title="Denilson Moretti"
        description="SEM DESCRIÇÃO"
        image="/Lepanto.jpg"
      />

      <Footer />
    </Flex>
  )
}