import styled from 'styled-components';

const LifeGroupContainer = styled.div`
  background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.es%2Ffotos%2Fpersonas-leyendo-la-biblia&psig=AOvVaw0mKOreSrucbED1kRdF-1nN&ust=1729201343375000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjqkqHvk4kDFQAAAAAdAAAAABAE');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LifeGroupContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
`;

function LifeGroup() {
  return (
    <LifeGroupContainer>
      <LifeGroupContent>
        <h1>Quiero participar de un Grupo de vida</h1>
       
      </LifeGroupContent>
    </LifeGroupContainer>
  );
}

export default LifeGroup;