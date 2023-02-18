import React, { useState, useEffect } from "react";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";

const App = () => {
  const [coinId, setCoinId] = useState("bitcoin");
  const [coinData, setCoinData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      const jsonData = await response.json();
      setCoinData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    const coinId = event.target.value;
    setCoinId(coinId);
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, [coinId]);

  const { name, market_data, sentiment_votes_up_percentage, community_data } =
    coinData;

  const currentPrice = market_data ? market_data.current_price["usd"] : "";
  const mCap24 = market_data
    ? market_data.market_cap_change_percentage_24h
    : "";
  const ath = market_data ? market_data.ath.usd : "";
  const atl = market_data ? market_data.ath.usd : "";
  const high24 = market_data ? market_data.high_24h["usd"] : "";
  const low24 = market_data ? market_data.low_24h["usd"] : "";
  const priceChange24 = market_data
    ? market_data.price_change_24h_in_currency.usd
    : "";
  const marketCap = market_data ? market_data.market_cap.usd : "";
  const totVol = market_data ? market_data.total_volume.usd : "";
  const circulating = market_data ? market_data["circulating_supply"] : "";
  const twitterF = community_data ? community_data.twitter_followers : "";

  return (
    <div>
      <Header handle_Submit={handleSubmit} />
      {name && market_data && (
        <CardSection
          coinName={name}
          currentPrice={currentPrice}
          mCap24={mCap24}
          ath={ath}
          atl={atl}
          sentiment={sentiment_votes_up_percentage}
          high24={high24}
          low24={low24}
        />
      )}
      {coinId && market_data && (
        <ChartSection
          Id={coinId}
          priceChange24={priceChange24}
          MarketCap={marketCap}
          TotVol={totVol}
          Circulating={circulating}
          twitterF={twitterF}
        />
      )}
    </div>
  );
};

export default App;
