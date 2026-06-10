---
name: "Ubicuity"
tagline: "Bring your spaces to life with interactive digital experiences."
category: Web3
accent: purple
client: "Ubicuity"
industry: "Digital Experience & Content Management"
year: 2023
duration: "4–8 months"
team: "2 frontend developers"
services:
  - Frontend Engineering
  - Mobile App
  - UX/UI
techStack:
  - React
  - React Native
  - Monaco Editor
  - Redux
  - Formik
  - axios
publishedAt: 2025-02-15
heroImage: "/images/case-studies/ubicuity/ubicuity_.png"
summary: "Ubicuity empowers space managers and content providers to control all digital experiences they wish to create or manage, displaying them in customizable physical spaces. SpaceDev built the frontend tooling (from a Figma-like designer interface to a code editor) that makes configuring immersive digital environments intuitive for any user."
objectives:
  - Enable space managers and content providers to control and manage digital experiences for physical spaces.
  - Supply tools that facilitate the creation of interactive or automated digital content.
  - Ensure that content can be intuitively displayed across various physical areas configured by the user.
  - Make the platform accessible to both technical users (via source code editing) and non-technical users (via visual design tools).
deliverables:
  - "Visual designer tool (Figma-like) for creating and customizing digital content without coding."
  - "Monaco Editor integration for source code-based content configuration."
  - "Experience editor for managing and personalizing physical space instances."
  - "React Native application for managing physical devices and spaces linked to a user account."
  - "Full frontend implementation using React, Redux, Formik, axios, and supporting libraries."
outcome: "The Ubicuity platform is now a comprehensive solution for space managers and content providers who want to deliver immersive digital experiences in any environment. It has been deployed at real cultural venues, including the Roberto Polo Collection at the Toledo Museum of Contemporary Art and the ARCO Art Fair in Spain, where it showcased the work of artist Guillermo Forner."
gallery:
  - "/images/case-studies/ubicuity/gallery/gallery1.webp"
  - "/images/case-studies/ubicuity/gallery/gallery2.webp"
  - "/images/case-studies/ubicuity/gallery/gallery3.webp"
  - "/images/case-studies/ubicuity/gallery/gallery4.webp"
  - "/images/case-studies/ubicuity/gallery/gallery5.webp"
  - "/images/case-studies/ubicuity/gallery/gallery6.webp"
metatitle: "Ubicuity Case Study: Interactive Digital Spaces | SpaceDev"
metadescription: "SpaceDev built Ubicuity's frontend tooling: a Figma-like visual designer, code editor, and React Native app powering digital experiences at museums and fairs."
---

## The Challenge

Ubicuity set out to solve a problem that museums, galleries, event venues, and retail spaces all share: getting the right digital content onto the right screens, in the right spaces, with as little friction as possible. Managing digital experiences across physical environments is surprisingly complex: content needs to be created, versioned, pushed to physical devices, and displayed correctly across spaces that are each configured differently.

The Ubicuity team needed a product that could serve two distinct types of users simultaneously. Technical users (developers or advanced operators) needed a code-editing interface for precise control over content and behavior. Non-technical users (venue managers, content creators, curators) needed a visual design tool they could pick up without engineering support. Both needed to manage physical devices and spaces from a single application.

SpaceDev came in to build the frontend layer that would tie these needs together, providing two senior frontend developers to own the web and mobile interfaces across the full scope of the project.

## Our Approach

SpaceDev's team built three distinct interaction surfaces within the Ubicuity platform. The visual designer tool gives non-technical users a Figma-like environment to compose and style digital content, arrange layouts, and push experiences to configured spaces. Alongside it, a Monaco Editor integration (the same editor that powers VS Code) provides code-first users with direct control over content through source editing. A third mode, the experience editor, handles the higher-level management of space instances, letting users link content to specific physical areas and manage how experiences are scheduled or triggered.

On mobile, SpaceDev built a React Native application that serves as the on-site management layer. Space managers use it to register and control physical devices, configure which spaces are linked to which content, and monitor active deployments from anywhere. The mobile app was built to reflect the same data model and account structure as the web platform, so changes propagate consistently across surfaces.

Throughout the build, the team leaned on a focused library stack: Redux for state management, Formik for form handling, axios for API communication, and react-draggable and react-dropzone for the interactive content composition experience. Each choice was guided by what would make the UI feel responsive and reliable in real-world deployment conditions.

## Results

Ubicuity moved from concept to a platform that is already operating in production at real cultural venues. The solution was used to reproduce artwork from the Roberto Polo Collection at the Toledo Museum of Contemporary Art in Spain, and to showcase the work of artist Guillermo Forner at the ARCO Art Fair, one of Spain's most prominent contemporary art events.

These deployments validate the platform's ability to handle serious, public-facing use cases. The combination of visual tools, code editing, and mobile device management gives Ubicuity a genuinely flexible product that can serve very different environments without requiring custom engineering for each one.

## Tech Stack

The frontend stack was built on React for web and React Native for mobile, with Monaco Editor providing the in-browser code editing experience. Redux handled shared state across the designer, editor, and device management views. Supporting libraries including Formik, Dayjs, html2canvas, axios, react-draggable, and react-dropzone rounded out the interaction layer, each chosen for reliability and fit with the specific UX challenges of a content management tool for physical spaces.
