// open-meteo API, fetch data without authentication
// https://open-meteo.com/

const lat = 59.334591;
const lon = 18.06324;
const api_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=Europe%2FBerlin`;

const weatherInStockholm = async () => {
  try {
    const response = await fetch(api_url);
    if (response.status !== 200) {
      throw new Error("cannot fetch the data");
    }
    const data = await response.json();
    const temperature = data.current.temperature_2m;
    const units = data.current_units.temperature_2m;
    console.log("The temperature in Stockholm is " + temperature + units);
  } catch (error) {
    console.error("error", error);
  }
};

weatherInStockholm();
