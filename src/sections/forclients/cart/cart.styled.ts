import styled from 'styled-components';
import theme from '../../../theme';

export const Count = styled.span<{ $totalMinutes?: number }>`
  background-color: ${(props) =>
    props.$totalMinutes && props.$totalMinutes > 90
      ? `${theme.colors.primary}15`
      : '#12851215'};
  border: ${(props) =>
    props.$totalMinutes && props.$totalMinutes > 90
      ? `1px solid ${theme.colors.primary}40`
      : `1px solid #12851250`};
  color: ${(props) =>
    props.$totalMinutes && props.$totalMinutes > 90
      ? `${theme.colors.primary}`
      : '#128512'};
  padding: 0 0.2em;
  border-radius: 6px;
  font-family: ${theme.fonts.IbmRegular};
  font-weight: 400;
`;
export const Conditions = styled.p`
  margin: 0 auto;
  padding: 0;
  font-size: 0.85em;
`;

export const TextChecked = styled.span`
  background-color: #00000010;
  border: 1px solid #00000020;
  border-radius: 6px;
  padding: 0 0.2em;
  white-space: nowrap;
`;
