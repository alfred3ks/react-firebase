import styled, { css } from "styled-components";

// Estilos del formulario de inicio se sesion:
export const Boton = styled.button`

  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;
  margin-top: 10px;
  margin-right: 10px;

  width: ${props => props.largo ? '100%' : 'auto'};

  &:hover {
  background: #44a559;
  color: #fff;
}

${props => props.negro && css`
  background: #000;
  color: #fff;
`}
`;