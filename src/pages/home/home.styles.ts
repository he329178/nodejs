import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    .intro {
        padding: 8rem 0 5rem;
        p {
            margin: 0;
            font-size: 2.2rem;
            font-weight: 400;
            ${mq.largerThan("small")} {
                font-size: 2.5rem;
            }
            ${mq.largerThan("medium")} {
                font-size: 2.7rem;
            }
            a {
                font-weight: 500;
            }
        }
    }
    .latest-articles-section {
        /* background-color: #05010f; */
        /* background: linear-gradient(0deg, #251d38 0%, #05010f 100%); */
        z-index: 10;
    }
    .latest-articles {
        padding: 4rem 0;
        svg {
            position: absolute;
            width: 100%;
            opacity: 0.03;
            left: 0%;
            top: -5%;
            ${mq.largerThan("medium")} {
                width: 70%;
                left: -12%;
                top: -5%;
            }
        }
        &.dark svg {
            opacity: 0.045;
        }
        ${mq.largerThan("small")} {
            padding: 8rem 0 8rem;
        }
        h3 {
            font-size: 5.5rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 3rem;
            text-shadow: 2px 2px #c85fd4;
        }
        &.dark {
            h3 {
                text-shadow: 2px 2px var(--purple2);
            }
            .posts {
                .post {
                    background-color: #1a1623;
                    box-shadow: -1px -1px 0 0 #241e32;
                    border: 2px solid #241e32;
                    border-top: none;
                    border-left: none;
                    h4 {
                        a {
                            color: #ffffff;
                        }
                    }
                    .tags li a:focus {
                        outline-color: #fff;
                    }
                }
            }
        }
        .posts {
            display: grid;
            grid-template-columns: 1fr;
            .title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            ${mq.largerThan("small")} {
                grid-template-columns: repeat(2, 1fr);
                .title {
                    grid-area: auto / span 2 / auto / auto;
                }
            }
            ${mq.largerThan("medium")} {
                grid-template-columns: 1fr repeat(2, 1.4fr);
                .title {
                    grid-area: auto;
                    display: block;
                }
            }
            gap: 30px;
            .post {
                background-color: #ffffff;
                box-shadow: 0 0 12px 6px #0000000f;
                display: flex;
                flex-direction: column;
                padding: 1.6rem;
                padding-bottom: 0.6rem;
                border: 2px solid #f0e6fc;
                box-shadow: -1px -1px 0 0 #f0e5fb;
                border-top: none;
                border-left: none;
                /* &:before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background: #fff;
                    top: 0;
                    left: 0;
                    opacity: 0.2;
                    z-index: 10;
                }
                &:after {
                    content: "";
                    position: absolute;
                    height: 100%;
                    width: 1px;
                    background: #fff;
                    top: 0;
                    left: 0;
                    opacity: 0.07;
                } */
                h4 {
                    a {
                        font-weight: 600;
                        color: #000000;
                    }
                }
                .info {
                    color: var(--links);
                    font-size: 1.4rem;
                    font-weight: 500;
                    margin-bottom: 5px;
                    p {
                        margin: 0;
                        font-size: inherit;
                        display: inline-block;
                    }
                }
                p {
                    margin: 1.8rem 0 0;
                    font-size: 1.7rem;
                }
                .tags {
                    margin: 0;
                    padding: 0;
                    margin-top: 2.4rem;
                    list-style: none;
                    li {
                        display: inline-block;
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                        font-size: 1.4rem;
                        a {
                            background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
                            color: #fff;
                            padding: 3px 7px;
                            &:focus {
                                outline-color: #000;
                            }
                        }
                    }
                }
                .post-inner {
                    padding: 2rem 0.4rem 0.4rem 0.4rem;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    justify-content: space-between;
                }
            }
        }
    }
    .featured-course {
        padding: 4rem 0;
        &.dark {
            .gatsby-image-wrapper:after {
                background: radial-gradient(ellipse, rgba(6, 0, 16, 0.76), var(--bg) 72%);
            }
            .course-info h4 {
                /* text-shadow: 2px 2px var(--purple2); */
            }
            .course-reviews li {
                border: 2px solid #2b2439;
                border-top: none;
                border-left: none;
                background: #0f0b199c;
                box-shadow: -1px -1px 0 0 #2b2439;
            }
        }
        .gatsby-image-wrapper:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: radial-gradient(ellipse, rgba(249, 245, 253, 0.71), var(--bg) 72%);
        }
        .course-image {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
        }
        .course-info-wrap {
            min-height: calc(min(100vw - 4rem, 960px) * 844 / 1500);
        }
        .course-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 70%;
            .course-buttons {
                margin-top: 3rem;
                a {
                    margin-right: 2rem;
                }
            }
            h3 {
                align-self: flex-start;
                background: linear-gradient(45deg, #8d43db, #bf1fd5);
                font-size: calc(1rem + 0.6vw);
                padding: 5px 12px;
                font-weight: 600;
                margin-bottom: 2rem;
                color: #ffffff;
            }
            h4 {
                /* font-size: 5rem; */
                font-size: calc(2rem + 2vw);
                font-weight: 700;
                /* text-shadow: 2px 2px #c85fd4; */
            }
            p {
                font-size: calc(1.8rem + 0.2vw);
            }
        }
        .course-reviews {
            margin-top: 6rem;
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 4rem;
                li {
                    border: 2px solid #f0e5fb;
                    padding: 3rem 2rem;
                    background: #ffffffcf;
                    text-align: center;
                    border-top: none;
                    border-left: none;
                    box-shadow: -1px -1px 0 0 #f0e5fb;
                    &:before {
                        content: "";
                    }
                    svg {
                        width: 150px;
                        max-width: 100%;
                        margin-bottom: 1.5rem;
                        .cls-1 {
                            fill: #b825d6;
                        }
                        .cls-2 {
                            fill: #e4e44a;
                        }
                    }
                    blockquote {
                        margin: 0;
                        p {
                            font-size: 1.8rem;
                            font-weight: 500;
                        }
                        footer {
                            font-size: 1.5rem;
                            font-weight: 400;
                            opacity: 0.75;
                        }
                    }
                }
            }
        }
    }
`;

export default styles;
