import Fastify from "fastify"

const fastify = Fastify()

fastify.get("/", async (_req, reply) => {
  return reply.send({ hello: "world" })
})

fastify.get("/hi", (_req, reply) => {
  return reply.send({ hello: "how are you?" })
})

fastify
  .listen({
    host: "localhost",
    port: 8888,
  })
  // eslint-disable-next-line promise/always-return
  .then((xxxx) => {
    console.log(xxxx)
  })
  .catch((e) => {
    console.error(e)
  })
