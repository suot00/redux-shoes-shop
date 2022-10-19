import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
          {
            id: "1",
            name: "Adidas Beluga",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 19.png"),
            categories: "men",
          },
          {
            id: "2",
            name: "Nike Zoom",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 25.png"),
            categories: "men",
          },
          {
            id: "3",
            name: "Nike Air Jordan XT",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 24.png"),
            categories: "men",
          },
          {
            id: "4",
            name: "Nike Wobbler",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 26.png"),
            categories: "men",
          },
        ],
      })
    );
  })
);
worker.start();
