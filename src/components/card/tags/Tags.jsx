import Badge from 'react-bootstrap/Badge';

const Tags = ({bg, contText}) => {
  return (
    <Badge bg={bg}>{contText}</Badge>
  )
}

export default Tags