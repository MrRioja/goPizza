import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_100};
`;
