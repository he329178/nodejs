import { css } from "@emotion/core";
import { mq } from "@utils";

export const courseHeaderOverrides = css`
    overflow: visible;
    position: absolute;
    width: 100%;
    .content {
        position: relative;
    }
    ${mq.only("small")} {
        position: relative;
        background: #05010f;
        overflow: hidden;
        .canvas-wrap {
            height: 100% !important;
        }
    }
`;

const styles = css`
    .progress {
        position: fixed;
        top: 0px;
        z-index: 100;
        left: 0px;
        width: 100%;
        height: 5px;
        progress {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: none;
            background-color: transparent;
            color: var(--purple);
        }
        progress::-webkit-progress-bar {
            background-color: transparent;
        }

        progress::-webkit-progress-value {
            background-color: transparent;
            background-image: linear-gradient(-90deg, var(--purple) 0%, var(--purple2) 100%);
        }

        progress::-moz-progress-bar {
            background-color: transparent;
            background-image: linear-gradient(-90deg, var(--purple) 0%, var(--purple2) 100%);
        }
    }
    .header {
        overflow: hidden;
        padding-top: 32rem;
        padding-bottom: 8rem;
        background: #05010f;
        ${mq.only("small")} {
            padding-top: 6rem;
            padding-bottom: 6rem;
        }
        &:after {
            content: "";
            width: 100%;
            height: 4px;
        }
        .header-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            .gatsby-image-wrapper {
                height: 100%;
            }
            &:after {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: radial-gradient(ellipse, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.96) 72%);
            }
        }
    }
    .title-wrap {
        width: 100%;
        max-width: 750px;

        .title {
            font-size: calc(3rem + 1.5vw);
            font-weight: 800;
            margin-bottom: 2rem;
            color: #ffffff;
        }
        .info {
            color: #fff;
            font-size: 1.8rem;
            font-weight: 500;
            margin-bottom: 1.2rem;
            opacity: 0.86;
            p {
                margin: 0;
                font-size: inherit;
                display: inline-block;
                &:before {
                    content: "|";
                    margin: 0 0.7rem;
                }
            }
        }
        .tags {
            margin-top: 5rem;
        }
    }
    .post-content {
        padding: 8rem 0;
    }
    .tags {
        margin: 0;
        padding: 0;

        list-style: none;
        li {
            display: inline-block;
            margin-right: 1rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
            a {
                background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
                color: #fff;
                padding: 0.5rem 1rem;
                &:focus {
                    outline-color: #fff;
                }
            }
        }
    }
    #post-footer {
        padding: 0 0 8rem 0;
        .tags-edit {
            display: flex;
            flex-direction: column;
            font-size: 1.8rem;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4rem;
            ${mq.largerThan("small")} {
                flex-direction: row;
            }
            .tags-wrap {
                font-weight: 600;
                margin-bottom: 2rem;
                ul.tags {
                    li {
                        font-size: 1.9rem;
                        a {
                            &:focus {
                                outline-color: var(--links);
                            }
                        }
                    }
                }
            }
            .edit-link {
                font-weight: 600;
                svg {
                    width: 20px;
                    margin-right: 5px;
                    vertical-align: middle;
                    path {
                        fill: var(--text);
                    }
                }
            }
        }
        .posts-navigation {
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                ${mq.largerThan("small")} {
                    flex-direction: row;
                }
                li {
                    width: 100%;
                    margin-bottom: 2rem;
                    ${mq.largerThan("small")} {
                        width: 48%;
                    }
                    a {
                        width: 100%;
                        height: 100%;
                        padding: 2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-decoration: none;
                        span.post-nav-subtitle {
                            font-size: 1.6rem;
                            font-weight: 600;
                            opacity: 0.7;
                        }
                        span.post-nav-title {
                            font-size: 1.4rem;
                            text-decoration: underline;
                            font-size: 2.2rem;
                            font-weight: 800;
                        }
                    }
                    &.post-nav-prev {
                    }
                    &.post-nav-next {
                        text-align: right;
                        a {
                            align-items: flex-end;
                        }
                    }
                }
            }
        }
    }
`;

export default styles;
