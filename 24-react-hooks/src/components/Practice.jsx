import styled from "styled-components";
export default function Practice() {
  const Larva = styled.div`
    position: relative;
  `;

  const Body1 = styled.div`
    top: 100px;
    left: 100px;
    background-color: rgb(0, 0, 166);
  `;
  const Body2 = styled.div`
    top: 150px;
    left: 160px;
    background-color: rgb(36, 61, 206);
  `;
  const Body3 = styled.div`
    top: 190px;
    left: 200px;
    background-color: rgb(52, 118, 231);
  `;
  const Body4 = styled.div`
    top: 240px;
    left: 220px;
    background-color: rgb(47, 146, 233);
  `;

  const Body5 = styled.div`
    top: 280px;
    left: 280px;
    background-color: rgb(140, 191, 253);
    z-index: 10;
  `;

  const createBodyDiv = (div) => styled(div)`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
  `;
  const BodyDiv = createBodyDiv(Body1);
  const BodyDiv2 = createBodyDiv(Body2);
  const BodyDiv3 = createBodyDiv(Body3);
  const BodyDiv4 = createBodyDiv(Body4);
  const BodyDiv5 = createBodyDiv(Body5);

  const Grass = styled.div`
    position: absolute;
    top: 260px;
    left: 0;
  `;

  return (
    <Larva>
      <BodyDiv>
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </BodyDiv>
      <BodyDiv2></BodyDiv2>
      <BodyDiv3></BodyDiv3>
      <BodyDiv4></BodyDiv4>
      <BodyDiv5></BodyDiv5>
      {/*  /public/images/grass.png 로드 */}
      <Grass>
        <img className="grass" src="/grass.png" alt="잔디" />
      </Grass>
    </Larva>
  );
}
