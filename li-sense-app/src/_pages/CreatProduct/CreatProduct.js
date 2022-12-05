import React from "react";
import "./creat.css";
import { useNavigate } from "react-router-dom";

export default function CreatProtduct(props) {
  const { product } = props;
  const navigate = useNavigate();
  console.log(product);
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

  return (
    <>
      <form>
        <div className="container-all-criar">
          <span className="tilte-prod-c">Adicinar Novo Produto</span>
          <div className="container-imagem-produto-c">
            <div className="new-infos-prod-c">
              <label className="infos-new-prod">Nome do Produto</label>
              <input className="new-prod-c" placeholder=""></input>
              <label className="infos-new-prod">Preço</label>
              <input className="new-prod-c" placeholder="R$ 00,00"></input>
              <label className="infos-new-prod">Classificação do Produto</label>
              <select className="op-cat" id="mySelect" onchange="myFunction()">
                <option>Arte</option>
                <option value="Livro">Livro</option>
                <option value="Música">Música</option>
              </select>
            </div>
            <div class="input-wrapper-prod-c">
              <div class="input-wrapper">
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
            <button className="btn-salvar" onClick={funcao1}>
              Adicionar Produto
            </button>
            <button className="btn-cancelar" onClick={funcao2}>
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
