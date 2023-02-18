import React from "react";

const CardSection = (props) => {
  const cardData = [
    {
      title: "Market Cap 24Hrs",
      value: `${props.mCap24} %`,
      color: "#fcdf03",
    },
    {
      title: "All Time High",
      value: `$${props.ath}`,
      color: "#fcdf03",
    },
    {
      title: "Positive Sentiments",
      value: `${props.sentiment} %`,
      color: "#fcdf03",
    },
    {
      title: "High 24Hrs",
      value: `$${props.high24}`,
      color: "rgb(51, 255, 0)",
    },
    {
      title: "Low 24Hrs",
      value: `$${props.low24}`,
      color: "rgb(255, 32, 32)",
    },
  ];

  return (
    <div>
      <div
        className="fs-1 fw-bold m-3 text-Capitalize"
        style={{
          fontFamily: "NHaasGroteskDSPro-65Md",
          marginTop: "3px !important",
          marginBottom: "0px !important",
          color: "white",
        }}
      >
        {props.coinName}
      </div>
      <section
        className="row m-3 mb-0 d-flex flex-row justify-content-between"
        style={{ marginTop: " 2px !important" }}
      >
        {cardData.map((item, index) => (
          <div
            className="card text-white text-center  m-3"
            style={{
              width: "11rem",
              backgroundColor: "rgb(43, 43, 43)",
              marginTop: "0px !important",
            }}
            key={index}
          >
            <div className="card-body">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              >
                {item.title}
              </h6>
              <p
                className="card-text fw-bold fs-5"
                style={{ color: item.color }}
              >
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </section>

      <div>
        <div
          className="text-white text-center"
          style={{
            fontFamily: "NHaasGroteskDSPro-65Md",
            overflow: "visible",
            height: "2px",
            marginTop: "1%",
          }}
        >
          {" "}
          Current Price
        </div>
        <div
          style={{
            fontFamily: "NHaasGroteskDSPro-65Md",
            fontSize: "70px",
            fontWeight: "700",
            color: "#fcdf03",
            textDecoration: "none solid rgb(255, 255, 255)",
            textAlign: "center",
          }}
        >
          ${props.currentPrice}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
