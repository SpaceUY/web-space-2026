---
name: "Genba"
tagline: "Driving innovation in Latin America through factory automation."
category: Web2
accent: green
client: "Genba Robotics"
industry: "Robotics & Industrial Automation"
year: 2024
duration: "Discovery: 2 weeks · MVP: 2 months"
team: "1 senior developer, 1 PM, 1 QA, 1 UX/UI designer"
services:
  - Product Discovery
  - UX/UI Design
  - Frontend Development
  - Backend Engineering
techStack:
  - React
  - NestJS
  - MongoDB
publishedAt: 2025-02-15
heroImage: "/images/case-studies/genba/genba_.png"
summary: "Genba is a robotics startup revolutionizing factory productivity in Latin America with cost-effective automation solutions. SpaceDev ran a two-week Discovery Sprint and built the Paretto palletizing platform, a plug-and-play interface that lets factory operators configure robotic palletizing workflows without technical expertise."
objectives:
  - Design and build an intuitive palletizing platform that factory operators can configure themselves.
  - Define clear product requirements through upfront discovery to avoid costly rework under a tight timeline.
  - Deliver a functional, reliable MVP quickly enough to support Genba's demonstration milestone with Newlab and Grupo Ras.
  - Make the configuration process fast and accessible for users without a robotics background.
deliverables:
  - "Two-week Discovery Sprint with UX research and product definition, conducted jointly with Genba's team."
  - "UX/UI design for the Paretto platform, covering the full configuration flow for factory operators."
  - "React frontend providing a plug-and-play interface for palletizing process configuration."
  - "NestJS + MongoDB backend handling process parameters, layer pattern algorithms, and robotic arm instructions."
  - "Integrated system connecting the configuration interface to the UR20 robotic arm from Universal Robots."
outcome: "Genba successfully demonstrated Paretto at the Newlab event at the Uruguay Innovation Hub, powered by a UR20 from Universal Robots, in collaboration with Grupo Ras. The platform allows users to configure a complete palletizing process by entering parameters like pallet size, product type, weight, and layer patterns; the system's algorithm handles the rest, instructing the robotic arm to execute the process end to end."
gallery:
  - "/images/case-studies/genba/gallery/gallery1.png"
  - "/images/case-studies/genba/gallery/gallery2.png"
  - "/images/case-studies/genba/gallery/gallery3.png"
  - "/images/case-studies/genba/gallery/gallery4.png"
  - "/images/case-studies/genba/gallery/gallery5.png"
  - "/images/case-studies/genba/gallery/gallery6.png"
---

## The Challenge

Genba is a standout from the Newlab Pilot Showcase, building cost-effective robotic solutions to automate factory processes for Latin American clients. Their focus is end-of-line automation, specifically palletizing, an area where labor is still dominant in the region despite the clear efficiency case for robotics. The gap isn't the hardware; it's the software that makes the hardware accessible.

The core problem was that configuring a robotic palletizing system typically required specialized technical knowledge that most factory floor operators don't have. Genba needed a platform called Paretto that could sit in front of the robotic hardware and make the configuration process feel as simple as filling out a form. They also had a specific milestone to hit: a live demonstration at the Newlab event at the Uruguay Innovation Hub, which created a hard delivery deadline.

The tight timeline made upfront clarity especially important. Building the wrong thing and discovering it during QA wasn't an option.

## Our Approach

We started with a two-week Discovery Sprint, working closely with Genba's product team to understand the factory operator's mental model, define the user flows, and lock in the UX/UI design before writing a line of production code. This investment at the front end saved significant time later: decisions that typically surface during development were resolved during discovery, when they're cheapest to change.

From there, a focused team of four (a senior developer, project manager, QA engineer, and UX/UI designer) built the Paretto platform over two months. The frontend was built in React, with NestJS and MongoDB on the backend. The architecture was designed to translate user-entered parameters (pallet dimensions, product specifications, weight, desired layer patterns) into the precise instructions that the UR20 robotic arm from Universal Robots needed to execute the task.

The UX work was particularly important here. The interface needed to feel approachable to factory operators who aren't software users by training. Every configuration step was designed to reduce cognitive load and give operators immediate confidence that the system understood what they wanted.

## Results

Genba successfully demonstrated Paretto at the Newlab event at the Uruguay Innovation Hub, with the platform running live on a UR20 robotic arm in collaboration with Grupo Ras. The demonstration validated the core concept: operators could configure a full palletizing process by entering key parameters, and the platform's algorithm handled everything from layer optimization to robotic arm instruction delivery.

The result is a genuinely plug-and-play experience for factory automation. What previously required specialized robotics programming knowledge is now accessible to floor operators through a clean, guided interface. For Genba's clients in Latin America, where automation adoption is accelerating but technical talent is often scarce, this accessibility is the product's main value.

## Tech Stack

The platform was built with React on the frontend and NestJS with MongoDB on the backend. The system integrates with Universal Robots hardware, specifically the UR20. Design was done through a structured UX/UI process during the Discovery Sprint phase before development began.
