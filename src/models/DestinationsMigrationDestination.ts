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
 * @interface DestinationsMigrationDestination
 */
export interface DestinationsMigrationDestination {
    /**
     *
     * @type {string}
     * @memberof DestinationsMigrationDestination
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof DestinationsMigrationDestination
     */
    name: string;
}

/**
 * Check if a given object implements the DestinationsMigrationDestination interface.
 */
export function instanceOfDestinationsMigrationDestination(value: object): value is DestinationsMigrationDestination {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    return true;
}

export function DestinationsMigrationDestinationFromJSON(json: any): DestinationsMigrationDestination {
    return DestinationsMigrationDestinationFromJSONTyped(json, false);
}

export function DestinationsMigrationDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DestinationsMigrationDestination {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"],
        name: json["name"],
    };
}

export function DestinationsMigrationDestinationToJSON(value?: DestinationsMigrationDestination | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        name: value["name"],
    };
}
