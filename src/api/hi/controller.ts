import { defineController } from "./$relay"

export default defineController(() => ({
  get: () => ({ body: "Howdy!", status: 200 }),
}))
