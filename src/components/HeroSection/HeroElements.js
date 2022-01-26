import styled from 'styled-components'


export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1
`

export const HeroBg = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;

`

export const VideoBg = styled.video`
   width: 100%
   height: 100%
   -o-object-fit: cover;
   background: #232a34;
   
`

export const HeroContent = styled.div`
   z-index: 3;
   max-widrh: 1200px;
   position: absolute;
   padding: 8px 24 px;
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const HeroH1 = styled.div`
  color: black;
  font-size: 80px;
  text-align: center;
  font-family: Lucida Handwriting;
  background-color: transparent;
  padding: 80px;
  opacity: 0.6;
  text-shadow: 1px 3px white;
  box-shadow: 0px 10px 20px white;


  @media screen and (max-width: 768px) {
      font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

