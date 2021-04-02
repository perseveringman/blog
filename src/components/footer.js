import React from "react"
import styled from "@emotion/styled";
const FooterWrap = styled.footer`
    marginTop: 2rem;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: ${p => p.theme.colors.articleText};
    transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;

const Footer = () => (<FooterWrap>© {new Date().getFullYear()}, Built with 🤡</FooterWrap>)

export default Footer