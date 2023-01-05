import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    // const BASEURL = `${process.env.NEXT_PUBLIC_SERVER_HOST_BACK}${process.env.NEXT_PUBLIC_API_PROPERTIES}`
    const { method } = req;
    const body = req.body || {};
    
    const query = req.query    
    if (req.method === "GET") {

     const {latitude, longitude, unitTemperature} = query

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&temperature_unit=${unitTemperature}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=America%2FNew_York&start_date=2023-01-05&end_date=2023-01-09`

      const options = {
          method: method,
          headers: { 'Content-Type': 'application/json' }
        }

      const response = await fetch(url, options)
      const data = await response.json()

      if (!response.ok) {
        return res.status(response.status).end();
      }
      
      return res.status(200).json(data);
    }
  
    return res.status(405).json({ message: "Method Not Allowed" });
}

export default handler