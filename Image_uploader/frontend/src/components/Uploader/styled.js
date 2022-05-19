import styled from 'styled-components'

const Styles = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
form{
    width: 300px;
    background-color: #fff;
    padding: 32px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    .subtitle{
        font-size: 10px;
        color: #828282;
    }
    .or{
        font-size: 12px;
        color: #BDBDBD;
    }
    

.drop{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed #97BEF4;
    border-radius: 12px;
    padding: 20px;
    background-color: #dfdfdf30;
    input{
        position: absolute;
        top: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    p{
        color: #BDBDBD;
        font-size: 12px;
        margin-top: 20px;
    }
}
.btn{
    color: #fff;
    position: relative;
    background-color: #2F80ED;
    border: none;
    border-radius: 10px;
    width: 120px;
    height: 40px;
    transition: all .2s ease-in-out;
    &:hover{
        background-color: #2f81edcb;
    }
    input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
}
}
`

export default Styles
