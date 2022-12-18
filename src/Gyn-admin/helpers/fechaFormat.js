import moment from "moment/moment";
import { memo, useMemo } from "react";

export const dateString = (date) => {
  const newDate = new Date(date);
  return moment(newDate).format("MMM-DD-YYYY", "h:mm:ss a");
};
export const dateStringVen = (date, periodo = "", vencimiento = "") => {
  const newDate = new Date(date);
  if (periodo == "Mes") {
    const dateAct2 = moment(newDate)
      .add({
        month: vencimiento,
      })
      .format("MMM-DD-YYYY", "h:mm:ss a");

    return dateAct2;
  }
  if (periodo == "Dia") {
    const dateAct2 = moment(newDate)
      .add({
        days: vencimiento,
      })
      .format("MMM-DD-YYYY", "h:mm:ss a");

    return dateAct2;
  }

  const dateAct2 = moment(newDate)
    .add({
      year: vencimiento,
    })
    .format("MMM-DD-YYYY", "h:mm:ss a");

  return dateAct2;
};
