import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FlatListAccordion from '../../assets/components/flatListAccordion';
import NavigationHeader from '../../assets/components/navigationHeader';

import imageALOC from '../../assets/images/labsImages/aloc.png';
import imageASGARD from '../../assets/images/labsImages/asgard.png';
import imageAdvanSE from '../../assets/images/labsImages/advanceSE.png';
import imageBIPG from '../../assets/images/labsImages/biomedical.png';
import imageBioMal from '../../assets/images/labsImages/biomal.png';
import imageCIG from '../../assets/images/labsImages/cig.png';
import imageGSDR from '../../assets/images/labsImages/gsdr.png';
import imageINAG from '../../assets/images/labsImages/logo_ufscar.png';
import imageLALIC from '../../assets/images/labsImages/lalic.png';
import imageLARIS from '../../assets/images/labsImages/laris.png';
import imageLBD from '../../assets/images/labsImages/logo_ufscar.png';
import imageLIFeS from '../../assets/images/labsImages/lifes.png';
import imageLSC from '../../assets/images/labsImages/logo_ufscar.png';
import imageLince from '../../assets/images/labsImages/lince.png';
import imageMIDAS from '../../assets/images/labsImages/midas.png';

export default function LaboratoriosPesquisa({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40}}>
            <NavigationHeader navigation={navigation} title={'Laboratórios e Pesquisa'}/>
            <View style={{ flex:1, backgroundColor: '#fff' }}>
                <FlatListAccordion data={laboratorios} />
            </View>
        </View>
    );
};

const laboratorios = [
    {
        name: 'Laboratório de ALgoritmos, Otimização e Combinatória',
        image: imageALOC,
        description: 'O laboratório ALOC é um centro de pesquisa focado no desenvolvimento de algoritmos eficientes para problemas de otimização combinatória, que foi fundado em 2018 pelo professor Mário César San Felice, do DC-UFSCar, com a colaboração do professor Pedro Hokama, do IMC-Unifei. Nossos objetivos envolvem tanto a qualificação de estudantes na resolução de problemas computacionais complexos, tipicamente NP-Difíceis, quanto a modelagem e resolução de problemas da indústria, normalmente atacados pela área correlata da pesquisa operacional.        ',
    },
    {
        name: 'ASGARD - Above Cloud Computing',
        image: imageASGARD,
        description: 'O laboratório ASGARD foi criado em 2012, situado na Universidade Federal de São Carlos (UFSCar), no Departamento de Computação (DC), sendo dirigido pelos professores César Marcondes e Hermes Senger. Em nosso laboratório trabalhamos com redes de computadores (Em específico, Internet do futuro) e sistemas distribuídos. E temos uma cafeteira própria ;D!',
    },
    {
        name: 'Advanced Research in Software Engineering',
        image: imageAdvanSE,
        description: 'With more than 23 years of history, this lab (old GDMS) has greatly contributed to the research in software engineering in Brazil. Currently, it is coordinated by professors Dr. Valter Vieira de Camargo e Dr. Daniel Lucrédio. Both are able to coordinate masters, Ph.D. and also post-doc students. We are always open to receive new student to work with us! We have colaboration with several institutions/universities in Brazil and abroad. We have in this lab a good space with good infrastructure to receive the students. We have also interest in collaborations with private companies to have the opportunity to apply our research in the real world. Come to work with us!',
    },
    {
        name: 'Biomedical Image Processing Group',
        image: imageBIPG,
        description: 'O grupo de processamento de imagens biomédicas (Biomedical Image Processing group - BIPG) foi fundado em 2011 pelo Prof. Dr. Ricardo J. Ferrari com o objetivo de desenvolver sistemas computacionais inteligentes para auxílio ao diagnóstico de imagens biomédicas. Para alcançar tal objetivo, o grupo desenvolve e aplica técnicas de processamento multidimensional de sinais, visão computacional e aprendizado de máquina, incluindo NeuroNets e Deep Learning. Atualmente, os principais temas de pesquisa do grupo são: (a) segmentação e análise de estruturas cerebrais (como hipocampos, amídalas e corpo caloso) em imagens de ressonância magnética (RM) visando a criação de biomarcadores para doenças neurodegenerativas, como o Alzheimer e o Parkinson, (b) segmentação automática, classificação e predição de lesões de Esclerose Múltipla em imagens de RM para auxílio na caracterização do estado evolutivo da doença, (c) detecção, rastreamento e análise morfológica de células em imagens de vídeo de microscopia intravital (IVM) e (d) quantificação de tecidos adiposos em imagens de tomografia computadorizada (TC) e RM do abdômen e coxas em estudos de osteoartrite.',
    },
    {
        name: 'Bioinformatics and Machine Learning Group',
        image: imageBioMal,
        description: 'O Grupo de Bioinformática e Aprendizado de Máquina foi fundado em 2015, no Departamento de Computação da Universidade Federal de São Carlos, São Carlos. Nosso foco de pesquisa é o desenvolvimento e aplicação de métodos de Aprendizado de Máquina em tarefas complexas, principalmente para resolver problemas relacionados à Biologia. O líder do grupo é o Professor Ricardo Cerri do DC/UFSCar. O grupo é bastante ativo na área, com produções científicas recentes em conferências e periódicos internacionais. Possui alunos de graduação e pós-graduação, e colaborações com pesquisadores de outras instituições nacionais e internacionais. Nossa pesquisa tem como objetivo propor métodos de aprendizado de máquina para atender à crescente demanda de tarefas preditivas e descritivas em bioinformática, especialmente aquelas complexas envolvendo variáveis de saída múltiplas e estruturadas. Assim, nosso grupo tem interesse especial em métodos supervisionados para aprendizado com múltiplas saídas (multi-output learning), usando redes neurais, métodos evolutivos, árvores de decisão, entre outros.',
    },
    {
        name: 'Computational Intelligence Group',
        image: imageCIG,
        description: 'O grupo de pesquisa Computational Intelligence Group (CIG) existe desde 1992 e, desde então, dedica-se à investigação de métodos e técnicas no escopo da inteligência computacional focalizando principalmente os temas de aprendizado de máquina e representação do conhecimento. Os pesquisadores e alunos do CIG têm, como foco principal, a construção de sistemas computacionais inteligentes capazes de realizar o aprendizado automático e de representar e manipular o conhecimento adquirido através de teorias clássicas e não clássicas de representação do conhecimento. O grupo é liderado pela Profa. Heloisa de Arruda Camargo e conta com a participação de pesquisadores de outras instiuições e alunos do PPGCC UFSCar.',
    },
    {
        name: 'Grupo de Sistemas Distribuídos e Redes',
        image: imageGSDR,
        description: 'O Grupo de Sistemas Distribuídos e Redes (GSDR) foi criado em 1994, quando o Departamento de Computação (DC) e o Programa de Pós-Graduação em Ciência da Computação (PPG-CC) da UFSCar foram reestruturados em grupos de pesquisa. Pesquisas atuais envolvem aspectos que vão da infraestrutura de rede aos sistemas distribuídos, tratadas em projetos que envolvem colaboração com outros grupos de pesquisa do país e do exterior.',
    },
    {
        name: 'Image and Network Analysis Group',
        image: imageINAG,
        description: 'O INAG foi iniciado pelo Prof. Cesar Henrique Comin em 2019 com o objetivo de estudar dois tipos de dados muito relevantes para o mundo moderno: imagens e grafos. O estudo de imagens digitais consiste em reconhecer e caracterizar objetos relevantes capturados por sistemas de imageamento. No INAG, estamos particularmente interessados no estudo de dois tipos de imagens: biológicas e urbanas. Sobre imagens biológicas, trabalhamos na caracterização de vasos sanguíneos do córtex, auxiliando em pesquisas de fronteira sobre doenças como o derrame e Alzheimer, na modelagem de morfologia de neurônios e no diagnóstico do câncer de próstata. A respeito de imagens urbanas, estamos interessados no estudo da geometria e topologia de cidades e na definição de novas arquiteturas de redes neurais, com o principal objetivo de modelar esses sistemas de forma a sugerir mecanismos de otimização para indicadores urbanos. Com relação à área de grafos, nosso interesse está em utilizar essas estruturas altamente versáteis para caracterizar diversos tipos de sistemas utilizando técnicas de Ciência de Redes, como redes sociais, transporte urbano, sistemas de recomendação, redes neurais, redes vasculares e também bases de imagens digitais.',
    },
    {
        name: 'Laboratório de Linguística e Inteligência Computacional',
        image: imageLALIC,
        description: 'O Laboratório de Linguística e Inteligência Computacional (LALIC) situado no Departamento de Computação da UFSCar é um laboratório de pesquisa integrante do Núcleo Interinstitucional de Linguística Computacional (NILC). O LALIC é um grupo certificado do CNPq que desenvolve pesquisas científicas nas áreas de Linguística Computacional e Inteligência Computacional, Processamento de Imagens e Visão Computacional.',
    },
    {
        name: 'Laboratory of Autonomous Robots and Intelligent Systems',
        image: imageLARIS,
        description: 'O LARIS reúne pesquisadores, alunos pós-graduação e graduação trabalhando em projetos de pesquisa que visam desenvolver robôs e sistemas inteligentes que são capazes de operar de forma autônoma em ambientes complexos e diversificados. Alcançar este objetivo envolve pressionar o estado da arte em várias abordagens diferentes, como Roteamento; Scheduling; Planejamento de Trajetórias; Exploração, Mapeamento e Monitoramento de Ambientes; Localização; Sistema de Navegação Autônoma; Modelagem, Filtragem e Controle de Sistemas; Fusão de Sinais; e Aprendizado de Máquinas. O laboratório possui projetos financiados com fundações de amparo à pesquisa, colaborações com outras universidades do país e do mundo, e empresas.',
    },
    {
        name: 'Laboratório de Banco de Dados',
        image: imageLBD,
        description: 'O laboratório LBD é um centro de pesquisa focado no desenvolvimento de soluções para problemas de armazenamento, recuperação e análise de dados. Trabalha em diversas frentes do campo de Ciência de Dados, desde coleta, tratamento, análise e visualização de dados.',
    },
    {
        name: 'Laboratório de Interação Flexível e Sustentável',
        image: imageLIFeS,
        description: 'O Laboratório de Interação Flexível e Sustentável (LIFeS) reúne um grupo de pesquisadores interessados em aperfeiçoar e descobrir novas maneiras de desenvolver sistemas computacionais interativos que possam ser usados, e façam sentido, para o maior número possível de usuários, de maneira universal e não discriminatória. O grupo acredita que uma forma de se tratar a diversidade de requisitos de interação é através da flexibilidade que as soluções de software permitem. O grupo também tem iniciado pesquisas na temática da sustentabilidade nas soluções de software e hardware. Sustentabilidade é o termo dado à prática de consumir garantindo que não falte nada no futuro. Mais do que o aspecto ambiental, a questão da sustentabilidade envolve também aspectos sociais e econômicos. Os computadores têm um papel central na temática da sustentabilidade, estando cada vez mais presentes no cotidiano das pessoas, o que favorece a disseminação de informações em larga escala, podendo ser uma ferramenta útil para a conscientização, mobilização e promoção de mudanças de comportamento em prol da sustentabilidade. Por outro lado, as soluções computacionais são um bem de consumo e impactam nas questões de sustentabilidade, exigindo um repensar das nossas práticas de design, desenvolvimento e descarte. Sob essa perspectiva, é preciso buscar soluções de interfaces de usuário que conscientizem e instrumentalizem os cidadãos na melhoria da relação dos indivíduos entre si e com o seu entorno, incluindo o meio ambiente e as soluções de tecnologia, de maneira inteligente e mais sustentável. O grupo acredita que o papel do designer no desenvolvimento de uma sociedade sustentável não está apenas em criar produtos sustentáveis, está também em vislumbrar produtos, processos e serviços que incentivam o consumo consciente e o comportamento sustentável. Mais recentemente, o LIFeS também tem investigado o desenvolvimento de tecnologias assistivas com sistemas dedicados e sistemas aéreos não tripulados.',
    },
    {
        name: 'Laboratório de Sistemas Computacionais',
        image: imageLSC,
        description: 'O Laboratório de Sistemas Computacionais (LSC) reúne pesquisadores interessados em desenvolver arquiteturas, técnicas e ferramentas usadas nos mais diversos sistemas computacionais. Suas pesquisas envolvem principalmente o projeto de sistemas digitais e o uso de computação paralela, de alto desempenho e eficientes, bem como a exploração de técnicas que facilitem a geração ou uso dessas plataformas e de seu algoritmos. O LSC, criado em 2019, teve origem a partir dos trabalhos envolvendo hardware desenvolvidos pelos membros do Grupo de Arquiteturas e Processamento de Imagens e Sinais (GAPIS). Este, por sua vez, foi fundado por volta de 1995 devido à adoção da estrutura de grupos no DC e à atuação dos docentes nas áreas de Arquitetura de Computadores e Processamento de Imagens. Entre seus fundadores, estavam os professores José Hiroki Saito, Nelson Delfino d\'Ávila Mascarenhas, Noritsuna Furuya, Jorge Luiz e Silva, Sandra Abib, Ildeberto de Genova Bugatti, Marcos Luiz Mucheroni, Takashi Utsunomiya, Maria da Graça Brasil Rocha e colaboradores como o Prof. Paulo Estevão Cruvinel, entre outros. Atualmente, estão sendo desenvolvidas neste laboratório pesquisas na área de Arquitetura de Computadores de alto desempenho e eficientes, voltadas para as mais diversas aplicações, tais como: processamento de vídeo e imagens (analógicas, digitais, hiperespectrais, médicas, etc.) em tempo real, geoprocessamento, sistemas inteligentes, robótica, manycores, supercomputadores, etc. Para o desenvolvimento de tais aplicações, são usadas plataformas heterogêneas, tais como FPGAs, SoCs e GPUs. O LSC tem sido fundamental para o desenvolvimento de projetos financiados pelo CNPq e FAPESP no DC, além de trabalhos de mestrado e doutorado do PPGCC.',
    },
    {
        name: 'Laboratory for Innovation on Computing and Engineering',
        image: imageLince,
        description: 'O Lince - Laboratório para Inovação em Computação e Engenharia, foi criado com esse nome em 2004. O objetivo do Lince em seus dez primeiros anos foi promover ciência, desenvolvimento tecnológico e inovação em áreas relacionadas a sistemas multimídia. O Laboratório participou de vários projetos interinstitucionais, em parcerias com universidades como PUC-Rio, UFPb, UFAM, USP, UNICAMP, ITA, UNESP entre outras, e projetos em parceria com empresas como C&T, TokenLab, COC, etc. Os projetos sempre estiveram relacionados a sistemas multimídia em plataformas como desktop, web, tv digital, mobile, cloud e em multiplataformas. O Lince também sempre incentivou a ação empreendedora entre seus alunos e bolsistas, tendo gerado empresas spin-off, entre elas Token Lab, e Sureale. Atualmente o Lince vem promovendo o desenvolvimento de tecnologia e aplicações de retorno mais imediato à sociedade procurando atender, principalmente, parcelas vulneráveis da população brasileira.',
    },
    {
        name: 'Mineração de Dados e Aplicações',
        image: imageMIDAS,
        description: 'O grupo de pesquisa em Mineração de Dados e Aplicações (MIDAS) foi criado em 2018 pelo professor Diego Furtado Silva, com o apoio de outros docentes da área de Inteligência Artifical do Departamento de Computação. Inicialmente pequeno, o grupo teve rápido crescimento, especialmente com a inclusão do professor Murilo Coelho Naldi, no início de 2019. Hoje, o laboratório conta com a colaboração de alunos de graduação e pós-graduação, trabalhando em diferentes projetos de pesquisa em Mineração de Dados e áreas correlatas. O laboratório conta com parcerias com fundações de amparo à pesquisa federais e estaduais, colaborações com outras universidades do país e do mundo, além de diversas empresas nacionais. Com o crescente volume de dados coletados e armazenados em diversos domínios do conhecimento, é cada vez mais importante a criação de técnicas para se obter conhecimento útil para a tomada de decisão a partir de dados. Pensando nisso, o MIDAS desenvolve pesquisa em diversas tarefas, como classificação e agrupamento de dados, considerando desde a garantia da qualidade dos dados até a aplicação de técnicas de Aprendizado de Máquina. O laboratório tem interesse especial em dados em forma de séries temporais e fluxo contínuo. Além de pesquisa básica na área, o grupo também tem interesse em aplicações da Mineração de Dados em diferentes áreas de conhecimento.',
    },
];