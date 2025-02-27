import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const COLOR = {
  primary: css`
    color: ${({ theme }) => theme.colors.primary.color};
    background-color: ${({ theme }) => theme.colors.primary.buttonBackground};
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.primary.buttonHoverBackground};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.secondary.color};
    background-color: ${({ theme }) => theme.colors.secondary.buttonBackground};
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.secondary.buttonHoverBackground};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  width: 141px;

  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding-block: 16px;

  ${(props) => props.color && COLOR[props.color]}

  transition: background-color 0.2s;

  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1;

  /* margin: 23px 25px; */

  &:disabled {
    cursor: not-allowed;
  }
`;
