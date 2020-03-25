import styled, { css } from 'styled-components';
import { Link } from "react-router-dom"
import colors from '../../theme/colors'

export const Section = styled.section`
    padding: 100px 0;
`;

export const Wrapper = styled.div`
    max-width: 75rem;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
`;

export const Col6 = styled.div`
    flex: 0 0 50%;
`;

export const Title = styled.h1`
    text-align: left;
    display: block;
    color: ${colors.gray800};
    font-size: 35px;
    font-weight: 700;
    letter-spacing: -.2px;
    line-height: 55px;
    margin-bottom: 8px;
`;

export const Subtitle = styled.p`
    text-align: left;
    color: ${colors.gray600};
    font-size: 20px;
    letter-spacing: .1px;
    line-height: 35px;
    margin-bottom: 50px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
    border-radius: 10px;
    border-top: 9px solid ${colors.blue};
    box-shadow: ${colors.shadow100};
    max-width: 100%;
    padding: 30px 0;
    position: relative;
    text-align: center;
`;

export const Wrap = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    text-align: left;
`;

export const Label = styled.label`
    color: ${colors.gray800};
    font-size: 14px;
    line-height: 18px;
`;

export const Upload = styled.label`
    border: 1px solid ${colors.gray200};
    display: flex;
    align-items: center;
    color: ${colors.gray400};
    border-radius: 3px;
    box-sizing: border-box;
    height: 40px;
    line-height: 17px;
    font-size: 17px;
    padding: 0 10px;
    position: relative;
    transition: box-shadow .2s;
    width: 100%;
    cursor: pointer;
    outline: none;
`;

export const Inner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const Input = styled.input`
    border: 1px solid ${colors.gray200};
    border-radius: 3px;
    box-sizing: border-box;
    height: 40px;
    line-height: 17px;
    font-size: 17px;
    outline: none;
    padding: 0 10px;
    position: relative;
    transition: box-shadow .2s;
    width: 100%;
    ${props => props.error && css`
        border-color: ${colors.lightRed} !important;
    `}
`;

export const TypeFile = styled.input`
    display: none;
`;

export const Textarea = styled.textarea`
    border: 1px solid ${colors.gray200};
    border-radius: 3px;
    box-sizing: border-box;
    line-height: 17px;
    font-size: 17px;
    outline: none;
    padding: 10px;
    position: relative;
    transition: box-shadow .2s;
    width: 100%;
`;

export const Select = styled.select`
    border: 1px solid ${colors.gray200};
    background: ${colors.white};
    border-radius: 3px;
    box-sizing: border-box;
    height: 40px;
    line-height: 17px;
    font-size: 17px;
    font-size: 16px;
    padding: 0 10px;
    position: relative;
    transition: box-shadow .2s;
    width: 100%;
    outline: none;
    ${props => props.error && css`
        border-color: rgba(242, 52, 82, .5) !important;
    `}
`;

export const Option = styled.option`
`;

export const Errors = styled.span`
    height: 24px;
    color: ${colors.red};
    font-size: 13px;
    filter: none;
    letter-spacing: 0;
    margin-top: 6px;
    opacity: 1;
    transition: opacity .2s;
`;

export const Btn = styled.button`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    max-width: 275px;
    width: 87%;
    font-size: 18px;
    height: 50px;
    padding: 0 40px;
    border-radius: 100px;
    background: ${colors.green};
    color: ${colors.white};
    border: none;
    cursor: pointer;
    transition: all .2s;
    outline: none;
    &:hover {
        background-color: ${colors.lightGreen};
    }
`;

export const Sidebar = styled.aside`
    margin-left: 75px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;

export const Info = styled.article`
    width: 310px;
    border-top: 1px solid ${colors.gray200};
    margin-top: 48px;
    opacity: .8;
    padding-top: 48px;
`;


export const InfoTitle = styled.h3`
    color: ${colors.gray600};
    font-weight: 800;
    line-height: 32px;
    margin-bottom: 8px;
    opacity: .9;
`;

export const InfoDescription = styled.p`
    color: ${colors.gray600};
    font-size: 18px;
    letter-spacing: 0;
    line-height: 27px;
    margin-bottom: 18px;
`;

export const InfoLink = styled(Link)`
    color: ${colors.blue};
    cursor: pointer;
    display: table-cell;
    font-size: 18px;
    font-weight: 800;
    line-height: 32px;
    outline: none;
    text-decoration: none;
    vertical-align: middle;
`;