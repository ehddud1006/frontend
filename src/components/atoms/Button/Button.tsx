import styled from '@emotion/styled';
import theme from 'assets/theme';
import { CSSProperties, MouseEventHandler } from 'react';
import * as React from 'react';

interface buttonProps {
  buttonType: 'contained' | 'outlined' | 'buttonWithIcon' | 'iconButton';
  radius: 'round' | 'square' | 'circle';
  color: 'yellow' | 'purple' | 'black';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  children?: React.ReactNode;
  css?: CSSProperties;
}

const StyledButton = styled.button`
  padding: 7px 20px;
  border-radius: 44px;
  background: none;
  border: none;
  font-family: NotoSansCJKKR;
  font-size: 1rem;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${theme.palette.yellow[100]};
  }

  @media (max-width: ${theme.screenSize.xl}) {
    padding: 5px 16px;
    font-size: ${theme.fontSize[13]};
  }

  @media (max-width: ${theme.screenSize.md}) {
    font-size: ${theme.fontSize[11]};
  }
`;

function Button(props: buttonProps) {
  const { buttonType, radius, color } = props;
  const css = props.css && props.css;
  const onClickEvent = props.onClick && props.onClick;

  let style: CSSProperties = {};

  switch (buttonType) {
    case 'contained':
      style = {
        ...style,
        background: theme.button.backgroundColor[color],
        color: theme.button.fontColor[color],
        fontWeight: 'bold',
      };
      break;

    case 'outlined':
      if (props.selected) {
        style = {
          ...style,
          background: theme.button.backgroundColor[color],
          color: theme.button.fontColor[color],
          fontWeight: 'bold',
        };
      } else {
        style = {
          ...style,
          border: `solid 2px ${theme.button.backgroundColor[color]}`,
        };
      }
      break;

    case 'buttonWithIcon':
      style = {
        ...style,
        background: theme.button.backgroundColor[color],
        color: theme.button.fontColor[color],
        display: 'grid',
        gridTemplateColumns: '1fr 11px',
        gap: '7.7px',
        alignItems: 'center',
      };
      break;

    case 'iconButton':
      style = {
        ...style,
        background: theme.button.backgroundColor[color],
        padding: '22px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.11)',
      };
      break;

    default:
      break;
  }

  style = { ...style, borderRadius: theme.button.radius[radius] };
  style = { ...style, ...css };

  return (
    <StyledButton style={style} onClick={onClickEvent}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
