import styled from 'styled-components'

export const StyledNavbar = styled.header`
nav{
    background-color: white;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    padding-top: 14px;
    padding-bottom: 10px;

    
    
}


.Logo{
    color: #FD2D37;
    text-decoration: none;

    font-size: 30px;
    padding-left: 3rem;
    font-family: 'Abril Fatface', cursive;
};

.signin{
    padding-right: 3rem;
   
    text-decoration: none;

 

};

.options{
    text-decoration: none;

}

button{
    margin-right: 3rem;
    width: 5rem;
    height: 2rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 20px;
    color: #FD2D37;
    font-weight: bold;
    background-color: #ECBFC3;


}

.myrecipies{
    margin-right: 30px;
    text-decoration: none;
    color: #000000;

}

.myshoppinglist{
    text-decoration: none;
    color: #000000;

}

`