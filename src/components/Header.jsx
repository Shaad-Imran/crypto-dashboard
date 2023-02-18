import React from "react";

const Header = ({ handle_Submit }) => {
  const coinOptions = [
    { value: "bitcoin", label: "Bitcoin (BTC)" },
    { value: "ethereum", label: "Ethereum (ETH)" },
    { value: "cardano", label: "Cardano (ADA)" },
    { value: "binancecoin", label: "Binance (BNB)" },
    { value: "ripple", label: "Ripple (XRP)" },
    { value: "dogecoin", label: "Dogecoin (DOGE)" },
    { value: "tether", label: "Tether (USDT)" },
    { value: "avalanche-2", label: "Avalanche (AVAX)" },
    { value: "decentraland", label: "Decentraland (MANA)" },
    { value: "solana", label: "Solana (SOL)" },
  ];

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#fcdf03" }}
      >
        <div className="container-fluid">
          <select
            className="form-select form-select-lg "
            aria-label=".form-select-lg example"
            name="selectCoin"
            style={{ width: "fit-content" }}
            onChange={handle_Submit}
          >
            <option value="">Select Coin</option>
            {coinOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <a
            className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
            style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            href="/"
          >
            Crypto Dashboard
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
