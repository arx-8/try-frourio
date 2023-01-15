import { defineController } from "./$relay"

export default defineController(() => ({
  get: () => ({ body: "Hello", status: 200 }),
}))
