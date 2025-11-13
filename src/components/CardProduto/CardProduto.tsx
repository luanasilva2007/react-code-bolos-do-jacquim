import type { CardProdutoprops } from '../../types/CardProdutoProps';
import './CardProduto.css';
import bolo_defult from '../../assets/imgs/bolo-default.png';
import { FormatosService } from '../../services/FormatosService';


export default function CardProduto({ nome, descricao, preco, imagem, id, peso }: CardProdutoprops) {
    return (
        <div key={id} className="card_produto">
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${imagem}` : bolo_defult}
                alt="Uma fatia de bolo de chocolate belga" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "descrição nao informada"}</p>
            <div>
                <span>{ FormatosService.precoBR(preco) }</span>
                <br />
                <span>{(peso != null) ? FormatosService.pesoEmKg
                (peso) : "qrde nao informada "}</span>

            </div>

        </div>
    )
}
