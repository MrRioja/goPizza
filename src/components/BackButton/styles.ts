import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 40;
  height: 40;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_100};
`;
