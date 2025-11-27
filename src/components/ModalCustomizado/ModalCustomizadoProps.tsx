import { Modal } from 'react-bootstrap'
import './ModalCustomizadoProps.css'
import type { ModalCustomizadoProps } from '../../types/ModaCustomizadoProps'

export default function ModalCustomizadoProps({
    mostrarModalquando,
    aoCancelar,
    exibirConteudoCentralizado,
    titulo,
    corpo,
    customizarBotoes,
    textoBotaoCancelamento,
    textoBotaoConfirmacao,
    aoConfirmar
}: ModalCustomizadoProps) {

    return (
        <Modal
            style={{ fontFamily: "Bellota, system=ui" }}
            show={mostrarModalquando}
            onHide={aoCancelar}
            centered={exibirConteudoCentralizado}
        >
            <Modal.Header>
                <Modal.Title>{titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{corpo}</Modal.Body>
            <Modal.Footer>
                {
                    customizarBotoes && (
                        <button onClick={aoCancelar} className='botaoModalCancelar'>
                            {textoBotaoCancelamento}
                        </button>
                    )
                }
                <button onClick={customizarBotoes ? aoConfirmar : aoCancelar} className='botaoSubmitModal'>
                    {customizarBotoes ? textoBotaoConfirmacao : "ok"}
                </button>
            </Modal.Footer>
        </Modal>
    )
}
