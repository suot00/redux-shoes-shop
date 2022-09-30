import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
          { id: 1, name: "Nike", price: 100 },
          { id: 2, name: "Adidas", price: 100 },
          { id: 3, name: "Puma", price: 100 },
        ],
      })
    );
  })
);
worker.start();
