import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
          {
            id: 1,
            name: "Adiddas Beluga",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 19.png"),
          },
          {
            id: 2,
            name: "Nike Zoom",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 25.png"),
          },
          {
            id: 3,
            name: "Nike Air Jordan XT",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 24.png"),
          },
          {
            id: 4,
            name: "Nike Wobler",
            price: 35000,
            imgUrl: require("../assets/img/Rectangle 26.png"),
          },
        ],
      })
    );
  })
);
worker.start();
