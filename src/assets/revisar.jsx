export const revisar = (presupuesto, restante) => {
  let alert;
  alert = "alert alert-success";

  if (presupuesto / 2 > restante) alert = "alert alert-warning";

  if (presupuesto / 4 > restante) alert = "alert alert-danger";

  return alert;
};
