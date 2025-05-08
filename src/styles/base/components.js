import styled from 'styled-components';
import { theme } from '../theme';

export const Card = styled.div`
  background-color: ${theme.white};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: ${props => props.padding || '2rem'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || 'none'};
  text-align: ${props => props.textAlign || 'left'};
`;

export const Button = styled.button`
  background-color: ${props => props.secondary ? theme.secondary : theme.primary};
  color: ${theme.white};
  font-weight: 600;
  font-size: 0.9rem;
  padding: ${props => props.padding || '0.5rem 1.25rem'};
  border-radius: 0.375rem;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  transition: background-color 0.2s, transform 0.05s;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.gap || '0.5rem'};

  &:hover {
    background-color: ${props => props.secondary ? theme.secondaryHover : theme.primaryHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;

