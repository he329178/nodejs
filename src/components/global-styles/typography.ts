import { css } from "@emotion/core";

const styles = css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 500;
        line-height: 1.3;
    }
    p {
        font-size: 1.6rem;
    }
    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 3.5rem;
    }
    h3 {
        font-size: 3rem;
    }
    h4 {
        font-size: 2.5rem;
    }
    h5 {
        font-size: 2rem;
    }
    h6 {
        font-size: 1.6rem;
    }
    a {
        color: var(--links);
        font-weight: 500;
        text-decoration: underline;
    }
    p {
        margin: 0;
        margin-bottom: 1rem;
    }
    a,
    button {
        &:focus {
            outline: 3px solid var(--pink);
        }
    }
    hr {
        background: linear-gradient(-90deg, #c30cff 0%, #3597a7 35%, #17408c 70%, #44d4db 100%);
        border: none;
        height: 4px;
    }
`;

export default styles;
