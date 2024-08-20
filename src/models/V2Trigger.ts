/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and examples, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation).     To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`.    Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { JsonschemaSchema } from "./JsonschemaSchema";
import { JsonschemaSchemaFromJSON, JsonschemaSchemaFromJSONTyped, JsonschemaSchemaToJSON } from "./JsonschemaSchema";
import type { GraphTimerEventDefinition } from "./GraphTimerEventDefinition";
import { GraphTimerEventDefinitionFromJSON, GraphTimerEventDefinitionFromJSONTyped, GraphTimerEventDefinitionToJSON } from "./GraphTimerEventDefinition";

/**
 *
 * @export
 * @interface V2Trigger
 */
export interface V2Trigger {
    /**
     *
     * @type {string}
     * @memberof V2Trigger
     */
    event?: string;
    /**
     *
     * @type {string}
     * @memberof V2Trigger
     */
    name?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V2Trigger
     */
    next: Array<string>;
    /**
     *
     * @type {JsonschemaSchema}
     * @memberof V2Trigger
     */
    parameters?: JsonschemaSchema;
    /**
     *
     * @type {GraphTimerEventDefinition}
     * @memberof V2Trigger
     */
    schedule?: GraphTimerEventDefinition;
}

/**
 * Check if a given object implements the V2Trigger interface.
 */
export function instanceOfV2Trigger(value: object): value is V2Trigger {
    if (!("next" in value) || value["next"] === undefined) return false;
    return true;
}

export function V2TriggerFromJSON(json: any): V2Trigger {
    return V2TriggerFromJSONTyped(json, false);
}

export function V2TriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Trigger {
    if (json == null) {
        return json;
    }
    return {
        event: json["event"] == null ? undefined : json["event"],
        name: json["name"] == null ? undefined : json["name"],
        next: json["next"],
        parameters: json["parameters"] == null ? undefined : JsonschemaSchemaFromJSON(json["parameters"]),
        schedule: json["schedule"] == null ? undefined : GraphTimerEventDefinitionFromJSON(json["schedule"]),
    };
}

export function V2TriggerToJSON(value?: V2Trigger | null): any {
    if (value == null) {
        return value;
    }
    return {
        event: value["event"],
        name: value["name"],
        next: value["next"],
        parameters: JsonschemaSchemaToJSON(value["parameters"]),
        schedule: GraphTimerEventDefinitionToJSON(value["schedule"]),
    };
}
