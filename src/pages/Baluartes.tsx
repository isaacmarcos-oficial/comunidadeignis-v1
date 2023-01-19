import { Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Baluartes() {
  return (
    <Flex flexDirection="column" align="center" justify="center">
      <Header />

      <Flex direction="column" my="2rem" mt="4rem" w={{ base: "100%", lg: "82.5rem" }} align="center" justify="center">
        <Flex direction="column" p={{ base: "2rem", lg: "3rem" }}  align="center" justify="center" borderRadius="10" color="yellow.800" fontWeight="bold">
          
        <Heading fontSize="2rem" my="0.5rem" lineHeight="1.6875rem" mb=".5rem" color="yellow.800" textAlign={{ base:"center", md: "center", lg:"inherit" }}>
          NOSSOS BALUARTES
        </Heading>
        <Text w={{ base:"90%", lg:"50%"}} textAlign="center" color="gray.600" fontWeight="500" fontSize={{ base:"0.9688rem", lg:"1.125rem"}} lineHeight="1.5rem" >
          A Comunidade IGNIS possui como baluartes Santo Agostinho, São Tomás de Aquino, Santo Inácio de Antioquia, Santo Antão e Santa Teresa d’Avila que nos instruem na doutrina, no martírio, na ascese e na vida mística para vivenciar o amor, a adoração, o sacrifício e a missão.
        </Text>  

        </Flex>
      </Flex>

      <Flex maxW="1320px"   borderRadius="10" direction="column" align="center" >
        <Flex align="center" justify="center">

        <Wrap justify="center" spacing={{ base:"none", lg:"8rem"}}   >
              <WrapItem>
                <Flex boxSize={{ base:"none", lg:"450px"}} direction="column" mb={{ base: "3rem", lg:"none"}} >
                  <Image w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} h="250px" objectFit="cover" src="https://bit.ly/auxiliumchristianorum" borderRadius="10" mb="2" />
                  <Flex w={{ base:"25rem",md:"50rem", lg:"28.125rem"}} direction="column" align="center" justify="center" >
                    <Heading as={Text} fontSize="1.5rem" align="center" >
                      Nossa Senhora Auxiliadora dos Cristãos
                    </Heading>
                    <Text align="justify" >
                      Maria Auxiliadora ganhou a invocação de Nossa Senhora Auxiliadora ou Auxílio dos Cristãos  é uma invocação instituída pelo Papa Pio V no ano de 1571, após a grande vitória dos cristãos sobre o exército muçulmano no estreito de Lepanto, que era a porta de entrada para a Europa. <br/><br/>
                      ​Maria, Auxílio dos Cristãos, rogai por todos que moram nesta casa que Vos foi consagrada. Amém.
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex boxSize={{ base:"none", lg:"450px"}} direction="column" mb={{ base: "3rem", lg:"none"}} >
                  <Image w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} h="250px" objectFit="cover" src="https://bit.ly/ignatiusantioquia" borderRadius="10" mb="2" />
                  <Flex w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} direction="column" align="center" justify="center">
                    <Heading as={Text} fontSize="1.5rem" align="center" >
                      Santo Inácio de Antioquia
                    </Heading>
                    <Text align="justify">
                      Inácio foi o sucessor de Pedro no governo da Igreja de Antioquia. Condenado às feras,foi conduzido a Roma e aí, no tempo do imperador Trajano, recebeu a gloriosa coroa do martírio, no ano 107.
                        <br/><br/>
                      Durante a viagem escreveu sete cartas a várias Igrejas, nas quais se refere, com profunda sabedoria e erudição, a Cristo, à organização da Igreja e aos princípios fundamentais da vida cristã. A sua memória era celebrada neste dia, já no século IV, em Antioquia.
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex boxSize={{ base:"none", lg:"450px"}} direction="column" align="center" justify="center" mb={{ base: "3rem", lg:"none"}}>
                  <Image h="250px" w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} objectFit="cover" src="https://bit.ly/ThomasAquina" borderRadius="10" mb="2" />
                  <Flex w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} direction="column" align="center" justify="center">
                    <Heading as={Text} fontSize="1.5rem" align="center" >
                      Santo Tomás de Aquino
                    </Heading>
                    <Text align="justify">
                      Nasceu cerca do ano 1225, na família dos Condes de Aquino. Estudou primeiramente no mosteiro do Monte Cassino e depois em Nápoles. Entrou na Ordem dos Pregadores e completou os seus estudos em Paris e em Colónia, tendo tido como professor S. Alberto Magno.
                        <br/><br/>
                      Escreveu muitas obras de grande erudição e exerceu o professorado, contribuindo notavelmente para o progresso da Filosofia e da Teologia. Morreu perto de Terracina no dia 7 de Março de 1274. A sua memória celebra-se a 28 de Janeiro, dia em que o seu corpo foi trasladado para Tolosa, no ano 1369.
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem> 
                <Flex boxSize={{ base:"none", lg:"450px"}} direction="column" align="center" justify="center" mb={{ base: "3rem", lg:"none"}}>
                  <Image w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} h="250px" objectFit="cover" src="https://bit.ly/AugustineHipo" borderRadius="10" mb="2" />
                  <Flex w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} direction="column" align="center" justify="center">
                    <Heading as={Text} fontSize="1.5rem" align="center" >
                      Santo Agostinho de Hipona
                    </Heading>
                    <Text align="justify">
                      Nasceu em Tagaste (África) no ano 354. Depois de uma juventude perturbada, quer intelectualmente quer moralmente, converteu-se à fé e foi batizado em Milão por Santo Ambrósio no ano 387. Voltou à sua terra e aí levou uma vida de grande ascetismo.
                        <br/><br/>
                      Eleito bispo de Hipona, durante trinta e quatro anos foi perfeito modelo do seu rebanho e deu-lhe uma sólida formação cristã por meio de numerosos sermões e escritos, com os quais combateu fortemente os erros do seu tempo e ilustrou sabiamente a fé católica. Morreu no ano 430.
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex boxSize={{ base:"none", lg:"450px"}} direction="column" align="center" justify="center" mb={{ base: "3rem", lg:"none"}} >
                  <Image h="250px" w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} objectFit="cover" src="https://bit.ly/StAntao" borderRadius="10" mb="2" />
                  <Flex w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} direction="column" align="center" justify="center">
                    <Heading as={Text} fontSize="1.5rem" align="center" >
                      Santo Antão
                    </Heading>
                    <Text align="justify">
                      Este insigne pai do monaquismo nasceu no Egito por volta do ano 250. Depois da morte dos pais, distribuiu seus bens aos pobres e retirou-se para o deserto, onde começou a levar vida de penitente.
                        <br/><br/>
                      Teve numerosos discípulos e trabalhou em defesa da Igreja, estimulando os confessores da fé durante a perseguição de Diocleciano e apoiando Santo Atanásio na luta contra os arianos. Morreu em 356.

                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex boxSize={{ base:"none", lg:"450px"}} direction="column" align="center" justify="center" mb={{ base: "3rem", lg:"none"}} >
                  <Image h="250px" w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} objectFit="cover" src="https://bit.ly/Theresee" borderRadius="10" mb="2" />
                  <Flex w={{ base:"25rem", md:"50rem", lg:"28.125rem"}} direction="column" align="center" justify="center">
                    <Heading as={Text} fontSize="1.5rem" align="center" >
                      Santa Teresa de Ávila
                    </Heading>
                    <Text align="justify">
                      Nasceu em Ávila (Espanha) no ano 1515. Tendo entrado na Ordem das Carmelitas, fez grandes progressos no caminho da perfeição e teve revelações místicas. Ao empreender a reforma da Ordem teve de sofrer muitas tribulações, mas tudo suportou com coragem invencível.
                        <br/><br/>
                      A doutrina profunda que escreveu nos seus livros é fruto das suas experiências místicas. Morreu em Alba de Tormes (Salamanca) no ano 1582.
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>

        </Flex>
      </Flex>


      <Footer />
    </Flex>
  )
}