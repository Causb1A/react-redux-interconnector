import axios from "axios";
import moment from "moment";

export const getData = ({ apiLinkUser }) => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })

    const response = await axios.get(apiLinkUser)
    const labels = [];
    const franceData = [];
    const belgiumData = [];
    const netherlandsData = [];
    const norwayData = [];
    for (let i = 0; i < response.data.body.Responses["interconnector-data"].length; i++) {
      franceData.push(response.data.body.Responses["interconnector-data"][i].France)
      belgiumData.push(response.data.body.Responses["interconnector-data"][i].Belgium)
      netherlandsData.push(response.data.body.Responses["interconnector-data"][i].Netherlands)
      norwayData.push(response.data.body.Responses["interconnector-data"][i].Norway)
      labels.push(moment(response.data.body.Responses["interconnector-data"][i].datetime*1000).format("LT"))

    }

    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
        franceData,
        belgiumData,
        netherlandsData,
        norwayData,
        labels
      }
    })
  } catch (e) {
    dispatch({
      type: "REJECTED_BITCOIN",
    })
  }
}
