import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const AlertService = {
  success: () => {
    MySwal.fire({
      title: "Exito",
      text: "proceso ejecutado con exito",
      confirmButtonText: "Aceptar",
      icon: "success",
    });
  },
  confirmDelete: () => {
    return MySwal.fire({
      title: "Confirmar",
      text: "¿Esta seguro de realizar esta accion?",
      confirmButtonText: "Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      icon: "info",
    });
  },
  error: () => {
    MySwal.fire({
      title: "Error",
      text: "Se presentó un error",
      confirmButtonText: "Aceptar",
      icon: "error",
    });
  },
};

export default AlertService;
