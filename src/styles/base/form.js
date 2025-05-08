import styled from 'styled-components';
import { theme } from '../theme';

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${theme.mediumGray};
  border-radius: 0.5rem;
  outline: none;

  &:focus {
    border-color: ${theme.primary};
    box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.textPrimary};
  margin-bottom: 0.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: ${props => props.marginBottom || '1rem'};
`;
