import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 40px;

  @media only screen and (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`

export const Item = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 80px;
    border-radius: 8px;
    heigth: 100%;
    color: ${colors.heading};
    background-image: linear-gradient(
      90deg,
      ${colors.background600},
      ${colors.background700}
    );

    span {
      margin-left: 16px;
      font-size: 18px;
      color: ${colors.heading};
    }

    &:hover {
      opacity: 0.8;
    }

    @media only screen and (max-width: 48rem) {
      padding: 30px 60px;

      span {
        margin-left: 16px;
        font-size: 20px;
      }
    }
  `}
`
