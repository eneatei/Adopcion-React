import {Card as CardB} from 'react-bootstrap';
import Tags from './tags/Tags';

const Card = ({ urlImg, title, desc, bg, contText }) => {
  return (
    <CardB style={{ width: '18rem', textAlign: 'center' }}>
      <CardB.Img variant="top" src={urlImg} width="200"/>
      <CardB.Body>
        <CardB.Title style={{ fontSize: "1.5em" }}>{title}</CardB.Title>
        <CardB.Text style={{ fontSize: "0.9em", color: "#915D64", fontWeight: "400", }}>
          {desc}
        </CardB.Text>
        <Tags bg={bg} contText={contText} />
      </CardB.Body>
    </CardB>
  );
}

export default Card;