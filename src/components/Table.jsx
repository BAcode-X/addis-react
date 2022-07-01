import styled from "@emotion/styled";

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ebebeb;
    border-spacing: 0;
    overflow: hidden;

    & a {
        color: #000;
        text-decoration: none;
    }

    & tr:hover {
        background-color: #f5f5f5;
    }

    & th,
    & td {
        padding: 0.75rem;
        text-align: left;
        border-top: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
        border-left: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;
        &:nth-of-type(1) {
            border-left: none;
        }
        &:nth-of-type(n) {
            border-right: none;
        }
    }
    & td {
        border-left: none;
    }
    & th {
        background-color: #fafafa !important;
        border-bottom: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;
        border-top: 1px solid #ebebeb;
        border-left: 1px solid #ebebeb;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05rem;
        color: brown;
        &:nth-of-type(1) {
            border-left: none;
        }
        &:nth-of-type(n) {
            border-right: none;
        }
    }
    & tbody {
        & tr {
            &:nth-of-type(even) {
                background-color: #fafafa;
            }
        }
    }
    & thead {
        & tr {
            &:nth-of-type(even) {
                background-color: #fafafa;
            }
        }
    }


`;

export default Table;