import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100vw;
    heigth: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 72px 24px;
    transition: all 0.3s ease-out;

    .avatar {
      width: 180px;
      height: 180px;
      border-radius: 90px;
      margin-bottom: 40px;
      overflow: hidden;
      border: 4px solid ${colors.primary};
    }

    h1 {
      font-size: 42px;
      color: ${colors.heading};
      margin-bottom: 12px;
    }

    .description {
      font-size: 18px;
      color: ${colors.text};
      max-width: 400px;
      text-align: center;
    }

    a:hover {
      opacity: 0.8;
      text-decoration: underline;
      text-decoration-color: ${colors.heading};
    }

    strong {
      color: ${colors.heading};
    }
  `}
`
