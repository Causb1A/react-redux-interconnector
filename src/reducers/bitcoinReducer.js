const initalState = {
  loading: false,
  data: {
    labels: [],
    datasets: [{
      label: "Default",
      data: [],
      borderColor: 'rgba(238,175,0, 0.5)',
      pointBorderColor: 'rgba(238,175,0, 0.7)',
      fill: false
    }]
  }
};

const bitcoinReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_BITCOIN":
      return {
        ...state,
        loading: true
      }
    case "REJECTED_BITCOIN":
      return {
        ...state,
        loading: false,
      }
    case "SUCCESS_BITCOIN":
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [{
            label: "France",
            data: payload.franceData,
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)',
            fill: false
          },
          {
            label: "Belgium",
            data: payload.belgiumData,
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)',
            fill: false
          },
          {
            label: "Netherlands",
            data: payload.netherlandsData,
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)',
            fill: false
          },
          {
            label: "Norway",
            data: payload.norwayData,
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)',
            fill: false
          }]
        }
      }
    default:
      return state;
  }
}

export default bitcoinReducer;
