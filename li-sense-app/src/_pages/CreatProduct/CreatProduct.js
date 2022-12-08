import React from "react";
import axios from "axios";
import "./creat.css";
import { useNavigate } from "react-router-dom";

export default function CreatProtduct(props) {
  const { product } = props;
  const [name, setName] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [isErr, setIsErr] = React.useState("");
  const [preco, setPreco] = React.useState("");
  const [detalhes, setDetalhes] = React.useState("");
  const navigate = useNavigate();
  // console.log(product);

  function funcao1() {
    alert("Produto Adicionado");
    this.reset();
  }
  function funcao2() {
    alert("Alterações Canceladas!");
    navigate("/product/creatproduct");
  }
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#blah").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  const createProduct = async () => {
    let data = {
      nome: name,
      descricao: descricao,
      preco: preco,
      detalhes: detalhes,
    };
    const auth = localStorage.getItem("token");
    axios
      .post("https://dev.li-sense.xyz/api/v1/produtos/registra-produto", data, {
        headers: {
          Authorization: auth,
        },
      })
      .then(function (response) {
        if (response.status) {
          alert(`Produto ${response.data.nome} Criado com sucesso`);
          navigate("/");
        }
      })
      .catch((_err) => {
        setIsErr(_err.response.data.detail);
      });
  };

  return (
    <>
      <div>
        <div className="container-all-criar">
          <span className="tilte-prod-c">Adicinar Novo Produto</span>
          <div className="container-imagem-produto-c">
            <div className="new-infos-prod-c">
              <label className="infos-new-prod">Nome do Produto</label>
              <input
                className="new-prod-c"
                placeholder=""
                onChange={(event) => {
                  setName(event.target.value);
                }}
              ></input>
              <label className="infos-new-prod">Descrição</label>
              <input
                className="new-prod-c"
                placeholder="R$ 00,00"
                onChange={(event) => {
                  setDescricao(event.target.value);
                }}
              ></input>
              <label className="infos-new-prod">Detalhes</label>
              <input
                className="new-prod-c"
                placeholder="R$ 00,00"
                onChange={(event) => {
                  setDetalhes(event.target.value);
                }}
              ></input>
              <label className="infos-new-prod">Preço</label>
              <input
                className="new-prod-c"
                placeholder="R$ 00,00"
                onChange={(event) => {
                  setPreco(event.target.value);
                }}
              ></input>
              <label className="infos-new-prod">Classificação do Produto</label>
              <select className="op-cat" id="mySelect" onchange="myFunction()">
                <option>Arte</option>
                <option value="Livro">Livro</option>
                <option value="Música">Música</option>
              </select>
            </div>
            <div className="input-wrapper-prod-c">
              <div className="input-wrapper">
                <label for="input-file">Selecionar imagens do produto</label>
                <input id="input-file" type="file" value="" multiple />
                <span id="file-name"></span>
              </div>
            </div>
          </div>
          <div className="container-detalhes-c">
            <div className="title-det-c">
              <p>Insira as informações/detalhes do produto ao lado </p>
            </div>
            <textarea
              className="detalhes-produto-c"
              placeholder="digite aqui..."
            />
          </div>
          <div className="botoes">
            <p>{isErr ? "Esse produto ja existe" : ""}</p>
            <button className="btn-salvar" onClick={() => createProduct()}>
              Criar Produto
            </button>
            <button className="btn-cancelar" onClick={funcao2}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
