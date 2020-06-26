import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer vUSRRClDgdI2GVBqP0l0UaVo1DGXDGyyo8fg8kpMe0oQzshivOAUqGl4TkzZWcXZLFID-d9TDGJrJWkTAZcwdlHiFuQRLwafefk5xPSAFOqe6rl5eSIDvEaQ15vzXnYx",
  },
});
