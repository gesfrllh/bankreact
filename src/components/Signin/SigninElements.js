import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #d1512d;
`
export const FormWarp = styled.div` 
`

export const Icon = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    margin: 30px;
    display: block;

    @media screen and (max-width: 480px) {
        margin: auto;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 10px;
        margin: auto;
    }
`

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 999;
    display: grid;
    margin: 0 0 0 px ;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 768px) {
       margin: auto;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: #d1512d;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff ;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: #d1512d;
    }
`