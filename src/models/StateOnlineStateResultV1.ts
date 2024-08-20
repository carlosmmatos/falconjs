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
/**
 *
 * @export
 * @interface StateOnlineStateResultV1
 */
export interface StateOnlineStateResultV1 {
    /**
     *
     * @type {string}
     * @memberof StateOnlineStateResultV1
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof StateOnlineStateResultV1
     */
    id: string;
    /**
     *
     * @type {Date}
     * @memberof StateOnlineStateResultV1
     */
    lastSeen?: Date;
    /**
     *
     * @type {string}
     * @memberof StateOnlineStateResultV1
     */
    state: string;
}

/**
 * Check if a given object implements the StateOnlineStateResultV1 interface.
 */
export function instanceOfStateOnlineStateResultV1(value: object): value is StateOnlineStateResultV1 {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("state" in value) || value["state"] === undefined) return false;
    return true;
}

export function StateOnlineStateResultV1FromJSON(json: any): StateOnlineStateResultV1 {
    return StateOnlineStateResultV1FromJSONTyped(json, false);
}

export function StateOnlineStateResultV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): StateOnlineStateResultV1 {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"] == null ? undefined : json["cid"],
        id: json["id"],
        lastSeen: json["last_seen"] == null ? undefined : new Date(json["last_seen"]),
        state: json["state"],
    };
}

export function StateOnlineStateResultV1ToJSON(value?: StateOnlineStateResultV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        id: value["id"],
        last_seen: value["lastSeen"] == null ? undefined : value["lastSeen"].toISOString(),
        state: value["state"],
    };
}
