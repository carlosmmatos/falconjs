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
 * @interface DomainDisposition
 */
export interface DomainDisposition {
    /**
     *
     * @type {number}
     * @memberof DomainDisposition
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof DomainDisposition
     */
    label: string;
}

/**
 * Check if a given object implements the DomainDisposition interface.
 */
export function instanceOfDomainDisposition(value: object): value is DomainDisposition {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("label" in value) || value["label"] === undefined) return false;
    return true;
}

export function DomainDispositionFromJSON(json: any): DomainDisposition {
    return DomainDispositionFromJSONTyped(json, false);
}

export function DomainDispositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDisposition {
    if (json == null) {
        return json;
    }
    return {
        id: json["id"],
        label: json["label"],
    };
}

export function DomainDispositionToJSON(value?: DomainDisposition | null): any {
    if (value == null) {
        return value;
    }
    return {
        id: value["id"],
        label: value["label"],
    };
}
