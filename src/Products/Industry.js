import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import segment1img from './images/homes.jfif';
import { Typography, Grid, Stack, Divider } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "center",
  direction: "row",

}));

const Header = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.2em',
  minWidth: '10em',
  color: '#1268B3',
  fontFamily: 'SourceSansPro',

}));
const MyDivider = styled(Divider)(({ theme }) => ({

  fontSize: '1.5em',
  minWidth: '10em',
  color: '#1268B3',
  textAlign: 'center',
  marginTop: "50px",
  fontFamily: 'SourceSansPro',
}));
const Subtext = styled(Typography)(({ theme }) => ({

  paddingTop: "0.2em",
  fontSize: '1.0em',
  textAlign: 'left',

  color: 'black',
  fontFamily: 'SourceSansPro',

  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: '25em',
  },
}));
const MyStack = styled(Stack)(({ theme }) => ({
  marginTop: "10px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "30px",
  marginRight: "30px",

}));

const PicGrid = styled(Grid)(({ theme }) => ({

  
  direction:"row",
  justifyContent:"center",
  alignItems:"flex-start",

  [theme.breakpoints.down("xs")]: {
    justifyContent:"center",
    alignItems:"center",
   },
    [theme.breakpoints.up("md")]: {
      justifyContent:"flex-end",
      alignItems:"center",
  
   },
}));


const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });

  }, []);
  return (
    <div>
      <MyDivider textAlign="center">Industry 4.9 </MyDivider>

      <MyGrid container spacing={0.5} >

        <PicGrid container item xs={12} md={6}   >
          <img src={segment1img} height="300px" alt="Logo" />
        </PicGrid>
        <Grid container item xs={12} md={6} >
          <MyStack spacing={2}>
            <Header>GEETRON SMART HOMES</Header>
            <Subtext>
                <p>
            The challenge for companies in the field of Industry 4.0 is to obtain quality data that adds reliability and intelligence to the manufacturing processes and feeds the KPI's at each decision level. 
</p>
<p>

The direct connection to production processes through the Industrial Internet of Things (IIoT) in connection with control devices and tools is a fundamental pillar in the essential Digital Transformation of the organization.
</p>
</Subtext>
</MyStack>
</Grid>
</MyGrid>
<MyGrid container spacing={0.5} >
<Grid>
<MyStack>
    <p>
﻿Current industry challenge

The main challenge for the industry is to improve its competitiveness by optimizing production processes with efficient, scalable, and well-attended solutions that facilitate increased operational efficiency and compliance with the various regulations that affect it.

Some common facts that can be improved can be highlighted:

Managing the traceability of the product in the process is one of the fundamental requirements
Obtaining Operational Performance (OEE) by direct connection to the machine is rare
The role of the plant persists, also the manual introduction of plant data even though it is through screens.
The process and waiting time of the product in progress is not known with precision
Predictive and preventive maintenance is applied to a minimal degree, due to the lack of accurate data recording of productive assets.
Geetron Solutions:



Our Solutions provide high added value to projects, focused on improving, growing, competing, and advancing in a dynamic market that requires keeping up to date with best practices and uses, thus achieving excellent ROI and Payback.

We can relate the following best practices:



Obtaining key data for the Digital Transformation process.
The automatic capture of the process prevents errors and controls events and KPI's in real-time.
Availability of a qualified engineering, technical and operational team for the design and implementation of projects. And your service in time.
Scalability of solutions and integration with management tools (ERPs, SGA's ...).
Wide and deep knowledge of the different productive areas: manufacturing, logistics, and services.
Use of standard communication protocols
Have an unambiguous customer orientation.
Applications of IoT technology for Industry 4.0
Our goal is to apply our products and services focused on improving our clients' operational processes.

We list some of our capabilities:

Real-time monitoring of processes to optimize and improve operational performance (OEE)
Indoor/outdoor geolocation of assets controlling warehouse locations and product in progress, and value / non-value added times.
Traceability of pallets and trucks. A specific application for the food sector and conservation chambers.
Quality/production control by artificial vision.
Cloud platform for monitoring and managing indicators in the cloud, offering customizable KPIs, adapted to any production model.
Integration with management tools (ERP, WMS ...) and data analytics: (Business Intelligence, Bigdata, Machine Learning, and others)
Benefits of IoT technology


Build a connected business framework.
Enable faster and more informed decision-making.
Gain competitive advantage with better intelligence.
Harness the benefits of manufacturing intelligence powered by the Industrial Internet of Things.
Optimize the potential of connected technology.
What are the main benefits of IoT in manufacturing?

Improve operational efficiency through process intelligence.
Guarantee safety and compliance with regulations.
Increase flexibility and agility.
Models and sensors
Air Quality Station

Carbon Dioxide Monitor

Water Quality monitoring</p>
          </MyStack>
       
        </Grid>

      </MyGrid>
      </div>
  );
}

export default App; 