import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../../config";

export const ListarCliente = () =>{

    const [data, setData] = useState([])
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () =>{
        await axios.get(api+"/clientes")
        .then((response)=>{
            console.log(response.data.client);
            setData(response.data.client);
        })
        .catch(()=>{
            console.log("Error: Sem conexão com a API.")
        });
    };

    useEffect(()=>{
        getClientes();
    },[]);


    return(
        <div>
            Lista De Clientes
        </div>
    );
};