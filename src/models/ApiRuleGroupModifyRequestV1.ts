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
 * @interface ApiRuleGroupModifyRequestV1
 */
export interface ApiRuleGroupModifyRequestV1 {
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupModifyRequestV1
     */
    comment: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupModifyRequestV1
     */
    description: string;
    /**
     *
     * @type {boolean}
     * @memberof ApiRuleGroupModifyRequestV1
     */
    enabled: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupModifyRequestV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupModifyRequestV1
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof ApiRuleGroupModifyRequestV1
     */
    rulegroupVersion: number;
}

/**
 * Check if a given object implements the ApiRuleGroupModifyRequestV1 interface.
 */
export function instanceOfApiRuleGroupModifyRequestV1(value: object): value is ApiRuleGroupModifyRequestV1 {
    if (!("comment" in value) || value["comment"] === undefined) return false;
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("enabled" in value) || value["enabled"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("rulegroupVersion" in value) || value["rulegroupVersion"] === undefined) return false;
    return true;
}

export function ApiRuleGroupModifyRequestV1FromJSON(json: any): ApiRuleGroupModifyRequestV1 {
    return ApiRuleGroupModifyRequestV1FromJSONTyped(json, false);
}

export function ApiRuleGroupModifyRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRuleGroupModifyRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        comment: json["comment"],
        description: json["description"],
        enabled: json["enabled"],
        id: json["id"],
        name: json["name"],
        rulegroupVersion: json["rulegroup_version"],
    };
}

export function ApiRuleGroupModifyRequestV1ToJSON(value?: ApiRuleGroupModifyRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        comment: value["comment"],
        description: value["description"],
        enabled: value["enabled"],
        id: value["id"],
        name: value["name"],
        rulegroup_version: value["rulegroupVersion"],
    };
}
