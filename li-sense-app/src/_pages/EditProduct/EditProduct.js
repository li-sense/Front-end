import React from "react";
import "./editprod.css";
import { useNavigate } from "react-router-dom";

export default function EditProduct(props) {
  const { product } = props;
  const navigate = useNavigate();
  console.log(product);
  function funcao1() {
    alert("Produto Salvo!");
    this.reset();
  }
  function funcao2() {
    alert("Alterações Canceladas!");
    navigate("/");
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
        <div className="container-all-edit">
          <span className="tilte-prod">Editar Informações do Produto</span>
          <div className="container-imagem-produto">
            <div className="input-wrapper-prod">
              <label className="picture" for="picture-input" tabIndex="0">
                <span className="picture-image">Escolher novas imagens</span>
              </label>

              <input
                onchange="readURL(this);"
                type="file"
                name="picture-input"
                id="picture-input"
                multiple
              ></input>
            </div>

            <div className="new-infos-prod">
              <label className="infos-prod-l">Nome</label>
              <input className="new-prod" placeholder="Jhonata silva"></input>
              <label className="infos-prod-l">Preço</label>
              <input className="new-prod" placeholder="R$ 00,00"></input>
              <label className="infos-prod-l">Categoria</label>
              <select className="op-cat" id="mySelect" onchange="myFunction()">
                <option>Arte</option>
                <option value="Livro">Livro</option>
                <option value="Música">Música</option>
              </select>
            </div>
          </div>
          <div className="container-detalhes">
            <div className="title-det">
              <p>
                Insira as novas informações/detalhes do seu produto ao lado{" "}
              </p>
            </div>
            <textarea
              className="detalhes-produto"
              placeholder="digite aqui..."
            />
          </div>
          <div className="container-detalhes-1">
            <div className="d1">
              <label>Quantidade em estoque</label>
              <input
                className="input-qt-est"
                type="number"
                min={0}
                placeholder="quantidade em estoque"
              />
              {/* <GiCardboardBoxClosed  size={20} className="icon-caixa" /> */}
              <label>Data de Validade do Certificado</label>
              <input className="input-qt-est" type="date" />

              <label>Outros</label>
              <input className="input-qt-est" type="text" placeholder="" />
            </div>
          </div>

          <div className="botoes">
            <button className="btn-salvar" onClick={funcao1}>
              Salvar
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
