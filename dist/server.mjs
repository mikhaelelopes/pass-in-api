import {
  registerForEvent
} from "./chunk-SZM36BPD.mjs";
import {
  errorHandler
} from "./chunk-ARC2ESZ2.mjs";
import {
  checkIn
} from "./chunk-J53CZMLL.mjs";
import {
  createEvent
} from "./chunk-E5IFSPQQ.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-67NDC4X3.mjs";
import {
  getEventAttendees
} from "./chunk-BPEXK6DZ.mjs";
import {
  getEvent
} from "./chunk-SGZAFSUZ.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-3L7FNPMP.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "A pass.in API",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
export {
  app
};
