import styled from 'styled-components';
import { theme } from '../theme';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.lightGray};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || '0'};
  gap: ${props => props.gap || '0'};
`;