import styled from 'styled-components';

//////////////////////////////
//                          //
//       APP SECTION        //
//                          //
//////////////////////////////

export const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

//////////////////////////////
//                          //
//      TOPBAR SECTION      //
//                          //
//////////////////////////////

export const Container = styled.div``;
export const LeftContainer = styled.div``;
export const MidContainer = styled.div``;
export const RightContainer = styled.div``;
export const Span = styled.span``;

export const NavEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  ${Container} {
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;

    @media (min-width: 1280px) {
      & {
        width: 1280px;
      }
    }

    ${LeftContainer} {
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;

      ${Span} {
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
      }
    }

    ${MidContainer} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex: 3;
      font-size: 9px;

      ${Span} {
        cursor: pointer;
        margin-right: 5%;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }

    ${RightContainer} {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;
      font-weight: bold;

      ${Span} {
        cursor: pointer;
      }
    }
  }
`;

//////////////////////////////
//                          //
//      HEADER SECTION      //
//                          //
//////////////////////////////

export const HeadEl = styled.h1``;
export const Adate = styled(Span)``;
export const Temperature = styled(Span)``;

export const Banner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    & {
      width: 1280px;
    }
  }

  ${HeadEl} {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  ${Span} {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  ${Adate} {
    margin-left: 25px;
    flex: 1;
  }

  ${Temperature} {
    text-align: right;
    margin-right: 25px;
    flex: 1;
  }
`;

///////////////////////////////
//                           //
//      CONTENT SECTION      //
//                           //
///////////////////////////////

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//////////////////////////////////
//                              //
//      TABS & TAB SECTION      //
//                              //
//////////////////////////////////

export const Topics = styled.div``;
export const Title = styled.div``;
export const TabDiv = styled.div``;
export const ActiveTab = styled(TabDiv)``;

export const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    & {
      width: 1280px;
    }
  }

  ${Topics} {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;

    ${Title} {
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }

    ${TabDiv} {
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      color: #fff;
      background-color: #333;
      margin: 0 5px;
      padding: 2px 10px;
      font-size: 12px;
      letter-spacing: 2px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    ${ActiveTab} {
      background-color: #fff !important;
      color: #333 !important;
      border: 2px solid #333 !important;
    }
  }
`;

////////////////////////////////////
//                                //
//      CARDS & CARD SECTION      //
//                                //
////////////////////////////////////

export const CardDiv = styled.div``;
export const Headline = styled.div``;
export const Author = styled.div``;
export const ImgContainer = styled.div``;
export const ArticleImg = styled.img``;

export const CardsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    & {
      width: 1200px;
    }
  }

  ${CardDiv} {
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;

    ${Headline} {
      font-size: 25px;
      font-family: Didot, serif;
    }

    ${Author} {
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      margin-top: 15px;

      ${Span} {
        padding-left: 10px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
      }
    }

    ${ImgContainer} {
      padding-right: 10px;
      border-right: 1px solid lightgrey;
      height: 40px;
    }

    ${ArticleImg} {
      width: 40px;
    }
  }
`;
