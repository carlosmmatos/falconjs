/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 * A prevention policy setting
 * @export
 * @interface ResponsesPreventionSettingV1
 */
export interface ResponsesPreventionSettingV1 {
    /**
     * The human readable description of the setting
     * @type {string}
     * @memberof ResponsesPreventionSettingV1
     */
    description?: string;
    /**
     * The id of the setting
     * @type {string}
     * @memberof ResponsesPreventionSettingV1
     */
    id: string;
    /**
     * The name of the setting
     * @type {string}
     * @memberof ResponsesPreventionSettingV1
     */
    name: string;
    /**
     * The type of the setting which can be used as a hint when displaying in the UI
     * @type {string}
     * @memberof ResponsesPreventionSettingV1
     */
    type: ResponsesPreventionSettingV1TypeEnum;
    /**
     * The value for the setting. For a toggle this value will take the form {'enabled':true|false}. For an mlslider this will take the form {'detection':'DISABLED|CAUTIOUS|MODERATE|AGGRESSIVE|EXTRA_AGGRESSIVE','prevention':'DISABLED|CAUTIOUS|MODERATE|AGGRESSIVE|EXTRA_AGGRESSIVE'}
     * @type {object}
     * @memberof ResponsesPreventionSettingV1
     */
    value: object;
}

/**
 * @export
 */
export const ResponsesPreventionSettingV1TypeEnum = {
    Toggle: "toggle",
    Mlslider: "mlslider",
} as const;
export type ResponsesPreventionSettingV1TypeEnum = typeof ResponsesPreventionSettingV1TypeEnum[keyof typeof ResponsesPreventionSettingV1TypeEnum];

export function ResponsesPreventionSettingV1FromJSON(json: any): ResponsesPreventionSettingV1 {
    return ResponsesPreventionSettingV1FromJSONTyped(json, false);
}

export function ResponsesPreventionSettingV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesPreventionSettingV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        description: !exists(json, "description") ? undefined : json["description"],
        id: json["id"],
        name: json["name"],
        type: json["type"],
        value: json["value"],
    };
}

export function ResponsesPreventionSettingV1ToJSON(value?: ResponsesPreventionSettingV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        description: value.description,
        id: value.id,
        name: value.name,
        type: value.type,
        value: value.value,
    };
}
