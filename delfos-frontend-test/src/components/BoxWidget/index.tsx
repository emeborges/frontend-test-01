import { Box, Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Settingsbutton from "./Settingsbutton";
import { ItemsProps } from "../../utils/types";

interface Props {
  store: ItemsProps;
}

export default function BoxWidget({ store }: Props) {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: `Faturamento da ${store.nameStore}`,
      visible: false,
    },
    xAxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    },
    yAxis: {
      visible: true,
      title: {
        text: "Valores",
      },
    },

    series: [
      {
        name: "Faturamento (R$)",
        data: [
          store.jan,
          store.fev,
          store.mar,
          store.abr,
          store.mai,
          store.jun,
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        margin: "1rem auto",
        border: "1px solid rgba(0,0,0,0.2)",
        height: "100%",
        width: "90%",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgba(0,0,0,0.2)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        <Typography>{store.nameStore}</Typography>

        <Settingsbutton store={store} />
      </Box>
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </Box>
  );
}
