import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Página Inicial</h1>
                    </div>
                <div className=" p-2">
                    <a href="/listar-cliente"
                        className="btn btn-outline-secondary btn-sm">Clientes</a>
                </div>
                <div className="p-2">
                    <a href="/visualizar-pedidos"
                        className="btn btn-outline-secondary btn-sm">Pedidos</a>
                </div>
                <div className="p-2">
                    <a href="/lista-servicos"
                        className="btn btn-outline-secondary btn-sm">Servicos</a>
                </div>
                </div>
            </Container >
        </div >
    );
};