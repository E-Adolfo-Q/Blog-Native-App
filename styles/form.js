
import React from 'react';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { blue, gray, h1FontSize, h2FontSize, h3FontSize, h4FontSize } from './variables';

export const TextInput = styled.TextInput`
  padding-vertical: 5px;
  ${({ h1 }) => h1 && css`
    font-size: ${h1FontSize};
  `}
  ${({ h2 }) => h2 && css`
    font-size: ${h2FontSize};
  `}
  ${({ h3 }) => h3 && css`
    font-size: ${h3FontSize};
  `}
  ${({ h4 }) => h4 && css`
    font-size: ${h4FontSize};
  `}
`;

const StyledIconFontAwesome = styled(Icon)`
  font-size: 18;
  color:white; 
  padding: 10px;
`;

export const FormControl = styled.View`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.View`
  padding-vertical: 10px;  
  justify-content:center;
  align-items: center;
  border-radius: 100px;
  ${({ info }) => info && css`
    background-color: ${blue};  
  `}
`;
const ButtonText = styled.Text`
  margin-top:10px;
  font-size:14px;
  color: white;
`;

const ContentButton = styled.View`
  flex-direction: row;
  margin-right:25px; 
`;

export const Button = ({ title, onPress,nameIcon,...rest }) => 
(
  <TouchableOpacity onPress={onPress}>
    <ButtonWrapper {...rest}>
     <ContentButton>
      <StyledIconFontAwesome name={nameIcon} />      
      <ButtonText>{title}</ButtonText>
     </ContentButton> 
    </ButtonWrapper>
  </TouchableOpacity>
);

export const Seperator = styled.View`
  height: 1px;
  border-top-width: 1px;
  border-top-color: ${gray};

  margin-top: 16px;
  margin-bottom: 16px;
`
