import styled from 'styled-components';

export default styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 275px;
    text-align: center;
    margin: 12px;
    
    & .image-product {
        width: 100%;
    }
    
    & .title {
        color: grey;
        font-size: 18px;
    }

    & .btn-detail {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }

    & .social {
        text-decoration: none;
        font-size: 22px;
        color: #454845;
        padding: 0 10px;
        transition: all .3s;
    }

    & .btn-detail:hover, & .social:hover {
        opacity: 0.8;
    }
`