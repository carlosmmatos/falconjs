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
import type { DomainBreachedItemV1 } from "./DomainBreachedItemV1";
import { DomainBreachedItemV1FromJSON, DomainBreachedItemV1FromJSONTyped, DomainBreachedItemV1ToJSON } from "./DomainBreachedItemV1";

/**
 *
 * @export
 * @interface DomainBreachDetailsV1
 */
export interface DomainBreachDetailsV1 {
    /**
     * The list of breach items
     * @type {Array<DomainBreachedItemV1>}
     * @memberof DomainBreachDetailsV1
     */
    items: Array<DomainBreachedItemV1>;
}

/**
 * Check if a given object implements the DomainBreachDetailsV1 interface.
 */
export function instanceOfDomainBreachDetailsV1(value: object): value is DomainBreachDetailsV1 {
    if (!("items" in value) || value["items"] === undefined) return false;
    return true;
}

export function DomainBreachDetailsV1FromJSON(json: any): DomainBreachDetailsV1 {
    return DomainBreachDetailsV1FromJSONTyped(json, false);
}

export function DomainBreachDetailsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBreachDetailsV1 {
    if (json == null) {
        return json;
    }
    return {
        items: (json["items"] as Array<any>).map(DomainBreachedItemV1FromJSON),
    };
}

export function DomainBreachDetailsV1ToJSON(value?: DomainBreachDetailsV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        items: (value["items"] as Array<any>).map(DomainBreachedItemV1ToJSON),
    };
}
