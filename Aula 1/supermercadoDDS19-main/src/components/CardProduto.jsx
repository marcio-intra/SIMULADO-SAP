import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDeleteProduto } from "../hooks/useApi"
const CardProduto = (props) => {
  const { deletarProduto } = useDeleteProduto()
   const handleDelete = async () =>{
    const deletado = await deletarProduto(props.id)
    console.log()
    alert(`Produto ${deletado.nome} deletado com sucesso`)
    window.location.reload()
  }
  
  return (
    <div>
      <Card style={{ width: "15rem", height: "30rem" }}>
        <Card.Img
          variant="top"
          src={
            props.imagemUrl != "null"
              ? props.imagemUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdssSl3-znyXhffS9Qy09SBO0B-kIfYFlJQ&s"
          }
          height="200px"
        />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Preço:{props.preco}
          </Card.Subtitle>
          <Card.Text>
            <b>Descrição:</b> <br></br>
            {props.descricao}
          </Card.Text>
          <Card.Text>
            <b>Categoria:</b>
            <br></br>
            {props.categoria}
          </Card.Text>
          <Card.Link href={`/editarproduto/${props.id}`}>
            <Button variant="warning">Editar</Button>
          </Card.Link>
          <Card.Link>
            <Button variant="danger" 
                    type="button" 
                    onClick={handleDelete}>
              Excluir
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
