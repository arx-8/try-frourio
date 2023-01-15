import Fastify from "fastify"
import $server from "./$server"

const fastify = Fastify()

$server(fastify)

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
