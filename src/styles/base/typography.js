import styled from 'styled-components';
import { theme } from '../theme';

export const Heading = styled.h1`
  font-size: ${props => {
    switch (props.level) {
      case 'h1': return '1.875rem';
      case 'h2': return '1.5rem';
      case 'h3': return '1.25rem';
      case 'h4': return '1.125rem';
      default: return '1.5rem';
    }
  }};
  font-weight: ${props => props.fontWeight || '600'};
  color: ${props => props.color || theme.textPrimary};
  margin-bottom: ${props => props.marginBottom || '1.5rem'};
`;

export const Text = styled.p`
  font-size: ${props => props.size || '1rem'};
  color: ${props => props.color || theme.textSecondary};
  margin-bottom: ${props => props.marginBottom || '2rem'};
`;

export const Badge = styled.span`
  background-color: ${props => {
    if (props.variant === 'success') return theme.successLight;
    if (props.variant === 'warning') return theme.warningLight;
    if (props.variant === 'info') return theme.infoLight;
    return theme.lightGray;
  }};
  color: ${props => {
    if (props.variant === 'success') return '#065f46';
    if (props.variant === 'warning') return '#92400e';
    if (props.variant === 'info') return '#1e40af';
    return theme.textSecondary;
  }};
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;