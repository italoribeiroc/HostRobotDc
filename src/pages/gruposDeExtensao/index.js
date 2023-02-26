import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FlatListAccordion from '../../assets/components/flatListAccordion';
import NavigationHeader from '../../assets/components/navigationHeader';
import imageCatiJr from '../../assets/images/gruposImages/catijr.png';
import imageGamso from '../../assets/images/gruposImages/gamso.png';
import imageMau from '../../assets/images/gruposImages/mau.png';
import imagePetBcc from '../../assets/images/gruposImages/petbcc.png';
import imagePetEnc from '../../assets/images/gruposImages/petenc.png';
import imagePyladies from '../../assets/images/gruposImages/pyladies.png';
import imageSecomp from '../../assets/images/gruposImages/secomp.png';

export default function GruposExtensao({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40}}>
            <NavigationHeader navigation={navigation} title={'Grupos de Extensão'}/>
            <View style={{ flex:1, backgroundColor: '#fff' }}>
                <FlatListAccordion data={grupos} />
            </View>
        </View>
    );
};

const grupos = [
    {
        name: 'CATI Jr',
        image: imageCatiJr,
        description: 'A CATI Jr é a empresa júnior dos cursos de Engenharia e Ciência da Computação da UFSCar. Focamos em projetos com alto impacto na sociedade, para clientes reais, dando a experiência de mercado de trabalho para nossos membros. Nosso portfólio consiste em sistemas, aplicativos, sites e oferecemos consultoria na área da computação. Atualmente já desenvolvemos sistemas para a Genau, escola de idiomas em São Carlos, SonicWall, empresa internacional, e para o Hotel Resort Santa Clara. Além de aplicativos para a Rádio UFSCar e consultoria para o cursinho popular da UFSCar Lagoa do Sino. Também desenvolvemos produtos próprios como um sistema de compra/venda de eventos e gerenciamento de atléticas.',
    },
    {
        name: 'GAMSo',
        image: imageGamso,
        description: 'Game, Art, Music and Software (GAMSo) é o grupo de desenvolvimento de jogos da UFSCar, idealizado por um aluno do curso de Bacharelado em Ciência da Computação em 2019 e com participação de alunos tanto do Departamento de Computação, quanto de outros diversos departamentos da UFSCar. O objetivo do grupo é incentivar a criatividade acerca de jogos a partir do desenvolvimento, da criação do game design e histórias, do desenho das artes ou da criação de uma trilha sonora, seja com o compartilhamento de ideias, com aulas e palestras nas reuniões semanais ou minicursos voltados à toda a comunidade de São Carlos. Além disso, periodicamente são realizadas Game Jams para treinamento dos integrantes e, após finalizados, os jogos são mostrados em eventos no Departamento de Computação.',
    },
    {
        name: 'M@U',
        image: imageMau,
        description: 'O Grupo de Estudos Maratona at UFSCar (M@U), é o resultado do interesse de vários alunos de Graduação em aprofundar seus conhecimentos na Computação. Para isso, nós participamos da Maratona de Programação, uma competição com fases Regional, Nacional e Mundial. Por meio de reuniões semanais e simulados, nós exploramos diferentes assuntos da Ciência e da Engenharia de Computação. Assim, o estudo para a Maratona está alinhado com o conhecimento que um profissional de computação deve ter. De fato, várias empresas de tecnologia aplicam questões do mesmo estilo da Maratona em seus processos seletivos ou mesmo promovem suas próprias competições, como o Facebook Hacker Cup e o Google Code Jam. Dessa forma, os membros da maratona já estão treinando para os processos seletivos desse tipo de empresa. Se você quiser entender o que isso tem a ver com Programação e Ciência da Computação ou ainda quiser compartilhar suas descobertas, venha ser M@U com a gente.',
    },
    {
        name: 'PET BCC',
        image: imagePetBcc,
        description: 'O grupo PET do curso de Bacharelado em Ciência da Computação (PET-BCC) da Universidade Federal de São Carlos (UFSCar), campus São Carlos, iniciou suas atividades em outubro de 2009 ao ser contemplado no lote 2 do edital nº 05. Uma particularidade desse edital é que a chamada foi para grupos temáticos, isto é, além de estarem vinculados a um curso de graduação, também deveriam ter um tema para nortear suas atividades e projetos. O tema do PET-BCC é desenvolvimento de software.',
    },
    {
        name: 'PET EnC',
        image: imagePetEnc,
        description: 'Na UFSCar o PET da Engenharia de Computação foi criado em 2008, entrando em atividade em 2009 e tem como principal objetivo difundir e agregar valor ao curso. Baseado em pesquisas técnicas e mapeamento de situações problemas o grupo organiza palestras, eventos e mini-cursos com o objetivo de informar e mostrar ao público os principais focos do curso no mercado de trabalho.',
    },
    {
        name: 'PyLadies',
        image: imagePyladies,
        description: 'O grupo PyLadies São Carlos foi oficializado no dia 15 de Novembro de 2014 por alunas da computação da UFSCar. Atualmente, é formado por cerca de 60 membros das mais diversas áreas do conhecimento (humanas, biológicas e exatas). É composto por maioria feminina, mas também há uma parcela pequena de membros homens, os quais entendem as causas firmadas e se comprometem a ajudar. A missão do grupo é incentivar a entrada de mais mulheres às áreas de programação, além de manter uma comunidade ativa e diversificada do Python. Para isso, o PyLadies São Carlos atua em escolas ensinando programação de maneira lúdica às meninas do ensino médio, para incentivá-las a entrarem nessa área e quebrar estereótipos relacionados à racionalidade, além de oferecer minicursos e palestras dos mais variados assuntos para a população no geral e participando em eventos de tecnologia e oficinas.',
    },
    {
        name: 'SECOMP',
        image: imageSecomp,
        description: 'A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de Computação se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações, conhecimentos e inovação aos participantes. Atualmente, em nossa décima edição, a SECOMP trabalha para que os assuntos sejam os mais atuais possíveis e que sejam transmitidos da maneira mais dinâmica, tentando aproximar o participante de áreas que vão da academia até o mercado de trabalho através de minicursos, workshops, palestras técnicas, empresariais, mesas redondas, feiras de recrutamento, desafio de programadores e muitos outros conteúdos que foram pensados ao longo de nossas edições, em busca de um evento cada vez melhor!',
    },
];