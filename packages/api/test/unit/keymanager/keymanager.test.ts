import {describe} from "vitest";
import {config} from "@lodestar/config/default";
import {Endpoints} from "../../../src/keymanager/routes.js";
import {getClient} from "../../../src/keymanager/client.js";
import {getRoutes} from "../../../src/keymanager/server/index.js";
import {runGenericServerTest} from "../../utils/genericServerTest.js";
import {testData} from "./testData.js";

describe("keymanager", () => {
  runGenericServerTest<Endpoints>(config, getClient, getRoutes, testData);
});
