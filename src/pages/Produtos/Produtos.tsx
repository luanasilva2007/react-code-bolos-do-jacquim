import './Produtos.css';

import bolo_de_chocolate_belga from '../../assets/imgs/choc-belga.png';
import bolo_de_chocolate_com_ninho from '../../assets/imgs/choc-ninho.png';
import bolo_de_chocolate_com_cenoura from '../../assets/imgs/cenoura-choc.png';
import bolo_de_chocolate_com_morango from '../../assets/imgs/choc-ninho-morango.png';
import bolo_de_chocolate_com_pistache from '../../assets/imgs/choc-pistache.png';
import bolo_de_chocolate_com_oreo from '../../assets/imgs/choc-oreo.png';
import watsahpp from '../../assets/whatsapp.png';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/bolo';
import { getBolos } from '../../services/bolosServices';
import bolo_defult from '../../assets/imgs/bolo-default.png';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';

export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]);

    const fetchBolos = async () => {
        try {
            const dados = await getBolos();
            console.log("dados retornados da api: ", dados)
            setBolos(dados);
        } catch (error) {
            console.error("erro ao executar getBolos: ", error)
        }
    }

    useEffect(() => {
        fetchBolos();
    }, [])




    return (
        <main>
<Carrossel/>
            <section className="container_produtos">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">

                    {
                        bolos.map((b: Bolo) => (
                            <CardProduto
                                nome={b.nome}
                                descricao={b.descricao}
                                preco={b.preco}
                                imagem={b.imagens[0] ?? ""}
                                peso={b.peso}
                            />
                        ))
                    }

                </section>
            </section>

            <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={watsahpp} alt="icone do whatsapp" />
            </a>
        </main>
    )
}
