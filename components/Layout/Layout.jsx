import React from "react";
import Header from "./components/Header/Header";
import SectionBody from "./components/sectionBody/SectionBody";
import SectionHead from "./components/SectionHead/SectionHead";

export default function Layout({ children }) {
    return (
        <>
        <Header />
        {children}
        <SectionHead />
        <SectionBody />                      
        </>
    )
}